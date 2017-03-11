"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const ArticleValidations = require("../validations");
class Article {
    constructor(attributes = {}) {
        this.defaults = {
            id: uuid.v4(),
            title: "",
            body: ""
        };
        this.attributes = Object.assign({}, this.defaults, attributes);
    }
    get body() { return this.attributes.body; }
    get id() { return this.attributes.id; }
    get title() { return this.attributes.title; }
    isEmpty() {
        return ArticleValidations.isEmpty(this);
    }
}
exports.default = Article;
