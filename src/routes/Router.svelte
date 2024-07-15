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
    "/about": About,
    "/contact": Contact,
    "/works": Works,
    "/writing": Writing,
  };
</script>

<Router {routes} />
