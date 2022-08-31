import express from 'express'
import bcrypt from 'bcrypt'
import db from '../database/connect.js'



const router = express.Router()


router.post('/register' , async (req, res) => {
    

    try {

        if(await db.Users.findOne({ where:{ email: req.body.email } } )){
        
        res.status(401).send('toks pastas jau yra')
        return 
        }

        const saltRounds = 10

        req.body.password = await bcrypt.hash(req.body.password, saltRounds )



        const user = await db.Users.create(req.body)

        res.status(200).send('Duomenys sekmingai issaugoti')

        
    } catch (error) {
        
        res.status(500).send('Ivyko serverio klaida')
    }
    
}) // register end



router.post('/login' , async (req, res) => {
   
   
    try {

        const checkEmail = await db.Users.findOne( { where: {email: req.body.email} } )
            if(!checkEmail)
            return res.status(401).send('Tokio  pasto nera')

                if(await bcrypt.compare(req.body.password, checkEmail.password)){

                    req.session.loggedIn = true
                        res.status(200).send('Prisijungimas sekmingas')

                } else{
                    res.status(401).send('Nepavyko prisijungti')
                }
                
    } catch (error) {
        res.status(500).send('Ivyko serverio klaida')
    }
    
})


export default router