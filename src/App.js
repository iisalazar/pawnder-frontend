import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "redux/store";

// TODO: use React.lazy() to lazy-load these pages
import SamplePage from "pages/SamplePage";
import ChakraSample from "pages/ChakraSample";
import Feed from "pages/Feed";
import NearbyInstitution from "pages/NearbyInstitution";
import {
	List as ManagePetList,
	Details as ManagePetDetails,
} from "pages/ManagePets";

import NavRoute from "components/NavRoute";
import InstitutionSignUp from "pages/InstitutionSignUpPage";
import InstitutionLogin from "pages/InstitutionLoginPage";
import ShowStoryDetails from "pages/ShowStoryDetails";
import ManageStoryDetails from "pages/ManageStoryDetails";
import { Route } from "react-router";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// reset default styles for all html elements - https://en.wikipedia.org/wiki/Reset_style_sheet
import "./normalize.css";
import "./typography.css";

const store = configureStore();

function App() {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider theme={theme}>
				<Router>
					<Switch>
						<NavRoute path="/chakra-sample" exact component={ChakraSample} />
						<NavRoute path="/sample" exact component={SamplePage} />
						<NavRoute path="/feed" exact component={Feed} />
						<NavRoute path="/nearby" exact component={NearbyInstitution} />
						<NavRoute path="/manage-pets/:petId" component={ManagePetDetails} />
						<NavRoute path="/manage-pets" component={ManagePetList} />
						<Route path = "/institution/login" component = {InstitutionLogin} />
						<Route path = "/institution/signup" component = {InstitutionSignUp} />
						<NavRoute path = "/institution/manage-stories/:id" component = {ManageStoryDetails} />
						<NavRoute path = "/stories/:id" component = {ShowStoryDetails} />
						<Redirect path="/" to="/sample" exact />
					</Switch>
				</Router>
			</ChakraProvider>
		</ReduxProvider>
	);
}

export default App;
