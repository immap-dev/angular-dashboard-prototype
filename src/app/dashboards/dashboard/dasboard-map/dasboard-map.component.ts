import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dasboard-map',
  templateUrl: './dasboard-map.component.html',
  styleUrls: ['./dasboard-map.component.css']
})
export class DasboardMapComponent implements OnInit {

  @Input() map;
  options;
  layersControl;
  layers;

  constructor() { }

  ngOnInit() {
    // console.log(this.map.pointA );
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: L.latLng(this.map.point[0], this.map.point[1] )
    };

    this.layersControl = {
      baseLayers: {
        'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': L.tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: {
        'Big Circle': L.circle([46.95, -122], { radius: 5000 }),
        'Big Square': L.polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
      }
    };

    this.layers = [
      // L.circle([46.95, -122], { radius: 5000 }),
      // L.polygon([[46.8, -121.85], [46.92, -121.92], [46.87, -121.8]]),
      L.marker([this.map.point[0], this.map.point[1] ], {
        icon: L.icon({
          iconSize: [25, 41], iconAnchor: [13, 41], iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }),
      L.popup({className: 'custom', closeButton: false }).setLatLng([this.map.point[0], this.map.point[1] ]).setContent(this.map.name)
      // L.popup({ autoPanPadding: [3, 5], closeButton: false }).setLatLng([this.map.coordinate[0], this.map.coordinate[1]])
      // .setContent(this.map.name)

    ];

  }

}
