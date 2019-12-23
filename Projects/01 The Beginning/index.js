var client = require('ftp');
var fs = require('fs');
var fileActions = [];
var credentialsPath = './credentials.json';
var parsedCredentials = JSON.parse(fs.readFileSync(credentialsPath, 'UTF-8'));
var login = parsedCredentials.user.login;
var password = parsedCredentials.user.password;
var hostAddress = parsedCredentials.server.ipAddress;

fs.watch(
    "./watchdir",
    function(event, filename) {
        fileActions.push([event, filename]);
    },
    check_interval = 2000
);

setInterval(function(){
    if(fileActions.length > 0){
        var c = new client();
        c.on('ready', function(){
            if(fileActions.length > 0){  // Hvis fileActions.length er større en 0
                // Det her er et loop
                // den starter med at tælleren (i) er lig 0
                // den fortsætter indtil tælleren ikke er mindre end fileactions.length (antallet af items i arrayet)
                // den sætter tælleren op med 1 for hvert gennemløb (i++)
                for(var i = 0; i < fileActions.length; i++){
                    // hvad sker der her ?
                    // Den uploader til FTP serveren

                    c.put(fileActions[i][1], "upload-"+fileActions[i][1],  function(err){
                        if(err){
                            throw err;
                        }
                        c.end();
                    });
                }
                // hvad sker der her ?
                // Den stopper loopet fordi fileActions = Et tomt Array
                fileActions = [];
            }
        });




        c.connect({
            host: hostAddress,
            user: login,
            password: password
        });
                // Dette skulle gerne tømme watchdir directory. Ved der er fejl og jeg ikke fatter en meter!
                const fs = require('fs');
                fs.unlink('/watchdir/*.*', (err) => {
                if (err) throw err;
                console.log('successfully deleted /watchdir/*.*');
});
              

        // connect til FTP ved at bruge parsed credentials - check
        // loop igennem fileActions - check
        // Der hvor event === rename => upload via FTP - check
        // end of loop sæt fileActions = [] - check
    }
}, 5000);

// https://www.regneregler.dk/regnearternes-raekkefoelge