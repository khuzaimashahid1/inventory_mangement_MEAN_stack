import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})


export class DataService {

  name:string="Moazzam Shaikh";

  constructor(private http:HttpClient) { }
   







  deleteStock(id) {
    let _id=id;
  let url="http://localhost:3000/api/stocks/"+_id;
 return this.http.delete(url,httpOptions);
  }



  doGET(){
   // let url="http://localhost:3000/emp/employees";
   let url="http://localhost:3000/api/stocks/";
    return this.http.get(url);
  }

  doGETS(name){
    let ename=name
    let url="http://localhost:/"+ename;
    return this.http.get(url);
  }

  doPOST(stock){
      let body=JSON.stringify(stock);
    let url="http://localhost:3000/api/stocks/";
    return this.http.post(url,body,httpOptions);
  }


  doUPDATE(body){
    let id=body._id;
    let name=body.name;
    let desig=body.designation;
    let body1=JSON.stringify(body);
    let url="http://localhost:3000/emp/editemp";
  return this.http.put(url,body1,httpOptions);
}


  doDELETE(id){
    let _id=id;
  let url="http://localhost:3000/api/stocks/"+_id;
 return this.http.delete(url,httpOptions);
}



getStock(id) {
  return this
          .http
          .get(`http://localhost:3000/api/stocks/${id}`);
  }

updateStock(id,name, number, description, make, model, version,transmission, color, mileage, yom, refrence, note, availability, price, status) {

  const obj = {
      name: name,
      number: number,
      description: description,
      make: make,
      model: model,
      version: version,
      transmission: transmission,
      color: color,
      mileage: mileage,
      yom: yom,
      refrence: refrence,
      note: note,
      availability: availability,
      price: price,
      status: status
    };
  this
    .http
    .put(`http://localhost:3000/api/stocks/${id}`, obj)
    .subscribe(res => console.log('Done'));
}



}
