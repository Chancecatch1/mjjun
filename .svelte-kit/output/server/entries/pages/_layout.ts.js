const prerender = true;
const load = ({ url }) => ({
  currentRoute: url.pathname
});
export {
  load,
  prerender
};
