const BACKEND_URL = 'https://localhost:44312/api';

export const getPosts = async () => {
  const response = await fetch(`${BACKEND_URL}/post`, {});

  const posts = await response.json();

  return posts;
};
