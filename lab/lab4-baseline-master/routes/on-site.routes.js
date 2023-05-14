const express = require('express');
const helper = require('./helpers/helper');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('view', {
        title: 'Delivery options',
        linkActive: 'cart',
        user: req.session.user,
        helper: new helper(req.session.params)
    });
});

router.post('/save', function (req, res, next) {
    if (!req.session.params)
        req.session.params = {};
    if (req.body['delivery-date'])
        req.session.params.deliveryDate = req.body['delivery-date'];
    if (req.body.address)
        req.session.params.address = req.body.address;
    if (req.body['delivery-alternative'])
        req.session.params.deliveryAlternative = req.body['delivery-alternative'];
    res.redirect('/cart');
});


router.post('/reset', function (req, res, next) {
    req.session.params = undefined;
    res.redirect('/on-site');
});

router.post('/order', function (req, res, next) {
    req.session.params = undefined;
    res.redirect('/checkout');
});

module.exports = router;