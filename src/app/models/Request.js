import Mongoose from 'mongoose';

const RequestSchema = new Mongoose.Schema({
    
    user_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

export default Mongoose.model('request', RequestSchema);