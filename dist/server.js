"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const mango_routes_1 = __importDefault(require("./modules/mango/mango.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(user_routes_1.default);
app.use(mango_routes_1.default);
app.listen(config_1.default.PORT, () => {
    console.log(`Mango server is running on port ${config_1.default.PORT}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to the Mango server!');
});
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.DATABASE_URL);
            console.log('Connected to MongoDB successfully');
        }
        catch (error) {
            console.error('Error starting the server:', error);
        }
    });
}
server();
