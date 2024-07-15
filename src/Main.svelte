<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  export let name;

  let displayedText = "";
  let i = 0;
  const fullText = `Hello, \nI am ${name}!`;
  const typingSpeed = 150;
  let showImage = false;
  let showMenu = false;
  const menuItems = [
    {
      name: "About",
      color: "#FF6347",
      link: "/about",
      rotation: 45,
      translateX: -40,
      translateY: 10,
    },
    {
      name: "Contact",
      color: "#4682B4",
      link: "/contact",
      rotation: 90,
      translateX: -20,
      translateY: -10,
    },
    {
      name: "Works",
      color: "#32CD32",
      link: "/works",
      rotation: 90,
      translateX: 0,
      translateY: -10,
    },
    {
      name: "Writing",
      color: "#FFD700",
      link: "/writing",
      rotation: 135,
      translateX: 20,
      translateY: 10,
    },
  ].map((item) => ({ ...item, visible: false }));

  onMount(() => {
    const typeWriter = () => {
      if (i < fullText.length) {
        displayedText += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        showMenu = true;
        showImage = true;
      }
    };
    typeWriter();
  });

  function navigateTo(path) {
    push(path);
  }
</script>

<main>
  <h1>{displayedText}</h1>
  {#if showMenu}
    <div class="menu">
      {#each menuItems as item, index}
        <button
          class="menu-item"
          style="background-color: {item.color}; transform: translate({item.translateX}px, {item.translateY}px) rotate({item.rotation}deg);"
          on:click={() => navigateTo(item.link)}
          title={item.name}
        >
        </button>
      {/each}
    </div>
  {/if}
  {#if showImage}
    <div class="image-container">
      <img src="/images/mj_index_1.png" alt="MJ" class="center-image fade-in" />
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
  }

  h1 {
    color: black;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    white-space: pre-wrap;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* 위치 및 각도 조정: 먼저 위치를 이동한 후 요소를 회전시킵니다. */
  .menu-item {
    transition: transform 0.3s ease-in-out;
    transform-origin: center;
    border-radius: 50px;
    animation: fadeIn 0.5s forwards;
  }

  img {
    max-width: 90%;
    height: auto;
    max-height: 65vh;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
