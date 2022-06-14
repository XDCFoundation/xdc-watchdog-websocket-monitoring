const UtilMethods = require("lh-utilities/utilityMethods");
const BLManager = require("./app/manager");
const {lhtLog} = require("lh-utilities/utilityMethods");


async function testMethod() {
    const [error, response] = await UtilMethods.parseResponse(new BLManager().webSocketMonitor());
    lhtLog('testMethod', 'Success', response);
    lhtLog('testMethod', 'Error', error);
}

testMethod();
