import axios from "axios";
import store from "../store";
import {getToken} from "./auth";

export async function fetchArticles(baseUrl, article) {
    let articles = [];
    await axios.get(baseUrl + `search/article`, {'params': {'article': article}}).then(response => {
        articles = response.data;
    }).catch(function (error) {
        console.log(error);
    })
    return articles;
}

export async function getUser() {
    const token = getToken('token');
    console.log(token)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    let personal = undefined;
    await axios.get(store.getters.getUrl + `personal-info`, {}, config).then(response => {
        personal = response.data;
        store.commit('setPersonal', personal);
    }).catch(function (error) {
        console.log(error);
    })

    return personal;
}