import { all } from 'redux-saga/effects';

import {
    watchGetAllShopOrder,
    watchCreateOrder,
} from './order';

export default function* rootSaga() {

    yield all([
        watchGetAllShopOrder(),
        watchCreateOrder()
    ]);
    
}
