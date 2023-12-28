// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../event.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit {
//   registeruserdata: { email: string, password: string } = { email: '', password: '' };
//   registeruser(){
//     console.log(this.registeruserdata)
//   }
//   ngOnInit(): void {

//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // Process form submission
    console.log('Form submitted:', this.registerForm.value);
  }
}
