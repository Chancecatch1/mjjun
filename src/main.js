// path: /usr/local/var/www/mjjun/src/main.js

import "./i18n";
import { setupI18n } from "./i18n";
import "../public/global.css";
import App from "./App.svelte";

setupI18n().then(() => {
  const app = new App({
    target: document.body,
    props: {
      name: "MJ",
    },
  });
});

export default app;
