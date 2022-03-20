'use strict';

const dynamoDb = require("../config/dynamodb");
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const { sendResponse } = require("../handler");





module.exports.createPost = async event => {
 const body = JSON.parse(event.body);
 try{
    const { Names, Author, Catagory } = body;
    const TableName = process.env.DYNAMO_TABLE_NAME;
    var params = {
     TableName,
     Item: {
       Names,
       Author,
       Catagory
      }
  
    }
    await dynamoDb.put(params).promise();
    return sendResponse(200, { message: 'Post created successfully' })
  } catch (e) {
    return sendResponse(500, { message: 'Could not create the post' });
  }
 
};