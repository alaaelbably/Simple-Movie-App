import { Link } from "react-router-dom";

const movies = [
    { id: 1, title: "The Matrix", year: 1999 },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
    },
    {
        id: 3,
        title: "Avatar",
        year: 2009,
    },
    {
        id: 4,
        title: "Inception",
        year: 2010,
    },
];

export default function Movies() {
    return (
        <div>
            <h2 className="mb-4">Movies List</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text text-muted">Year: {movie.year}</p>
                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="btn btn-primary mt-auto">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
