import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() boxColor;
  @Input() placeholderText;
  count:number=0;
  @Output() inputEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onCreate(myValue){
   
    
    if(myValue.value!=""){
      this.count=this.count + 1;
      this.inputEvent.emit(myValue.value);
      
    }
    else{
      alert("Please enter valid name");
    }
    
  }

}
