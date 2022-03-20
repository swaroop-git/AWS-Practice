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

// var params = {
//   TableName: 'Books',
//   Key: {
//     'Names': {S: 'Harry Potter'}
    
//   },
  
// };

// // Call DynamoDB to read the item from the table
// ddb.getItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Item);
//   }
// });

function getAllBooks() {
  const params = {
    TableName: "Books",
  };

  ddb.scan(params, function(err, data) {
    if (err) {
      console.error("Unable to find books", err);
    } else {
      console.log(`Found ${data.Count} books`);
      console.log(data.Items);
    }
  });
};

getAllBooks();

// router.get('/books', function getallbook(req,res){
//   const params = {
//     TableName: "Books",
//   };
    
//   ddb.find(req.query).then(params,(books) =>{
//       res.json(books)
//   }).catch((err) => {
//       if(err){
//           throw err
//       }
//   })
//  // res.send("hello world")
// });


const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'testBucket', // pass your bucket name
         Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

