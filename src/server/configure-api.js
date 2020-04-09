import axios from 'axios';
import {Time} from '../utils/time/time.js';

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
    timeout: 5 * Time.MILLISECONDS_IN_SECOND
  });

  return api;
};

export default configureAPI;
