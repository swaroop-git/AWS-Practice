'use strict';


const dynamoDb = require("../config/dynamodb");
const { sendResponse } = require("../functions/index");


module.exports.listsPosts= async event => {
  try{
    const body = JSON.parse(event.body);
    const { Names, Author, Catagory } = body
    const params = {
      TableName: process.env.Dynamo_TABLE_NAME,
      Key: {
        Names
      },
      ExpressionAttributeValues: {
        ":Names": Names,
        ":Author": Author,
        ":Catagory": Catagory,
      },
      UpdateExpression:
      "SET Names= :Names, Author = :Author, Ctagory = :Catagory",
      ReturnValues: "ALL_NEW"
    };

    const data = await dynamoDb.update(params).promise();
    if (data.Attributes) {
      return sendResponse(200, data.Attributes);
    } else {
      return sendResponse(404, { message: "Updated post data not found" });
    }
  } catch (e) {
    return sendResponse(500, { message: "Could not update this post" });
  }
};