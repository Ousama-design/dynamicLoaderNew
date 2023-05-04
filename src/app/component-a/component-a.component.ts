import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentA {
  countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Japan'];
  selectedCountry!: string;

  @Output() newEvent =new EventEmitter<string>();


  addNewCountry(country:string){
    this.newEvent.emit(country);
  }
}
