// //Deleting the file(Synchronous Operation)
// var fs = require('fs');

// fs.unlinkSync('WriteMe.txt');




// //Creating and removing Directories(Synchronous Operation)
// var fs = require('fs');

// fs.mkdirSync('Stuff');
// //fs.rmdirSync('stuff');





/****************************************************************************************************************** */


// //Creating and removing Directories(Asynchronous Operation)
// var fs = require('fs');

// fs.mkdir('stuff', function () {
//     fs.readFile('ReadMe.txt', 'utf-8', function (err, data) {
//         fs.writeFile('./stuff/WriteMe.txt', data, function (err, result) {
//             if(err) console.log('error',data);
            
//         });
        
//     })
    
// })







// var fs = require('fs');

// fs.unlink('./stuff/WriteMe.txt',function () {

//     fs.rmdir('stuff');
// })







