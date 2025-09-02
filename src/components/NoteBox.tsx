import { Link } from "react-router";
import type { Note } from "../model/Note";

function NoteBox({note, onDelete}: {note: Note; onDelete:(id: number) => void}){
    return (
        <div className="bg-gray-300 gap-4 border rounded-2xl border-none shadow-black shadow-3xl py-5">
            <div className="px-3">
            <h1 className="text-center text-3xl font-semibold">{note.title}</h1>
            <p className="pl-4 pt-6 text-gray-500">{note.createdAt?.substring(0,10)}</p>
            <p className="py-2 text-center text-2xl ">{note.content}</p>

            </div>
            <hr className="pt-8">
            </hr>
            <div className="flex justify-evenly">
                <Link to={`/notes/${note.id}`}>
                <div className="bg-yellow-200 rounded-2xl border-none shadow-gray-600 px-8 py-3 shadow-2xl hover:shadow-2xs"
                >Edit</div>
                </Link>

                <div onClick={() => onDelete(note.id!)}
                className="bg-red-400 rounded-2xl border-none shadow-gray-600 px-8 py-3 shadow-2xl hover:shadow-2xs">Delete</div>
            </div>
        </div>

    );
}
export default NoteBox;