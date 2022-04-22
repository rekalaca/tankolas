

module.exports = (objRep) => {
    const { fuelModel, saveDB, uuid } = objRep;
    return (req, res, next) => {

        console.log(req.body);

        if (!(req.body.rendszam.length < 7 || typeof req.body.liter === undefined || req.body.liter <= 0 || typeof req.body.km === 'undefined' || req.body.km <= 0 || req.body)) {
            const ujTankolas = {
                id: uuid.v4(),
                rendszam: req.body.rendszam,
                idopont: req.body.date,
                km : req.body.km
            }

            fuelModel.insert(ujTankolas);
            saveDB();
        }
        return res.redirect('/auto');

    }
}