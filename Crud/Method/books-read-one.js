'use strict';


const dynamoDb = require("../config/dynamodb");
const { sendResponse } = require("../functions/index");


module.exports.listsPosts= async event => {
  try{
    const params = {
      TableName: process.env.Dynamo_TABLE_NAME,
    }
    const posts = await dynamoDb.scan(params).promise();
    return sendResponse(200, { items: posts.Items });
  }catch (e) {
    return sendResponse(500, { message: "Could not get the posts list" });
  }
  
};