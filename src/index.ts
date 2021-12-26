import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
//анализировать приложение/json
app.use(bodyParser.json({limit: "50mb"}));
//анализировать приложение/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: "50mb", extended: false}));

//log middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Time', new Date().toString());
    console.log(req.method, req.url, 'params:', req.params);
    console.log('query:', req.query);
    console.log('body:', req.body);
    console.log('cookies:', req.cookies);
    next();
});
///////////////////////////
const state = {
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
}
const someRouter = express.Router();
someRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({z: req.query, count: state})
});
someRouter.get('/y', (req: Request, res: Response) => {
    res.status(200).json({z: 112})
});

app.use('/x', someRouter);

app.listen(process.env.PORT, () => {
    console.log('Neko-back listening on port: ' + process.env.PORT);
});
/////////////////////////////////////
// ссылка на heroku
// https://shrouded-chamber-55555.herokuapp.com/
/////////////////////////////////////