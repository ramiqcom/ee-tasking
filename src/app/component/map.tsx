import basemaps from '@/app/data/basemap.json';
import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect } from 'react';

export default function MapCanvas() {
  const container = 'map';

  useEffect(() => {
    const map = new Map({
      container: container,
      style: basemaps[0].value,
      zoom: 5,
      minZoom: 0,
      maxZoom: 22,
      center: [0, 20],
    });
  }, []);

  return <div id={container}></div>;
}
