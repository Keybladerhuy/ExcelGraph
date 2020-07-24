import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.scss']
})
export class BaseStatsComponent implements OnInit {

  columnDefs = [
    { headerName: 'Pokemon', field: 'pokemon', width: 125, },
    { headerName: 'Type 1', field: 'typei', width: 100, },
    { headerName: 'Type 2', field: 'typeii', width: 100, },
    { headerName: 'Ability 1', field: 'abilityi', width: 120, },
    { headerName: 'Ability 2', field: 'abilityii', width: 120, },
    { headerName: 'HA', field: 'hiddenability', width: 120, },
    { headerName: 'hp', field: 'hp', width: 70,  },
    { headerName: 'atk', field: 'atk', width: 70, },
    { headerName: 'def', field: 'def', width: 70, },
    { headerName: 'spa', field: 'spa', width: 70, },
    { headerName: 'spd', field: 'spd', width: 70, },
    { headerName: 'spe', field: 'spe', width: 70, },
    { headerName: 'total', field: 'total', width: 70, }
  ];
  rowData: any;

  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    console.log('Welcome to Base Stats');

    this.api.get('/api/get_rows', {tabName: 'BaseData'}).subscribe(res => {
      this.rowData = res
      this.plotTable();
    });
  }

  plotTable() {
    console.log('rowData:', this.rowData);
    console.log('Plotting Table...');
  }

}
