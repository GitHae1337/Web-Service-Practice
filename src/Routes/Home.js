import { useEffect, useState } from "react";
import Movie from "../Components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  /* 아래 코드와 동일한 내용, fetch한 후 json 값을 바탕으로 movielist랑 loading update
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
            .then((response) => response.json())
            .then(json => {
                setMovieList(json.data.movies)
                setLoading(false);
            });
    }, [])
    */
  const getMovieList = async () => {
    /* 아래 한 줄로 정리 가능
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        );
        const json = await response.json();
        */
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();

    setMovieList(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieList.map((movie) => (
            // 여기서 props를 넘겨줄 때 coverImg는 우리가 선언한 변수로 이름 변경 가능.
            // '우리가_선언한_변수_이름 = {실제_data의_변수값}' 형태로
            // 전달 param과 받는 param의 1대1 대응이 될 필요는 없음
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
