import { z as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
import { B as Banner } from "../../../chunks/banner.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://css.hackclub.com/theme.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;icon_names=lock_person,pets"/>`);
  });
  Navbar($$payload);
  $$payload.out.push(`<!----> `);
  Banner($$payload);
  $$payload.out.push(`<!----> <div id="body" class="svelte-t5e7n4"><br/><br/> <h2 style="font-size: 35px;">What if I can't order from Ikea?</h2> <br/> <h3>Ikea is amazing <em>(if you've never been to one, put it on your bucket list)</em>; however, not everyone has access to one. Maybe you live in a country that doesn't have one or you live out of range for delivery. Don't worry, we still got you covered!</h3> <h3>If you live in a country/region where delivery is either very expensive (must be unreasonable pricing) or just not available, you are eligible to use your mynts towards buying plushies on another shipping service.</h3> <br/> <img id="globe" src="monde.png" alt="globe plushie" class="svelte-t5e7n4"/> <br/><br/> <div class="content svelte-t5e7n4"><h2>Approved 3rd Party Services</h2><br/> <button class="service svelte-t5e7n4"><h2>Amazon</h2></button><br/> <button class="service svelte-t5e7n4"><h2>Shopee</h2></button><br/> <button class="service svelte-t5e7n4"><h2>eBay</h2></button><br/> <br/> <h4>*We are not able to support local vendors, you must buy your plushie from an online (reliable) shipping service.</h4></div> <br/> <h3>You do not need to purchase an Ikea plushie from these services, any animal plushie will work.</h3> <h3>Please note, if you do not meet the conditions listed above, you cannot purchase your plushie outside Ikea. You must declare on your submission form if you cannot purchase from Ikea in order to use this.</h3> <br/><br/> <h2>More questions? Want to request an alternate service?</h2> <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
