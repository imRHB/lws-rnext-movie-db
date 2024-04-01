import Modal from "@/app/(components)/Modal";
import MovieDetails from "@/app/(components)/movie/MovieDetails";

export default async function MovieDetailsPage({ params: { lang, movieId } }) {
    return (
        <Modal>
            <MovieDetails lang={lang} movieId={movieId} />
        </Modal>
    );
}
