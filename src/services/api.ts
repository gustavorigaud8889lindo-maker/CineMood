import axios from 'axios';

export interface Movie {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string;
  movie_banner: string;
}

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
});

export async function getMovies(): Promise<Movie[]> {
  const response = await api.get<Movie[]>('/films');
  return response.data;
}