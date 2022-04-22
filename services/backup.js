
const loki = require('lokijs');
let db = false;

function initDB(callback) {
    console.log("Adatbázis inicializálása");
    db = new loki('tankolasok.loki.db');
    db.loadDatabase({}, err => {
        if (err) {
            return callback(err);
        }
        let fuelModel = db.getCollection("fuels");
        if (fuelModel === null) {
            fuelModel = db.addCollection("fuels");
        }
        db.saveDatabase(err => {
            if (err) {
                return callback(err);
            }
            //Tesztelésre
            console.table(fuelModel.find());

            return callback(undefined, {
                fuelModel, saveDB: (callback) => {
                    console.log("DB mentés alatt...");
                    db.saveDatabase(callback);
                }
            });
        });
    });
}

module.exports.initDB = initDB;