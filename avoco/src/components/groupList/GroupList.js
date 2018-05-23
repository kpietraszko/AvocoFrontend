import React from 'react';
import styles from './GroupList.module.css';
import { connect } from 'react-redux';
import GroupSearchBar from '../../components/groupSearchBar/GroupSearchBar';
import Spinner from '../../componentsStateless/spinner/Spinner';
import { Link } from 'react-router-dom';
import { getAllGroupsApi } from '../../api/group';
import { actionCreators } from '../../actions/groupListActions';

class GroupList extends React.Component {
    state = {
        isLoading: false
    }
    componentDidMount = () => {
        getAllGroupsApi()
            .then(response => {
                this.props.setGroupList(response.data);
            })
            .catch(error => console.log(error));
    }
    render = () => {
        return (
            <div className={styles.searchGroupBar}>
                <GroupSearchBar />
                <ul id={styles.groupList}>
                    {this.props.groups && this.props.groups.map((group) =>
                        <li key={group.id} className={styles.groupFromList} title={group.groupDescription}>
                            <Link to={`/group/${group.id}`} className={styles.groupLink}>
                                {group.groupName}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};
const mapStateToProps = state => ({
    groups: state.groupList.groups
});
const mapDispatchToProps = dispatch => ({
    setGroupList: (groups) => dispatch(actionCreators.setGroupList(groups))
});
export default connect(mapStateToProps, mapDispatchToProps)(GroupList);