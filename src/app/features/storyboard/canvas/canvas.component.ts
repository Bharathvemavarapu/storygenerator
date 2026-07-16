import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

export interface StoryNode {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  image?: string;
  isGenerating?: boolean;
  isRoot?: boolean;
  icon?: string;
  iconColor?: string;
  outputs: NodePort[];
}

export interface NodePort {
  id: string;
  label: string;
  connectedTo?: string; // target node ID
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvasArea', { static: true }) canvasArea!: ElementRef;

  nodes: StoryNode[] = [
    {
      id: 'node-1',
      title: 'The Awakening',
      content: 'You wake up in a cold, metallic room. The hum of machinery surrounds you. A voice echoes from an unseen speaker: "Subject 42 is online."',
      x: 100,
      y: 120,
      image: 'assets/images/story-1.png',
      isRoot: true,
      icon: 'fa-flag-checkered',
      outputs: [
        { id: 'port-1-1', label: 'Explore Room', connectedTo: 'node-2' },
        { id: 'port-1-2', label: 'Wait', connectedTo: 'node-3' }
      ]
    },
    {
      id: 'node-2',
      title: 'Explore Room',
      content: 'You find a loose panel on the wall. Behind it, a tangled mess of glowing blue wires...',
      x: 520,
      y: 20,
      icon: 'fa-magnifying-glass',
      iconColor: 'text-blue',
      outputs: [
        { id: 'port-2-1', label: 'Add Choice' }
      ]
    },
    {
      id: 'node-3',
      title: 'Wait',
      content: '',
      x: 520,
      y: 250,
      isGenerating: true,
      icon: 'fa-hourglass',
      iconColor: 'text-orange',
      outputs: []
    }
  ];

  selectedNode: StoryNode | null = null;
  
  // Canvas View Transform
  canvasX = 0;
  canvasY = 0;
  zoom = 1;
  
  // Interaction State
  isPanning = false;
  isDraggingNode = false;
  draggedNode: StoryNode | null = null;
  dragStartX = 0;
  dragStartY = 0;
  initialNodeX = 0;
  initialNodeY = 0;
  initialCanvasX = 0;
  initialCanvasY = 0;

  ngOnInit() {
    this.selectedNode = this.nodes[0];
  }

  // Calculate SVG Path for connections
  getConnections() {
    const connections: { d: string, cx: number, cy: number }[] = [];
    
    for (const node of this.nodes) {
      if (!node.outputs) continue;
      
      let portIndex = 0;
      for (const port of node.outputs) {
        if (port.connectedTo) {
          const targetNode = this.nodes.find(n => n.id === port.connectedTo);
          if (targetNode) {
            // Rough coordinates based on standard node width (320px) and heights
            const startX = node.x + 320;
            // Calculate approximate Y position of output port based on node height and port index
            const nodeHeightBase = node.image ? 280 : 160;
            const startY = node.y + nodeHeightBase + (portIndex * 40);
            
            // Target input port is on left middle of target node
            const targetX = targetNode.x;
            const targetY = targetNode.y + 40;
            
            // Control points for bezier curve
            const cp1X = startX + 100;
            const cp1Y = startY;
            const cp2X = targetX - 100;
            const cp2Y = targetY;

            connections.push({
              d: `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${targetX} ${targetY}`,
              cx: targetX,
              cy: targetY
            });
          }
        }
        portIndex++;
      }
    }
    return connections;
  }

  // Node Selection
  selectNode(node: StoryNode, event: MouseEvent) {
    event.stopPropagation();
    this.selectedNode = node;
  }

  // Dragging Nodes
  onNodeMouseDown(node: StoryNode, event: MouseEvent) {
    event.stopPropagation();
    this.selectNode(node, event);
    this.isDraggingNode = true;
    this.draggedNode = node;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialNodeX = node.x;
    this.initialNodeY = node.y;
  }

  // Panning Canvas
  onCanvasMouseDown(event: MouseEvent) {
    // Only allow panning if clicking directly on canvas, not a node
    this.isPanning = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialCanvasX = this.canvasX;
    this.initialCanvasY = this.canvasY;
    this.selectedNode = null; // deselect
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDraggingNode && this.draggedNode) {
      const dx = (event.clientX - this.dragStartX) / this.zoom;
      const dy = (event.clientY - this.dragStartY) / this.zoom;
      this.draggedNode.x = this.initialNodeX + dx;
      this.draggedNode.y = this.initialNodeY + dy;
    } else if (this.isPanning) {
      const dx = event.clientX - this.dragStartX;
      const dy = event.clientY - this.dragStartY;
      this.canvasX = this.initialCanvasX + dx;
      this.canvasY = this.initialCanvasY + dy;
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDraggingNode = false;
    this.draggedNode = null;
    this.isPanning = false;
  }

  // Zooming
  zoomIn() {
    this.zoom = Math.min(this.zoom + 0.1, 2);
  }

  zoomOut() {
    this.zoom = Math.max(this.zoom - 0.1, 0.5);
  }

  // Node Operations
  closePanel() {
    this.selectedNode = null;
  }
}
