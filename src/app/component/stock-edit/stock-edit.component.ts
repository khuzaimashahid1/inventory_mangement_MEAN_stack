import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class EditstockComponent implements OnInit {

  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: DataService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        name: ['', Validators.required ],
        number: ['', Validators.required ],
        description: ['', Validators.required ],
        make: ['', Validators.required ],
        model: ['', Validators.required ],
        version: ['', Validators.required ],
        transmission: ['', Validators.required ],
        color: ['', Validators.required ],
        mileage: ['', Validators.required ],
        yom: ['', Validators.required ],
        refrence: ['', Validators.required ],
        note: ['', Validators.required ],
        availability: ['', Validators.required ],
        price: ['', Validators.required ],
        status: ['', Validators.required ]

      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getStock(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }


  updateStock(name, number, description, make, model, version,transmission, color, mileage, yom, refrence, note, availability, price,  status) {
   this.route.params.subscribe(params => {
      this.bs.updateStock(params['id'],name, number, description, make, model, version,transmission, color, mileage, yom, refrence, note, availability, price, status);
      alert("Stock Updated Successfully");
      this.router.navigate(['component/stock']);
   });
}
}
