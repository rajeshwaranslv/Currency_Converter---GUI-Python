import axios from "axios";
const LIST_PAGE = 'LIST_PAGE';
const ADD_PAGE = 'ADD_PAGE';

export function AC_ADD_PAGE(userData) {
    console.log('======Add page======', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/pages/addUpdatePages", userData)
            .then(({ data }) => {
                dispatch({ type: ADD_PAGE, payload: data })
            });
    };
}
export function AC_LIST_PAGE() {
    return function (dispatch) {
        return axios.get("http://localhost:8000/api/v1/pages/listPages")
            .then(({ data }) => {
                console.log('=====List page====', data)
                dispatch({ type: LIST_PAGE, payload: data })
            });

    }
}
