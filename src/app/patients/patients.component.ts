import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PatientsService } from "./patients.service";
import { Observable } from "rxjs";
import { timeout } from 'q';
import * as $ from 'jquery';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients = [];
  loading: boolean;
  scrollableHeight = "500px";
  bottomHeight = 250;

  cols = [
    { field: 'mispar_ishpuz', title: "מס' אשפוז"},
    { field: 'shem_prati', title: 'שם פרטי' },
    { field: 'shem_mishp', title: 'שם משפחה' },
  ]

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Toyota', model: 'Corolla', price: 55000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(private patientsService: PatientsService, private elRef:ElementRef) { }

  @HostListener('window:resize') onResize() {
    let offset = $('.ui-table-scrollable-body').offset();
    this.scrollableHeight = window.outerHeight - this.elRef.nativeElement.offsetTop - this.bottomHeight + 'px';
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.patientsService.GetPatients(10012).subscribe(res => {
        this.patients = res
        this.loading = false
      });
    }, 1000);

  }

}
