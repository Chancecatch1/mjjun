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
      rotation: 0,
      translateX: -40,
      translateY: 10,
    },
    {
      name: "Contact",
      color: "#4682B4",
      link: "/contact",
      rotation: 0,
      translateX: -20,
      translateY: -10,
    },
    {
      name: "Works",
      color: "#32CD32",
      link: "/works",
      rotation: 0,
      translateX: 0,
      translateY: -10,
    },
    {
      name: "Writing",
      color: "#FFD700",
      link: "/writing",
      rotation: 0,
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
          data-tooltip={item.name}
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
    padding: 1rem;
    box-sizing: border-box;
  }

  h1 {
    color: black;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    white-space: pre-wrap;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 20px; /* 메뉴와 이미지 컨테이너 사이 간격 */
  }

  .menu-item {
    position: relative; /* 툴팁 위치 설정을 위해 상대 위치 지정 */
    transition: transform 0.3s ease-in-out;
    transform-origin: center;
    border-radius: 50px;
    animation: fadeIn 1s forwards;
    cursor: pointer; /* 마우스를 올렸을 때 포인터 모양으로 변경 */
    font-family: inherit; /* h1의 폰트와 동일하게 설정 */
  }

  .menu-item::after {
    content: attr(data-tooltip); /* data-tooltip 속성의 값을 툴팁으로 사용 */
    position: absolute;
    bottom: 100%; /* 버튼의 위쪽에 툴팁 표시 */
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    font-family: inherit; /* h1의 폰트와 동일하게 설정 */
    font-size: 80%; /* 크기를 60%로 줄임 */
  }

  .menu-item:hover::after {
    opacity: 1; /* 마우스를 올리자마자 툴팁이 표시되도록 설정 */
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

  /* 미디어 쿼리를 사용하여 모바일 환경에서만 크기 조정 */
  @media (max-width: 768px) {
    main {
      height: 100vh; /* 모바일에서 전체 높이를 100vh로 설정 */
      overflow: hidden; /* 스크롤을 없애기 위해 오버플로우 숨김 */
    }

    .menu {
      gap: 8px; /* 모바일에서 메뉴 버튼 간격 줄임 */
      margin-bottom: 0rem; /* 메뉴와 이미지 간의 간격 추가 */
    }

    .image-container {
      width: 80%;
      height: 50vh;
    }

    .fade-in {
      max-width: 100%; /* 컨테이너에 맞춰 최대 너비 설정 */
      max-height: 100%; /* 컨테이너에 맞춰 최대 높이 설정 */
      object-fit: contain; /* 이미지 비율 유지 */
      animation: fadeIn 2s ease-in-out;
    }
  }
</style>
