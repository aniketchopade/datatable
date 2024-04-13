import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatatableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'datatableapp';
}
