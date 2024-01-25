const db = require('../database/db')

exports.registerUser = function (user, callback) {
  db.query('insert into users set ?', user, callback)
}

exports.getUserByUsername = function (username, callback){
  db.query('SELECT * FROM users WHERE username = ?', [username], callback)
}
exports.updateUsername = function (newUsername, id, callback){
  db.query( `UPDATE users SET ? WHERE id = ?`, [newUsername, id], callback)
}
exports.alterPassword = function (password, id, callback){
  db.query( `UPDATE users SET password = ? WHERE id = ?`, [password, id], callback)
}
