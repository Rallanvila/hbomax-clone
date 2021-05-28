const PosterView = (props) => {
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let i = 1; i <= digit; i++) {
			thumbnails.push(comp);
		}
		return thumbnails;
	};
	return (
		<>
			<div className="poster-view">
				<h3 className="poster-view__title">Movies</h3>
				<div className="poster-view__thumbnails">
					{loopComp(
						<div className="poster-view__thumbnail">
							<img
								src="https://cdn.europosters.eu/image/750/posters/avengers-endgame-whatever-it-takes-i74250.jpg"
								alt="avengers"
							/>
							<div className="poster-view__top-layer">
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
export default PosterView;
