/**
 * Created by AyushK on 13/05/21.
 */

const BLManager = require('./app/manager')
const UtilMethods = require("lh-utilities/utilityMethods");

exports.webSocketMonitor = async (event, context, callback) => {
          
    const [error, response] = await UtilMethods.parseResponse(new BLManager().webSocketMonitor());
    if(error )
        return error;
    return response;    
  
 
    // callback(error, response);
};
// this.webSocketMonitor()