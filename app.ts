
import * as express from 'express';

var app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Coucou my first api");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});