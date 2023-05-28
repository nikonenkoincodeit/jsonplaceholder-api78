import { getData } from "../api";
import { addMarkup } from "../utils";
import { photoListEl } from "../refs";
import { createAlbumCard } from "../markup";

window.addEventListener("load", init);

async function init() {
  try {
    const params = new URLSearchParams(location.search);
    const data = await getData(`photos?albumId=${params.get("albumid")}`);
    const markup = createAlbumCard(data);
    addMarkup(markup, photoListEl);
  } catch (error) {
    console.log(error.message);
  }
}

// -------without async/await-----
// function init() {
//   const params = new URLSearchParams(location.search);
//   getData(`photos?albumId=${params.get("albumid")}`).then((data) => {
//     const markup = createAlbumCard(data);
//     addMarkup(markup, photoListEl);
//   });
// }
