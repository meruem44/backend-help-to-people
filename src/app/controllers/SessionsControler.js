import User from '../models/User';
import * as yup from 'yup';

class SessionsController {
    async store (req, res) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(6).required()
        });

        console.log(req.body);

        if (await (!schema.isValid(req.body))) {
            console.log('entrou');
            return res.status(400).json({message: 'Preencha todos os dados corretamente.'});
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({message: 'Não existe nenhum usuario com esse Email.'});
        }

        if (password !== user.password) {
            return res.status(400).json({message: 'Senha inválida.'});
        }

        return res.json(user);

    }
}

export default new SessionsController();