'use strict';

const AWS = require('aws-sdk');
const { sendResponse } = require("../handler");
const dynamoDb = require("../config/dynamodb");

module.exports.deletePost = async event => {
  try{
    const body = JSON.parse(event.body);
    const {Names} = body;
    const params = {
    TableName : process.env.DYNAMO_TABLE_NAME,
    Key: {
      Names
    }
  };await dynamoDb.delete(params).promise();
  return sendResponse(200, { message: "Post deleted successfully" });
 } catch (e) {
  return sendResponse(500, { message: "Could not delete the post" });
 }
  
  
  

  
};