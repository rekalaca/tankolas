module.exports = function (objRep){
    const {fuelModel} = objRep;
    return (req,res,next) =>{
        res.locals.tankolas = fuelModel.findOne({
            id:req.params.id
        })
        return next();
    }
}