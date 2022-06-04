const { pool } = require('../utils/database');              //We define pool from ../utils/database

exports.getOrgSame = (req, res, next) => {
    
    pool.getConnection((err, conn) => {
        if(err){
            console.log(err);
        }
        /*WE THE QUERYY*/
        conn.promise().query("select * from project_by_researchers")
        .then(([rows, fields]) => {
            res.render('orgs_same.ejs', {
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



