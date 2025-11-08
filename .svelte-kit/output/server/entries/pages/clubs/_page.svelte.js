import { z as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
import "clsx";
function Clubbanner($$payload) {
  $$payload.out.push(`<div id="ysws" class="svelte-1e6dnx7"><div id="banner1" class="svelte-1e6dnx7"><br class="svelte-1e6dnx7"/><br class="svelte-1e6dnx7"/> <h2 class="svelte-1e6dnx7">You ship</h2> <h1 class="svelte-1e6dnx7">A SVELTE SITE</h1> <br class="svelte-1e6dnx7"/><br class="svelte-1e6dnx7"/></div> <div id="banner2" class="svelte-1e6dnx7"><br class="svelte-1e6dnx7"/><br class="svelte-1e6dnx7"/> <h2 class="svelte-1e6dnx7">We ship</h2> <h1 class="svelte-1e6dnx7">IKEA ANIMAL PLUSHIES + STICKERS</h1> <br class="svelte-1e6dnx7"/><br class="svelte-1e6dnx7"/></div></div>`);
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> `);
  Clubbanner($$payload);
  $$payload.out.push(`<!----> <div id="body" class="svelte-1qb6w5w"><h1 class="svelte-1qb6w5w"><span translate="no" class="material-symbols-outlined svelte-1qb6w5w">groups</span></h1> <br/><br/> <h1 class="svelte-1qb6w5w">The Zoo, for Hack Clubs</h1> <h3>For clubs, by a club leader</h3> <br/> <div class="box svelte-1qb6w5w"><h2>Page coming soon!</h2> <h3>This is part of The Zoo v2</h3></div> <h2>More questions?</h2> <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
