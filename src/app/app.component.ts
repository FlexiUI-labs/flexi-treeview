import { Component } from '@angular/core';
import { FlexiTreeviewComponent } from '../../library/src/lib/flexi-treeview.component';
import { FlexiTreeNode } from '../../library/src/lib/flexi-tree-node.model';

@Component({
  selector: 'app-root',
  imports: [FlexiTreeviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  treeData: FlexiTreeNode[] = [
    {
      id: '1',
      name: 'Parent Node',
      code: 'P1',
      isMain: true,
      indeterminate: false,
      selected: false,
      expanded: true,
      description: '',
      originalData: null,
      children: [
        {
          id: '2',
          name: 'Child Node 1',
          code: 'C1',
          isMain: false,
          indeterminate: false,
          selected: false,
          expanded: true,
          description: '',
          originalData: null
        },
        {
          id: '3',
          name: 'Child Node 2',
          code: 'C2',
          isMain: false,
          indeterminate: false,
          selected: false,
          expanded: true,
          description: '',
          originalData: null
        }
      ]
    }
  ];


  handleSelectedNodes(selectedNodes: FlexiTreeNode[]) {
    console.log('Selected Nodes:', selectedNodes);
  }

  handleEditNode(node: FlexiTreeNode) {
    console.log('Edit Node:', node);
  }

  handleDeleteNode(node: FlexiTreeNode) {
    console.log('Delete Node:', node);
  }

  handleRefresh() {
    console.log('Treeview refreshed');
  }
}
