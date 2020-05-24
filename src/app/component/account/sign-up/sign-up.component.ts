import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, AfterViewInit {
  @ViewChild('passwordValue') _passwordValue: ElementRef;
  // variable declare
  _registrationForm: FormGroup;

  // Boolean value
  public IsAvailable: boolean = true;
  public _IsMinCharacter: boolean = true;
  public _IsUpperCase: boolean = true;
  public _IsLowerCase: boolean = true;
  public _IsNumberCase: boolean = true;
  public _IsSpecialCharacter: boolean = true;
  public Istouched: boolean;

  // Array declare
  public items_Array: string[] = ['gmail.com', 'Yahoo.com'];

  constructor(
    private formBuilder: FormBuilder,
    private signUpServiceProvider: SignUpService
  ) {}

  ngOnInit(): void {
    this.buildFormControl();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    fromEvent(this._passwordValue.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((_password: any) => _password.target.value)
      )
      .subscribe((res) => {
        this.generatePassword(res);
      });
  }

  public buildFormControl() {
    this._registrationForm = this.formBuilder.group({
      Username: new FormControl(null, [Validators.required]),
      Password: new FormControl(null, [Validators.required]),
      GmailSelect: new FormControl(null, [Validators.required]),
    });
  }

  searchUsername(event) {
    let _searchValue: any;
    let _index;

    _searchValue = event.currentTarget.value;
    this.signUpServiceProvider.getRegisrationData().subscribe((data_Array) => {
      if (Array.isArray(data_Array) && data_Array.length > 0) {
        _index = data_Array.findIndex((a) => a.Username === _searchValue);
        _index < 0 ? (this.IsAvailable = true) : (this.IsAvailable = false);
      } else {
        this.IsAvailable = true;
      }
    });
  }

  generatePassword(value) {
    let a = Array.from(value);
    this._IsMinCharacter = a.length < 6 ? true : false;
    let _upperCaseCount = 0;
    let _lowerCaseCount = 0;
    let _numberCount = 0;
    let _specialCount = 0;
    this.Istouched = true;

    a.forEach((element) => {
      let x = element.toString().charCodeAt(0);
      if (x >= 65 && x <= 90) {
        _upperCaseCount++;
      }
      if (x >= 97 && x <= 122) {
        _lowerCaseCount++;
      }
      if (x >= 48 && x <= 57) {
        _numberCount++;
      }
      if (
        (x >= 33 && x <= 47) ||
        (x >= 58 && x <= 64) ||
        (x >= 123 && x <= 126)
      ) {
        _specialCount++;
      }
    });
    this._IsUpperCase = _upperCaseCount >= 1 ? false : true;
    this._IsLowerCase = _lowerCaseCount >= 1 ? false : true;
    this._IsNumberCase = _numberCount >= 1 ? false : true;
    this._IsSpecialCharacter = _specialCount >= 1 ? false : true;
    debugger;
    if (
      !this._IsUpperCase &&
      !this._IsLowerCase &&
      !this._IsNumberCase &&
      !this._IsSpecialCharacter
    ) {
      this.Istouched = false;
    }
    console.log(this.Istouched);
    debugger;
  }
}
