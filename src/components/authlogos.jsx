import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const Leftpart = () => {
	return (
		<div className="leftpartContainer">
			<div className="lpc">
				<div >
					<h3><strong><a href="/"  className="logolink">LOGO</a></strong></h3>
				</div>
				<div>
					<h1>Board.</h1>
				</div>
				<div className="socialLoginIcons">
					<a href="https://openinapp.co/fkwx2">
						<GitHubIcon fontSize="medium" />
					</a>
					<a href="https://twtr.openinapp.co/m6jxp">
						<TwitterIcon fontSize="medium" />
					</a>
					<a href="https://linkedin.openinapp.co/ibcj6">
						<LinkedInIcon fontSize="medium" />
					</a>
					<a href="#">
						<PublicIcon fontSize="medium" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Leftpart;
