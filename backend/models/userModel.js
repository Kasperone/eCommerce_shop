import mongoose from "mongoose"

const userShema = mongoose.Shema(
	{
		user: {
			type: mongoose.Shema.Types.ObjectId,
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
			type: Boolen,
			require: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model("User", userShema)

export default User
