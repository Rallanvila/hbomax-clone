import Head from "next/head";
import Image from "next/image";

export default function CreatUser() {
	return (
		<div>
			<div>
				<div className="create-user">
					<div className="create-user__top">
						<div className="create-user__logo" />
						<span className="create-user__title">Who is watching</span>
					</div>
					<div className="create-user__form">
						<img
							src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
							alt=""
							className="create-user__user-img"
						/>
						<div className="create-user__input-group">
							<label>Name</label>
							<input type="text" className="create-user__input-text" />
							<div className="create-user__colors">
								<div
									className="create-user__color create-user__color--active"
									style={{
										background: "rgb(0,36,28)",
										background:
											"linear-gradient(38deg, rgba(0,36,28,1) 0%, rgba(255,0,0,1) 72%)",
									}}
								/>
								<div
									className="create-user__color"
									style={{
										background: "rgb(0,36,28)",
										background:
											"linear-gradient(38deg, rgba(0,36,28,1) 0%, rgba(255,186,0,1) 72%)",
									}}
								/>
								<div
									className="create-user__color"
									style={{
										background: "rgb(0,36,28)",
										background:
											"linear-gradient(38deg, rgba(0,36,28,1) 0%, rgba(123,255,0,1) 72%)",
									}}
								/>
								<div
									className="create-user__color"
									style={{
										background: "rgb(0,36,28)",
										background:
											"linear-gradient(38deg, rgba(0,36,28,1) 0%, rgba(0,255,237,1) 72%)",
									}}
								/>
								<div
									className="create-user__color"
									style={{
										background: "rgb(0,36,28)",
										background:
											"linear-gradient(38deg, rgba(0,36,28,1) 0%, rgba(255,0,196,1) 72%)",
									}}
								/>
							</div>
						</div>
						<div className="create-user__user-name"></div>
					</div>
					<div className="create-user__buttons">
						<button className="create-user__cancel">Cancel</button>
						<button className="create-user__save">Save</button>
					</div>
				</div>
			</div>
		</div>
	);
}
