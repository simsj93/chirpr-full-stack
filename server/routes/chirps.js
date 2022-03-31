import * as express from "express"
const router = express.Router();
import db from '../db';

// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API


// get the chirp

router.get('/:id?', async (req, res) => {
    const id = req.params.id;

    try  {
        if (id) {
            res.json(await db.Chirps.one(id));
        } else {
        res.json(await db.Chirps.all()); 
        }
    } catch (e) {
        console.log(e);
        res.send(500); 
    }
});

// make the chirp 

router.post('/', async (req, res) => {
    const body = req.body; 

    try {
        res.json(await db.Chirps.post(body.userid, body.content, body.location));
    } catch (e) {
        console.log(e);
        res.send(e);
    }
    
}); 

// get rid of the chirp

router.delete('/:id', async (req,res) => {
    const id = req.params.id; 
    try { res.json(await db.Chirps.del(id));
        console.log('chirp deleted');
    } catch (e) {
        res.send(e); 
    }
});

// change the chirp 

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const content = req.body; 

    try { res.json (await db.Chirps.update(content, id));
        console.log('chirp updated');
    } catch (e) {
        res.send(e);
    }
});



export default router;