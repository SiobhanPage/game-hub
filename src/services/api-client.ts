import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8b27061495da4c66b15b9c42d4ed06d3'
    }
})