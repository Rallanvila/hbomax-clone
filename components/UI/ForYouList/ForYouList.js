const JustAdded = (props) => {
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let i = 1; i <= digit; i++) {
			thumbnails.push(comp);
		}
		return thumbnails;
	};
	return (
		<>
			<div className="foryou-list">
				<h3 className="foryou-list__title">For You</h3>
				<div className="foryou-list__thumbnails">
					{loopComp(
						<div className="foryou-list__thumbnail">
							<img
								src="https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_.jpg"
								alt="thor"
							/>
							<div className="foryou-list__top-layer">
								<i className="fas fa-play" />
							</div>
						</div>,
						10,
					)}
				</div>
			</div>
		</>
	);
};
export default JustAdded;
