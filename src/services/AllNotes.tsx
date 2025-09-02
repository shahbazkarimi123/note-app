import axios from 'axios'

export const getAllNotes = async ()=>{
    try{
        const response = await axios.get("http://localhost:8080/api/notes/all");
        return response.data;

    }catch(error){
        console.error("Error fetching Notes",error);
        throw error;

    }
}


