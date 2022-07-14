import { connect } from 'react-redux';

import { Creators } from '../../services/redux/order/actions';
import OrderScreen from '../../screens/orders';


const mapStateToProps = state => {
    const { error, isLoadingOrder } = state.order
    return {
        error,
        loading: isLoadingOrder,
        data: state.order.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => {
            dispatch(Creators.getUserOrderRequest());
        },
        saveNewOrder: (data) => {
            dispatch(Creators.createUserOrderRequest(data));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
