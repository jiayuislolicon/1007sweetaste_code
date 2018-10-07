import {formRequest, queryRequest} from 'request'
import * as Cookies from "js-cookie"


export const SET_NEWS_DATA = 'SET_NEWS_DATA'
export const setNewsData = (newsData) => {
    return {
        type: SET_NEWS_DATA,
        newsData
    }
}