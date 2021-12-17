import axios from 'axios';
import notie from 'notie';
export const loginGoogle = ({ tokenId }) => {

    return axios({
        method: 'POST',
        url: `${process.env.React_App_API_Url}/auth/google/login`,
        headers: {
            'Authorization': `Bearer ${tokenId}`
        }
    })
    .then(({ data }) => {
        return data;
    })
    .catch((error) => {
        console.log(error);
        return error
    });

}


