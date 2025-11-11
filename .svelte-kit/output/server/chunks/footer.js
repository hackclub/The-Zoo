import "clsx";
import { w as pop, u as push } from "./index.js";
function Navbar($$payload, $$props) {
  push();
  $$payload.out.push(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;icon_names=arrow_drop_down_circle,assured_workload,docs,groups,home,list_alt_check,lock_person,package,pets,poker_chip"/> <nav id="navbar" class="active svelte-1s8ojbt"><a href="./"><img id="logo" src="logo.png" alt="Logo" class="svelte-1s8ojbt"/></a> <div id="buttons" class="svelte-1s8ojbt"><button translate="no" class="navbutton svelte-1s8ojbt" title="Home"><span class="material-symbols-outlined">home</span></button> <button translate="no" class="navbutton svelte-1s8ojbt" title="Mynts"><span class="material-symbols-outlined">poker_chip</span></button> <button translate="no" class="navbutton svelte-1s8ojbt" title="Requirements"><span class="material-symbols-outlined">docs</span></button> <button translate="no" class="navbutton svelte-1s8ojbt" title="Shipping"><span class="material-symbols-outlined">package</span></button> <button translate="no" class="navbutton svelte-1s8ojbt" title="Clubs"><span class="material-symbols-outlined">groups</span></button></div></nav> <div id="spacing" class="svelte-1s8ojbt"></div>`);
  pop();
}
function Footer($$payload) {
  $$payload.out.push(`<div id="bdy" class="svelte-a3b7ol"><button translate="no" class="svelte-a3b7ol"><h4>Hack Club</h4></button> <h5 class="svelte-a3b7ol">The Zoo is built with love; for teens, by teens</h5> <span translate="no" class="material-symbols-outlined svelte-a3b7ol">pets</span> <br/><br/> <nav><a href="/fraud" class="svelte-a3b7ol">Fraud Disclaimer</a> | <a href="/privacy" class="svelte-a3b7ol">Privacy Policies</a></nav></div>`);
}
export {
  Footer as F,
  Navbar as N
};
