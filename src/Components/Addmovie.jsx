import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 simple validation
    if (!title.trim() || !genre.trim()) return;

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      year,
    };

    addMovie(newMovie);

    // reset form
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-xl mb-6 flex flex-col gap-3"
    >
      <h2 className="text-xl font-semibold text-center">
        Add New Movie
      </h2>

      {/* Title */}
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Genre */}
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      {/* Year */}
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Year (optional)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;