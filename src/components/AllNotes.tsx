import { useEffect, useState } from "react";
import { getAllNotes } from "../services/AllNotes";
import { deleteNote } from "../services/Data";

import NoteBox from "./NoteBox";
import type { Note } from "../model/Note";

function AllNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getAllNotes();
        setNotes(data);
      } catch (err) {
        setError("Fail to load Notes..");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await deleteNote(id);
      // Remove the deleted note from state immediately
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete note");
    }
  };
  if (loading) return <p className="text-center">Loading Notes...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {notes.map((note: any) => (
        <div>
          <NoteBox key={note.id} note={note} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
export default AllNotes;
