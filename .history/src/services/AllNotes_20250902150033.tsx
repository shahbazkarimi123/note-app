import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getAllNotes = async ()=>{
    try{
        const response = await axios.get(`$`);
        return response.data;

    }catch(error){
        console.error("Error fetching Notes",error);
        throw error;

    }
}


