import Head from "next/head";
import { useStateContext } from "../components/HBOProvider";

export default function CreateUser() {
	const globalState = useStateContext();
	console.log(globalState);
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
							src={globalState.defaultUserImg}
							alt=""
							className="create-user__user-img"
						/>
						<div className="create-user__input-group">
							<label>Name</label>
							<input
								type="text"
								className="create-user__input-text"
								value={globalState.user}
								onChange={globalState.createUserAction}
							/>
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
