import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from '../profile/Profile';
class Main extends React.Component {
	render = () => {
		return (
			// tu lewy panel
			<div className="middleScreen">
				<Switch>
					{/* <Route exact path="/home" component={Home}/> */}
					<Route exact path="/" component={Profile} /> {/* path="/profile" */}
				</Switch>
			</div>
			// tu prawy panel
		);
	}
}
export default Main;