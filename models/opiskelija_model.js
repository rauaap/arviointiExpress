const db = require('../database');

const Opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from Opiskelija where idOpiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into Opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update Opiskelija set Etunimi=?,Sukunimi=?,Osoite=?,Luokkatunnus=? where idOpiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id],
      callback
    );
  }
};

module.exports = Opiskelija
