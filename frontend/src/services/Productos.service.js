import axios from 'axios';
import { constants } from '../util/constants';
export const listarProductos = (token) => {    

    try {
        return axios({
            method: 'GET',
            url: `${process.env.React_App_API_Url}${constants.listarProductos}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw error.status;
    }
}