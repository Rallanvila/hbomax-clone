const CastInfo = (props) => {
	return (
		<div className="cast-info">
			<div className="cast-info__group-title">Cast & Crew</div>
			<div className="cast-info__list">
				<ul className="cast-info__crew">
					<li>Actor</li>
					<li>George Lucas</li>
				</ul>
				<ul className="cast-info__crew">
					<li>Cameramen</li>
					<li>George Lucas</li>
				</ul>
				<ul className="cast-info__crew">
					<li>Writer</li>
					<li>George Lucas</li>
				</ul>
				<ul className="cast-info__crew">
					<li>Special Effects</li>
					<li>George Lucas</li>
				</ul>
			</div>
			<div className="cast-info__group-title">Director</div>
			<div className="cast-info__list">
				<ul className="cast-info__crew">
					<li>George Lucas</li>
				</ul>
			</div>
		</div>
	);
};
export default CastInfo;
