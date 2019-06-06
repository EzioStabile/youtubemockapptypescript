import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', express.static('src'));

app.use('/dist', express.static('dist/src'));

app.use('/hello', (req, res) => {
    res.status(201).json([
        {name: "Video1", url: "https://www.youtube.com/watch?v=UnTQVlqmDQ0"}, 
        {name: "Video2", url: "https://www.youtube.com/watch?v=0afZj1G0BIE"},
        {name: "Video3", url: "https://www.youtube.com/watch?v=WBPrJSw7yQA"},
        {name: "Video4", url: "https://www.youtube.com/watch?v=IEf1KAcK6A8"},
        {name: "Video5", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4"}
    ]);
});

const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);

