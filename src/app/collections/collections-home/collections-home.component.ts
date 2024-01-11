import { Component } from '@angular/core';
import { IPerson, IHeader } from '../../shared/Interfaces/Customer';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data: IPerson[] = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 34, job: 'Ux Designer' },
    { name: 'Emma', age: 26, job: 'Engineer' },
  ];

  headers: IHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
