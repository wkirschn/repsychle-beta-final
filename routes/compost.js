//
// @#GGGGGGGGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGPJ77?7?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G!7777!!!!77?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BBBBBGJ77777?GGP@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777JPP5J777!7B@@@@@@@@@@@@@@@@@@@@@@@@@@&BGBBBBB&P77777!?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G77775@@@@Y777!J@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBB#@@B?7777J&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777Y@@@#J777!P@@@@&BP5YYYPG#@@@@@@@&BGGPP5G@&&@@&####BB##BB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777?JJ?777!75@@@&P?7!?JJ?7!7J#@@@@@@#J!!!!!5@@@@@@@@@&BBBBBB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G777777!777JG&@@@&J!77?B##B577!7#@@@@@P777777?5@@@@@@@&@#BBBBBB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777YB?!7775&@@@G!777?????????7G@@@@&?!777?#@#&@@@@@5Y@@#GGGGP#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777Y@&P777!7P&@B7777Y#&&&&BB#&@@@@@@&J!7JB#B##B#@#J!7?????7?B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G!77!Y@@@#Y777!?G@B?!77?YYYJ77?5@@@@@@@@5JBBBBBBGB&J!7777!!!J#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @B????5@@@@@GJ????Y&&GY?7777?JYG&@@@@@@@@@#BBBBBBBB@&577??JJ5&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@&@@@@@&&&&&@@@@@@@@@@@@@@@@&&&&&&@@@GJ&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&B###BBBB###&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@#PPPP#@@@@@@@@@@&J???Y@@@@@@@@@@@@@@@@@@@@@
// @#5PPPP5555PPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5PPP#@@@@@@@@@@&?77!J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPG###BPPPP5G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPB@@@@&PPPPP&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPG@@@&BPPPPP&@&#BGGGGGBBBBBB#@@@@@@#BBBB#@@#BGGGGGB&#PPPP##BGGGB#&@@&?777J@@@&G5YJJJYPB@@@@@@@@
// @#PPPPPPPPPPPPPP#@#PPPPGGGPG&G5PPPB@@@@BPPP5G&BPPP5PPPPP##PPPPPPPPPPPPPG@&?777J@&577!?Y5J7!7?G@@@@@@
// @#PPPPPPPPPPGB#@@@G5PPP#&&&@@@BPPPPG@@BPPPPB@GPPPPB&&@&&@#PPPPG&@@&GPPP5#&?777Y&J!77?GBBB577!7B@@@@@
// @#PPPPG@@@@@@@@@@@&BGPP5PPPB&@@#PPPPGBPPPPB@&PPPPG@@@@@@@#PPPP#@@@@#PPPP#&?777YG!777??????JJJ?P@@@@@
// @#PPPPB@@@@@@@@@@@@&@&&BPPP5P@@@&PPPPPPPP#@@@PPPPP#@@@@@@#PPPP#@@@@#PPPP#&?777Y&7777J#@@@&GG#&@@@@@@
// @#5PP5G@@@@@@@@@@&P5PGBGPPPPG@@@@&PPPPPP#@@@@&GPPPPPGGPP&#5PP5#@@@@#5PP5#&?!7!J@#J7!!7JJJ?!!75@@@@@@
// @#GGGGB@@@@@@@@@@&BGPPPPPGG#@@@@@#PPPPP&@@@@@@@&BGGPPPPG##GGGG&@@@@#GGGG#@YJJJ5@@@B5J?????J5B@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// Project:      RePsychle - Beta
// Description:  A website that aims to allow users to create an account, upload database entries, CRUD accessibility to make better recycling decisions.
// Name:         Wyatt Kirschner
// Course:       COMP3006
// Date:         4/23/2022
//

// Import express and create a router
const express = require('express');
const router = express.Router();
// Add reference to the models

const disposalMethod = require('../models/recyclecourses');
const Compost = require('../models/compost');
const passport = require('passport');

// add reusable middleware function to inject it in our handlers below that need authorization
function IsLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

/* GET Index Page for Compost */

router.get('/', (req, res, next) => {
    // res.render('recycling/index', { title: 'recycling Tracker' });

    Compost.find((err, compost) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('recycling/index', { title: 'Compost Tracker', dataset: compost, user: req.user });
        }
    })
});


// Export this router module
module.exports = router;