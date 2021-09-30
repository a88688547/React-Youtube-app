import axios from "axios"

const KEY = "AIzaSyCAsEuaX9fSRlwngcTaM8eTgwdqP6tpeOs" 

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY,
        type:"video",
    },
})


