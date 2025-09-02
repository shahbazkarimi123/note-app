import { useNavigate } from "react-router-dom";
import { createNote } from "../services/Data";
import { useState } from "react";
import type { Note } from "../model/Note";

function SaveNote(){
    const [note, setNote] = useState<Pick<Note, "title" | "content">>({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createNote(note);
      alert("Note created successfully!");
      navigate("/notes");
    } catch (err) {
      console.error(err);
      alert("Failed to create note");
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={note.title}
            onChange={handleChange}
            className="bg-gray-200 w-full h-14 rounded-xl px-3 placeholder-[#023e8a] 
            border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 
            shadow-md text-blue-900 font-medium"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Content</label>
          <textarea
            name="content"
            placeholder="Enter note content"
            value={note.content}
            onChange={handleChange}
            rows={6}
            className="bg-gray-200 w-full rounded-xl px-3 py-2 placeholder-[#023e8a] 
            border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 
            shadow-md text-blue-900 font-medium"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl px-6 py-3 
            shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
export default SaveNote;