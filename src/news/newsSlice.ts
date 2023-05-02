import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "common/api";
import {INewsState} from "common/api/types";

const initialState: INewsState = {
  totalResults: 0,
  articles: [],
  isFavorites: false,
  status: '',
}

const slice = createSlice({name: 'news/slice',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INewsState>) => {
      return action.payload
    },
    addToFavorites: (state, action: PayloadAction<{ url: string, isFavorite: boolean}>) => {
      const newsItem = state.articles.find(e => e.url === action.payload.url)
      if (newsItem) newsItem.isFavorite = action.payload.isFavorite
    },
    removeNews: (state, action: PayloadAction<string>) => {
      const news = state.articles
      const index = news.findIndex(newsItem => newsItem.url === action.payload)
      if (index !== -1) news.splice(index, 1)
    },
    changeFilter: (state) => {
      state.isFavorites = !state.isFavorites
    },
    resetNews: (state) => {
      state.articles = []
    },
  }
})

export const fetchNews = createAsyncThunk(
  'news',
  async (_, {dispatch}) => {
    try {
      const response = await API.getNews()
      dispatch(setNews(response))
    } catch (e) {
      console.log(e)
    }
  }
)

export const newsReducer = slice.reducer
export const {setNews, addToFavorites, removeNews, changeFilter, resetNews} = slice.actions