var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var connection = require('./config');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// var list=require('./controllers/empList');
// var updateEmp=require('./controllers/empList');

// var Emplist=require('./controllers/get_empolyee');
// var Tasklist=require('./controllers/task_list');
// var authenticateController=require('./controllers/authenticate-controller');
// var registerController=require('./controllers/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
// app.post('/api/register',registerController.register);
// app.post('/api/login',authenticateController.authenticate);
// app.put('/api/update_emp',Emplist.UpdateEmpData);
// app.get('/api/list',list.listData);
// app.get('/api/task_list',Tasklist.TasklistData);
// app.get('/api/emp_data',Emplist.empData);
app.post('/api/post_task',Tasklist.addTask);



app.listen(8000);
