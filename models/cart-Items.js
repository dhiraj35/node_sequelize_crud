const Sequalize = require('sequelize');

const sequalize = require('../util/database');

const CartItem = sequalize.define('cartItem',{  
    id:{
        type:Sequalize.INTEGER,
        primaryKey:true,
        allowNull:false,  
        autoIncrement:true
    },
    quantity:{    
        type:Sequalize.INTEGER,     
    }
});

module.exports = CartItem;    