import { GiphyFetch } from '@giphy/js-fetch-api';

export const giphyFetch = new GiphyFetch('jPfuJcPH7hhMiybOGt7wFKy1qLgGO0It');

export const trendingGif = async () => {
  try {
    const { data } = await giphyFetch.trending({ limit: 10 });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getGif = async searchText => {
  try {
    const { data } = await giphyFetch.search(searchText, { limit: 10 });
    return data;
  } catch (error) {
    console.log(error);
  }
};
