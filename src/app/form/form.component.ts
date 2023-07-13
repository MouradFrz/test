import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
interface Entry {
  id: number;
  name: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChildren('inpref') inputs: QueryList<ElementRef>;
  available: boolean = false;
  list: { name: string; available: boolean }[] = [
    { name: 'Mourad', available: false },
    { name: 'Didine', available: true },
    { name: 'Yacine', available: false },
  ];
  display() {
    this.inputs.forEach((e) => {
      console.log(e.nativeElement);
    });
  }

  entries: Entry[] = [
    { id: 0, name: 'Ab' },
    { id: 1, name: 'Ab' },
    { id: 0, name: 'Ab' },
  ];
  echoResult() {
    console.log(this.entries.map((e: Entry) => ({ [e.id]: e.name })));
  }

  numbers: number[] = [2, 53, 722, 11, 35, 3, 75, 34, 264, 3, 24];

  echoNumbersResult() {
    let sum: number = 0;
    this.numbers.forEach((e) => {
      if (!(e % 2)) {
        sum += e;
      }
    });
    // console.log(sum);
  }
}
