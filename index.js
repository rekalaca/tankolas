const express = require('express');
const app = express();
const port = 4400;
const bodyParser = require('body-parser');
const { initDB } = require('./services/backup');

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


initDB((err, { fuelModel, saveDB }) => {
    if (err) {
        return console.log("Hiba történt!", err);
    }
    require("./route/index")(app, { fuelModel, saveDB });

    app.listen(port, () => {
        console.log(`${port} porton fut.`);
    })
})