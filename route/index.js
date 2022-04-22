const uuid = require('uuid');
const renderMW=require('../middleware/render');
const dataMW = require("../middleware/adatbeker");
const listMW = require("../middleware/list")
const deleteMW=require('../middleware/deleteTankolas')
module.exports = function (app, { fuelModel, saveDB }) {
    const objRep = {
        fuelModel,
        uuid,
        saveDB
    };

    app.get('/',listMW(objRep),renderMW(objRep,'index'));
    app.get('/auto', listMW(objRep), renderMW(objRep,'index'));
    app.get('/auto/:frgsz',carMW(objRep),renderMW(objRep, "index"));
    app.post('/tankolas',dataMW(objRep));
    app.delete('/tankolas/:id',deleteMW(objRep));

    return app;
}