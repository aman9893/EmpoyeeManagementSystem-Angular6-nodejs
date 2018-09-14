import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../../service/service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { AddEmpolyeeComponent } from '../../admin/add-empolyee/add-empolyee.component';

@Component({
  selector: 'app-emplist-admim',
  templateUrl: './emplist-admim.component.html',
  styleUrls: ['./emplist-admim.component.css']
})
export class EmplistAdmimComponent implements OnInit {

  
  lossReasonData;
  showLoadingStatus = true;
  emplist;
  inOutStatus;

  color = 'primary';
  checked = false;
  disabled = false;

  device: boolean = true;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    this.getEmplist();
  }

  getEmplist(): void {
    this.dataService.getEmpdata()
      .subscribe(
      data => this.getEmpdata(data),
      error => this.getEmpdataerror(error)
      )
  }


  getEmpdata(data) {
    console.log(data)
    this.emplist = data
  }
  getEmpdataerror(error) {
    console.log("error")
  }

  createEmpolyee(): void {
    let dialogRef = this.dialog.open(AddEmpolyeeComponent, {
      width: '500px',
      height: 'auto',
      data: '',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // if (typeof result === 'object') {
      //   if (result.status === true) {
      //     var lastInsertedData = result.result[0];
      //     console.log(lastInsertedData)
      //     console.log(this.lossReasonData)
      //     this.lossReasonData.push(lastInsertedData);
      //     console.log(this.lossReasonData)
      //     // let message = "contact Type Data Created Succesfully."
      //     this.openSnackBar(result.message, 'Dissmiss')
      //   }
      // }
    });
  }

}
