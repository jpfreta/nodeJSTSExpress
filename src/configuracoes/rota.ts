import  path  from 'path'
import express, { Request, Response} from 'express'
export const router = express.Router()

router.use(express.static(path.join('public')))
router.get('/', (_request:Request, response:Response)=>{
    response.send('index')
})

