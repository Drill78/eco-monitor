import { Panel } from './Panel';

interface BilibiliStream {
  id: string;
  name: string;
  roomId: string;
}

const BILIBILI_STREAMS: BilibiliStream[] = [
  { id: 'bilibili-cam-1', name: 'Bilibili Cam 1', roomId: '27209418' },
  { id: 'bilibili-cam-2', name: 'Bilibili Cam 2', roomId: '27194596' },
];

export class BilibiliLivePanel extends Panel {
  constructor() {
    super({ id: 'bilibili-live', title: 'B站生态直播' });
    this.render();
  }

  private render(): void {
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px;';

    for (const stream of BILIBILI_STREAMS) {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:flex;flex-direction:column;gap:4px;';

      const label = document.createElement('div');
      label.textContent = stream.name;
      label.style.cssText = 'font-size:12px;color:#ccc;text-align:center;';

      const iframe = document.createElement('iframe');
      iframe.src = `https://live.bilibili.com/blanc/${stream.roomId}`;
      iframe.title = stream.name;
      iframe.allow = 'autoplay';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'width:100%;height:300px;border:none;border-radius:4px;';

      cell.appendChild(label);
      cell.appendChild(iframe);
      grid.appendChild(cell);
    }

    this.content.appendChild(grid);
  }
}
