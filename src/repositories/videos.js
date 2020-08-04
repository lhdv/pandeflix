import cfg from '../config';

const URL_VIDEOS = `${cfg.URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (resp) => {
      if (resp.ok) {
        const jsonResp = await resp.json();
        return jsonResp;
      }

      throw new Error('Error on saving data');
    });
}

export default {
  create,
};
