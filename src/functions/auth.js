import axios from "axios";
import store from "../store";

/**
 * Аутентификация на странице логина
 * @param baseUrl
 * @param email
 * @param code
 * @returns {Promise<{error: undefined, token: undefined}>}
 */
export async function getAuth(baseUrl, email, code) {
    let token = undefined;
    let e = undefined;
    await axios.post(baseUrl + `user/login`, {email: email, code: code}).then(response => {
        token = response.data?.token;
    }).catch(function (error) {
        e = error.response.data
    })

    return {token: token, error: e};
}

/**
 * @returns {Promise<{error: undefined, token: undefined}>}
 */
export function getToken(name) {
    let matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,
            '\\$1') + "=([^;]*)"
        ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Очищаем куки чтобы сбросить токен
 * todo нужно будет продумать момент удаления куков, чтобы не все дропать
 *
 * @returns {Promise<{error: undefined, token: undefined}>}
 */
export function clearCookie() {
    store.commit('setToken', undefined)
    document.cookie = ''
}


/**
 * Проверяем есть ли токен в хранилице
 *
 * todo нужно будет продумать момент удаления куков, чтобы не все дропать
 *
 * @returns {Promise<{error: undefined, token: undefined}>}
 */
export function checkAccess() {
    return store.getters.getToken !== undefined;
}

/**
 *
 * @returns {Promise<void>}
 */
export async function logout() {
    clearCookie();
    store.commit('setToken', undefined);
}