
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import users from './controllers/users.js'
import book from './controllers/books.js'

const app = express()

app.use(cors())

//lanai svarbus alementas dirbant su axios ir seip jei duomenis siunciame json formatu

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use('/publick', express.static('publick'))


app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'labai labai slapta fraze',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 6000000
 }
   
}))



 app.use('/api/users/', users)

 app.use('/api/books/', book)







app.listen(3000)