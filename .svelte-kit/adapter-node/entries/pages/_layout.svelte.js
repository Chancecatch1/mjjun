import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="w-full max-w-[1120px] h-[35px] pt-2.5 pb-0.5 mx-auto flex justify-between items-end mt-4" data-svelte-h="svelte-6zj40j"> <div class="flex items-center"><a href="/"><img src="/logo_mj.png" alt="Logo" class="h-8"></a></div>  <div class="flex space-x-8"><div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed"><a href="/work">work</a></div> <div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed"><a href="/playground">playground</a></div></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="w-full max-w-[1120px] h-auto mx-auto flex justify-between items-center py-4" data-svelte-h="svelte-17qhyl7"> <div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed">myungjunlee, copyright@2024</div>  <div class="flex space-x-8"><div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed"><a href="https://www.instagram.com/chancecatch/" target="_blank">instagram</a></div> <div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed"><a href="https://www.linkedin.com/in/mlmj" target="_blank">linkedin</a></div> <div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed"><a href="https://www.youtube.com/@chancecatch" target="_blank">youtube</a></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
