import axios from 'axios';
const API_URL = 'https://localhost:4000';

export default class DataService {


    getLocations() {

        const url = `${API_URL}/location/getAll/`;

        return axios.get(url).then(response => response.data);
    }

    getNeeds() {

        const url = `${API_URL}/need/getAll/`;

        return axios.get(url).then(response => response.data);
    }
    getNeed(pk) {

        const url = `${API_URL}/api/need/${pk}`;

        return axios.get(url).then(response => response.data);

    }

    deleteNeed(need) {
        const url = `${API_URL}/need/delete/${need.pk}`;
        return axios.delete(url);
    }

    createNeed(need) {
        const url = `${API_URL}/need`;
        return axios.post(url, need);
    }

    updateNeed(need) {
        const url = `${API_URL}/need/${need.pk}`;
        return axios.put(url, need);
    }

    getOffers() {

        const url = `${API_URL}/offer/getAll/`;

        return axios.get(url).then(response => response.data);
    }
    getOffer(pk) {

        const url = `${API_URL}/api/offer/${pk}`;

        return axios.get(url).then(response => response.data);

    }

    deleteOffer(offer) {
        const url = `${API_URL}/offer/delete/${offer.pk}`;
        return axios.delete(url);
    }

    createOffer(offer) {
        const url = `${API_URL}/offer`;
        return axios.post(url, offer);
    }

    updateOffer(offer) {
        const url = `${API_URL}/offer/${offer.pk}`;
        return axios.put(url, offer);
    }

}
