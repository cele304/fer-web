const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    //####################### ZADATAK #######################
    // - obrisati sadržaj košarice
    req.session.cart = undefined;

    // - odjaviti registriranog korisnika iz sustava
    req.session.user = undefined;
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
    });

    // - napraviti redirect na osnovnu stranicu
    res.redirect('/');
    //#######################################################
});

module.exports = router;