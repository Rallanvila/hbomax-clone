const ForYouList = (props) => {
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let i = 1; i <= digit; i++) {
			thumbnails.push(comp);
		}
		return thumbnails;
	};
	return (
		<>
			<div className="just-added">
				<h3 className="just-added__title">Just Added</h3>
				<div className="just-added__thumbnails">
					{loopComp(
						<div className="just-added__thumbnail">
							<img
								src="https://cdn.europosters.eu/image/750/posters/avengers-endgame-whatever-it-takes-i74250.jpg"
								alt="avengers"
							/>
							<div className="just-added__top-layer">
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
export default ForYouList;
