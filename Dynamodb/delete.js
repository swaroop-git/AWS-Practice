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

var params = {
  TableName: 'Books',
  Key: {
    'Names': {S: '2 state'}
  }
};

// Call DynamoDB to delete the item from the table
ddb.deleteItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Book is been deleted", data);
  }
});
