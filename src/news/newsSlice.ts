import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "common/api";
import {INewsState} from "common/api/types";

const initialState: INewsState = {
  totalResults: 0,
  articles: [],
  status: '',
}

const slice = createSlice({name: 'news/slice',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INewsState>) => {
      return action.payload
    }
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
export const {setNews} = slice.actions