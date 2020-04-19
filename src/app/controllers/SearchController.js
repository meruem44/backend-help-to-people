import User from '../models/User';

class SearchController {

    async index (req, res) {
        const { city } = req.query;
   
        const users = await User.find({city});
        console.log(users);
     
        res.json(users);
    }

}

export default new SearchController();