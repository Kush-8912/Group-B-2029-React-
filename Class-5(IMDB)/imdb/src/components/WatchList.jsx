import React from "react";

function WatchList({watchList}) {
  const movies = [
    {
      id: 1,
      poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
      name: "Inception",
      ratings: 8.8,
      popularity: 95,
      genre: "Sci-Fi",
    },
    {
      id: 2,
      poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop",
      name: "The Dark Knight",
      ratings: 9.0,
      popularity: 98,
      genre: "Action",
    },
  ];

  return (
    <div className="m-8 overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Poster</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Ratings</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Popularity</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Genre</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movie) => (
            <tr key={movie.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <img 
                  className="h-25 w-17.5 object-cover rounded-md shadow-sm" 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  alt={movie.name} 
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">{movie.original_title}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span> {movie.vote_average}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${movie.popularity}%` }}
                  ></div>
                </div>
                <span className="text-xs mt-1 block">{movie.popularity}%</span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  {/* {movie.genre} */}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600 hover:text-red-800 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;