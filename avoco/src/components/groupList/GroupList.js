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
        isLoading: true,
        searchString: ""
    }
    componentDidMount = () => {
        getAllGroupsApi()
            .then(response => {
                this.props.setGroupList(response.data);
                this.setState({ isLoading: false });
            })
            .catch(error => console.log(error));
    }
    handleSearchInput = (e) => {
        const searchString = e.target.value.toLowerCase();
        this.setState({ searchString });
    }
    matchesSearch = (group) => {
        return this.state.searchString.length < 3 ||
            group.groupName.toLowerCase().includes(this.state.searchString);
    }
    render = () => {
        return (
            this.state.isLoading ?
                <div id={styles.container}>
                    <Spinner size={40} />
                </div> :
                <div className={styles.searchGroupBar}>
                    <GroupSearchBar handleSearchInput={this.handleSearchInput} />
                    <ul id={styles.groupList}>
                        {this.props.groups && this.props.groups.map((group) => {
                            return this.matchesSearch(group) && <li key={group.id} className={styles.groupFromList} title={group.groupDescription}>
                                <Link to={`/group/${group.id}`} className={styles.groupLink}>
                                    {group.groupName}
                                </Link>
                            </li>
                        }
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
