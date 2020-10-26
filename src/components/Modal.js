import React, {Component} from 'react';

class Modal extends Component {

    render() {
        const {isOpen, title, content} = this.props;
        return (
            <div style={{position: 'relative', zIndex: 1050, display: 'block'}}>
                <div>
                    <div className="modal" style={{display: `${isOpen ? 'block' : 'none'}`}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>{title}</h3>
                                    <button className="close" onClick={this.props.onClose}>&times;</button>
                                </div>
                                <div className="modal-body">
                                   {`"${content}"`}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={this.props.onCancel}>Cancel</button>
                                    <button className="btn btn-primary" onClick={this.props.onOk}>OK</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="modal-backdrop" style={{display: `${isOpen ? 'block' : 'none'}`}}></div>
                    
                </div>
            </div>
        )
    }
}


export default Modal;