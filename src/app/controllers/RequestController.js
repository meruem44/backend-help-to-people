import Request from '../models/Request';

class RequestController {
    async index (req, res) {
        const requests = await Request.find();

        return res.json(requests);
    }

    async show (req,res) {
        const { user_id } = req.query;
        
        const requests = await Request.find({
            user_id
        });
        return res.json(requests);
    }

    async store(req, res) {
        const request = await Request.create(req.body);

        return res.json(request);
    }
}

export default new RequestController();