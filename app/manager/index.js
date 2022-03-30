/**
 * Created by AyushK on 13/05/21.
 */

const Config = require("../../config")
const { lhtLog, structuredResponse, errorResponse } = require("lh-utilities/utilityMethods");
const { httpConstants, apiSuccessMessage, apiFailureMessage } = require("../common/constants");
const socketClient = require("socket.io-client");
const { HTTPService } = require("lh-utilities");
class Manger {

    async webSocketMonitor() {
        try {
            lhtLog("webSocketMonitor", "webSocketMonitor started", Config.IS_CONSOLE_LOG, "AyushK")
            let socket = socketClient(Config.WS_URL, {
                path: Config.SOCKET_URL_PATH,
                transports: ["websocket"],
                reconnection: true,
            });
            const response = await this.socketsTest(socket)
            return structuredResponse({ response: response }, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
        } catch (error) {
            throw errorResponse(error, error?.message || apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_CODES.FORBIDDEN)
        }
    }

    async socketsTest(socket) {
        let dataCounter = 0;
        await socket.on(Config.SOCKET_ACTION, (data, error) => {
            if(data)
            dataCounter++;
        });
        return new Promise((resolve) => {
            setTimeout(async () => {
                socket.disconnect();
                if (dataCounter > 0 ) {
                    lhtLog("Web Socket Monitoring", `Web Socket url ${Config.WS_URL} working`, {}, "kajalB", "INFO")
                    resolve(`${Config.WS_URL} Web Socket Working`);
                }
                else{    
                    lhtLog("Web Socket Monitoring", `Web Socket url ${Config.WS_URL} not working`, {}, "kajalB", "XDC_SOCKET_MONITORING")
                    await HTTPService.executeHTTPRequest("POST", Config.JENKINS_JOB_URL, {}, {})
                    resolve("Build Updated");
                }

            }, 5000);
        })
    }

}


module.exports = Manger

