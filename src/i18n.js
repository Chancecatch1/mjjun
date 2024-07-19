// path: /usr/local/var/www/mjjun/src/i18n.js

import {
  register,
  init,
  getLocaleFromNavigator,
  waitLocale,
} from "svelte-i18n";

register("en", () => import("./lang/en.json"));
register("ko", () => import("./lang/ko.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});

// 이 줄을 추가합니다
export const setupI18n = () => waitLocale();
