import {SET_RECENT_TRANSACTIONS, SET_TOKEN_BALANCES, SET_TOTAL_TRANSACTIONS, SET_WEBSOCKET, SET_WS_DATA} from "../actions/account";
import {LOGIN} from "../actions/app";
import {find, sortBy, toUpper} from "lodash";
import _ from "lodash";

const initialState = {
  tokens: [],
  trxBalance: 0,
  totalTransactions: 0,
  recentTransactions: [],
  frozen: {
    total: 0,
    balances: [],
  },
  accountResource:{},
  delegated:{},
  wsdata: []
};

export function accountReducer(state = initialState, action) {

  switch (action.type) {

    case LOGIN: {
      return {
        ...state,
        tokens: [],
      };
    }

    case SET_TOKEN_BALANCES: {
      let {map_amount: trxBalance = 0} = find(action.tokens, tb => tb.name.toUpperCase() === "_") || {};
      let tokenList =  _(action.tokens)
          .sortBy(tb => toUpper(tb.map_token_name))
          .sortBy(tb => -tb.map_amount)
          .value()
      let trxObj = _.remove(tokenList, o => toUpper(o.map_token_name) == 'TRX')[0]

      trxObj && tokenList.unshift(trxObj)
      let token20List =  _(action.trc20token)
          .filter(tb => tb.balance > 0)
          .sortBy(tb => -tb.token20_balance)
          .value();
      return {
        ...state,
        trxBalance,
        tokens20:token20List,
        tokens: tokenList,
        frozen: {
          ...action.frozen,
        },
        accountResource:{
          ...action.accountResource,
        },
        delegated:{
          ...action.delegated,
        }
      }
    }

    case SET_TOTAL_TRANSACTIONS: {
      return {
        ...state,
        totalTransactions: action.totalTransactions,
      }
    }

    case SET_RECENT_TRANSACTIONS: {
      return {
        ...state,
        recentTransactions: action.transactions,
      }
    }

    case SET_WEBSOCKET: {
      return {
        ...state,
        websocket: action.socketData,
      }
    }

    case SET_WS_DATA: {
      return {
        ...state,
        wsdata: action.wsdata,
      }
    }

    default:
      return state;
  }
}
