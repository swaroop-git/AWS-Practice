const request = require("supertest");
const { expect } = require('chai');
const AWSMock = require('../../Dynamodb/node_modules/aws-sdk-mockock');
const app = require('./app')

// var read = require("../read")


//test case for reading file

describe("User Service Unit Tests", function () {
  describe("Save User functionality", function () {
    it("should successfully add a user if the number of users in the DB with the same profiled is zero", async function () {
      



    });
    it("should throw an error if the number of users with the same profileId is not zero", async function () {
    });
  });
});

