"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const entity_1 = require("./entity");
exports.ARTICLES_GET = "articles.get";
exports.ARTICLES_FIND = "articles.find";
exports.ARTICLES_CREATE = "articles.create";
exports.ARTICLES_UPDATE = "articles.update";
exports.ARTICLES_REMOVE = "articles.remove";
class Articles {
    constructor(store) {
        this.store = store;
        this.events = new events_1.EventEmitter();
    }
    create(article) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.put(article.id, article);
            this.events.emit(exports.ARTICLES_CREATE, article);
            return yield this.store.get(article.id);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.store.all();
            this.events.emit(exports.ARTICLES_FIND, articles);
            return articles;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.store.get(id);
            this.events.emit(exports.ARTICLES_GET, article);
            return article;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return new entity_1.default();
        });
    }
    on(channel, listener) {
        this.events.on(channel, listener);
    }
    remove(article) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.remove(article.id);
            this.events.emit(exports.ARTICLES_REMOVE, article);
        });
    }
    update(article) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.put(article.id, article);
            this.events.emit(exports.ARTICLES_UPDATE, article);
            return yield this.store.get(article.id);
        });
    }
}
exports.default = Articles;
