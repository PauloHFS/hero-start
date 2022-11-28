import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { backend } from '../../services/backend';

/*
TODO: CHANGE THIS TO useInfinityQuery
*/
export const useHeros = () => {
  return useQuery(['heros'], () => backend.get('/hero').then(res => res.data));
};
