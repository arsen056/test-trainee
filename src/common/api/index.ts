import axios from "axios";
import {INewsState} from "common/api/types";

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'

const instance = axios.create({
  baseURL: `${CORS_URL}https://newsapi.org/v2/`,
  headers: {
    Authorization: '7b95c4fcb9694e23b9c225736e359217'
  }
});

export const API = {
  getNews () {
    return instance
      .get<INewsState>('top-headlines?country=us')
      .then(res => res.data)
  }
}