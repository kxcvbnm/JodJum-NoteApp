import React from 'react'
import { useState } from "react";
import { Link } from 'react-router'
import Note from '../../../backend/src/models/Note'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import ConfirmModal from "../components/ConfirmationModal";

const NoteCard = ({ note, setNotes }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
    setShowModal(false);
  };

  return (
    <>
      <Link
        to={`/note/${note._id}`}
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 
        border-4 border-solid border-primary"
      >
        <div className="card-body">
          <h3 className="card-title text-base-content inline-block">
            {note.title}
          </h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>

          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <button className="btn btn-ghost btn-xs tooltip" data-tip="Edit">
                <PenSquareIcon className="size-4" />
              </button>
              <button
                className="btn btn-ghost btn-xs text-error tooltip"
                data-tip="Delete"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      <ConfirmModal
        isOpen={showModal}
        title="Confirm Delete"
        message="Are you sure you want to delete this note?"
        onConfirm={() => handleDelete(note._id)}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export default NoteCard;