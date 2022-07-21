import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";

function Detail(){
    const [movieDetail, setMovieDetail] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const response = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(response.data.movie);
    }
    useEffect(() => {
        getMovie();
    },[])
    console.log(movieDetail);
    return <div>
        <h1>{movieDetail.title}</h1>
        <img src={movieDetail.large_cover_image} alt={movieDetail.title}/>
        <p>{movieDetail.summary}</p>
    </div>
}

export default Detail;