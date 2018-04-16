import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from '../../components/profile/Profile';
import Navbar from '../../components/navbar/Navbar';
import LeftPanel from '../../components/leftPanel/LeftPanel';
import RightPanel from '../../components/rightPanel/RightPanel';
import styles from './Main.module.css';
const Main = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div id={styles.container}>
				<LeftPanel />
				<div id={styles.middleScreen}>
					<Switch>
						{/* <Route exact path="/home" component={Home}/> */}
						<Route path="/profile/:userId" component={Profile} />
					</Switch>
				</div>
				<RightPanel />
			</div>
		</React.Fragment>
	);
}
export default Main;