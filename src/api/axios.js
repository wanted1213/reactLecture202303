import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "14110ed5a5ac5498691eb73a7e65b51e",
        language: "ko-KR",
    },
});

export default instance;