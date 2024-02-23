console.clear();
const { spawn } = require("child_process");
const express = require("express");
const app = express();
const logger = require("./Kushal-C.js");
const path = require('path');
const PORT = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/website/Kushal.html'));
});
console.clear();
function startBot(message) {
    (message) ? logger(message, "starting") : "";
  const Kushal = "Starting messenger bot...";
  app.listen(logger.loader(Kushal, "start"));
  logger.loader(`Bot is running on port ${PORT}`, "server");
  logger.loader("Bot cache deleting ...", "Kushal");
    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Kushal-B.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
  
  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot();
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("an error occurred : " + JSON.stringify(error), "error");
  });
};
startBot();