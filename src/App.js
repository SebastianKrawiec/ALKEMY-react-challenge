import "./app.css";
import Container from "./components/layout/content/Container";
import Header from "./components/layout/header/Header";
import ModalSearch from "./components/modals/modalSearch/ModalSearch";

import { BrowserRouter as Router} from "react-router-dom";
import StyleContextProvider from "./context/StyleContext";
import HeroesContextProvider from "./context/HeroesContext"

function App() {
  return (
		<div className="app">
			<HeroesContextProvider>
				<StyleContextProvider>
					<Router>
						<ModalSearch />
						<Container />
						<Header />
					</Router>
				</StyleContextProvider>
			</HeroesContextProvider>
		</div>
	);
}

export default App;
