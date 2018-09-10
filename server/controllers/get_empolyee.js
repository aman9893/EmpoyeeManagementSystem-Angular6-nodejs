
var connection = require('./../config');

module.exports.empData=function(req,res){
  connection.query('select * from emp_table', (err,result) => {
    if(err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}

//   module.exports.UpdateEmpData=function(req,res){

//     let sql = `UPDATE emp_table SET emp_status = ? WHERE id = ?`;

//     var data={
//       "emp_status":req.body.emp_status,
//     }
//     connection.query(sql, data, (err,result) => {
  
//       if (error){
//         return console.error(error.message);
//       }

//       if(err) throw err;
//       else{
//         console.log(result)
//         console.log('Rows affected:', results.affectedRows);
//       }
  
//     })
//   }
// }

module.exports.UpdateEmpData=function(req,res){
  console.log("hii")
  console.log(req.body)

  let emp_id = req.body.emp_id
  console.log(emp_id)

  var data={ 
    "emp_status":req.body.emp_status,
  }
  
  console.log(data)
    connection.query('UPDATE emp_table SET ? WHERE emp_id = ?',[data , emp_id ] , function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'employee status update sucessfully'
        })
      }
    });
}
