import { Panel } from './Panel';

interface EcoStream {
  id: string;
  name: string;
  videoId: string;
}

const ECO_STREAMS: EcoStream[] = [
  { id: 'eco-cam-1', name: 'Eco Cam 1', videoId: 'gnEuhfyZPPQ' },
  { id: 'eco-cam-2', name: 'Eco Cam 2', videoId: 'F0GOOP82094' },
];

export class BilibiliLivePanel extends Panel {
  constructor() {
    super({ id: 'bilibili-live', title: '实时监控' });
    this.render();
  }

  private render(): void {
    this.content.innerHTML = '';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px;';

    for (const stream of ECO_STREAMS) {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:flex;flex-direction:column;gap:4px;';

      const label = document.createElement('div');
      label.textContent = stream.name;
      label.style.cssText = 'font-size:12px;color:#ccc;text-align:center;';

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${stream.videoId}?autoplay=1&mute=1&controls=1`;
      iframe.title = stream.name;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'width:100%;height:300px;border:none;border-radius:4px;';

      cell.appendChild(label);
      cell.appendChild(iframe);
      grid.appendChild(cell);
    }

    this.content.appendChild(grid);
  }
}
