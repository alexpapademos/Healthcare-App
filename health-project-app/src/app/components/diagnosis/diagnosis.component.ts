import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {environment} from '../../../environments/environment';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Model {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  apiBaseURL = environment.apiBaseURL;

  // controllers
  param1Control = new FormControl('', Validators.required);
  param2Control = new FormControl('', Validators.required);
  param3Control = new FormControl('', Validators.required);
  param4Control = new FormControl('', Validators.required);
  param5Control = new FormControl('', Validators.required);
  param6Control = new FormControl('', Validators.required);
  param7Control = new FormControl('', Validators.required);
  param8Control = new FormControl('', Validators.required);

  // @ts-ignore
  selectedValue: string;

  // initial spinner
  loading = false;

  models: Model[] = [
    {value: 'LogisticRegression', viewValue: 'Logistic Regression'},
    {value: 'RandomForestClassifier', viewValue: 'Random Forest Classifier'},
    
  ];

  @Output() predictionSuccessfulEvent = new EventEmitter<any>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.selectedValue = 'LogisticRegression';
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.loading) {
      return;
    }
    // loading spinner
    this.loading = true;
    // const modelName = this.models.filter(m => m.value === this.selectedValue)[0].viewValue;

    const JSONData = {
      model_name: this.selectedValue,
            // @ts-ignore
      data: [this.getParam1FormValue(this.param1Control.value),
            // @ts-ignore
            this.getParam2FormValue(this.param2Control.value),
            // @ts-ignore
            this.getParam3FormValue(this.param3Control.value),
            // @ts-ignore
            this.getParam4FormValue(this.param4Control.value),
            // @ts-ignore
            this.getParam5FormValue(this.param5Control.value),
            // @ts-ignore
            this.getParam6FormValue(this.param6Control.value),
            // @ts-ignore
            this.getParam7FormValue(this.param7Control.value),
            // @ts-ignore
            this.getParam8FormValue(this.param8Control.value),
      ]
      // data: [6,148,72,35,0,33.6,0.627,50]
    };

    const options: object = {
      headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
      responseType: 'text'
    };
    this.http.post<any>(this.apiBaseURL + '/predict_api', JSON.stringify(JSONData), options).subscribe(
      (response) => {
        console.log(response);
        this.predictionSuccessfulEvent.emit(response);
      },
      (error) => console.log(error)
    );
  }

  getParam1FormValue(param1: number): number {
    // @ts-ignore
    return param1;
  }

  getParam2FormValue(param2: number): number {
    // @ts-ignore
    return param2;
  }

  getParam3FormValue(param3: number): number {
    // @ts-ignore
    return param3;
  }

  getParam4FormValue(param4: number): number {
    // @ts-ignore
    return param4;
  }

  getParam5FormValue(param5: number): number {
    // @ts-ignore
    return param5;
  }

  getParam6FormValue(param6: number): number {
    // @ts-ignore
    return param6;
  }

  getParam7FormValue(param7: number): number {
    // @ts-ignore
    return param7;
  }

  getParam8FormValue(param8: number): number {
    // @ts-ignore
    return param8;
  }


}
