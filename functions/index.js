const functions = require("firebase-functions");
const server = require("./server");
const bnd619857 = functions.runWith({memory: "2GB", timeoutSeconds: 60})
    .https
    .onRequest(server);

module.exports = {bnd619857};

//npm install --save express cors
// npm install --save us-baby-names