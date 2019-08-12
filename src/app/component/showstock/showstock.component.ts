import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
//import {Router} from "@angular/router"
@Component({
  selector: 'app-showemp',
  templateUrl: './showstock.component.html',
  styleUrls: ['./showstock.component.css']
})
export class ShowstockComponent implements OnInit {
  public stocks;
//, private router:Router
  constructor(public _data:DataService) { }

  ngOnInit() {
    this.getemp();
  }

getemp(){
  this._data.doGET().subscribe(
          data => { this.stocks = data},
          err => console.error(err),
          () => console.log('done loading stock')
      );
    
}


deleteStock(id) {
  this._data.deleteStock(id).subscribe(res => {
    console.log('Deleted');
    if(true)
    {
     
      alert("Stock Deleted Successfully");
      this.ngOnInit();
      //this.router.navigate(['/component/stock'])
    }

  });

}


}
