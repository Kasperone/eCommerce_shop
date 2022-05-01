import mongoose from "mongoose"

const reviewShema = mongoose.Shema(
	{
		name: { type: String, require: true },
		rating: { type: Number, require: true },
		comment: { type: String, require: true },
	},
	{
		timestamps: true,
	}
)

const productShema = mongoose.Shema(
	{
		name: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		brand: {
			type: String,
			require: true,
		},
		category: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},

		reviews: [reviewShema],

		rating: {
			type: Number,
			require: true,
			default: 0,
		},
		numReviews: {
			type: String,
			require: true,
			default: 0,
		},
		price: {
			type: Number,
			require: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			require: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
)

const Product = mongoose.model("Product", productShema)

export default Product