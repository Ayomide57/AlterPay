import React, { Fragment } from "react";
import Layout from "../../../components/Layout";
import './order-detail.css';
import store from "../../../services/redux/store";
import { useLocation } from 'react-router-dom'



const OrderDetail = () => {
    const location = useLocation();
    const id = location.pathname.replace('/order-detail/', '');


    const orders = store.getState().order.data;
        const order = orders.filter((item) => {
            if(item.id === id){
                return item
            }
        })
        console.log(order);
    
    return (
        <Layout>
            <section className="h-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card" style={{borderRadius: 10}}>
                        <div className="card-header px-4 py-5">
                            <h5 className="text-muted mb-0">Thanks for your Order</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="lead fw-normal mb-0" style={{color: '#a8729a'}}>Receipt</p>
                            <p className="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
                            </div>
                            {order[0] && order[0].orderLines.map((orderLine, index) => {
                                return (
                                    <div className="card shadow-0 border mb-4" key={index}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">code: {orderLine.code}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">{orderLine.description}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: {orderLine.quantity}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">$ {orderLine.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }   
                            <div className="d-flex justify-content-between pt-2">
                            <p className="fw-bold mb-0">Order Details</p>
                            <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> ${orders[0].orderAmount}</p>
                            </div>

                            <div className="d-flex justify-content-between pt-2">
                            <p className="text-muted mb-0">Invoice Number : 788152</p>
                            </div>

                            <div className="d-flex justify-content-between mb-5">
                            <p className="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
                            </div>
                        </div>
                        <div className="card-footer border-0 px-4 py-5"
                            style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                            <h5 className="d-flex align-items-center justify-content-end text-black text-uppercase mb-0">Total
                            paid: <span className="h2 mb-0 ms-2">${orders[0].orderAmount}</span></h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </Layout>
    );

}

export default OrderDetail;
