import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Logout = ({ show, handleClose, handleLogout }) => {
 
    return(
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title >Logout</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{backgroundColor:'#CBF1F6'}}>Are you sure you want to logout?</Modal.Body>
    <Modal.Footer>
      <Button variant="outline-dark" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="outline-info" onClick={handleLogout}>
        Logout
      </Button>
    </Modal.Footer>
  </Modal>);
};
export default Logout;