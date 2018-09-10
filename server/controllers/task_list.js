var connection = require('./../config');

module.exports.TasklistData=function(req,res){
  connection.query('select * from   emp_task', (err,result) => {
    if(err) throw err;
    console.log("hoo")
    console.log(result)
    res.end(JSON.stringify(result));
    
    // res.render('viewlist',{result});
    // console.log('inside viewlist')
  })

}
module.exports.addTask=function(req,res){
    var today = new Date();
    var users={
        "task_name":req.body.task_name,
        "task_details":req.body.task_details,
        "task_time":req.body.task_time,
        "status":req.body.status,
        "created_at":today,
        
    }
    connection.query('INSERT INTO emp_task SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            fields:fields,
            message:'user task insert sucessfully'
        })
      }
    });
}



// -- phpMyAdmin SQL Dump
// -- version 4.5.4.1deb2ubuntu2
// -- http://www.phpmyadmin.net
// --
// -- Host: localhost
// -- Generation Time: Sep 10, 2018 at 11:56 PM
// -- Server version: 5.7.22-0ubuntu0.16.04.1
// -- PHP Version: 7.0.30-0ubuntu0.16.04.1

// SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
// SET time_zone = "+00:00";


// /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
// /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
// /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
// /*!40101 SET NAMES utf8mb4 */;

// --
// -- Database: `EmployeeMangement`
// --

// -- --------------------------------------------------------

// --
// -- Table structure for table `emp_task`
// --

// CREATE TABLE `emp_task` (
//   `task_id` int(222) NOT NULL,
//   `task_name` varchar(222) NOT NULL,
//   `task_details` varchar(222) NOT NULL,
//   `task_time` varchar(222) NOT NULL,
//   `status` varchar(222) NOT NULL,
//   `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

// --
// -- Dumping data for table `emp_task`
// --

// INSERT INTO `emp_task` (`task_id`, `task_name`, `task_details`, `task_time`, `status`, `created_at`) VALUES
// (1, 'my task to aman', 'hello i amn task', '5h', 'pending', '2018-09-10 17:46:16'),
// (2, 'dccj', 'dcdcdcd', '7h', 'done', '2018-09-10 17:55:59'),
// (3, 'dccj', 'dcdcdcd', '7h', 'done', '2018-09-10 18:10:36'),
// (4, 'dccj', 'dcdcdcd', '7h', 'done', '2018-09-10 18:22:47'),
// (5, 'xsxx', 'sxsx', 'sxsx', 'xsx', '2018-09-10 18:25:19');

// --
// -- Indexes for dumped tables
// --

// --
// -- Indexes for table `emp_task`
// --
// ALTER TABLE `emp_task`
//   ADD PRIMARY KEY (`task_id`);

// --
// -- AUTO_INCREMENT for dumped tables
// --

// --
// -- AUTO_INCREMENT for table `emp_task`
// --
// ALTER TABLE `emp_task`
//   MODIFY `task_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
// /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
// /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
// /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;