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
                <a href="tel:+13607183727">+1(360) 718 37 27</a>
            </div>
            <span className="close-btnHeader" onClick={onClose}>
            &times;
          </span>
        </div>
    );
};
export {ModalPhoneEmail};
