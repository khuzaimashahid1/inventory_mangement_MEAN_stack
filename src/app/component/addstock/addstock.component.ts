import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  constructor(private _data:DataService) { }
name:string;
number:string;
description:string;
make:string;
model:string;
version:string;
transmission:string;
color:string;
mileage:string;
yom:string;
refrence:string;
note:string;
availability:string;
price:string;
image:string;



  ngOnInit() {
  }
saveval()
{
  var ret;
  let stock={
    name:this.name,
    number:this.number,
    description:this.description,
    make:this.make,
    model:this.model,
    version:this.version,
    transmission:this.transmission,
    color:this.color,
    mileage:this.mileage,
    yom:this.yom,
    refrence:this.refrence,
    note:this.note,
    availability:this.availability,
    price:this.price,
    image:this.image



  };
this._data.doPOST(stock).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('done loading Employees')

  );
  alert("Stock Added Successfully");
  this.name='';
  this.number='';
  this.description='';
  this.make='';
  this.model='';
  this.version='';
  this.transmission='';
  this.color='';
  this.mileage='';
  this.yom='';
  this.refrence='';
  this.note='';
  this.availability='';
  this.price='';
  this.image='';
}
}
