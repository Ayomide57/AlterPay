import { call, put, takeLeading } from 'redux-saga/effects';
import { Creators, Types } from '../../redux/order/actions';
import {
    getAllOrder as getAllOrderApi,
    postNewOrder as postNewOrderApi
} from '../../api/order';
//import { handleError } from '../../../utils/helpers';
import store from '../../redux/store';



export function* getAllShopOrder() {
    try {
      const response = yield call(getAllOrderApi, {});
      yield put(Creators.getUserOrderSuccess(response.data));
    } catch (error) {
      console.log(error)
      yield put(Creators.getUserOrderFailure(error));
    }
  }
  
export function* watchGetAllShopOrder() {
  yield takeLeading(Types.GET_USER_ORDER_REQUEST, getAllShopOrder);
}

export function* createOrder(actions) {
  try {
    const { data } = actions;
    console.log(data);
    yield call(postNewOrderApi, data);
    yield put(Creators.createUserOrderSuccess({}));
  } catch (error) {
    yield put(Creators.createUserOrderFailure(error));
  }
}

export function* watchCreateOrder() {
  yield takeLeading(Types.CREATE_USER_ORDER_REQUEST, createOrder);
}



