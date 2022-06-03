const { pool } = require('../utils/database');              //We define pool from ../utils/database

exports.getPorjectsByResearcher = (req, res, next) => {
    pool.getConnection((err, conn) => {
        if(err){
            console.log(err);
        }
        // a promise can succeed or fail.
        conn.promise().query("select * from project_by_researchers")
        .then(([rows, fields]) => {
            res.render('researchers.ejs', {
                pageTitle: "Researchers Page",
                query_res: rows,
                //messages: messages
            })
            //resolve();
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    });


}


exports.getPorjectsByExecutive = (req, res, next) => {
    pool.getConnection((err, conn) => {
        if(err){
            console.log(err);
        }
        // a promise can succeed or fail.
        conn.promise().query("select * from projects_by_exec")
        .then(([rows, fields]) => {
            res.render('executives.ejs', {
                pageTitle: "Executives Page",
                query_res: rows,
                //messages: messages
            })
            //resolve();
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    });
}
    
exports.getResearchers = (req, res, next) => {
    pool.getConnection((err, conn) => {
        if(err){
            console.log(err);
        }
        conn.promise().query(`select  w.researcher_id , r.researcher_name `+
        `from worksatproject w join researcher r on r.researcher_id = w.researcher_id `+
        `where w.project_id = ${req.params.project_id}`)
        .then(([rows, fields]) => {
            res.render('project_researchers.ejs', {
                pageTitle: "Researchers of the Project",
                query_res: rows,
                //messages: messages
            })
            //resolve();
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    
    
    });
 }