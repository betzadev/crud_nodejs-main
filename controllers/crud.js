//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const item = req.body.item;
    const price = req.body.price;
    conexion.query('INSERT INTO users SET ?',{item:item, price:price}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const item = req.body.item;
    const price = req.body.price;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{item:item, price:price}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};