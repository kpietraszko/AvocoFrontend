import React from 'react';
import styles from './GroupList.module.css';
import { connect } from 'react-redux';
import Spinner from '../../componentsStateless/spinner/Spinner'; 

class GroupList extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false
		};
	}

	render = () => {
		return (
            <div className={styles.searchGroupBar}>
                    <SearchGroupListBar />
                    <ul id={style.groupList}>
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
export default GroupList;