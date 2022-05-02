import mongoose from "mongoose"

const userSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "User",
		},
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			require: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model("User", userSchema)

export default User
