import api from '../services/api';
 
interface User {
  _id?: string,
  email?: string
  name?: string,
  bio?: string,
  image?: string,
  twitter?: string,
  instagram?: string
}

export async function getUser(_id: string) {
  const response = await api.get('/user/profile/' + _id);
  if (response) {
    return response.data
  }
}

export async function createUser(name: string, email: string, password: string) {
  const response = await api.post('/user/create', {
    name,
    email,
    password
  });
  if (response) {
    return response.data
  }
}

export async function authenticateUser(email: string, password: string) {
  const response = await api.post('/user/authenticate', {
    email,
    password
  });
  if(response) {
    return response.data;
  }
}

export async function updateUser(user: User) {
  const response = await api.post('/user/update', user);
  if(response) {
    return response.data;
  }
}