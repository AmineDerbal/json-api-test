import axios from 'axios';
import apiUrl from './api';

/**
 * Update a post using the API endpoint and axios library, return the response data
 * @param {object} data
 * @returns {object}
 */

const updateApiRequest = async (data) => {
  const url = `${apiUrl}/posts/${data.id}`;

  try {
    const response = await axios.put(url, data);
    console.log('response data from put request', response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * Add an event listener to the updateButton to get the values from the elements with the ids in the updateFields array, construct a data object and pass it to the updateApiRequest function
 * @param {HTMLElement} updateButton
 * @param {string[]} updateFields
 */

const generateUpdateData = (updateButton, updateFields) => {
  updateButton.addEventListener('click', async () => {
    const data = {};
    updateFields.forEach((field) => {
      data[field] = document.getElementById(field).value;
      if (!data[field]) {
        alert('Please fill all fields');
        return;
      }
    });
    const response = await updateApiRequest(data);
    console.log('response data from update request', response);
  });
};

export { generateUpdateData };
