const express = require("express");
const path = require('path');
var cors = require('cors')
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}))
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("FieryRedhead"));
app.use(express.static("public"));


router.get('/fiery',function(req,res){
    res.sendFile(path.join(__dirname+'/FieryRedhead/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/space',function(req,res){
    res.sendFile(path.join(__dirname+'/SpaceShooters/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.use('/fiery', router);
app.use('/space', router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});
