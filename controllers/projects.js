const { pool } = require('../utils/database');              //We define pool from ../utils/database

exports.getPorjectsByResearcher = (req, res, next) => {
    pool.getConnection((err, conn) => {
        if(err){
            console.log(err);
        }
        // a promise can succeed or fail.
        conn.promise().query("select count(*) as cnt,Researcher.researcher_id as researcher_id , Researcher.researcher_name as researcher_name, Researcher.researcher_surname as researcher_surname " +
        "from  Researcher join WorksAtProject WAP on Researcher.researcher_id = WAP.researcher_id " +
        "group by Researcher.researcher_id")
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
        conn.promise().query("select count(*) as cnt, executive.executive_id as executive_id, executive.executive_name as executive_name "+
        "from executive inner join Project P on executive.executive_id = P.executive_id "+
        "group by executive.executive_id")
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