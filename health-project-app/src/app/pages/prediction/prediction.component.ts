import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  // @ts-ignore
  prediction: string = null;

  // @ts-ignore
  @ViewChild('diagramHeader') diagramHeader: ElementRef;

  showDiv = {
    current: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  showDiagram(prediction: string): void {
    this.showDiv.current = true;
    this.prediction = prediction;
    setTimeout(() => {
      this.diagramHeader.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 100);
  }

}
