import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Note } from "../model/Note";
import { getNoteById, updateNote } from "../services/Data";

export default function UpdateNote() {
  const { id } = useParams<{ id: string }>(); // note id from URL
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getNoteById(Number(id)).then((data) => {
        setNote(data);
        setLoading(false);
      });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!note) return;
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (note) {
        try{

            await updateNote(note.id!, {
                title: note.title,
                content: note.content,
            });
            alert("Note updated successfully!");
            navigate("/notes");
        }catch(err){
            console.error(err);
  alert("Failed to update note");

        }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!note) return <p>No note found</p>;

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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
