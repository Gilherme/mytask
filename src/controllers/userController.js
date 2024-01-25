const userModel = require('../models/userModel');
const bcrypt = require('bcrypt'); 
const saltRounds = 10;

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

exports.registerUser = (req, res, next) => {
  let user = req.body;
  user.password = hashPassword(user.password)
  userModel.registerUser(user, (err, result) => {
    if(err){
      res.status(500).json({msg: "erro interno no servidor"})
    }else{
      res.status(201).json({msg: 'Requisição recebida com sucesso!', user: `${user}`});
    }
  })
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};