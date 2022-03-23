'use strict';
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const uuid = require('uuid/v4');

const postsTable = process.env.POSTS_TABLE;
// Create a response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
}
// Update a post
module.exports.updatePost = (event, context, callback) => {
    const id = event.pathParameters.id;
    const reqBody = JSON.parse(event.body);
    const { body, title } = reqBody;
  
    const params = {
      Key: {
        id: id
      },
      TableName: postsTable,
      ConditionExpression: 'attribute_exists(id)',
      UpdateExpression: 'SET title = :title, body = :body',
      ExpressionAttributeValues: {
        ':title': title,
        ':body': body
      },
      ReturnValues: 'ALL_NEW'
    };
    console.log('Updating');
  
    return db
      .update(params)
      .promise()
      .then((res) => {
        console.log(res);
        callback(null, response(200, res.Attributes));
      })
      .catch((err) => callback(null, response(err.statusCode, err)));
  };