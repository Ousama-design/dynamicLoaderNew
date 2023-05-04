import { Component,ViewChild,ViewContainerRef,Input, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements AfterViewInit,OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Input() config!:any 
    title = 'dynamicLoaderTask';
    
    ngAfterViewInit(): void {
    //  this.loadComponent()
   }
   ngOnInit(): void {
    setTimeout(()=> {
      this.loadComponent();
  }, 0);
   }
  
    loadComponent() {
      console.log(this.config)
      // Use the component factory resolver to get the factory for the selected component type
      //const compType=this.selectedComponentType==='ComponentA'?ComponentAComponent:ComponentBComponent
  
     if(this.config){
      this.container.clear();
      this.container.createComponent(this.config);
     }
  
      // Create the component and add it to the container
      
    }
}
