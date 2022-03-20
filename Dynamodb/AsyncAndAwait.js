require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
     "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAS7TZUBTH7KA3QJ7M", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);
        
        
        
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});




function A(){
    return new Promise(function (resolve, reject) {
        var params = {
            TableName: 'Books',
            Key: {
              'Names': {S: 'Harry Potter'}
              
            },
        }; 

        
        // Call DynamoDB to read the item from the table
        ddb.getItem(params, function(err, data) {
          if (err) {
            reject(console.log("Error", err));
          } else {
            resolve(console.log("Success", data.Item));
          }
        });
        
    });
    
};

async function main() {

    console.log('Reading');
    const result = await A();
    console.log(result);
    
}

main();
console.log('hi');