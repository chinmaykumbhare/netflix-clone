import axios from "axios";

//base url -> make request to db

const instance = axios.create({
    //get requests get appended here
   baseURL: "https://api.themoviedb.org/3",
});

//there is just one default. Always.
export default instance;