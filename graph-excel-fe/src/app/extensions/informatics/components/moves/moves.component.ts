import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {

  columnDefs = [
    { headerName: 'Name', field: 'name', width: 125, },
    { headerName: 'Type', field: 'type', width: 125, },
    { headerName: 'PP', field: 'pp', width: 125, },
    { headerName: 'Power', field: 'power', width: 125, },
    { headerName: 'Accuracy', field: 'accuracy', width: 125, },
  ];
  rowData: any;

  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    console.log('Welcome to Moves');

    this.api.get('/api/get_rows', {tabName: 'Moves'}).subscribe(res => {
      console.log(res);
      // Might want to add a sort function here.. Need utility service?
      this.rowData = res
      this.plotTable();
    });
  }

  plotTable() {
    console.log('rowData:', this.rowData);
    console.log('Plotting Table...');
  }
}
