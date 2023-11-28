import type { AstroIntegration } from "astro";

export default function AstroDevOverlayPluginIntegration(): AstroIntegration {
  return {
    name: "astro-dev-plugin-reboot",
    hooks: {
      "astro:config:setup": ({ addDevOverlayPlugin }) => {
        addDevOverlayPlugin("astro-dev-plugin-sample/plugin");
      },
      "astro:server:setup": ({ server }) => {
        server.ws.on("astro-dev-overlay:astro-dev-plugin", () => {
          console.log('pong');
        });
      },
    },
  };
}
