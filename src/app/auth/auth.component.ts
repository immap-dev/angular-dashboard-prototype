import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	title:string = '';
	 authType: String = '';

	loginForm: FormGroup;
    loginFormErrors: any;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,) {

        this.loginFormErrors = {
            email   : {},
            password: {}
        }; }

  ngOnInit() {

  	 this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

  	this.route.url.subscribe(data =>{
  		this.authType = data[data.length-1].path;
  		console.log(this.authType);
  		this.title = (this.authType === 'login') ? 'Log In' : 'Sign Up';

  		if(this.authType === 'register'){
  			this.loginForm.addControl('username', new FormControl())
  		}
  	})

  	 

  	  this.loginForm.valueChanges.subscribe(()=>{
  	  	this.onLoginValueChanged();
  	  })
  }

  onLoginValueChanged(){

  	for(const field in this.loginFormErrors){
  		if(!this.loginFormErrors.hasOwnProperty(field)){

  			continue;

  		}

  		this.loginFormErrors[field] ={};

  		const control = this.loginForm.get(field);

  		if( control && control.dirty && !control.valid){
  			this.loginFormErrors[field] = control.errors;
  		}
  	}

  }


  onSubmit(){
  	console.log(this.loginForm.value);
  }

}
