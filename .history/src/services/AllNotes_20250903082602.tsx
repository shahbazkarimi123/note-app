import axios from 'axios'
const API_BASE_URL = "https://note-app-backend-production-assignment.up.railway.app/a"
export const getAllNotes = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/all`);
        return response.data;

    }catch(error){
        console.error("Error fetching Notes",error);
        throw error;

    }
}


