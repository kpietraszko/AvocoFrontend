import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from '../../components/profile/Profile';
import AddGroup from '../../components/addGroup/AddGroup';
import Navbar from '../../components/navbar/Navbar';
import LeftPanel from '../../components/leftPanel/LeftPanel';
import RightPanel from '../../components/rightPanel/RightPanel';
import Group from "../../components/group/Group";
import Home from '../../components/home/Home';
import styles from './Main.module.css';

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
					</Switch>
				</div>
				<RightPanel />
			</div>
		</React.Fragment>
	);
}
export default Main;