import React from 'react';

const ConfirmationModal = ({title, message, successAction, modalData}) => {
    return (
        <>
            <div className="modal fade" id="ConfirmationModal" tabIndex="-1" aria-labelledby="ConfirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ConfirmationModalLabel">{title}</h1>
                        </div>
                        <div className="modal-body">
                            <p>{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={() => successAction(modalData)} type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;