import React from "react"
import { Link, useParams } from "react-router-dom"
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
} from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"

const ProductScreen = () => {
	const { id } = useParams()
	const product = products.find(p => p._id === id)
	console.log(products)
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroupItem>
							<h2>{product.name}</h2>
						</ListGroupItem>
						<ListGroupItem>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}></Rating>
						</ListGroupItem>
						<ListGroupItem>Price: ${product.price}</ListGroupItem>
						<ListGroupItem>Description: ${product.description}</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroupItem>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? "In stock" : "Out Of Stock"}
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem>
								<Button
									className='btn-block'
									type='button'
									disabled={product.countInStock === 0}>
									Add To Cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductScreen

// import { Link, useParams } from 'react-router-dom';
// ...

// function ProductScreen() {
//   const { id } = useParams();
//   const product = products.find((p) => p._id === Number(id));
//   return (
//     <div>
//       {product.name}
//     </div>
//   );
// }
