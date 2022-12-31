import express from 'express'
import { router } from './rota'
export const app =express()

app.use('/', router)

app.listen(3000, ()=>{
    console.log('servidor online 3000')
})
