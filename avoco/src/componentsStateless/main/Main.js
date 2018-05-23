import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from '../../components/profile/Profile';
import AddGroup from '../../components/addGroup/AddGroup';
import Navbar from '../../components/navbar/Navbar';
import LeftPanel from '../../components/leftPanel/LeftPanel';
import RightPanel from '../../components/rightPanel/RightPanel';
import Group from "../../components/group/Group";
import Home from '../../components/home/Home';
import GroupList from '../../components/groupList/GroupList';
import styles from './Main.module.css';
import AddEvent from "../../components/addEvent/AddEvent";

const Main = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div id={styles.container}>
				<LeftPanel />
				<div id={styles.middleScreen}>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/profile/:userId" component={Profile} />
						<Route exact path="/addGroup" component={AddGroup} />
						<Route path="/group/:groupId" component={Group} />
						<Route exact path="/groupList" component={GroupList} />
						<Route path="/addEvent" component={AddEvent} /> {/*zmienic na groupId, narazie testy */}
					</Switch>
				</div>
				<RightPanel />
			</div>
		</React.Fragment>
	);
}
export default Main;