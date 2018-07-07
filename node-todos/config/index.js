var configValues = require("./config.json");

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.username}:${configValues.password}@ds229771.mlab.com:29771/node-todos`;
    }
}