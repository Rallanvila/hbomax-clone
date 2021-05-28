const Account = (props) => {
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let i = 1; i <= digit; i++) {
			thumbnails.push(comp);
		}
		return thumbnails;
	};
	return (
		<div className="account">
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list">
					{loopComp(
						<div className="account__watch-video">
							<img
								src="https://i5.walmartimages.com/asr/8dd82ca6-adb0-4827-a6c4-c88aec06940d_1.ff23051db200c4ccd38a5e028ba659f6.jpeg"
								alt="continue watching"
							/>
							<div className="account__watch-overlay">
								<div className="account__watch-buttons">
									<div className="account__watch-circle">
										<i className="fas fa-play" />
									</div>
									<div className="account__watch-circle">
										<i className="fas fa-times" />
									</div>
								</div>
							</div>
						</div>,
						6,
					)}
				</div>
			</div>
			<div className="account__menu">
				<ul className="account__main">
					<li>
						<a href="/" className="active">
							My List
						</a>
					</li>
				</ul>
				<div className="side-nav__divider"></div>
				<ul className="account__main">
					<li>
						<a href="/">Account</a>
					</li>
					<li>
						<a href="/">Sign Out</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Account;
