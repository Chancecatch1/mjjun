<script>
	import { onMount } from 'svelte';
	export let name;
  
	let displayedText = '';
	let i = 0;
	const fullText = `Hello, \nI am ${name}!`;
	const typingSpeed = 150; // 타이핑 속도(ms)
	let showImage = false; // 이미지 표시 여부 초기값은 false
  
	onMount(() => {
	  const typeWriter = () => {
		if (i < fullText.length) {
		  displayedText += fullText.charAt(i);
		  i++;
		  setTimeout(typeWriter, typingSpeed);
		} else {
		  showImage = true; // 텍스트 입력이 끝나면 이미지 표시
		}
	  };
	  typeWriter();
	});
  </script>
  
  <main>
	<h1>{displayedText}</h1>
	{#if showImage}
	  <img src="/images/mj_index_1.png" alt="image_of_mj" class="shadow-drop-2-lr">
	{/if}
  </main>
  
  <style>
	main {
	  text-align: center;  /* 텍스트 및 이미지 중앙 정렬 */
	  padding: 1em;
	  display: flex;  /* Flexbox 사용 */
	  flex-direction: column;  /* 자식 요소를 세로로 정렬 */
	  justify-content: flex-start;  /* 내용을 상단부터 시작 */
	  align-items: center;  /* 가로 방향 중앙 정렬 */
	  height: 100vh;  /* 뷰포트의 전체 높이 사용 */
	}
  
	h1 {
	  color: black;
	  text-transform: uppercase;
	  font-size: 4em;  /* 큰 화면에서 큰 폰트 사이즈 */
	  font-weight: 100;
	  white-space: pre-wrap;
	  margin-bottom: 20px;  /* h1과 이미지 사이의 간격 */
	}
  
	img {
	  max-width: 80%;  /* 이미지 최대 너비를 80%로 설정 */
	  height: auto;  /* 이미지의 비율을 유지 */
	  max-height: 50vh;  /* 이미지의 최대 높이를 뷰포트의 50%로 제한 */
	}
  
	.shadow-drop-2-lr {
	  animation: shadow-drop-2-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
  
	@media (max-width: 640px) {  /* 모바일 뷰를 위한 미디어 쿼리 */
	  h1 {
		font-size: 2em;  /* 모바일에서 폰트 크기 줄임 */
	  }
  
	  img {
		max-width: 95%;  /* 모바일에서 이미지 너비를 더 늘림 */
	  }
	}
  </style>
  