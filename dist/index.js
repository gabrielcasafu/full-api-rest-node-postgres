"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_js_1 = require("./config.js");
app_1.default.listen(config_js_1.LISTEN_PORT);
console.log("server running in port", config_js_1.LISTEN_PORT);
