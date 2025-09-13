import React from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../lib/axios'

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true)
    try {
      await api.post("/notes", {
        title,
        content
      });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
        console.log("Error creating note", error);
        if(error.response.status === 429) {
          toast.error("Slow down, you're creating too many notes", {
            duratrion: 4000,
            icon: "🚀"
          });
        } else toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-300">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6 text-gray-500 font-bold">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 border-4 border-solid border-primary">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4 text-gray-500 font-bold">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-500 font-bold">Title</span>
                  </label>
                  <input type="text" 
                         placeholder="Note Title" 
                         className="input input-bordered"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}>
                  </input>
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-500 font-bold">Content</span>
                  </label>
                  <textarea placeholder="Write your note here..."
                            className="textarea textarea-bordered h-32"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}>
                  </textarea>
                </div>

                <div className="card-actions justify-center">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePage