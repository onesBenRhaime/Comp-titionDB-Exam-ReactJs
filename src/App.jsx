import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Competitions from "./components/Competitions";
import Home from "./components/Home";
import CompetitionDetails from "./components/CompetitionDetails";
// import NotFound from "./components/NotFound";
// import Header from "./components/Header";
//exemple de  lazt loading
const NavigationBar = React.lazy(() => import("./components/NavigationBar"));
const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Competitions">
						<Route index element={<Competitions />} />
						<Route path=":id" element={<CompetitionDetails />} />
					</Route>

					{/* Route de page note found  */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
