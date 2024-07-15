<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  export let name;

  let displayedText = "";
  let i = 0;
  const fullText = `Hello, \nI am ${name}!`;
  const typingSpeed = 150;
  let typingComplete = false;

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
  ];

  onMount(() => {
    const typeWriter = () => {
      if (i < fullText.length) {
        displayedText += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        typingComplete = true;
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
  {#if typingComplete}
    <div class="menu">
      {#each menuItems as item}
        <button
          class="menu-item"
          style="background-color: {item.color}; transform: translate({item.translateX}px, {item.translateY}px) rotate({item.rotation}deg);"
          on:click={() => navigateTo(item.link)}
          title={item.name}
        >
        </button>
      {/each}
    </div>
    <div class="image-container">
      <img src="/images/mj_index_1.png" alt="MJ" class="fade-in" />
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding: 1em;
    box-sizing: border-box;
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

  .menu-item {
    transition: transform 0.3s ease-in-out;
    transform-origin: center;
    border-radius: 50px;
    animation: fadeIn 1s forwards;
  }

  .image-container {
    width: 60%; /* max-width 대신 width 사용 */
    height: 60vh; /* max-height 대신 height 사용 */
    margin: 0 auto;
    padding: 0;
    display: flex; /* Flexbox 사용 */
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
  }

  .fade-in {
    max-width: 100%; /* 컨테이너에 맞춰 최대 너비 설정 */
    max-height: 100%; /* 컨테이너에 맞춰 최대 높이 설정 */
    object-fit: contain; /* 이미지 비율 유지 */
    animation: fadeIn 2s ease-in-out;
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
