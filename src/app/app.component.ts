import { Component, computed } from '@angular/core';
import { FlexiTreeviewComponent } from '../../library/src/lib/flexi-treeview.component';
import { FlexiTreeNode } from '../../library/src/lib/flexi-tree-node.model';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FlexiTreeviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly resource = httpResource<FlexiTreeNode[]>(() => "./permissions.json");

  readonly data = computed(() => this.resource.value() ?? []);
  readonly loading = computed(() => this.resource.isLoading());

  selected(event:any){
    console.log(event);
  }
}
