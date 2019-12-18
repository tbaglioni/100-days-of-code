var fs = require('fs');
fs.watch(
    "./watchdir",
    function(event, filename) {
        console.log("=========");
        console.log("event:", event);
        console.log("filename: ", filename);
    },
    check_interval = 500
);