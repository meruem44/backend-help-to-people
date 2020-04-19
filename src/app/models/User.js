import Mongoose from 'mongoose';
import PointSchema from '../../util/PointSchema';

const UserSchame = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true, 
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
},{
    timestamps: true
});

export default Mongoose.model('user', UserSchame);