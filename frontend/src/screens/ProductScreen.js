import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
	FormControl,
} from "react-bootstrap"
import Rating from "../components/Rating.js"
import Message from "../components/Message.js"
import Loader from "../components/Loader.js"
import { listProductDetails } from "../actions/productActions.js"

const ProductScreen = () => {
	const [qty, setQty] = useState(0)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const productDetails = useSelector(state => state.productDetails)
	const { loading, error, product } = productDetails

	const { id } = useParams()
	useEffect(() => {
		dispatch(listProductDetails(id))
	}, [dispatch, id])

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`)
	}

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
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

								{product.countInStock > 0 && (
									<ListGroupItem>
										<Row>
											<Col>Qty</Col>
											<Col>
												<FormControl
													as='select'
													value={qty}
													onChange={e => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map(x => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</FormControl>
											</Col>
										</Row>
									</ListGroupItem>
								)}

								<ListGroupItem>
									<Button
										onClick={addToCartHandler}
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
			)}
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
