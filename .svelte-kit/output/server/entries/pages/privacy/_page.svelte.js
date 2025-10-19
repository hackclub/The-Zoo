import { z as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> <div id="body" class="svelte-1h0d3iq"><h1 class="svelte-1h0d3iq"><span translate="no" class="material-symbols-outlined svelte-1h0d3iq">lock_person</span></h1> <br/><br/> <h1 class="svelte-1h0d3iq">Your privacy is paramount to us.</h1> <br/><br/><br/> <h3>The Zoo is dedicated to keeping your personal information secure and safe, and committed to having 0 data breach incidents. Below are our privacy policies for handling your data.</h3> <br/> <div class="policy svelte-1h0d3iq"><h2>Identity Vault Verification</h2> <h3>No staff member outside HCB's operations team can access your data in the Identity Vault at <a href="https://identity.hackclub.com" class="svelte-1h0d3iq">identity.hackclub.com</a>. The Zoo staff will only receive a yes or no as to if you are verified and eligible to participate.</h3></div> <div class="policy svelte-1h0d3iq"><h2>Authorized access to information</h2> <h3>Only individuals under Hack Club's NDA can access your data directly.</h3></div> <div class="policy svelte-1h0d3iq"><h2>Using AI to analyze data</h2> <h3>No personally identifyable information, such as emails, names or addresses will be given to any AI model or platform. Statistics such as coding hours or mynt balances may be given to an AI model or platform.</h3></div> <div class="policy svelte-1h0d3iq"><h2>APIs containing personal information</h2> <h3>No public APIs, behind auth or not, will contain personal information, such as emails, names or addresses. All personal information will be securely stored directly on Airtable or locally.</h3></div> <br/><br/> <h2>More questions?</h2> <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
