import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../redux/types/company';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {
  
  @Input() companies: Company[];
  @Output() deleteCompany = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

}
