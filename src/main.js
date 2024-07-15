import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "MJ", // 여기서 당신의 이름을 설정합니다.
  },
});

export default app;
