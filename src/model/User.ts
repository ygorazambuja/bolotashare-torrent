import * as bcryptjs from 'bcryptjs'
import * as mongoose from 'mongoose'

interface IUser extends mongoose.Document {
    username: string;
    password: string;
    email: string;
}

const UserSchema = new mongoose.Schema({
    age: {
        required: false,
        type: Date
    },
    email: {
        lowercase: true,
        required: true,
        type: String
    },
    fullName: {
        required: true,
        type: String
    },
    password: {
        required: true,
        select: false,
        type: String
    },
    username: {
        required: true,
        type: String,
        unique: true
    }
});

UserSchema.pre("save", async function(next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
});

export default mongoose.model<IUser>("User", UserSchema);
