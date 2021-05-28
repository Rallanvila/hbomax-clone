import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";

const MainLayout = (props) => {
	return (
		<div
			style={{
				background:
					"linear-gradient(312deg, rgba(26,39,103,1) 0%, rgba(48,20,94,1) 45%, rgba(0,0,0,1) 100%)",
				minHeight: "100vh",
			}}
		>
			<Header />
			<SideNav />
			<section className="content-container">{props.children}</section>
		</div>
	);
};
export default MainLayout;
