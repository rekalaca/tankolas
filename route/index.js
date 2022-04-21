const renderMW=require('../middleware/render');
const uuid = require('uuid');
const dataMW = require("../middleware/adatbeker");
const tankolasok = require("../static/datas/tanklasok.json")
const fs = require('fs');

module.exports = function (app, { fuelModel, saveDB }) {
    const objRep = {
        fuelModel,
        uuid,
        saveDB
    };

    app.get('/',renderMW(objRep));
    app.post('/',dataMW(objRep),renderMW(objRep));
    app.get('/auto', dataMW(objRep), renderMW(objRep));

    
    app.get('/auto', renderMW(objRep, "index"));
    app.get('/auto/:frgsz',renderMW(objRep, "index"));
    app.put('/tankolas',renderMW(objRep, "index"));
    app.patch('/tankolas/:id',renderMW(objRep, "index"));
    app.delete('/tankolas/:id',renderMW(objRep, "index"));

    return app;
}