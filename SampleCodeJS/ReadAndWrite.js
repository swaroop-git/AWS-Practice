// Read file (Synchronous Operation)
var fs = require('fs');

var ReadMe = fs.readFileSync('ReadMe.txt', 'utf-8');  
console.log(ReadMe);





// //Write file (Synchronous Operation)
// var fs = require('fs');

// var ReadMe = fs.readFileSync('ReadMe.txt', 'utf-8');
// fs.writeFileSync('WriteMe.txt', ReadMe);





//******************************************************************************************************************************** */





// //Read File (Asynchronous Operation) // it will not block the code 
// var fs = require('fs');

// fs.readFile('ReadMe.txt', 'utf-8', function (err, data) {

//     console.log(data);
    
    
// });

// //console.log("Test");






// //Write File (Asynchronous Operation)
// var fs = require('fs');

//     fs.readFile('ReadMe.txt', 'utf-8', function (err, data) {
//         fs.writeFile('WriteMe.txt', data, function (err, result) {
//             if(err) console.log('error',data);
            
//         });
        
//     })


