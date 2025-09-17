import "clsx";
function Navbar($$payload) {
  $$payload.out.push(`<div id="navbar" class="svelte-v5u3oi"><a href="./"><img id="logo" src="logo.png" alt="Logo" class="svelte-v5u3oi"/></a> <button class="navbutton svelte-v5u3oi">MYNTS</button> <button class="navbutton svelte-v5u3oi">REQUIREMENTS</button> <button class="navbutton svelte-v5u3oi">SHIPPING</button></div> <div id="spacing" class="svelte-v5u3oi"></div>`);
}
function Footer($$payload) {
  $$payload.out.push(`<div id="bdy" class="svelte-a3b7ol"><button class="svelte-a3b7ol"><h4>Hack Club</h4></button> <h5 class="svelte-a3b7ol">The Zoo is built with love for teens, by teens</h5> <span class="material-symbols-outlined svelte-a3b7ol">pets</span> <br/><br/> <h4><a href="/fraud" class="svelte-a3b7ol">Fraud Disclaimer</a> | <a href="/privacy" class="svelte-a3b7ol">Privacy Policies</a></h4></div>`);
}
export {
  Footer as F,
  Navbar as N
};
