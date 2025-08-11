import { useParams } from "react-router-dom";

const movies = [
    {
        id: 1,
        title: "The Matrix",
        year: 1999,
        image: "/images/matrix.jpg",
        description: "A hacker discovers reality is a simulation.",
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        image: "/images/dark.jpg",
        description: "Batman faces the Joker in Gotham's darkest hour.",
    },
    {
        id: 3,
        title: "Avatar",
        year: 2009,
        image: "/images/avatar.jpg",
        description: "A marine on an alien planet becomes part of the Na'vi culture.",
    },
];

export default function MovieDetails() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    return (
        <div>
            <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "400px", objectFit: "contain" }}
            />
            <h2>
                {movie.title} ({movie.year})
            </h2>
            <p>{movie.description}</p>
        </div>
    );
}
