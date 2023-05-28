import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tableBodyHomeEl } from "../refs";
import { addMarkup } from "../utils";

window.addEventListener("load", init);

async function init() {
  try {
    const data = await getData("users");
    const markup = makeFirstTableMarkup(data);
    addMarkup(markup, tableBodyHomeEl);
  } catch (error) {
    console.log(error.message);
  }
}

tableBodyHomeEl.addEventListener("click", onClick);

function onClick(event) {
  const trEl = event.target.closest("tr");
  if (trEl.nodeName !== "TR") return;
  const userId = trEl.dataset.userid;
  location.href = `user.html?userid=${userId}`;
}

// -------without async/await-----
//  function init() {
//   getData("users")
//     .then((data) => {
//       const markup = makeFirstTableMarkup(data);
//       addMarkup(markup, tableBodyHomeEl);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }
