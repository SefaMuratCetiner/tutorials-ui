import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lessons } from "./components/Lessons";
import { Programs } from "./components/Programs";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a client
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Lessons></Lessons>
			<br></br>
			<br></br>
			<Programs></Programs>
		</QueryClientProvider>
	);
}

export default App;
