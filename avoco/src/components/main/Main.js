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
				<Navbar />
				<div id={styles.container}>
					<LeftPanel />
					<div id={styles.middleScreen}>
						<Switch>
							{/* <Route exact path="/home" component={Home}/> */}
							<Route path="/profile/:userId" component={Profile}/>
						</Switch>
					</div>
					<RightPanel />
				</div>
			</React.Fragment>
		);
	}
}
export default Main;