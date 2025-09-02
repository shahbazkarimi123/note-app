import axios from "axios";
import type { Note } from "../model/Note";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const createNote = async (note: Omit<Note, "id" | "createdAt" | "updatedAt">): Promise<Note> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, note);
    return response.data;
  } catch (error) {
    console.error("Error creating note", error);
    throw error;
  }
};

// 3. Delete a note by ID
export const deleteNote = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error("Error deleting note", error);
    throw error;
  }
};



export const getNoteById = async (id: number): Promise<Note> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching note by ID", error);
    throw error;
  }
};

export const updateNote = async (id:number, noteData:Note) => {
  try {
    const response = await axios.put(`${API_BASE_URL]/id/${id}`, noteData);
    console.log("Updated Note:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};