const db = require('../database');

const book = {
  getById: function(id, callback) {
    return db.query('select * from Arviointi where idArviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into Arviointi (Paivamaara,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update Arviointi set Paivamaara=?,Arvosana=?,idOpiskelija=?,idOpintojakso=? where idArviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = book;
