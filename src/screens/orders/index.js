import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyModal from '../../components/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { generateString } from '../../utils/helper'



import './orders.css';


const OrderScreen = (props) => {
    const { loading, getOrders, data, saveNewOrder } = props;
    const [show, setShow] = useState(false);
   // const [newarray, setOrderLines] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputFields, setInputFields] = useState([
        { description: '', price: '', quantity: '', code: '' }
      ]);    

    useEffect(() => {
        getOrders();
    }, [inputFields]);

    let newarray = {};


    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        data[index]['code'] = generateString(10);
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { description: '', price: '', quantity: '' }
        setInputFields([...inputFields, newfield])
    }

    const saveOrder = () => {
        newarray['orderLines'] = inputFields
        saveNewOrder(newarray);
        window.location.reload();
    }

    
    

    return (
        <Layout>
            <div className="orders">
                <h2>Orders</h2>
                    <Button variant="primary" onClick={handleShow}>
                        Add Order
                    </Button>
                <MyModal 
                    show={show} 
                    handleClose={handleClose} 
                >
                    <Modal.Body>
                        <form>
                            <div className="App">
                                {inputFields.map((input, index) => {
                                return (
                                    <div key={index}>
                                        <textarea 
                                            style={{ width: '100%' }}
                                            name='description'
                                            placeholder='Description'
                                            value={input.description}
                                            onChange={event => handleFormChange(index, event)}
                                            required
                                        />
                                        <input
                                            name='price'
                                            placeholder='Price'
                                            value={input.price}
                                            onChange={event => handleFormChange(index, event)}
                                            required
                                        />
                                        <input
                                            name='quantity'
                                            placeholder='Quantity'
                                            value={input.quantity}
                                            onChange={event => handleFormChange(index, event)}
                                            required
                                        />
                                    </div>
                                )
                                })}
                                <div>
                                    <button type='button' onClick={addFields}>Add More</button>
                                </div>
                            </div>

                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={saveOrder}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                </MyModal>
                {loading && <Spinner animation="grow" />}
                {!loading && <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data && data.map((order) => {
                            return (
                            order.orderLines && order.orderLines.map((orderLine, index) => (
                                <tr key={index}>
                                    <td>{orderLine.id}</td>
                                    <td>{orderLine.code}</td>
                                    <td>{orderLine.description}</td>
                                    <td>{orderLine.quantity}</td>
                                    <td>{orderLine.price}</td>
                                    <td>
                                        <a href={`/order-detail/${order.id}`}><i className="fas fa-edit"></i></a>
                                    </td>
                                </tr>
                            ))
                       )})}
                    </tbody>
                </Table>}
            </div>
        </Layout>
    );
}

export default OrderScreen;