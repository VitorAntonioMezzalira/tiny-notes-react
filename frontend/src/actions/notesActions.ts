import api from '../services/api';

interface Note {
  _id: string,
  userId: string,
  content: string
  // listName: string
}

export async function getNotes(userId: string) {
  const response = await api.get('/notes/profile/' + userId);
  if (response) {
    return response.data
  }
}