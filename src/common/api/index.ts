import axios from "axios";
import {INewsState} from "common/api/types";

const APIKEY = '974f4f45e7c512f8a608bd5a26b47283'

const instance = axios.create({
  baseURL: 'https://gnews.io/api/v4/',
});

export const API = {
  getNews () {
    return instance
      .get<INewsState>(`top-headlines?country=us&apikey=${APIKEY}`)
      .then(res => res.data)
  }
}