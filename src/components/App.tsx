import { SWRConfig } from "swr";
import Layout from "./layouts/Layout";
import Calculator from "./pages/calculator/Calculator";
import ErrorContent from "@common/error/ErrorContent";

const App = () => {
	return (
		<div className="App">
			<SWRConfig
				value={{
					// refreshInterval: 3000,
					onError: (error, key) => {
						if (error.status !== 403 && error.status !== 404) {
							return (<ErrorContent message={error?.message ?? "Error message"} />);
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
