import { createContext, useContext, useEffect, useReducer } from 'react';
import { manageTweet, initialState } from '.';
import { trendingGif } from '../data/gif-setup';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweetState, tweetDispatch] = useReducer(manageTweet, initialState);

  useEffect(() => {
    (async () => {
      const data = await trendingGif();
      tweetDispatch({ type: 'TRENDING_GIF_RESULTS', payload: { gifs: data } });
      tweetDispatch({ type: 'GIF_RESULTS', payload: { gifs: data } });
    })();
  }, []);

  return (
    <TweetContext.Provider value={{ tweetState, tweetDispatch }}>
      {children}
    </TweetContext.Provider>
  );
};

export const useTweet = () => useContext(TweetContext);
