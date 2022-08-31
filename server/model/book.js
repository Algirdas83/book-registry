

import {DataTypes} from 'sequelize'


const Book = (sequelize) =>{

   const Schema = {

        book: {
            type: DataTypes.STRING,
            allowNull: false
        },

        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Cover_author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usbn_kodas: {
            type:DataTypes.STRING,
        allowNull: false
        },
        image: {
            type:DataTypes.STRING,
        allowNull: false}

    }

    return sequelize.define('books', Schema )
}

export default Book