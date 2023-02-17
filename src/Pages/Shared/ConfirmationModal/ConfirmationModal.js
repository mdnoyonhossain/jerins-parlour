import React from 'react';

const ConfirmationModal = ({title, message, successAction, modalData}) => {
    return (
        <>
            <div class="modal fade" id="ConfirmationModal" tabIndex="-1" aria-labelledby="ConfirmationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="ConfirmationModalLabel">{title}</h1>
                        </div>
                        <div class="modal-body">
                            <p>{message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={() => successAction(modalData)} type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;