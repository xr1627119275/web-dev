// const PROFILE_API = 'https://node-on-heroku-1124.herokuapp.com/api/profile';
const PROFILE_API = 'http://127.0.0.1:4000/api/profile';

export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
                dispatch({
                    type: 'fetch-profile',
                    profile
                })
            }
        );
export const updateCurrentProfile = (dispatch, newOwner) => {
    console.log(newOwner);

    fetch(PROFILE_API, {
        method: 'POST',
        body: JSON.stringify(newOwner),
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    })
        .then(response => {
            console.log(response);
            return response.clone().json()
        })
        .then(profile =>
            dispatch({
                type: 'save',
                profile
            }))
    console.log("after dispatch ====== ", newOwner);
};
