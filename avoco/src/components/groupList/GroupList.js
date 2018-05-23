import React from 'react';
import styles from './GroupList.module.css';
import { connect } from 'react-redux';
import GroupSearchBar from '../../components/groupSearchBar/GroupSearchBar';
import Spinner from '../../componentsStateless/spinner/Spinner';
import { Link } from 'react-router-dom';

class GroupList extends React.Component {
    state = {
        isLoading: false
    }
    render = () => {
        return (
            <div className={styles.searchGroupBar}>
                <GroupSearchBar />
                <ul id={styles.groupList}>
                    <li className={styles.groupFromList}>
                        <Link to="/group" className={styles.groupLink}>
                            Militaria
                        </Link>
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