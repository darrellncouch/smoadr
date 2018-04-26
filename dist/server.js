"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.Port || 8000;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server listening on ${port}`);
});
//# sourceMappingURL=server.js.map