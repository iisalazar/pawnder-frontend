import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Route } from "react-router";

// TODO: use React.lazy() to lazy-load these pages
import SamplePage from "pages/SamplePage";
import { UserLoginPage, UserSignupPage, UserSettingsPage } from "pages";
import InstitutionOnboardingPage from "pages/InstitutionOnboarding"
// import Navbar from "components/Navbar";
import NavRoute from "components/NavRoute";

// reset default styles for all html elements - https://en.wikipedia.org/wiki/Reset_style_sheet
import "./normalize.css";
import "./typography.css";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<NavRoute  path="/sample" exact component={SamplePage} />
					<NavRoute  path="/user/login" component={UserLoginPage} />
					<NavRoute  path="/user/signup" component={UserSignupPage} />
					<NavRoute  path="/user/settings" component={UserSettingsPage} />
					<Route  path="/institution/onboarding" component={InstitutionOnboardingPage} />
					<Redirect path="/" to="/sample" exact />
				</Switch>
			</Router>
		</>
	);
}

export default App;
