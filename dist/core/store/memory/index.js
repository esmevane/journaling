"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory = {};
class Memory {
    all() {
        return Object.keys(memory).map(key => memory[key]);
    }
    get(key) {
        return memory[key];
    }
    flush() {
        Object.keys(memory).map(key => this.remove(key));
    }
    put(key, value) {
        memory[key] = value;
    }
    remove(key) {
        delete memory[key];
    }
}
exports.default = Memory;
