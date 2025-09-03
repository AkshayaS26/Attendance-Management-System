// Modal.js
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, closeModal, employeeDetails }) => {
    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Employee Details</h5>
                        <button type="button" className="close" onClick={closeModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Name:</strong> {employeeDetails.name}</p>
                        <p><strong>ID:</strong> {employeeDetails.id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    employeeDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default Modal;
