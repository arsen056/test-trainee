import {INewsState} from "types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: INewsState = {
  totalResults: 0,
  news: []
}

const slice = createSlice({name: 'news/slice',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INewsState>) => {
      return action.payload
    }
  }
})

export const newsReducer = slice.reducer