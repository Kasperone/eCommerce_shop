import React, { useEffect } from "react"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Cart } from "react-bootstrap"
import Message from "../components/Message"
import { addToCart } from "../actions/cartActions"

const CartScreen = () => {
	const { id } = useParams()
	// const navigate = useNavigate()
	const location = useLocation()
	const productId = id
	const qty = new URLSearchParams(location.search).get("qty")
	// const qty = location.search ? Number(location.search.split("=")[1]) : 1

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)
	const { cartItems } = cart

	console.log(cartItems)

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, [dispatch, productId, qty])

	return <div>CartScreen</div>
}

export default CartScreen
