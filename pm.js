import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use('/',express.static(__dirname+'/logoimg'));

app.set('views', __dirname + '/logoimg');
app.set('view engine', 'ejs');


// app.enable('trust proxy');



app.get("/", (req, res) => {
   res.sendFile(__dirname+'/1.html')
});
app.get("/ms", (req, res) => {
   res.sendFile(__dirname+'/ms.html')
});

app.get("/test", (req, res) => {
   res.sendFile(__dirname+'/test.html')
   console.log('site loaded')
});
app.get("/js", (req, res) => {
   res.sendFile(__dirname+'/1.js')
});
app.get("/js1", (req, res) => {
   res.sendFile(__dirname+'/1o1.js')
});
app.get("/css", (req, res) => {
   res.sendFile(__dirname+'/1.css')
});
app.get("/msjs", (req, res) => {
   res.sendFile(__dirname+'/ms.js')
});







app.listen(process.env.PORT || 8000, () => {
   console.log(`Server is running`);
});
















app.get("/app", (req, res) => {

   res.sendFile(__dirname+'/apk.apk')
});