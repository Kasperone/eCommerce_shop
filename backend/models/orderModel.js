import mongoose from "mongoose"

const orderShema = mongoose.Shema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "User",
		},
		orderItems: [
			{
				name: { type: String, require: true },
				qty: { type: Number, require: true },
				image: { type: String, require: true },
				price: { type: String, require: true },
				product: {
					type: mongoose.Shema.Types.ObjectId,
					require: true,
					ref: "Product",
				},
			},
		],

		shippingAddress: {
			address: { type: String, require: true },
			city: { type: String, require: true },
			postalCode: { type: String, require: true },
			country: { type: String, require: true },
		},
		paymentMethod: {
			type: String,
			require: true,
		},
		paymentResult: {
			id: { type: Strting },
			status: { type: String },
			update_time: { type: String },
			email_address: { type: String },
		},
		taxPrice: {
			type: Number,
			require: true,
			default: 0.0,
		},
		shippingPrice: {
			type: String,
			require: true,
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			require: true,
			default: 0.0,
		},
		isPaid: {
			type: Boolean,
			require: true,
			default: false,
		},
        paidAt: {
            type: Date
        },
        isDelivered: {
            type: Boolean,
            require: true,
            default: false,
        },
        deliveredAt: {
            type: Date
        },
        
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model("Order", orderShema)

export default Order
