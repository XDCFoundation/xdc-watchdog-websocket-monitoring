# xdc-watchdog-websocket-monitoring
xdc-watchdog-websocket-monitoring
# XDC Watchdog WebSocket Monitoring #

### Usage ###

This Cloud function basically Monitor the Websocket  -
* Post Slack Massage if WebSocketis not working 
* Create a jenkins build for the given job

### Steps for local setup ###

* Clone the repository in your local system
* Run `npm install` : To install the dependencies
* Call WebSocket Monitor Function in testFunction.js file 
* Run `node testFunction.js` : It will start your function 
* Dependencies : Defined under `package.json`


### Deployment instructions ### 

* Create a Lambda function 
* Deploy the code in Lambda 
* Update environment veriables 
* Create a event brige rule for the lambda to run it at required intervels     

### About env files ###

This folder is having different type of variable like WebSocket url, Slack url, Jenkin job url etc.
* **test** : it have all variable which is use for testing purpose.
* **local** : it have all variable which is use for local system.
* **development** : it have all variable which is use in development environment.
* **production** : it have all variable which is use for production environment.


