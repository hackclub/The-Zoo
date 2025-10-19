import { z as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
import { B as Banner } from "../../../chunks/banner.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> `);
  Banner($$payload);
  $$payload.out.push(`<!----> <div id="body" class="svelte-1h0d3iq"><h1 class="svelte-1h0d3iq"><span translate="no" class="material-symbols-outlined svelte-1h0d3iq">groups</span></h1> <br/><br/> <h1 class="svelte-1h0d3iq">The Zoo, for Hack Clubs</h1> <h3>For clubs, by a club leader</h3> <br/><br/><br/> <h3>The Zoo is dedicated to keeping your personal information secure and safe, and committed to having 0 data breach incidents. Below are our privacy policies for handling your data.</h3> <br/> <div class="policy svelte-1h0d3iq"><h2>Page coming soon!</h2> <h3>This is part of The Zoo v2</h3></div> <h2>More questions?</h2> <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
