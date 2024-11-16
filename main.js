import './style.css';
import { postApiRequest, generatePostData } from './src/postApiRequest.js';
import { fetchApiRequest } from './src/fetchApiRequest.js';
import { generateUpdateData } from './src/updateApiRequests.js';
import { setupCustomFields } from './src/handleForm.js';

window.onload = async () => {
  const customFieldsContainer = document.getElementById('customFields');
  const addCustomFieldButton = document.getElementById('addCustomField');

  const updateButton = document.getElementById('updatePostButton');

  const updateFields = ['id', 'userId', 'title', 'body'];

  const postData = generatePostData();
  await postApiRequest(postData);
  const fetchData = await fetchApiRequest();
  console.log('response data from fetch request', fetchData);

  setupCustomFields(customFieldsContainer, addCustomFieldButton, updateFields);
  generateUpdateData(updateButton, updateFields);
};
