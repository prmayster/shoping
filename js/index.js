"use strict";

const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренніх фильмов?', ''),
      b = prompt('Какую оценку ему ставите?', ''),
      c = prompt('Один из последних просмотренніх фильмов?', ''),
      d = prompt('Какую оценку ему ставите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);