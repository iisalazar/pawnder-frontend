import React, { useEffect } from "react";
import {
	Switch,
	Route,
	useRouteMatch,
	Redirect,
	useParams,
	Link,
} from "react-router-dom";
import SecurityPage from "./Security";
import ProfilePage from "./Profile";
import styles from "./InstitutionSettings.module.css";

import {IoSettingsSharp} from 'react-icons/io5';

// reference: https://github.com/remix-run/react-router/issues/5496#issuecomment-376499389
const BetterSidebarLink = ({ children, ...linkProps }) => (
	<Route
		path={linkProps.to}
		exact={linkProps.exact}
		children={({ match }) => children({ active: !!match, linkProps })}
	/>
);

function InstitutionSettings() {
	let { path, url } = useRouteMatch();

  // Get user id and fetch info
  // Set user's info as the initialState to display sa settings profile

	return (
		<div className={styles.container}>
      <h1 className="heading-1" style={{display: "flex", gap: "10px", marginLeft: "30px"}} >
        <IoSettingsSharp style={{color: "var(--color-brand-darker)"}} />
        Settings
      </h1>
			<div className={styles.content}>
				<nav className={styles.sidebar}>
					<div className={styles.sidebarContent}>
						{/* sidebar item */}
						<BetterSidebarLink to={`${url}/profile`}>
							{({ active, linkProps }) => (
								<div
									className={`${styles.sidebarItem} ${
										active ? styles.activeSidebarItem : ""
									}`}
								>
									<Link {...linkProps}>
										<h2 className="heading-2">Profile</h2>
									</Link>
								</div>
							)}
						</BetterSidebarLink>

						<BetterSidebarLink to={`${url}/security`}>
							{({ active, linkProps }) => (
								<div
									className={`${styles.sidebarItem} ${
										active ? styles.activeSidebarItem : ""
									}`}
								>
									<Link {...linkProps}>
										<h2 className="heading-2">Security</h2>
									</Link>
								</div>
							)}
						</BetterSidebarLink>
					</div>
				</nav>
				<main className={styles.main}>
					<Switch>
						<Route path={`${path}/profile`} exact component={ProfilePage} />
						<Route
							path={`${path}/security`}
							exact
							component={SecurityPage}
						/>
						<Redirect path={path} to={`${path}/profile`} exact />
					</Switch>
				</main>
			</div>
		</div>
	);
}

export default InstitutionSettings;