const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

const jsonParser = bodyParser.json();

let sportList = [] 

app.post( '/sports/addSport/:sportId', ( req, res ) => {
    console.log( req.params );

    let id = req.params.id;
    let name = req.params.name;
    let num_players = req.params.num_players;

    if (!sport) {
        res.statusMessage = "Parameters do not match a sport."
        return res.status (409).end();
    }

    let check = true

    for( let i = 0; i < .length; i++) {
        if(sportList.id == id) {
            check = !check;
            break;
        }
    }

    if (check) {
        let newSport = {id, name, num_players};
        sportList.push(newSport);

        return res.status(201).json(newSport);
    
    else {
        res.statusMessage = "ID already belongs to another sport"
        return res.status (400).end();
    } 
}

module.exports = {
    
};
