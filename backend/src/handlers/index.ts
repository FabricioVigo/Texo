import { Request, Response} from 'express'
import slug from "slug"
import User from "../models/User"
import { checkPassword, hashPassword } from '../utils/auth'

export const createAccount =  async(req: Request, res: Response)=> {

    const { email, password } = req.body 
    const userExits = await User.findOne({email})

    if(userExits){
        const error = new Error('El usuario ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const handle = slug(req.body.handle, '')

    const handleExits = await User.findOne({handle})
    if(handleExits){
        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({error: error.message})
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle
    await user.save()
    res.send({msg: 'Usuario creado correctamente'})
}


export const login = async (req: Request, res: Response) => {

    //Revisar si el usuario existe
    const { email, password } = req.body

    const user = await User.findOne({email})
    if(!user) {
        const error = new Error("El usuario con ese email no existe")
        return res.status(404).json({error: error.message})
    }

    //Comprobar el password

    const isPasswordCorrect = await checkPassword(password, user.password )

    if(!isPasswordCorrect) {
        const error = new Error("El Password es incorrecto")
        return res.status(401).json({error: error.message})
    }

    return res.send("Autenticado...")
}