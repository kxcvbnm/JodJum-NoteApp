import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/30 rounded-full p-8">
        <NotebookIcon className="size-20 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Every journey starts with a thought — write your first note to begin yours.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;