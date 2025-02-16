import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {PlaneFrame} from '../../models/plane-frame.model';

@Component({
  selector: 'app-planes-map',
  templateUrl: './planes-map.component.html',
  styleUrls: ['./planes-map.component.scss']
})
export class PlanesMapComponent implements OnInit, OnChanges {
  @Input() planeFrames: PlaneFrame[] = [];

  private map!: L.Map;
  private markers = new Map<string, L.Marker>();
  private markerIcon = L.icon({
    iconUrl: 'assets/icons/marker.png',
    iconSize: [24, 24],
  });

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['planeFrames'] && this.map) {
      this.updatePlaneMarkers();
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      scrollWheelZoom: false,
    }).setView([52.237, 21.017], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  private updatePlaneMarkers(): void {
    const newPlaneIds = new Set(this.planeFrames.map(plane => plane.icao));

    this.markers.forEach((marker, icao) => {
      if (!newPlaneIds.has(icao)) {
        this.map.removeLayer(marker);
        this.markers.delete(icao);
      }
    });

    this.planeFrames.forEach(plane => {
      if (!this.markers.has(plane.icao)) {
        const marker = L.marker([plane.lat, plane.lon], {
          icon: this.markerIcon,
          riseOnHover: true,
        })
          .addTo(this.map)
          .bindPopup(this.createPopupContent(plane));

        this.markers.set(plane.icao, marker);
      } else {
        const existingMarker = this.markers.get(plane.icao)!;
        existingMarker.setLatLng([plane.lat, plane.lon]);
        existingMarker.setPopupContent(this.createPopupContent(plane));
      }
    });
  }

  private createPopupContent(plane: PlaneFrame): string {
    return `<b>ICAO:</b> ${plane.icao}<br><b>Speed:</b> ${plane.speed}`;
  }
}
