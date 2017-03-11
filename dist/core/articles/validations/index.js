"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noBody = (article) => article.body.length === 0;
exports.noTitle = (article) => article.title.length === 0;
exports.isEmpty = (article) => exports.noTitle(article) && exports.noBody(article);
