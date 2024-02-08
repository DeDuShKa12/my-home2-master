import React, {FC} from 'react';
import './ModalPhoneEmail.css'

interface ModalPhoneEmailProps {
    onClose: () => void;
}

const ModalPhoneEmail: FC<ModalPhoneEmailProps> = ({onClose}) => {
    return (
        <div className="modal-phone-email">
            <div className="hrefDiv">
                <a href="mailto:webuyanyhousesforcash@gmail.com">webuyanyhousesforcash@gmail.com</a>
                <a href="tel:+15032266340">+1 (503) 226-6340</a>
            </div>
            <span className="close-btnHeader" onClick={onClose}>
            &times;
          </span>
        </div>
    );
};
export {ModalPhoneEmail};
