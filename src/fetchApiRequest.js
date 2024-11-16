import axios from 'axios';
import apiUrl from './api';

/**
 * fetch comments data with the id 50 using the API endpoint and axios library, return the response data
 *
 * @returns {object}
 */

const fetchApiRequestComments = async () => {
  const url = `${apiUrl}/posts/50/comments`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * fetch post data with the id 50 using the API endpoint and axios library, merge the comments data with the post data, return the response data
 *
 * @returns {object}
 */

const fetchApiRequest = async () => {
  const url = `${apiUrl}/posts/50`;

  try {
    const response = await axios.get(url);
    const comments = await fetchApiRequestComments();
    const data = { ...response.data, comments };
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchApiRequest };
