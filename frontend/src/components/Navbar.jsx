import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from "lucide-react"

const Navbar = () => {
  return (
    <header className="bg-slate-100">
        <div className="mx-auto max-w-6xl p-6 flex justify-center">
            <div className="flex items-center gap-8">
                <h1 className="text-5xl font-bold text-primary font-mono tracking-tighter">Thinking Note</h1>
                <div className="flex items-center gap-4 tooltip tooltip-bottom" data-tip="create new note?">
                    <Link to={"/create"} className="btn btn-primary">
                        <PlusIcon className="size-5" />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Navbar