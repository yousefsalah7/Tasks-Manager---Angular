import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup | any = null;
  genders = ["male", "female"];
  countries: Country[]


   constructor(private country:CountriesService) { }

  ngOnInit(): void
   {
    this.countries=this.country.getCountirs();
    this .signUpForm =new FormGroup(
      {
        firstName: new FormControl,
        lastName :new FormControl,
        email : new FormControl,
        mobile:new FormControl,
        dateOfBirth:new FormControl,
        gender :new FormControl,
        countryID: new FormControl(null),
        receiveNewsLetters: new FormControl(null),
      }
    )

  }

}
