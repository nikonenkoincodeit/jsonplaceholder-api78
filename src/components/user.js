import { getData } from "../api";
import { addMarkup } from "../utils";
import { tableBodyUserEl, userAlbumListEl } from "../refs";
import { userIdMarkup, createAlbumList } from "../markup";

window.addEventListener("load", init);

async function init() {
  const params = new URLSearchParams(location.search);
  try {
    const dataUser = await getData(`users/${params.get("userid")}`);
    const markupUser = userIdMarkup(dataUser);
    addMarkup(markupUser, tableBodyUserEl);
    // якщо потрібна обробка помилки окремо для кожного випадку - розкоментуй це
    //} catch (error) {
    //     console.log(error.message);
    //}
    //try {
    const dataUserAlbum = await getData(
      `albums?userId=${params.get("userid")}`
    );
    const markupUserAlbum = createAlbumList(dataUserAlbum);
    addMarkup(markupUserAlbum, userAlbumListEl);
  } catch (error) {
    console.log(error.message);
  }
}

userAlbumListEl.addEventListener("click", onAlbumClick);

function onAlbumClick(event) {
  const liEl = event.target.closest("li");
  if (liEl.nodeName !== "LI") return;
  const albumId = liEl.dataset.id;
  location.href = `album.html?albumid=${albumId}`;
}

// -------without async/await-----
// function init() {
//   const params = new URLSearchParams(location.search);
//   getData(`users/${params.get("userid")}`).then((data) => {
//     const markup = userIdMarkup(data);
//     addMarkup(markup, tableBodyUserEl);
//   });
//   getData(`albums?userId=${params.get("userid")}`).then((data) => {
//     const markup = createAlbumList(data);
//     addMarkup(markup, userAlbumListEl);
//   });
// }
