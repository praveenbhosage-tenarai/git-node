const express = require('express');
const port = 8000;
const app = express();
// app.get('/', (request, response)=> response.send('hello from skillsoft'));
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
router.get('/', (request, response)=> response.send('hello fromskillsoft'));
router.post('/addemployee', (request, response) => {
let empName = request.body.empName;
let empPass = request.body.empPass;
response.end(`POST success, you sent ${empName} and ${empPass},
thanks!`);
});
app.listen(port, function(){
console.log("Listening " + port);
});