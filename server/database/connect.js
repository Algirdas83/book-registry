
import mysql from 'mysql2/promise'
import {Sequelize} from 'sequelize'
import Users from '../model/users.js'
import Book from '../model/book.js'


const  database = {}

const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Books'
}



try {

    const connection = await mysql.createConnection({
        host:credentials.host,
        user: credentials.user,
        password: credentials.password,
        database: credentials.database
    })

    // await connection.query('CREATE DATABASE IF NOT EXISTS  misa') 

    
        const sequelize = new Sequelize (credentials.database, credentials.user, credentials.password, {dialect: 'mysql'} )
        
        

         database.Users = Users(sequelize)
         database.Book = Book(sequelize)

        await sequelize.sync({ alter:false });

        console.log('prisijnugimas pavyko');
    
} catch (error) {

    console.log(error);
    console.log('Nepavyko prisijungti prie duomenu bazes');
    
}

export default database