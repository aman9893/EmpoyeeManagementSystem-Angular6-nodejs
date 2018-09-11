import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from'../service/service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, private dataService: DataService,
  ) { }

  taskForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.taskForm = this.formBuilder.group({
       task_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      task_details: new FormControl(),
      task_time: new FormControl(),
      status: new FormControl()
    });
  }

  getError() {
    return ' *This is required feild';
  }
  cancel(): void {
    this.taskForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {

    if (this.taskForm.valid) {
      console.log(this.taskForm.value)
      this.dataService.postTask(this.taskForm.value).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    
    }
  }

  closeDialog(data) {
    this.dialogRef.close(data);
   
  }
}
