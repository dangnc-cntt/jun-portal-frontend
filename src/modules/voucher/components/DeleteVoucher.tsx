import React, {Component} from 'react';
import {observer} from "mobx-react";
import {voucherStore} from "../VoucherStore";

@observer
class DeleteVoucher extends Component {
    render() {
        return (
            <div className="modal fade" id="deleteVoucher" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog w-100 h-100 d-flex align-items-center justify-content-center m-0" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0 pt-2 pb-0">
                            <button type="button" id="close_delete" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3 className="modal-title w-100 text-center mb-3">Delete Voucher</h3>
                            <p className="text-center">Are you sure to delete voucher?</p>
                        </div>
                        <div className="modal-footer border-top-0 pt-0">
                            <button type="button" className="btn" data-dismiss="modal">Cancel</button>
                            <button type="button" onClick={() => voucherStore.delete()} className="btn btn-info">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteVoucher;