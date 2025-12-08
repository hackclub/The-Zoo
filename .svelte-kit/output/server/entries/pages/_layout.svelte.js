import "clsx";
import { w as pop, u as push } from "../../chunks/index.js";
function SelectMode($$payload, $$props) {
  push();
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  SelectMode($$payload);
  $$payload.out.push(`<!----> `);
  children($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
