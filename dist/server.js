"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
const standalone_1 = require("@trpc/server/adapters/standalone");
const router_1 = require("./trpc/router");
function createServer() {
    return (0, standalone_1.createHTTPServer)({
        router: router_1.appRouter,
        createContext: () => ({}),
    });
}
