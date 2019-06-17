webpackJsonp([13],{2357:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),s=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current,account:e.app.account}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(11),c=n(i),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),p=a(14),h=a(13),b=a(12),g=a(2990),y=n(g),v=a(24),_=(a(23),a(20)),E=a(2991),k=n(E),w=a(2992),x=n(w),N=a(2993),T=a(22),O=a(82),C=a(221),S=a(18),P=a(81),M=n(P),j=a(93),I=a(17),R=(n(I),a(29)),A=n(R),L=function(e){function t(){var e=this;l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadToken=function(){var t=r(c.default.mark(function t(n){var r,l;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,A.default.get(T.API_URL+"/api/token_trc20?contract="+n);case 3:r=e.sent,l=r.data.trc20_tokens[0],a.setState({loading:!1,token:l,tabs:[{id:"tokenInfo",icon:"",path:"",label:m.default.createElement("span",null,(0,h.tu)("issue_info")),cmp:function(){return m.default.createElement(x.default,{token:l})}},{id:"transfers",icon:"",path:"/transfers",label:m.default.createElement("span",null,(0,h.tu)("token_transfers")),cmp:function(){return m.default.createElement(k.default,{filter:{token:n},token:l})}},{id:"holders",icon:"",path:"/holders",label:m.default.createElement("span",null,(0,h.tu)("token_holders")),cmp:function(){return m.default.createElement(y.default,{filter:{token:n},token:l})}}]});case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),a.submit=function(){var t=r(c.default.mark(function t(n){var r,l,o,s,u,i,d;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props,l=r.account,o=r.currentWallet,s=a.state,u=s.buyAmount,i=s.privateKey,e.next=4,p.Client.participateAsset(o.address,n.ownerAddress,n.id,u*n.price)(l.key);case 4:if(d=e.sent,!d.success){e.next=11;break}return a.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:d.success,buyAmount:0}),a.props.reloadWallet(),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),a.onInputChange=function(e){var t=a.props.account;e&&64===e.length?(a.privateKey.className="form-control",(0,j.pkToAddress)(e)!==t.address&&(a.privateKey.className="form-control is-invalid")):a.privateKey.className="form-control is-invalid",a.setState({privateKey:e}),a.privateKey.value=e},a.confirmPrivateKey=function(e){var t=a.state,n=(t.privateKey,t.token),r=a.props.account,l=function(){a.privateKey.value&&64===a.privateKey.value.length&&(0,j.pkToAddress)(a.privateKey.value)===r.address&&a.buyTokens(n)};a.setState({alert:m.default.createElement(M.default,{info:!0,showCancel:!0,cancelBtnText:(0,h.tu)("cancel"),confirmBtnText:(0,h.tu)("confirm"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:(0,h.tu)("confirm_private_key"),onConfirm:l,onCancel:function(){return a.setState({alert:null})},style:{marginLeft:"-240px",marginTop:"-195px"}},m.default.createElement("div",{className:"form-group"},m.default.createElement("div",{className:"input-group mb-3"},m.default.createElement("input",{type:"text",ref:function(e){return a.privateKey=e},onChange:function(e){a.onInputChange(e.target.value)},className:"form-control is-invalid"}),m.default.createElement("div",{className:"invalid-feedback"},(0,h.tu)("fill_a_valid_private_key")))))})},a.isBuyValid=function(){return a.state.buyAmount>0},a.onBuyInputChange=function(e,t,n){var r=a.props.intl;e>n&&(e=n),a.setState({buyAmount:e}),a.buyAmount.value=e;var l=e*(t/T.ONE_TRX);a.priceTRX.innerHTML=r.formatNumber(l)},a.preBuyTokens=function(e){var t=(a.state.buyAmount,a.props),n=(t.currentWallet,t.wallet);t.intl;if(!n.isOpen)return void a.setState({alert:m.default.createElement(M.default,{info:!0,showConfirm:!1,style:{width:"30rem",height:"18.75rem",left:"50%",marginLeft:"-15rem"}},m.default.createElement("div",{className:"token-sweet-alert"},m.default.createElement("a",{className:"close",onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("span",null,(0,h.tu)("login_first")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("OK"))))});a.setState({alert:m.default.createElement(M.default,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},m.default.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("h5",{style:{color:"black"}},(0,h.tu)("buy_token_info")),0===e.remaining&&m.default.createElement("span",null," ",(0,h.tu)("no_token_to_buy")),m.default.createElement("div",{className:"input-group mt-5"},m.default.createElement("input",{type:"number",ref:function(e){return a.buyAmount=e},className:"form-control",max:e.remaining,min:1,onChange:function(t){a.onBuyInputChange(t.target.value,e.price,e.remaining)}})),m.default.createElement("div",{className:"text-center mt-3 text-muted"},m.default.createElement("b",null,"= ",m.default.createElement("span",{ref:function(e){return a.priceTRX=e}},"0")," TRX")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.buyTokens(e)}},(0,h.tu)("participate"))))})},a.buyTokens=function(e){var t=a.state.buyAmount;if(!(t<=0)){var n=a.props,r=n.currentWallet,l=(n.wallet,t*(e.price/T.ONE_TRX));r.balance/T.ONE_TRX<l?a.setState({alert:m.default.createElement(M.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("span",null,(0,h.tu)("not_enough_trx_message")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("confirm"))))}):a.setState({alert:m.default.createElement(M.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("p",{className:"ml-auto buy_confirm_message"},(0,h.tu)("buy_confirm_message_1")),m.default.createElement("span",null,t," ",e.name," ",(0,h.t)("for")," ",t*(e.price/T.ONE_TRX)," TRX?"),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.confirmTransaction(e)}},(0,h.tu)("confirm"))))})}},a.confirmTransaction=function(){var t=r(c.default.mark(function t(n){var r,l,o,s;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props,l=r.account,o=r.intl,s=a.state.buyAmount,a.setState({alert:m.default.createElement(M.default,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:o.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,a.submit(n);case 5:if(!e.sent){e.next=9;break}a.setState({alert:m.default.createElement(M.default,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("h5",{style:{color:"black"}},(0,h.tu)("transaction")," ",(0,h.tu)("confirm")),m.default.createElement("span",null,(0,h.tu)("success_receive")," ",n.name," ",(0,h.tu)("tokens")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("OK"))))}),e.next=10;break;case 9:a.setState({alert:m.default.createElement(M.default,{danger:!0,title:"Error",onConfirm:function(){return a.setState({alert:null})}},(0,h.tu)("fail_transaction"))});case 10:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),a.state={privateKey:"",loading:!0,token:{},tabs:[],buyAmount:0,alert:null},a}return s(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadToken(decodeURI(e.params.address))}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.name!==e.match.params.name&&this.loadToken(decodeURI(t.params.address))}},{key:"render",value:function(){var e=this.props,t=e.match,n=(e.wallet,this.state),r=n.token,l=n.tabs,o=n.loading,s=(n.buyAmount,n.alert);return m.default.createElement("main",{className:"container header-overlap token_black mc-donalds-coin"},s,o?m.default.createElement("div",{className:"card"},m.default.createElement(_.TronLoader,null,(0,h.tu)("loading_token")," ",r.name)):m.default.createElement("div",{className:"row"},r&&m.default.createElement("div",{className:"col-sm-12"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{className:"d-flex"},r&&r.icon_url?m.default.createElement("div",null,r.contract_address==T.CONTRACT_ADDRESS_USDT?m.default.createElement("div",{className:"token-img-top"},m.default.createElement("img",{className:"token-logo",src:r.icon_url}),m.default.createElement("i",null)):m.default.createElement("img",{className:"token-logo",src:r.icon_url})):m.default.createElement("img",{className:"token-logo",src:a(222)}),m.default.createElement("div",{style:{width:"70%"},className:"token-description"},m.default.createElement("h5",{className:"card-title"},r.name," (",r.symbol,")"),m.default.createElement("p",{className:"card-text"},r.token_desc)))),m.default.createElement(N.Information,{token:r})),m.default.createElement("div",{className:"card mt-3 border_table"},m.default.createElement("div",{className:"card-header"},m.default.createElement("ul",{className:"nav nav-tabs card-header-tabs",style:{marginTop:"-12px",marginLeft:"-20px"}},l.map(function(e){return m.default.createElement("li",{key:e.id,className:"nav-item"},m.default.createElement(v.NavLink,{exact:!0,to:t.url+e.path,className:"nav-link text-dark"},m.default.createElement("i",{className:e.icon+" mr-2"}),e.label))}))),m.default.createElement("div",{className:"card-body p-0"},m.default.createElement(v.Switch,null,l.map(function(e){return m.default.createElement(v.Route,{key:e.id,exact:!0,path:t.url+e.path,render:function(){return m.default.createElement(e.cmp,null)}})})))))))}}]),t}(m.default.Component),D={login:O.login,reloadWallet:C.reloadWallet};t.default=(0,S.connect)(u,D)((0,b.injectIntl)(L))},2546:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SocialMedia=void 0;var s=a(231),u=n(s),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(292);var c=a(0),d=n(c);t.SocialMedia=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.mediaList,t=void 0===e?[]:e;return t&&t.length>0?d.default.createElement("div",{className:"d-flex"},t.map(function(e,t){function a(e){return/^http/.test(e)?e:"http://"+e}return d.default.createElement("div",{key:t,style:{marginRight:"10px"}},1==e.url.length&&"Wechat"!=e.name&&d.default.createElement("a",{href:a(e.url[0]),target:"_bank"},d.default.createElement("i",{className:e.name+"-active"})),e.url.length>1&&"Wechat"!=e.name&&d.default.createElement(u.default,{placement:"right",content:d.default.createElement("div",{className:"",style:{maxWidth:"300px"}},e.url.map(function(e){return d.default.createElement("a",{href:a(e),target:"_bank",className:"d-block popover_text",key:e},e)}))},d.default.createElement("i",{className:e.name+"-active"})),"Wechat"==e.name&&d.default.createElement(u.default,{placement:"right",content:d.default.createElement("div",{className:"",style:{maxWidth:"300px"}},e.url.map(function(e){return d.default.createElement("div",{key:e},e)}))},d.default.createElement("i",{className:e.name+"-active"})))})):d.default.createElement("span",{style:{color:"#d8d8d8"}},"-")}}]),t}(d.default.Component)},2990:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),s=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(11),i=n(u),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=a(13),p=a(23),h=(a(14),a(45)),b=n(h),g=a(12),y=a(20),v=a(17),_=a(29),E=n(_),k=a(22),w=a(156),x=a(93),N=a(92),T=a(70),O=function(e){function t(e){var a=this;l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e,t){n.loadTokenHolders(e,t)},n.loadTokenHolders=function(){var e=r(i.default.mark(function e(){var t,r,l,o,s,u,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.filter,n.setState({loading:!0}),e.next=4,E.default.get(k.API_URL+"/api/token_trc20/holders?sort=-balance&start="+(d-1)*f+"&limit="+f+"&contract_address="+t.token);case 4:r=e.sent,l=r.data,o=l.trc20_tokens,s=l.total,u=l.rangeTotal;for(c in o)o[c].index=parseInt(c)+1+(d-1)*f;n.setState({page:d,addresses:o,total:s,rangeTotal:u,loading:!1});case 11:case"end":return e.stop()}},e,a)}));return function(){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props,t=e.intl,a=e.token;return[{title:"#",dataIndex:"index",key:"index",width:"5%",align:"center",className:"ant_table"},{title:t.formatMessage({id:"address"}),dataIndex:"address",key:"address",render:function(e,t,a){return f.default.createElement(p.AddressLink,{address:t.holder_address})}},{title:(0,v.upperFirst)(t.formatMessage({id:"quantity"})),dataIndex:"balance",key:"balance",width:"20%",align:"right",className:"ant_table",render:function(e,t,n){return f.default.createElement("span",null,(0,N.FormatNumberByDecimals)(t.balance,a.decimals))}},{title:t.formatMessage({id:"percentage"}),dataIndex:"percentage",key:"percentage",width:"18%",align:"right",className:"ant_table",render:function(e,t,n){return f.default.createElement("div",null,f.default.createElement(g.FormattedNumber,{value:t.balance/a.total_supply_with_decimals*100,maximumFractionDigits:6})," %")}}]},n.doSearch=r(i.default.mark(function e(){var t,r,l,o,s,u,c;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,r=t.intl,l=t.filter,o=n.state,s=o.search,u=o.addresses,!(0,x.isAddressValid)(s)){e.next=10;break}return e.next=5,E.default.get(k.API_URL+"/api/token_trc20/holders?contract_address="+l.token+"&holder_address="+s);case 5:c=e.sent,c.data.trc20_tokens[0].index=1,n.setState({addresses:c.data.trc20_tokens,total:1,search:""}),e.next=12;break;case 10:w.toastr.warning(r.formatMessage({id:"warning"}),r.formatMessage({id:"search_TRC20_error"})),n.setState({search:""});case 12:case"end":return e.stop()}},e,a)})),n.state={search:"",filter:{},addresses:[],page:0,total:0,pageSize:25},n}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadTokenHolders()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.addresses,n=t.total,r=t.rangeTotal,l=t.loading,o=t.search;0==n&&(a=[]);var s=this.props.intl,u=this.customizedColumn(),i=(s.formatMessage({id:"a_totle"}),s.formatMessage({id:"hold_addr"}),s.formatMessage({id:"table_info_holders_tip1"})+" "+r+" "+s.formatMessage({id:"table_info_holders_tip2"}));return l||0!==a.length?f.default.createElement(d.Fragment,null,l&&f.default.createElement("div",{className:"loading-style",style:{marginTop:"-20px"}},f.default.createElement(y.TronLoader,null)),f.default.createElement("div",{className:"row transfers"},f.default.createElement("div",{className:"col-md-12 table_pos"},f.default.createElement("div",{className:"nav-searchbar",style:C.searchBox},f.default.createElement("div",{className:"token20-input-group input-group"},f.default.createElement("div",{className:"token20-search"},f.default.createElement("input",{type:"text",className:"form-control p-2 bg-white border-0 box-shadow-none",value:o,onChange:function(t){return e.setState({search:(0,v.trim)(t.target.value)})},placeholder:s.formatMessage({id:"search_TRC20"})}),f.default.createElement("div",{className:"input-group-append"},f.default.createElement("button",{className:"btn box-shadow-none",onClick:this.doSearch},f.default.createElement("i",{className:"fa fa-search"})))))),f.default.createElement("div",{style:C.tablePosInfo},n?f.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},f.default.createElement("div",null,(0,m.tu)("view_total")," ",r," ",(0,m.tu)("hold_addr"),r>=1e4?f.default.createElement(T.QuestionMark,{placement:"top",info:i}):"",f.default.createElement("br",null),r>=1e4?f.default.createElement("span",null,"(",(0,m.tu)("table_info_big"),")"):"")):""),f.default.createElement("div",{style:C.table},f.default.createElement(b.default,{border:!1,loading:l,column:u,data:a,total:n,onPageChange:function(t,a){e.loadTokenHolders(t,a)}}))))):f.default.createElement("div",{className:"p-3 text-center no-data"},(0,m.tu)("no_holders_found"))}}]),t}(f.default.Component),C={searchBox:{background:"#fff",paddingTop:10},tablePosInfo:{paddingLeft:40}};t.default=(0,g.injectIntl)(O)},2991:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),s=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(11),i=n(u),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=a(14),p=a(23),h=(a(39),a(22),a(13)),b=a(48),g=n(b),y=a(21),v=n(y),_=a(37),E=a(106),k=a(12),w=a(45),x=n(w),N=a(17),T=a(20),O=a(96),C=n(O),S=a(97),P=n(S),M=a(29),j=(n(M),a(92)),I=function(e){function t(e){var n=this;l(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.onChange=function(e,t){s.loadPage(e,t)},s.loadPage=function(){var e=r(i.default.mark(function e(){var t,a,r,l,o,u,c,d,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.filter,a=s.state.showTotal,s.setState({loading:!0,page:f,pageSize:p}),e.next=5,m.Client.getTokenTRC20Transfers({limit:p,start:(f-1)*p,contract_address:t.token,start_timestamp:s.start,end_timestamp:s.end});case 5:r=e.sent,l=r.list,o=r.total,u=r.rangeTotal,c=l;for(d in c)c[d].index=parseInt(d)+1;s.setState({page:f,transfers:c,total:o,rangeTotal:u,loading:!1});case 12:case"end":return e.stop()}},e,n)}));return function(){return e.apply(this,arguments)}}(),s.customizedColumn=function(){var e=s.props,t=e.intl,n=e.token;return[{title:(0,N.upperFirst)(t.formatMessage({id:"hash"})),dataIndex:"transactionHash",key:"transactionHash",className:"ant_table",render:function(e,t,a){return f.default.createElement(_.Truncate,null,f.default.createElement(p.TransactionHashLink,{hash:t.transaction_id},t.transaction_id))}},{title:(0,N.upperFirst)(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",width:"150px",className:"ant_table",render:function(e,t,a){return f.default.createElement(g.default,{date:Number(t.block_ts),title:(0,v.default)(t.block_ts).format("MMM-DD-YYYY HH:mm:ss A")})}},{title:(0,N.upperFirst)(t.formatMessage({id:"from"})),dataIndex:"transferFromAddress",key:"transferFromAddress",className:"ant_table",render:function(e,t,a){return f.default.createElement(p.AddressLink,{address:t.from_address})}},{title:"",className:"ant_table",width:"30px",render:function(e,t,n){return f.default.createElement("img",{src:a(186)})}},{title:(0,N.upperFirst)(t.formatMessage({id:"to"})),dataIndex:"transferToAddress",key:"transferToAddress",className:"ant_table",render:function(e,t,a){return f.default.createElement(p.AddressLink,{address:t.to_address})}},{title:(0,N.upperFirst)(t.formatMessage({id:"amount"})),dataIndex:"amount",key:"amount",width:"200px",align:"right",className:"ant_table",render:function(e,t,a){return f.default.createElement("span",null,f.default.createElement("span",null,(0,j.FormatNumberByDecimals)(t.quant,n.decimals)),"\xa0\xa0",f.default.createElement(p.TokenTRC20Link,{name:n.symbol,address:n.contract_address}))}}]},s.start=(0,v.default)([2018,5,25]).startOf("day").valueOf(),s.end=(0,v.default)().valueOf(),s.state={filter:{},transfers:[],page:0,total:0,pageSize:25,showTotal:!1!==e.showTotal,emptyState:e.emptyState,autoRefresh:e.autoRefresh||!1},s}return s(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),!1!==this.state.autoRefresh&&this.props.setInterval(function(){return e.load()},this.state.autoRefresh)}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.loadPage(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transfers,n=(t.page,t.total),r=t.rangeTotal,l=(t.pageSize,t.loading);t.emptyState;0==n&&(a=[]);var o=this.props,s=(o.theadClass,o.intl),u=this.customizedColumn();s.formatMessage({id:"a_totle"}),s.formatMessage({id:"transaction_info"});return f.default.createElement(d.Fragment,null,l&&f.default.createElement("div",{className:"loading-style",style:{marginTop:"-20px"}},f.default.createElement(T.TronLoader,null)),f.default.createElement("div",{className:"row transfers"},f.default.createElement("div",{className:"col-md-12 table_pos"},f.default.createElement("div",{className:"d-flex justify-content-between pl-3 pr-3",style:{left:"auto"}},n?f.default.createElement(C.default,{total:n,rangeTotal:r,typeText:"transaction_info",divClass:"table_pos_info_addr"}):"",f.default.createElement(P.default,{onDateOk:function(t,a){return e.onDateOk(t,a)},dateClass:"date-range-box-token"})),l||0!==a.length?f.default.createElement(x.default,{border:!1,loading:l,column:u,data:a,total:n,addr:"address",transfers:"token",onPageChange:function(t,a){e.loadPage(t,a)}}):f.default.createElement("div",{className:"pt-5 pb-5 text-center no-data transfers-bg-white"},(0,h.tu)("no_transfers")))))}}]),t}(f.default.Component);t.default=(0,E.withTimers)((0,k.injectIntl)(I))},2992:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),u=function(e){return e&&e.__esModule?e:{default:e}}(s),i=(a(12),a(22),a(13)),c=a(23),d=a(106),f=a(92),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return l(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.token;return u.default.createElement("div",{className:"tokenDetail_box"},u.default.createElement("table",{className:"table m-0 tokenDetail"},u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("th",{style:{borderTop:"0px"}},(0,i.tu)("start_date"),":"),u.default.createElement("td",{style:{borderTop:"0px"}},u.default.createElement("span",null,e.issue_time))),u.default.createElement("tr",null,u.default.createElement("th",null,(0,i.tu)("total_supply"),":"),u.default.createElement("td",null,u.default.createElement("div",null,u.default.createElement("span",null,(0,f.toThousands)(parseFloat(e.total_supply_with_decimals/Math.pow(10,e.decimals)).toFixed(e.decimals))),u.default.createElement("span",{className:"ml-1"},e.symbol)))),u.default.createElement("tr",null,u.default.createElement("th",null,(0,i.tu)("issuer"),":"),u.default.createElement("td",null,e.issue_address?u.default.createElement(c.AddressLink,{address:e.issue_address}):u.default.createElement("span",{style:{color:"#d8d8d8"}},"-"))),u.default.createElement("tr",null,u.default.createElement("td",{colSpan:"2"},u.default.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true",style:{color:"#999999",marginRight:"10px"}}),u.default.createElement("span",{style:{color:"#999999",fontSize:"12px"}},(0,i.tu)("change_info")),"\xa0",u.default.createElement("a",{href:"mailto:token@tronscan.org",style:{color:"red",fontSize:"12px"}},(0,i.tu)("contact_us")))))))}}]),t}(u.default.Component);t.default=(0,d.withTimers)(m)},2993:function(e,t,a){"use strict";function n(e){var t=e.token,a=(0,f.cloneDeep)(t);a.reputation&&(0,f.toLower)(a.reputation);a.social_media_list&&a.social_media_list.map(function(e){try{e.url=JSON.parse(e.url)}catch(t){e.url=[e.url]}});var n=[{name:"total_supply",content:l.default.createElement("div",null,l.default.createElement("span",null,(0,s.toThousands)(parseFloat(a.total_supply_with_decimals/Math.pow(10,a.decimals)).toFixed(a.decimals))),l.default.createElement("span",{className:"ml-1"},a.symbol))},{name:"contract_address",content:l.default.createElement(i.AddressLink,{address:a.contract_address,isContract:!0})},{name:"TRC20_decimals",content:l.default.createElement(u.FormattedNumber,{value:a.decimals})},{name:"website",content:a.home_page?l.default.createElement(i.ExternalLink,{url:a.home_page}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"white_paper",content:a.white_paper?l.default.createElement(i.ExternalLink,{url:a.white_paper&&(0,o.t)(a.white_paper),_url:a.white_paper}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"social_link",content:l.default.createElement(c.SocialMedia,{mediaList:a.social_media_list})},{name:"GitHub",content:a.git_hub?l.default.createElement(i.ExternalLink,{url:a.git_hub,_url:a.git_hub}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"pice_per_1trx",content:l.default.createElement("div",{className:"d-flex token-list-action"},a.market_info?l.default.createElement("div",{className:"d-flex"},a.market_info.priceInTrx,"  TRX",l.default.createElement("span",{className:a.market_info.gain<0?"col-red ml-3":"col-green ml-3"},a.market_info.gain>0?l.default.createElement("span",null,"+"+parseInt(1e4*a.market_info.gain)/100+"%"):l.default.createElement("span",null,parseInt(1e4*a.market_info.gain)/100+"%")),l.default.createElement(d.Link,{to:"/exchange/trc20?id="+a.market_info.pairId,className:"token-details btn ml-3"}," ",(0,o.tu)("token_trade"))):"-")}];return l.default.createElement("div",{className:"information-bg"},n.map(function(e,t){return l.default.createElement("div",{className:t%2==0?"information-bg-item":"information-bg-item ml",key:t},l.default.createElement("span",null,(0,o.tu)(e.name)),l.default.createElement("p",{style:{width:"75%"}},e.content))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Information=n;var r=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r),o=a(13),s=a(92),u=a(12),i=a(23),c=a(2546),d=a(24),f=a(17)}});