import React from 'react';
import styles from './NavbarButton.module.css';
import { Link } from 'react-router-dom';

const NavbarButton = (props) => {
	return (
		<React.Fragment>
			<Link to={props.path} title={props.title} className={`material-icons ${styles.navbarButton}`}>
				{props.icon}
				{props.children &&
					<span style={{ fontFamily: "'Muli', sans-serif", fontSize: "16px" }}>
						{props.children}
					</span>
				}
			</Link>
		</React.Fragment>
	);
};

export default NavbarButton;