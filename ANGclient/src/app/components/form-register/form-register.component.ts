import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {
  
  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  private resetForm = ()  => {
    this.formData = this.fb.group({
      
      first_name: [ 'Fabien', Validators.required ],
      last_name: [ 'Marques', Validators.required ],
      email: [ 'fabi@gmai.coum', [Validators.required, Validators.email]],
      password: [ '12345', [Validators.required,Validators.minLength(3)]],
      password_repeate: [ '12345', [Validators.required,Validators.minLength(3)]],
      street: [ '21, boulevard de la République', Validators.required ],
      city: [ 'Aix-en-Provence', Validators.required ],
      country: [ 'France', Validators.required ],
      birthdate: [ '18/08/1979', Validators.required ],
      position: [ 'NULL', Validators.required ],
      type: [ 'admin', Validators.required ],
      zip_code: [ '13100', Validators.required ],
      cgu: [ true, Validators.required ],
    })
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value)
  }

  ngOnInit() {
    this.resetForm();
  }

}
