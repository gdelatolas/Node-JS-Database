const express = require("express")
const server = express()                    //By calling express func we create an app wich allows us
                                            //to set up our entire server

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
require('custom-env').env('localhost');     // Use as enviroment file the .env.localhost

// import routes
const projects = require('./routes/projects');
const programs = require('./routes/programs');

server.set('view engine', 'ejs'); 
server.use(express.static('public'));       // static files are in public (CSS,html)
                                            // CSS for the layout of the html




//GET https://localhost:3000/
server.get("/" , (req,res) => {
    
    res.render ("index", { pageTitle: 'Home' })
})              

server.use('/projects',projects)            // for all the requests (to /projects) use projects  

server.use('/programs',programs)            // for all the requests (to /projects) use projects  


server.use(function (req,res,next){
	res.render ("404", { pageTitle: '404' }) // in the parameter page title at the 404.ejs put 404
});

server.listen(3000)                            //To make our server actually run (3000 = port)


