import { SWRConfig } from "swr";
import Layout from "./layouts/Layout";
import Calculator from "./pages/calculator/Calculator";

function App() {
	return (
		<div className="App">
			<SWRConfig
				value={{
					// refreshInterval: 3000,
					onError: (error, key) => {
						if (error.status !== 403 && error.status !== 404) {
						  // We can send the error to Sentry,
						  // or show a notification UI.
						}
					  }
				}}
			>
				<Layout>
					<Calculator />
				</Layout>
			</SWRConfig>
		</div>
	);
}

export default App;
