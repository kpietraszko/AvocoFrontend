import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from '../profile/Profile';
import Navbar from '../navbar/Navbar';
import LeftPanel from '../leftPanel/LeftPanel';
import RightPanel from '../rightPanel/RightPanel';
import styles from './Main.module.css';
class Main extends React.Component {
	render = () => {
		return (
			<React.Fragment>
			<Navbar/>
			<LeftPanel/>
			<div className={styles.middleScreen}>
				<Switch>
					{/* <Route exact path="/home" component={Home}/> */}
					<Route exact path="/" component={Profile} /> {/* path="/profile" */}
				</Switch>
			</div>
			<RightPanel/>
			</React.Fragment>
		);
	}
}
export default Main;