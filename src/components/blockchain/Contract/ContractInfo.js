import React from 'react';
import { CopyText } from '../../common/Copy';
import { tu } from '../../../utils/i18n';
import { Client } from '../../../services/api';
import { TronLoader } from '../../common/loaders';
import { Base64 } from 'js-base64';

export default class Code extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            compilerVersion: '',
            sourceCode: '',
            abi: '',
            creationCode: '',
            abiEncoded: '',
            address: '',
            byteCode: '',
            isSetting: 'Yes',
            librarys: null,
            loading: true,
            contractInfos: [],
            contractCode: '',
        };
    }

    componentDidMount() {
        let { filter } = this.props;
        if (filter.contractInfoList.contractCode) {
            let contractInfo = filter.contractInfoList.contractCode;
            this.setState({
                contractInfos: contractInfo,
            });
        }
        this.setState({
            name: filter.contractInfoList.name || '-',
            abi: filter.contractInfoList.interfaceAbi
                ? JSON.stringify(filter.contractInfoList.interfaceAbi)
                : JSON.stringify(filter.contractInfoList.abi),
            byteCode: filter.contractInfoList.bytecode,
            loading: false
        });
    }

    async loadContractCode(id) {
        this.setState({ loading: true });
        let contractCode = await Client.getContractCode(id);

        this.setState({
            name: contractCode.data.name || '-',
            compilerVersion: contractCode.data.compiler,
            sourceCode: contractCode.data.source,
            abi: contractCode.data.abi,
            abiEncoded: contractCode.data.abiEncoded,
            address: contractCode.data.address,
            byteCode: contractCode.data.byteCode,
            isSetting: contractCode.data.isSetting ? 'Yes' : 'No',
            librarys: contractCode.data.librarys,
            loading: false
        });

    }

    /**
    * 点击左侧菜单文件
    */
    changeEditor = contractInfo => {
        const { code } = contractInfo;
        this.setState({
            contractCode: code,
        });
    }

    render() {
        const { name, abi, byteCode, loading, contractInfos, contractCode } = this.state;
        const { filter: { contractInfoList: { interfaceAbi } } } = this.props;
        // 合约代码
        const code = contractCode || (contractInfos && contractInfos.length > 0 && contractInfos[0].code);
        const base64Code = code && Base64.decode(code);

        // 合约名称Item
        const contractNameItem = (
            <div className="row">
                {/*<div className="col-md-12 contract-header">*/}
                    {/*<div className="d-flex justify-content-between">*/}
                        {/*<div className="contract-header__item">*/}
                            {/*<ul>*/}
                                {/*<li><p className="plus">{tu('contract_name')}:</p>{name}</li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );

        // 合约代码Item
        const contractCodeItem = (
            <div className="mt-3">

                <div className="d-flex mb-1">
                    <span><i className="fa fa-cogs mb-2"></i> {tu('contract_code')}</span>
                    <CopyText text={base64Code} className="ml-auto ml-1" />
                </div>
                <div className="row">
                    <div className="col-md-2 pr-0">
                        <div className="p-3 contract-code-tab">
                            {contractInfos && contractInfos.length > 0 && contractInfos.map(v => (
                                <p onClick={() => this.changeEditor(v)} key={v.name}>{v.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-10 pl-0">
                        <textarea className="w-100 form-control"
                            rows="15"
                            readOnly="readonly"
                            value={base64Code} />
                    </div>
                </div>
            </div>
        );

        // 合约ABI Item
        const  contractAbiItem = (
            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="d-flex mb-1">
                        <span><i className="fa fa-cogs"></i> {tu('Contract_ABI')}</span>
                        <CopyText text={abi} className="ml-auto ml-1" />
                    </div>
                    <textarea className="w-100 form-control"
                        rows="7"
                        readOnly="readonly"
                        value={abi}
                        onChange={ev => this.setState({ abi: ev.target.value })} />
                </div>
            </div>
        );

        // 字节码Item
        const byteCodeItem = (
            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="d-flex mb-1">
                        <span><i className="fas fa-file-invoice"></i> {tu('Byte_code')}</span>
                        <CopyText text={byteCode} className="ml-auto ml-1" />
                    </div>
                    <textarea className="w-100 form-control"
                        rows="7"
                        readOnly="readonly"
                        value={byteCode}
                        onChange={ev => this.setState({ byteCode: ev.target.value })} />
                </div>
            </div>
        );

        return (
            <main className="container pl-0 pr-0">
                {loading && <div className="loading-style" style={{ marginTop: '-20px' }}><TronLoader /></div>}
                {interfaceAbi && contractNameItem}
                {contractInfos && contractInfos.length > 0 && contractCodeItem}
                {contractAbiItem}
                {byteCodeItem}
            </main>
        );
    }
}
