# Flexi Treeview

Flexi Treeview is a customizable and flexible Angular component for displaying hierarchical data in a tree structure. It supports selection, expansion, search, and actions like edit, delete, and refresh.

## Features

- 🛠 **Dynamic Tree Structure** - Supports parent-child relationships with nested levels.
- ✅ **Checkbox Selection** - Allows selecting individual nodes and handling indeterminate states.
- 🔍 **Search Functionality** - Quickly find nodes within the tree.
- 📏 **Customizable UI** - Adjust size, colors, and styling.
- 🎨 **Dark & Light Mode Support** - Adapts to the selected theme.
- 🔄 **Expand/Collapse All** - Expand or collapse all nodes easily.
- 🖱 **Action Buttons** - Edit, delete, and detail buttons for nodes.
- 🔄 **Live Refresh** - Refresh the tree dynamically.

## Installation

```sh
npm install flexi-treeview
```

## Usage

### Import the Module

```ts
import { FlexiTreeviewComponent } from 'flexi-treeview';

@Component({
  selector: 'app-root',
  imports: [FlexiTreeviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

### Add to Template

```html
<flexi-treeview
  [data]="treeData"
  [treeviewTitle]="'Categories'"
  [themeClass]="'light'"
  [showCheckbox]="true"
  [showSearch]="true"
  (onSelected)="handleSelectedNodes($event)"
  (onEdit)="handleEditNode($event)"
  (onDelete)="handleDeleteNode($event)"
  (onRefresh)="handleRefresh()">
</flexi-treeview>
```

### Define Tree Data

```ts
treeData = [
  {
    id: '1',
    name: 'Parent Node',
    code: 'P1',
    children: [
      { id: '2', name: 'Child Node 1', code: 'C1' },
      { id: '3', name: 'Child Node 2', code: 'C2' }
    ]
  }
];
```

```ts
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
```

## API

| Input Property     | Type        | Default | Description |
|--------------------|------------|---------|-------------|
| `data`            | `FlexiTreeNode[]` | `[]`  | The tree node data array. |
| `treeviewTitle`   | `string`    | `''`   | Title of the treeview. |
| `showCheckbox`    | `boolean`   | `false` | Show checkboxes for node selection. |
| `showSearch`      | `boolean`   | `true`  | Enable search functionality. |
| `showActions`     | `boolean`   | `true`  | Show action buttons for nodes. |

## Events

| Event       | Output Type          | Description |
|------------|--------------------|-------------|
| `onSelected` | `FlexiTreeNode[]` | Emits when nodes are selected. |
| `onEdit`     | `FlexiTreeNode`   | Emits when a node is edited. |
| `onDelete`   | `FlexiTreeNode`   | Emits when a node is deleted. |
| `onRefresh`  | `void`            | Emits when the refresh button is clicked. |

## License

MIT License.