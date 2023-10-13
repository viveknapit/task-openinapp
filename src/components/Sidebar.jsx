import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faTags, faGear, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ setOpenMenu }) => {
	return (
		<div className="sidebarContainer">
			<div className="sidebar">
				<div>
					<h1>Board.</h1>
					<span onClick={() => setOpenMenu(false)}>
						<CloseIcon fontSize="large" />
					</span>
				</div>
				<div>
					<div>
						<FontAwesomeIcon icon={faSnowflake} />
						<span><a href="/" className="sidelink">Dashboard</a></span>
					</div>
					<div>
						<FontAwesomeIcon icon={faTags} />
						<span><a href="/"  className="sidelink">Transactions</a></span>
					</div>
					<div>
						<FontAwesomeIcon icon={faCalendarDays} />
						<span><a href="/"  className="sidelink">Schedules</a> </span>
					</div>
					<div>
						<FontAwesomeIcon icon={faCircleUser} />
						<span><a href="/"  className="sidelink">Users</a> </span>
					</div>
					<div>
						<FontAwesomeIcon icon={faGear} />
						<span><a href="/"  className="sidelink">Settings</a> </span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
