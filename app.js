/*
@#GGGGGGGGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGPJ77?7?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G!7777!!!!77?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BBBBBGJ77777?GGP@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G7777JPP5J777!7B@@@@@@@@@@@@@@@@@@@@@@@@@@&BGBBBBB&P77777!?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G77775@@@@Y777!J@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBB#@@B?7777J&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G7777Y@@@#J777!P@@@@&BP5YYYPG#@@@@@@@&BGGPP5G@&&@@&####BB##BB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G7777?JJ?777!75@@@&P?7!?JJ?7!7J#@@@@@@#J!!!!!5@@@@@@@@@&BBBBBB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G777777!777JG&@@@&J!77?B##B577!7#@@@@@P777777?5@@@@@@@&@#BBBBBB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G7777YB?!7775&@@@G!777?????????7G@@@@&?!777?#@#&@@@@@5Y@@#GGGGP#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G7777Y@&P777!7P&@B7777Y#&&&&BB#&@@@@@@&J!7JB#B##B#@#J!7?????7?B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@G!77!Y@@@#Y777!?G@B?!77?YYYJ77?5@@@@@@@@5JBBBBBBGB&J!7777!!!J#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@B????5@@@@@GJ????Y&&GY?7777?JYG&@@@@@@@@@#BBBBBBBB@&577??JJ5&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@&@@@@@&&&&&@@@@@@@@@@@@@@@@&&&&&&@@@GJ&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@&B###BBBB###&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@#PPPP#@@@@@@@@@@&J???Y@@@@@@@@@@@@@@@@@@@@@
@#5PPPP5555PPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5PPP#@@@@@@@@@@&?77!J@@@@@@@@@@@@@@@@@@@@@
@#PPPPG###BPPPP5G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
@#PPPPB@@@@&PPPPP&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
@#PPPPG@@@&BPPPPP&@&#BGGGGGBBBBBB#@@@@@@#BBBB#@@#BGGGGGB&#PPPP##BGGGB#&@@&?777J@@@&G5YJJJYPB@@@@@@@@
@#PPPPPPPPPPPPPP#@#PPPPGGGPG&G5PPPB@@@@BPPP5G&BPPP5PPPPP##PPPPPPPPPPPPPG@&?777J@&577!?Y5J7!7?G@@@@@@
@#PPPPPPPPPPGB#@@@G5PPP#&&&@@@BPPPPG@@BPPPPB@GPPPPB&&@&&@#PPPPG&@@&GPPP5#&?777Y&J!77?GBBB577!7B@@@@@
@#PPPPG@@@@@@@@@@@&BGPP5PPPB&@@#PPPPGBPPPPB@&PPPPG@@@@@@@#PPPP#@@@@#PPPP#&?777YG!777??????JJJ?P@@@@@
@#PPPPB@@@@@@@@@@@@&@&&BPPP5P@@@&PPPPPPPP#@@@PPPPP#@@@@@@#PPPP#@@@@#PPPP#&?777Y&7777J#@@@&GG#&@@@@@@
@#5PP5G@@@@@@@@@@&P5PGBGPPPPG@@@@&PPPPPP#@@@@&GPPPPPGGPP&#5PP5#@@@@#5PP5#&?!7!J@#J7!!7JJJ?!!75@@@@@@
@#GGGGB@@@@@@@@@@&BGPPPPPGG#@@@@@#PPPPP&@@@@@@@&BGGPPPPG##GGGG&@@@@#GGGG#@YJJJ5@@@B5J?????J5B@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

      Project:      RePsychle - Beta
      Description:  A website that aims to allow users to create an account, upload database entries, CRUD accessibility to make better recycling decisions.
      Name:         Wyatt Kirschner
      Course:       COMP3006
      Date:         4/23/2022
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import Mongoose into the Recycling after installing it
const mongoose = require('mongoose');

const bodyparser = require('body-parser')
const crypto = require('crypto');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')

// Create router objects
var indexRouter = require('./routes/index');
var recyclingRouter = require('./routes/recycling');

var compostRouter = require('./routes/compost')
var garbageRouter = require('./routes/garbage')
var hazardousRouter = require('./routes/hazardous')


// var reyclingRouter = require('./routes/recycling');

// Import passport modules
const passport = require('passport');
const session = require('express-session');


// Import globals file
const config = require('./config/globals');

var app = express();

// Middleware for Multer

app.use(bodyparser.json())
app.use(methodOverride('_method'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure passport module https://www.npmjs.com/package/express-session
// Used to salt
app.use(session({
    secret: 'repsychlewkirschn', //Secret if production
    resave: false,
    saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Link passport to the user model
const User = require('./models/user');
passport.use(User.createStrategy());

// Set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register router objects
app.use('/', indexRouter);
app.use('/recycling', recyclingRouter);
app.use('/garbage', garbageRouter);
app.use('/compost', compostRouter);
app.use('/hazardous', hazardousRouter);






// MongoDB Connection

let connectionString = config.db;


// Init gfs


const conn = mongoose.createConnection(connectionString);
let gfs;
conn.once('open', function() {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})


// Storage Engine

const storage = new GridFsStorage({
    url: connectionString,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });




// Use the connect method, and the two handlers to try to connect to the DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((message) => {
        console.log('Connected successfully!');
        gfs = Grid(this.db, mongoose.mongo);
        gfs.collection('uploads');
    })
    .catch((error) => {
        console.log(`Error while connecting! ${error}`);
    });

// HBS Helper Method to select values from dropdown lists
const hbs = require('hbs');
const e = require('express');

const Recycle = require("./models/recycling");
const Compost = require("./models/compost");
const Garbage = require("./models/garbage");
const Hazardous = require("./models/hazardous");

// function name and helper function with parameters
hbs.registerHelper('createOption', (currentValue, selectedValue) => {
    // initialize selected property
    var selectedProperty = '';
    // if values are equal set selectedProperty accordingly
    if (currentValue == selectedValue) {
        selectedProperty = 'selected';
    }
    // return html code for this option element
    // return new hbs.SafeString('<option '+ selectedProperty +'>' + currentValue + '</option>');
    return new hbs.SafeString(`<option ${selectedProperty}>${currentValue}</option>`);
});

// helper function to format date values
hbs.registerHelper('toShortDate', (longDateValue) => {
    return new hbs.SafeString(longDateValue.toLocaleDateString('en-CA'));
});

// app.get('/upload', (req, res) => {
//
//     gfs.files.find().toArray((err, files) => {
//
//         if(!files || files.length === 0) {
//            res.render('index', {files: false});
//             }
//         else {
//                 // Files exist
//
//             files.map(file => {
//                 if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//                     file.isImage = true;
//                 }
//                 else {
//                     file.isImage = false;
//                 }
//             });
//             res.render('upload', {files: files});
//
//             }
//
//
//
// })});
//
// app.post('/upload', upload.single('file'), (req,res) => {
//     res.json({file: req.file, fileName: req.file.filename});
//
// })
// add reusable middleware function to inject it in our handlers below that need authorization
function IsLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

/*
        Recycling Database
 */


/* GET the Object being added to the Database - Recycle */
app.get('/recycling/add', IsLoggedIn, (req, res) => {

    res.render('recycling/add', { title: 'Add a New Object to the RePsychle Database!', user: req.user });

    gfs.files.find().toArray((err, files) => {



        files.map(file => {
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                file.isImage = true;
            }
            else {
                file.isImage = false;
            }
        });
        res.render('recycling/add', {files: files});



    })});

/* POST the Object being added to the Database - Recycle */
app.post('/recycling/add', IsLoggedIn,  upload.single('file'), (req, res, next) => {
    // use the Recycling module to save data to DB
    // call create method of the model
    // and map the fields with data from the request
    // callback function will return an error if any or a new Recycling object

    app.post('/recycling/add', upload.single('file'), (req, res) =>
    {

    })


    Recycle.create({
        objectName: req.body.objectName,
        objectDescription: req.body.objectDescription,
        objectEcoScore: req.body.objectEcoScore,
        objectDisposalMethod: req.body.objectDisposalMethod,
        objectLong: req.body.objectLong,
        objectLat: req.body.objectLat,
        profile_id: req.body.profile_id,
        file: req.file.filename
        // file: req.file.filename
    }, (err, recyclingObject) => {
        if (err) {
            console.log(err);
        }
        else {
            // We can show a successful message by redirecting them to index

            app.post('/recycling/add', upload.single('file'), (req, res) =>
            {
                /* res.json({file: req.file, fileName: req.file.filename});*/
            })
            res.redirect('/recycling');


        }
    });
});

/* GET the Object being edited on the Database - Recycle */
app.get('/recycling/edit/:_id', IsLoggedIn, (req, res, next) => {
    // Find the Recycling Object by ID
    // Find available courses
    // Pass them to the view
    Recycle.findById(req.params._id, (err, recycling) => {
        console.log(req.params._id);
        console.log(this.objectName);
        console.log(req.body.status);
        if (err) {
            console.log(err);
        }
        else {
            res.render('recycling/edit', {
                title: 'Edit:',
                recycling: recycling,
                user: req.user,
            });

        }
    });
});

/* POST the Object being edited on the Database - Recycle */
app.post('/recycling/edit/:_id', IsLoggedIn, (req, res,next) => {
    // find Recycling Object based on ID
    // try updating with form values
    // redirect to /recycling


    console.log(req.params._id);
    Recycle.findByIdAndUpdate(req.params._id , {
        _id: req.params._id,
        objectName: req.body.objectName,
        objectDescription: req.body.objectDescription,
        objectEcoScore: req.body.objectEcoScore,
        objectDisposalMethod: req.body.objectDisposalMethod,
        objectLat: req.body.objectLat,
        objectLong: req.body.objectLong,
        profile_id: req.body.profile_id,


    }, (err, Recycle) => {
        if (err) {
            console.log(err)
        }
        else {


            app.post('/recycling/edit/:_id', upload.single('file'), (req, res) =>
            {
                file: req.file.filename
            })



            res.redirect('/recycling');
        }
    });

});

/* GET the Object being added to the Database - Recycle */
app.get('/recycling/delete/:_id', IsLoggedIn, (req, res, next) => {
    // call remove method and pass id as a json object

    Recycle.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/recycling')
        }
    })
});

/* GET View based on ID of Object - Recycling */
app.get('/recycling/view/:_id', (req, res, next) => {
    // Find the Recycling Object by ID
    // Find available courses
    // Pass them to the view
    Recycle.findById(req.params._id, (err, recycling) => {
        console.log(req.params._id);
        console.log(this.objectName);

        console.log(req.body.status);
        if (err) {
            console.log(err);
        }
        else {

            res.render('recycling/view', {
                title: 'View: ',
                recycling: recycling,
                user: req.user,
            });


        }
    });
});


/*
        Compost Database
 */


/* GET the Object being added to the Database - Recycle */
app.get('/compost/add', IsLoggedIn, (req, res) => {

    res.render('compost/add', { title: 'Add a New Object to the RePsychle Database!', user: req.user });

    gfs.files.find().toArray((err, files) => {



        files.map(file => {
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                file.isImage = true;
            }
            else {
                file.isImage = false;
            }
        });
        res.render('recycling/add', {files: files});



    })});

/* POST the Object being added to the Database - Recycle */
app.post('/compost/add', IsLoggedIn,  upload.single('file'), (req, res, next) => {
    // use the Recycling module to save data to DB
    // call create method of the model
    // and map the fields with data from the request
    // callback function will return an error if any or a new Recycling object

    app.post('/compost/add', upload.single('file'), (req, res) =>
    {

    })


    Compost.create({
        objectName: req.body.objectName,
        objectDescription: req.body.objectDescription,
        objectEcoScore: req.body.objectEcoScore,
        objectDisposalMethod: req.body.objectDisposalMethod,
        objectLong: req.body.objectLong,
        objectLat: req.body.objectLat,
        profile_id: req.body.profile_id,
        file: req.file.filename
        // file: req.file.filename
    }, (err, recyclingObject) => {
        if (err) {
            console.log(err);
        }
        else {
            // We can show a successful message by redirecting them to index

            app.post('/compost/add', upload.single('file'), (req, res) =>
            {
                /* res.json({file: req.file, fileName: req.file.filename});*/
            })
            res.redirect('/compost');


        }
    });
});

/* GET the Object being edited on the Database - Recycle */
app.get('/compost/edit/:_id', IsLoggedIn, (req, res, next) => {
    // Find the Recycling Object by ID
    // Find available courses
    // Pass them to the view
    Compost.findById(req.params._id, (err, composting) => {
        console.log(req.params._id);
        console.log(this.objectName);
        console.log(req.body.status);
        if (err) {
            console.log(err);
        }
        else {
            res.render('recycling/edit', {
                title: 'Edit:',
                composting: composting,
                user: req.user,
            });

        }
    });
});

/* POST the Object being edited on the Database - Recycle */
app.post('/compost/edit/:_id', IsLoggedIn, (req, res,next) => {
    // find Recycling Object based on ID
    // try updating with form values
    // redirect to /recycling


    console.log(req.params._id);
    Compost.findByIdAndUpdate(req.params._id , {
        _id: req.params._id,
        objectName: req.body.objectName,
        objectDescription: req.body.objectDescription,
        objectEcoScore: req.body.objectEcoScore,
        objectDisposalMethod: req.body.objectDisposalMethod,
        objectLat: req.body.objectLat,
        objectLong: req.body.objectLong,
        profile_id: req.body.profile_id,


    }, (err, Compost) => {
        if (err) {
            console.log(err)
        }
        else {


            app.post('/compost/edit/:_id', upload.single('file'), (req, res) =>
            {
                file: req.file.filename
            })



            res.redirect('/compost');
        }
    });

});

/* GET the Object being added to the Database - Recycle */
app.get('/compost/delete/:_id', IsLoggedIn, (req, res, next) => {
    // call remove method and pass id as a json object
    Compost.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/compost')
        }
    })
});

/* GET View based on ID of Object - Recycling */
app.get('/compost/view/:_id', IsLoggedIn, (req, res, next) => {
    // Find the Recycling Object by ID
    // Find available courses
    // Pass them to the view
    Compost.findById(req.params._id, (err, composting) => {
        console.log(req.params._id);
        console.log(this.objectName);

        console.log(req.body.status);
        if (err) {
            console.log(err);
        }
        else {

            res.render('compost/view', {
                title: 'View: ',
                composting: composting,
                user: req.user,
            });


        }
    });
});






/*
        Image Upload - Multer
*/

/* GET the file being uploaded as an image - Stand Along */
app.get('/upload', upload.single('file'),  (req,res) => {
    res.render('upload');

})

/* Post the file being uploaded as an image - Stand Along */
app.post('/upload', upload.single('file'),  (req,res) => {
    res.json({file: req.file, fileName: req.file.filename});

})

/* GET File Upload Page */

app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {


        //Check for files

        if(!file || file.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        // Files exist
        return res.json(file);
    })
});

/* GET File Image Page */

app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {


        //Check for files

        if(!file || file.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        // Check if image is content type
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }

    })
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('500');
});

module.exports = app;
