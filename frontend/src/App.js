import Header from "./components/Header"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import HomeScreen from "./screens.js/HomeScreen"

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
