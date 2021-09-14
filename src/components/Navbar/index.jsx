import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "components/Button";

const INSTITUTION_ROOT = "/institution";

function Navbar() {
	// TODO: use redux and cookeis to check if user is authenticated
	// as of now just use some basic state
	const [authenticated, setAuthenticated] = useState(false);
	const [isInsti, setIsInsti] = useState(false);
	const login = () => setAuthenticated(true);
	const loginAsInsti = () => setIsInsti(true);

	const logout = () => {
		setAuthenticated(false);
		setIsInsti(false);
	};
	// render these navbar items if currently signed-in identiy is a user
	function renderUserItems() {
		return (
			<>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to="/feed"
				>
					Feed
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to="/nearby"
				>
					Nearby Institutions
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to="/stories"
				>
					Success Stories
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to="/settings"
				>
					Settings
				</NavLink>
			</>
		);
	}
	// render these navbar items if currently signed-in identiy is an institution
	function renderInstitutionItems() {
		return (
			<>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to={`${INSTITUTION_ROOT}/dashboard`}
				>
					Dashboard
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to={`${INSTITUTION_ROOT}/manage-pets`}
				>
					Manage Pets
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to={`${INSTITUTION_ROOT}/manage-stories`}
				>
					Manage Stories
				</NavLink>
				<NavLink
					className={`paragraph ${styles.navbarItem}`}
					activeClassName="bold-text"
					to={`${INSTITUTION_ROOT}/settings`}
				>
					Settings
				</NavLink>
			</>
		);
	}

	return (
		<header className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarLeftItems}>
					<p className="bold-text">Logo goes here</p>
				</div>
				<div className={styles.navbarRightItems}>
					{authenticated &&
						(isInsti ? renderInstitutionItems() : renderUserItems())}
					<NavLink
						className={`paragraph ${styles.navbarItem}`}
						activeClassName="bold-text"
						to="/sample"
					>
						Sample
					</NavLink>
					<NavLink
						className={`paragraph ${styles.navbarItem}`}
						activeClassName="bold-text"
						to="/chakra-sample"
					>
						Chakra Sample
					</NavLink>
					{authenticated ? (
						<Button
							color="white"
							variant="outline"
							size="small"
							onClick={logout}
						>
							logout
						</Button>
					) : (
						<>
							<Button
								color="white"
								variant="outline"
								size="small"
								onClick={login}
							>
								login as user
							</Button>
							<Button
								color="white"
								variant="outline"
								size="small"
								onClick={login}
							>
								signup as user
							</Button>
							<Button
								color="white"
								variant="outline"
								size="small"
								onClick={() => {
									login();
									loginAsInsti();
								}}
							>
								login as insti
							</Button>
							<Button
								color="white"
								variant="outline"
								size="small"
								onClick={() => {
									login();
									loginAsInsti();
								}}
							>
								signup as insti
							</Button>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

export default Navbar;
