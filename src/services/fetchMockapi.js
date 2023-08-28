import axios from 'axios';

axios.defaults.baseURL = 'https://64ea5783bf99bdcc8e6781a2.mockapi.io';

export const getAllContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
