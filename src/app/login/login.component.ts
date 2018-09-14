import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../service/service';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from '../authservice';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
  private snackBar: MatSnackBar, public router: Router, private auth: AuthService) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({

      email: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  getError() {
    return ' *This is required feild';
  }
  cancel(): void {
    this.loginForm.reset();
    this.router.navigate(['/dashbord']);
    alert()
  }

  onSubmit() {
    this.router.navigate(['/dashbord']);

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.dataService.loginData(this.loginForm.value).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      );
    }
      this.loginForm.reset();
      this.router.navigate(['/dashbord']);
  }

  closeDialog(data) {
    this.router.navigate(['dashbord']);
    console.log(data);
    if (data.status === true) {
      this.openSnackBar(data.message, 'Dissmiss');
          //  this.authServiceService.setSecureToken(data.email);
           this.auth.sendToken(data.email);
        //  this.myRoute.navigate(["home"]);
          this.router.navigate(['/dashboard']);
        }
      }
   }
