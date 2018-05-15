import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
	return (
		<div id={styles.backdrop} onClick={props.cancel}>
			<div id={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className="material-icons" id={styles.modalCloseButton} onClick={props.cancel}>close</div>
				<div>{props.question}</div>
				<div className={styles.buttons}>
					<div onClick={() => { props.confirm(); props.cancel(); }} className="submitButtonGreen">Tak</div>
					<div onClick={props.cancel} id={styles.cancelButton} className="submitButtonGreen" >Nie</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;