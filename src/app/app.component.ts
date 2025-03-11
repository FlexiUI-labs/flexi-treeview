import { Component } from '@angular/core';
import { FlexiTreeviewComponent } from '../../library/src/lib/flexi-treeview.component';

@Component({
  selector: 'app-root',
  imports: [FlexiTreeviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flexi-treeview';
}
