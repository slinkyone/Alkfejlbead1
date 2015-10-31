var express = require('express');
var passport = require('passport');
var router = new express.Router;

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    req.flash('todo', 'A kért tartalom megtekintéséhez be kell jelentkezni!');
    res.redirect('/login/login');
}

router.route('/login/login')
    .get(function (req, res) {
        res.render('login/index', {
            uzenetek: req.flash()
        });
    })
    .post(passport.authenticate('local-login', {
        successRedirect: '/list',
        failureRedirect: '/login/login',
        failureFlash: true,
        badRequestMessage: 'Hibás felhasználó vagy jelszó!'
    }));
    
router.route('/login/signup')
    .get(function (req, res) {
        res.render('login/signup', {
            uzenetek: req.flash()
        });
    })
    .post(passport.authenticate('local-signup', {
        successRedirect:    '/login/login',
        failureRedirect:    '/login/signup',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.use('/login/logout', function (req, res) {
    req.logout();
    res.redirect('/login/login');
});

router.route('/')
    .get(function (req, res) {
        res.render('login');
    });
router.route('/add')
    .get(ensureAuthenticated, function (req, res) { 
        var result;
        
        if (req.query.kereses) {
            result = req.app.models.user.find({
                leiras: { 'contains': req.query.kereses }
            });
        } else {
            result = req.app.models.user.find();
        }
        
        result.then(function (users) {
            res.render('add', {
                uzenetek: req.flash(),
                users: users
            });
        });
    })
    .post(ensureAuthenticated, function (req, res) {
        req.checkBody('leiras').notEmpty().withMessage('Kihagytál valamit!');
        if (req.validationErrors()) {
            req.validationErrors().forEach(function (todo) {
                req.flash('todo', todo.msg);
            });
            res.redirect('/add');
        } else {
            req.app.models.todo.create({
                kinek: req.body.kinek,
                leiras: req.body.leiras,
            })
            .then(function () {
                req.flash('success', 'Todo létrehozva.');
                res.redirect('/add'); 
            });
        }
    });
router.route('/list')
    .get(ensureAuthenticated, function (req, res) {
        var result;
        
        if (req.query.kereses) {
            result = req.app.models.todo.find({
                leiras: { 'contains': req.query.kereses }
            });
        } else {
            result = req.app.models.todo.find();
        }
        
        result.then(function (todos) {
            res.render('list', {
                uzenetek: req.flash(),
                todos: todos
            });
        });
    });
router.route('/delete/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.models.todo.destroy({
            id: req.params.id
        }).then(function () {
            req.flash('success', 'Teendő elvégezve.');
            res.redirect('/list');  
        });
    });
router.route('/ready/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.models.todo.update({
            id: req.params.id
        }, {
            kesz: true
        }).then(function () {
            res.redirect('/list');  
        });
    });
router.route('/todo/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.models.todo.findOne({
            id: req.params.id
        }).then(function (todo) {
            res.render('todo', {
                todo: todo
            })
        });;
    });
router.route('/edit/:id')
    .post(ensureAuthenticated, function (req, res) {
       req.app.models.todo.update({
            id: req.params.id
        }, {
           leiras: req.body.leiras
        }).then(function () {
            res.redirect('/list');  
        });
    });
module.exports = router;