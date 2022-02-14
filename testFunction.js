const UtilMethods = require("lh-utilities/utilityMethods");
const BLManager = require("./app/manager");
const {lhtLog} = require("lh-utilities/utilityMethods");

// Update requestData as per the testing requirement-
const requestData = {
    email: 'ayushk@leewayhertz.com',
    password: 'Password@123'
}

async function testMethod() {
    const [error, response] = await UtilMethods.parseResponse(new BLManager().cloudFunction(requestData));
    lhtLog('testMethod', 'Success', response);
    lhtLog('testMethod', 'Error', error);
}

testMethod();
