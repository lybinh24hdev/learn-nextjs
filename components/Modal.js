import React from 'react';
import st from '../styles/modal.module.css';

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className={st.modal_backdrop}>
            <div className={st.modal_content}>
                <div className={st.modal_header}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={st.modal_close}>
                        &times;
                    </button>
                </div>
                <div className={st.modal_body}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
