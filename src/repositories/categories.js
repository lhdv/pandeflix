import cfg from '../config';

const URL_CATEGORIES = `${cfg.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (resp) => {
      if (resp.ok) {
        const jsonResp = await resp.json();
        return jsonResp;
      }

      throw new Error('Error on getting data');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (resp) => {
      if (resp.ok) {
        const jsonResp = await resp.json();
        return jsonResp;
      }

      throw new Error('Error on getting data');
    });
}

export default {
  getAll,
  getAllCategoriesWithVideos,
};
