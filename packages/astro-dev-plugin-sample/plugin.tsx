import type { DevOverlayPlugin } from "astro";
import type { FunctionComponent } from 'preact';
import { render } from 'preact';

const App: FunctionComponent = ({ children }) => {
  return <div style={{ color: 'red' }}>{children}</div>
}

const plugin: DevOverlayPlugin =  {
  id: "astro-dev-plugin-sample",
  name: "Sample",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.638 1.54H3.362a1.07 1.07 0 0 0-.85.46L.692 4.52a1.05 1.05 0 0 0 .06 1.29L6.21 12.1a.999.999 0 0 0 1.58 0l5.457-6.29a1.05 1.05 0 0 0 .06-1.29L11.488 2a1.07 1.07 0 0 0-.85-.46"/><path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"/></g></svg>`,
  init(canvas, eventTarget) {
    render(<App>Hello world!</App>, canvas);
  },
}

export default plugin;
