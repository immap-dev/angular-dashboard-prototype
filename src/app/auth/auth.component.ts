import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl, FormArray} from '@angular/forms';
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
  alias: any= [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,) {

        this.loginFormErrors = {
            email   : {},
            password: {}
        }; }

  ngOnInit() {

  	 this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            alias: this.formBuilder.array([ this.createItem() ])
        });

  	this.route.url.subscribe(data =>{
  		this.authType = data[data.length-1].path;
  		console.log(this.authType);
  		this.title = (this.authType === 'login') ? 'Log In' : 'Sign Up';

  		if(this.authType === 'register'){
  			this.loginForm.addControl('username', new FormControl());
        this.loginForm.addControl('firstname', new FormControl());
        this.loginForm.addControl('lastname', new FormControl());
        // this.loginForm.addControl('coba', this.formBuilder.array([this.createItem()]),);
  		}
  	})



  	 

  	  this.loginForm.valueChanges.subscribe(()=>{
  	  	this.onLoginValueChanged();
  	  })
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',     
    });
  }

  addItem(): void {
    this.alias = this.loginForm.get('alias') as FormArray;
    this.alias.push(this.createItem());
  }
  // still not working
  // deleteItem(index){
  //   this.alias = this.loginForm.get('alias') as FormArray;

  //   console.log('del',this.alias);
    
  // }


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
