const { pool } = require('../utils/database');              //We define pool from ../utils/database

exports.getProgramsByCriteria = (req, res, next) => {
    
    res.render('programs_by_criteria.ejs', {
        pageTitle: "QUERY 1",
    })
}

/*From sumbit we come here, cause sumbit sends a post req*/
exports.postProgramsByCriteria = (req, res, next) => {
    const name = req.body.duration;

    console.log(name);
    res.render('programs_by_criteria.ejs', {
        pageTitle: "QUERY 1",
    })
}