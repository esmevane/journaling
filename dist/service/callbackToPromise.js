"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (asyncFunction) => (...params) => new Promise((resolve, reject) => asyncFunction(...params, (error, result) => {
    if (error)
        reject(error);
    resolve(result);
}));
