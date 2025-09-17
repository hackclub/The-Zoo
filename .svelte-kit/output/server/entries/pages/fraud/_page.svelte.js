import { z as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;icon_names=assured_workload,pets"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> <div id="body" class="svelte-m6679k"><h1 class="svelte-m6679k"><span class="material-symbols-outlined svelte-m6679k">assured_workload</span></h1> <br/><br/> <h1 class="svelte-m6679k">Fraud is not tolerated.</h1> <br/><br/><br/> <h3>The Zoo reserves the right to flag and/or reject submissions upon suspicion of fraud. Once suspected for fraud, you likely will not be able to resubmit any work for this YSWS. Your submission may be flagged for fraud if one or more conditions below apply.</h3> <br/> <div class="policy svelte-m6679k"><h2>Created by someone not in Middle School or High School</h2> <h3>This program is only open to those in Middle School and High School. Those 19 or above are not allowed to participate.</h3></div> <div class="policy svelte-m6679k"><h2>Extensive use of AI</h2> <h3>Usage of AI beyond simple debugging is considered fraud and will not be condoned.</h3></div> <div class="policy svelte-m6679k"><h2>Submitting projects not tracked on Hackatime</h2> <h3>If your project is not tracked on <a href="https://hackatime.hackclub.com" class="svelte-m6679k">Hackatime</a>, it is not eligible for submission and will be flagged.</h3></div> <br/><br/> <h2>More questions?</h2> <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
