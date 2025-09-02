import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getAllNotes = async ()=>{
    try{
        const response = await axios.get("http://localhost:8080/api/notes/all");
        return response.data;

    }catch(error){
        console.error("Error fetching Notes",error);
        throw error;

    }
}


