"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, DB_PORT, ENV } = process.env;
let options;
if (ENV === "test") {
    options = {
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
        port: Number(DB_PORT)
    };
}
if (ENV === "dev") {
    options = {
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
        port: Number(DB_PORT)
    };
}
const client = new pg_1.Pool(options);
exports.default = client;
