import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function (email: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Please enter a valid email address",
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(phone:string) {
                return /^\d{10}$/.test(phone);
            },
            message: "Please enter a valid phone number",
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(password: string) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
            },
            message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
        }
    },
    role: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer",
        required: true,
    },
}, {
    timestamps: true,
});

// Password hashing middleware

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = model<IUser>("User", userSchema);

export default User;