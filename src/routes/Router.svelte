<!-- path: /usr/local/var/www/mjjun/src/routes/Router.svelte -->

<script>
  import { wrap } from "svelte-spa-router/wrap";
  import Router from "svelte-spa-router";
  import Main from "../Main.svelte";
  import About from "../About.svelte";
  import Contact from "../Contact.svelte";
  import Works from "../Works.svelte";
  import Writing from "../Writing.svelte";

  export let name;

  const routes = {
    "/": wrap({
      component: Main,
      props: { name },
    }),
    "/about": wrap({
      component: About,
    }),
    "/contact": wrap({
      component: Contact,
    }),
    "/works": wrap({
      component: Works,
    }),
    "/writing": wrap({
      component: Writing,
    }),
  };
</script>

<Router {routes} />
