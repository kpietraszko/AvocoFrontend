import React from 'react';
import styles from './GroupList.module.css';
import { connect } from 'react-redux';
import Spinner from '../../componentsStateless/spinner/Spinner'; 
import { Link } from 'react-router-dom';

class GroupList extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render = () => {
		return (
            <div className={styles.searchGroupBar}>
                    {/* wyszukiwarka frontowa */}
                    <ul id={styles.groupList}>
                    
                    <li className={styles.groupFromList}>
                        <a href="group.html">
                            <span>Militaria</span>
                        </a>
                    </li>
                    <li className={styles.groupFromList}>
                        <a href="group.html">
                            <span>Gotowanie w lesie</span>
                        </a>
                    </li>
                    <li className={styles.groupFromList}>
                        <a href="group.html">
                            <span>Studiowanie na WMII</span>
                        </a>
                    </li>
                    <li className={styles.groupFromList}>
                        <a href="group.html">
                            <span>Oglądanie majora</span>
                        </a>
                    </li>
                    </ul>
                </div>
		);
	}
};

{/* const matchesSearch = (event, searchString) => {
	if (!searchString || (searchString.length < 3 && isNaN(searchString))) {
		return true;
	}
	const searchStringLower = searchString.toLowerCase();
	
	return event.eventName.toLowerCase().includes(searchStringLower) ||
}  */}


export default GroupList;