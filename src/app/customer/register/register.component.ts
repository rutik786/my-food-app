import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  onSubmit(registerForm: NgForm){
    console.log(registerForm.value);
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      this.name = params.get('name')!;
    });
    this.route.queryParams.subscribe((params) =>{
    this.phone = params['phone'];
    this.address = params['address'];
      this.userid = params['userid'];
      this.password = params['password'];
      this.confirmpassword = params['confirmpassword'];
    });
  }
  name="";
  phone="";
  address="";
  userid="";
  password="";
  confirmpassword="";

  asteric =""
  errorname="";
  errorphone="";
  erroraddress="";
  erroruserid="";
  errorpassword="";
  errorconfirmpassword="";

  getNameValue(event:any){
    this.name = event.target.value;
    var pattern = /^[a-zA-Z_ ]*$/;
    if(this.name.length < 1){
      this.errorname = "Name should not be empty"
    }else if(!pattern.test(this.name)){
      this.errorname = "Name should some character"
    }else{
      this.errorname = ""
    }
  }

  getPhoneValue(event:any){
    this.phone = event.target.value;
    var pattern = /^[0-9]{10}$/;
    if(this.phone.length<1){
      this.errorphone = "Phone should not be empty"
    }else if(!pattern.test(this.phone)){
      this.errorphone = "Phone should only contain 10 digit number"
    }else{
      this.errorphone = ""
    }
  }

  getAddressValue(event:any){
    this.address = event.target.value;
    var pattern = /^[0-9]{10}$/;
    if(this.address.length<1){
      this.erroraddress = "Address should not be empty"
    }else if(!pattern.test(this.address)){
      this.erroraddress = "Address should some character"
    }else{
      this.erroraddress = ""
    }
  }

  getUseridValue(event:any){
    this.userid = event.target.value;
    var pattern = /\S+@\S+\.\S+/;
    if(this.userid.length<1){
      this.erroruserid = "UserId should not be empty"
    }else if(!pattern.test(this.userid)){
      this.erroruserid = "UserId should be like abc@gmail.com"
    }else{
      this.erroruserid = ""
    }
  }

  getPasswordValue(event:any){
    this.password = event.target.value;
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(this.password.length<1){
      this.errorpassword = "Password should  not be empty"
    }else if(!pattern.test(this.password)){
      this.errorpassword = "Password should  contain capital letter, small letter, special character"
    }else{
      this.errorpassword = ""
    }
  }

  getConfirmpasswordValue(event:any){
    this.confirmpassword = event.target.value;
    if(this.confirmpassword.length<1){
      this.errorconfirmpassword = "Password should  not be empty"
    }else if(this.confirmpassword !== this.password){
      this.errorconfirmpassword = "Enter same password"
    }else{
      this.errorconfirmpassword = ""
    }
  }
reset(){
    this.name="";
    this.phone="";
    this.userid="";
    this.password="";
    this.confirmpassword="";

    this.errorname="";
    this.errorphone="";
    this.erroruserid="";
    this.errorpassword="";
    this.errorconfirmpassword="";
}
register(){
  if(this.name.length <1 || this.phone.length <1 || this.userid.length <1 || this.password.length <1 || this.confirmpassword.length <1 ){
    if(this.name.length <1 && this.phone.length <1 && this.userid.length <1 && this.password.length <1 && this.confirmpassword.length <1 ){
      this.errorname = "Name should not be empty";
      this.errorphone= "Phone should not be empty";
      this.erroruserid= "Userid should not be empty";
      this.errorpassword= "Password should not be empty";
      this.errorconfirmpassword= "Password should not be empty";
      this.asteric = "*"
    }
    else if(this.name.length < 1){
      this.errorname = "Fill this field";
    }
    else if(this.phone.length < 1){
      this.errorphone = "Fill this field";
    }
    else if(this.userid.length < 1){
      this.erroruserid = "Fill this field";
    }
    else if(this.password.length < 1){
      this.errorpassword = "Fill this field";
    }
    else if(this.confirmpassword.length < 1){
      this.errorconfirmpassword = "Fill this field";
    }      
    return false
  }
  else if(this.errorname.length <1 && this.errorphone.length <1 && this.erroruserid.length <1 && this.errorpassword.length <1 && this.errorconfirmpassword.length <1 ){
    alert("Registration successfull")
    return true
  }else{
    return false
  }
}

}
