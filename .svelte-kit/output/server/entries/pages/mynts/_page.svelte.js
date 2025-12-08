import { z as head, w as pop, u as push } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
import { B as Banner } from "../../../chunks/banner.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;icon_names=pets"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> `);
  Banner($$payload);
  $$payload.out.push(`<!----> <div id="main" class="svelte-13if00f"><h2 style="font-size: 40px;">How to earn Mynts</h2> <br/> <img src="mynt.png" alt="Mynt Coin" id="coin" class="svelte-13if00f"/> <br/><br/> <h3>In a nutshell, mynts are the currency you earn for your animals in the zoo. The better your submissions are, the more mynts you earn.</h3> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<h3>Throughout the duration of the YSWS, your mynts are added up. By the end, after everything is finalized, you will get an <a href="https://hcb.hackclub.com" class="svelte-13if00f">HCB</a> grant equivalent to the amount of mynts you earned (1.0 MYN = 0.75 USD). Whatever your choice of plushie costs + delivery fees (or just pick it up for less) is the amount of mynts you will need</h3> <br/><br/><br/>`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">15 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Following the minimum <a href="/requirements" class="svelte-13if00f">project requirements</a></h2> <h3 class="svelte-13if00f">You must do this to get ANY mynts</h3> <br/></div> <h3>------------</h3><br/><br/> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">1 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Each additional hour you spend beyond the base requirement (not beyond 15 hours)</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">2 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Including <a href="https://svelte.dev/docs/svelte/$effect" class="svelte-13if00f">$effect</a> runes on both your main and interactive page (they must have an individual unique purpose)</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">4 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Including <a href="https://svelte.dev/docs/svelte/if" class="svelte-13if00f">if</a> and <a href="https://svelte.dev/docs/svelte/each" class="svelte-13if00f">each</a> blocks in your site</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">4 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Making your project responsive (must work well on mobile, not just at a basic level)</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">5 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Making the facts panel a component and using <a href="https://svelte.dev/docs/svelte/$props" class="svelte-13if00f">$props</a> to transfer information</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">6 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Impressing us with your project (if you want this, know that AI slop won't pass the vibe check)</h2> <br/></div> <div class="rank svelte-13if00f"><h3 class="svelte-13if00f">You can earn</h3> <h1 class="svelte-13if00f">15 MYN</h1> <h3 class="svelte-13if00f">for</h3> <br/> <h2 class="svelte-13if00f">Blowing our socks off with how impressive your project is (this is more selective than the Ivy League... so get grinding if you want a shot at this)</h2> <br/><h4>*Cannot be combined with the 6 MYN bonus</h4> <br/></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
