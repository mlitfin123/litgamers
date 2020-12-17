const express = require("express");
const path = require('path');
require('dotenv').config();
var cors = require('cors')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const session = require('./backSession');

const router = express.Router();

const PORT = process.env.PORT || 4000;

const app = express();

const userData = {
    name: "LocalHost"
};

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//login functions
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
        return res.status(401).json({
        error: true,
        message: "Invalid user."
        });
    } else {
        req.user = user; //set the user to req so other routes can use it
        next();
    }
    });
});


// request handlers
app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
});


// validate the user credentials
app.post('/users/signin', async function (req, res) {
    const user = req.body.username;
    // generate token
    const token = utils.generateToken(user);
    // get basic user details
    const userObj = utils.getCleanUser(user);
    // return the token along with user details
    return res.json({ user: userObj, token });
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    session.setUserSession();
    if (!token) {
    return res.status(400).json({
        error: true,
        message: "Token is required."
    });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
    });

    // return 401 status if the userId does not match.
    if (user.userId !== userData.userId) {
        return res.status(401).json({
        error: true,
        message: "Invalid user."
        });
    }
    // get basic user details
    var userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
    });
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("games/HotSauce"));
app.use(express.static("games/SpaceShooters"));


router.get('/sauce',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/sauce5',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/indexFivety.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/sauce50',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/indexFifty.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/sauceOne',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/indexOne.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/sauceFive',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/indexFive.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/sauceFree',function(req,res){
    res.sendFile(path.join(__dirname+'/games/HotSauce/indexFree.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/space',function(req,res){
    res.sendFile(path.join(__dirname+'/games/SpaceShooters/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/PlayFab/PlayFabGettingStarted.js'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.use('/sauce', router);
app.use('/sauce5', router);
app.use('/sauce50', router);
app.use('/sauceOne', router);
app.use('/sauceFive', router);
app.use('/sauceFree', router);
app.use('/space', router);
app.use('/login', router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});
