import "./App.css";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Carousel from "./components/Carousel";
import Hardwork from "./components/Hardwork";
import Achiever from "./components/Achiever";
import HallofFame from "./components/HallofFame";
import PopularProg from "./components/PopularProg";
import AffordableProg from "./components/AffordableProg";
import CommunityProg from "./components/CommunityProg";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Chatbot from "./components/ChatbotIcon";

function App() {
	return (
		<div>
			<NavbarTop />
			<NavbarBottom />
			<Carousel />
			<Hardwork />
			<Achiever />
			<HallofFame />
			<PopularProg
				title="Popular Programs"
				desc="Most in demand and watched by people."
			/>
			<AffordableProg
				title="Affordable Programs"
				desc="Find your favourite courses in pocket-friendly ways."
			/>
			<CommunityProg
				title="Community Programs"
				desc="Open to all pro-live classes on Youtube for free."
			/>
			<Products />
			<Footer />
			<Chatbot />
		</div>
	);
}

export default App;
