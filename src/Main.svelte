<!--Path: /usr/local/var/www/mjjun/src/Main.svelte -->

<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import { _, locale } from "svelte-i18n";

  export let name;

  let displayedText = "";
  let i = 0;
  let fullText = "";
  const typingSpeed = 150;
  let typingComplete = false;

  const menuItems = [
    {
      name: "about",
      color: "#FF6347",
      link: "/about",
      class: "-translate-x-6 translate-y-5",
    },
    {
      name: "contact",
      color: "#4682B4",
      link: "/contact",
      class: "-translate-x-4 translate-y-0",
    },
    {
      name: "works",
      color: "#32CD32",
      link: "/works",
      class: "translate-x-0 translate-y-1",
    },
    {
      name: "writing",
      color: "#FFD700",
      link: "/writing",
      class: "translate-x-1 translate-y-9",
    },
  ];

  $: {
    fullText = `${$_("hello")} \n${$_("iAm")} ${name}!`;
    if (typingComplete) {
      displayedText = fullText;
    } else {
      i = 0;
      displayedText = "";
      typeWriter();
    }
  }

  function typeWriter() {
    if (i < fullText.length) {
      displayedText += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      typingComplete = true;
    }
  }

  function navigateTo(path) {
    push(path);
  }

  function changeLanguage(lang) {
    locale.set(lang);
  }

  onMount(() => {
    typeWriter();
  });
</script>

<main
  class="flex flex-col items-center justify-between min-h-screen mt-4 p-2 text-center box-border"
>
  <div>
    <button on:click={() => changeLanguage("en")}>English</button>
    <button on:click={() => changeLanguage("ko")}>한국어</button>
  </div>

  <h1
    class="text-black uppercase text-6xl font-thin whitespace-pre-wrap leading-normal"
  >
    {displayedText}
  </h1>

  {#if typingComplete}
    <div class="flex justify-center gap-8 mt-4 z-20">
      {#each menuItems as item}
        <button
          class="group w-4 h-4 relative cursor-pointer rounded-full transition-transform duration-300 ease-in-out origin-center animate-fadeIn hover:scale-110 {item.class}"
          style="background-color: {item.color};"
          on:click={() => navigateTo(item.link)}
          data-tooltip={$_(item.name)}
        >
          <span
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-black rounded opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out text-xs whitespace-nowrap group-hover:opacity-100 z-50"
          >
            {$_(item.name)}
          </span>
        </button>
      {/each}
    </div>
    <div class="w-fit h-fit mx-auto flex justify-center items-center z-10">
      <img
        src="/images/mj_index_1.png"
        alt="MJ"
        class="w-11/12 h-11/12 object-contain animate-fadeIn mb-16"
      />
    </div>
  {/if}
</main>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1s forwards;
  }
</style>
