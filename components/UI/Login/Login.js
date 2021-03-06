import Head from "next/head";
import { useStateContext } from "/components/HBOProvider";

export const Login = () => {
	const globalState = useStateContext();

	return (
		<div>
			<div className="login-user">
				<div className="login-user__top">
					<div className="login-user__logo" />
					<span className="login-user__title">Who is watching</span>
				</div>
				<div className="login-user__form">
					<div className="login-user__user-box">
						<img
							src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
							alt=""
							className="login-user__user-img"
						/>
						<div className="login-user__user-name">{globalState.test}</div>
					</div>
				</div>
				<div className="login-user__buttons">
					<button className="login-user__adult">Add Adult</button>
					<button className="login-user__kid">Add Kid</button>
				</div>
			</div>
		</div>
	);
};
