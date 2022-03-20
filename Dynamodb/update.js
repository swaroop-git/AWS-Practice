require('dotenv').config();
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAS7TZUBTH7KA3QJ7M", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

//updating books
function updateBook() {
    const params = {
      TableName: "Books",
      Item: {
        "Names": { S: "Harry Potter" },
        "Author": { S: "swaroop" },
        "Catagory":{S:"Fictional"}
      },
      ReturnConsumedCapacity: "TOTAL",
    };
  
    ddb.putItem(params, function(err) {
      if (err) {
        console.error("Unable to find book", err);
      } else {
        console.log('book is been updated');
      }
    });
};

updateBook();
