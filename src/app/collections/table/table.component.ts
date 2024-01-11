import { Component, Input } from '@angular/core';
import { IPerson, IHeader } from '../../shared/Interfaces/Customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  // @Input() data: [] = [];
  //@Input() headers = [];
  @Input() data: IPerson[] = [];
  @Input() headers: IHeader[] = [];
}
