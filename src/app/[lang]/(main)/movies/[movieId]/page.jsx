import MovieDetails from "@/app/(components)/movie/MovieDetails";

export default async function MovieDetailsPage({ params: { lang, movieId } }) {
    return <MovieDetails lang={lang} movieId={movieId} />;
}
