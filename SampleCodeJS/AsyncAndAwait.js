var fs = require('fs');

function A(){
    return new Promise(function (resolve, reject) {
        fs.readFile('ReadMe.txt','utf8',function (err,data) {
            if (!err) {
                resolve(console.log(data));  
            }else {
                reject(console.log(err));
            }
        });
    });
    
};

async function main() {

    console.log('Reading');
    const result = await A();
    console.log(result);
    // console.log("hehe");
    
}

main();
console.log('hi');




