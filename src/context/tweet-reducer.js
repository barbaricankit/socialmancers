import { feeds } from '../data/feeds.json';

export const manageTweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return { ...state, tweet: action.payload.value };
    case 'ADD_GIF':
      return { ...state, gif: action.payload.gif };
    case 'REMOVE_GIF':
      return { ...state, gif: null };
    case 'TRENDING_GIF_RESULTS':
      return { ...state, trendingGifs: action.payload.gifs };
    case 'GIF_RESULTS':
      const gifs = action.payload.gifs;
      return { ...state, gifs: gifs.length ? gifs : state.trendingGifs };
    case 'ADD_TWEET_TO_FEEDS':
      return { ...state, feeds: [action.payload.feed, ...state.feeds] };
    case 'LIKED_DISLIKED_TWEET':
      return {
        ...state,
        feeds: state.feeds.map(feed =>
          feed.id === action.payload.feed.id
            ? {
                ...feed,
                isLiked: !feed.isLiked,
                likes: feed.isLiked ? feed.likes - 1 : feed.likes + 1,
              }
            : feed
        ),
      };
    case 'SHOW_HIDE_GIF_MODAL':
      return { ...state, showGifModal: !state.showGifModal };
    case 'RESET_ALL':
      return {
        ...state,
        tweet: '',
        gif: null,
        gifs: state.trendingGifs,
      };
    default:
      return state;
  }
};

export const initialState = {
  tweet: '',
  gif: null,
  feeds,
  gifs: [],
  trendingGifs: [],
  showGifModal: false,
};
