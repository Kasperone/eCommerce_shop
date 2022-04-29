import Header from "./components/Header"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Welcome To Shop</h1>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App