"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
//анализировать приложение/json
app.use(body_parser_1.default.json({ limit: "50mb" }));
//анализировать приложение/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: false }));
//log middleware
app.use(function (req, res, next) {
    console.log('Time', new Date().toString());
    console.log(req.method, req.url, 'params:', req.params);
    console.log('query:', req.query);
    console.log('body:', req.body);
    console.log('cookies:', req.cookies);
    next();
});
///////////////////////////
var fakeState = {
    elementsForBasket: [],
    elements: [
        {
            id: 'Сервизы столовые',
            items: [
                {
                    "id": "e859e78c-1309-40fd-92a0-efa37b9cd4ea",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 4200,
                        "priceFormatted": "$42.00"
                    },
                    "pricePromotial": {
                        "amount": 2600,
                        "priceFormatted": "$26.00"
                    },
                    "decimal": 2,
                    "image": 'DinnerSets'
                },
            ]
        }
    ]
};
var someRouter = express_1.default.Router();
someRouter.get('/', function (req, res) {
    res.status(200).json({ z: req.query, count: fakeState });
});
someRouter.get('/y', function (req, res) {
    res.status(200).json({ z: 2 });
});
app.use('/x', someRouter);
app.listen(process.env.PORT, function () {
    console.log('Neko-back listening on port: ' + process.env.PORT);
});
//# sourceMappingURL=index.js.map