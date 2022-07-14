import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalParams {
    show: boolean,
    handleClose: () => void,
    children: React.ReactNode | React.ReactNode[],
}

const MyModal: React.FC<ModalParams> = (props) => {
    return (
          <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          {props.children}
          
        </Modal>
    );
}

export default MyModal;