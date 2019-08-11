import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://test.datalb.ru/test.json'
});

export const API = {
    getCustomizationData(){
        return instance.get()
            .then(res => res.data)
    }
};