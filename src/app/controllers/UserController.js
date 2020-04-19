import User from '../models/User';
import * as yup from 'yup';

class UserController {

    async index(req,res) {
        const users = await User.find();

        return res.json(users);
    }

    async store (req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            age: yup.number().required(),
            password: yup.string().required().min(6),
            email: yup.string().email().required(),
            city: yup.string().required(),
            state: yup.string().required(),
        });


        if (await (!schema.isValid(req.body))) {
            console.log('entrou');
            return res.status(400).json({message: 'Preencha todos os dados corretamente.'});
        }

        const { name, age, password, email, city, state, longitude, latitude  } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (userExist) {
            return res.json(userExist);
        }

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const user = await User.create({
            name,
            age,
            password,
            email,
            city: city.toLowerCase(),
            state,
            location
        });

        return res.json(user);
    }
}

export default new UserController();