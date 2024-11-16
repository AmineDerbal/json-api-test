import axios from 'axios';
import apiUrl from './api';

/**
 * Create a new post using the API endpoint and axios library, return the response data
 * @param {string} url
 * @param {object} data
 * @returns {object}
 */
const postApiRequest = async (data) => {
  const url = `${apiUrl}/posts`;

  try {
    const response = await axios.post(url, data);
    console.log('response data from post request', response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * Generate a new post data with an excerpt from the body
 * @returns {object}
 */
const generatePostData = () => {
  const body = 'This is a my new post body for this jsonplaceholder API';
  const title = 'New Post 101';
  const userId = 1;
  const excerpt = body.substring(0, 20);
  return { title, body, userId, excerpt };
};

export { postApiRequest, generatePostData };
