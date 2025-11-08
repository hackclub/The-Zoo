import { x as getContext, y as escape_html, w as pop, u as push } from "../../chunks/index.js";
import "clsx";
import { n as noop } from "../../chunks/equality.js";
import { w as writable } from "../../chunks/exports.js";
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function _error($$payload, $$props) {
  push();
  $$payload.out.push(`<br class="svelte-1kpc4ue"/> <h2 class="svelte-1kpc4ue">Uh oh :(</h2> <h1 class="svelte-1kpc4ue">${escape_html(page.status)}: ${escape_html(page.error.message)}</h1>`);
  pop();
}
export {
  _error as default
};
