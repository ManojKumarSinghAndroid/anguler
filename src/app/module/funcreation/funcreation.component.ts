import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcreation',
  templateUrl: './funcreation.component.html',
  styleUrls: ['./funcreation.component.css']
})
export class FuncreationComponent implements OnInit {

  constructor() { 
   
  }
  lastname="Hi Last Name";
  ngOnInit(): void {    
  }
  getFirtsFun(){  alert("Firts Function called"); };
  getFirtsPARAM(name: string){   alert(name); }
  getFirtsFROMCOMPO(ltName: string){  alert(ltName); }
  getMyevent(txtBoxVal: any){   alert(txtBoxVal);  }
  getMyEventData(txtBoxvalue:any){
    console.log(txtBoxvalue);
  }
}
