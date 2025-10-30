import axios from 'axios';

const API = 'https://api.github.com';
const USER = 'JayMiller08';

// Optionally provide in .env for authenticated requests
env: import.meta.env.VITE_GITHUB_TOKEN

export async function fetchProfile() {
  const res = await axios.get(`${API}/users/${USER}`);
  return res.data;
}

export async function fetchRepos() {
  const res = await axios.get(`${API}/users/${USER}/repos?sort=updated&per_page=30`);
  return res.data;
}

export async function fetchRepoReadme(repo) {
  const res = await axios.get(`${API}/repos/${USER}/${repo}/readme`, {
    headers: { Accept: 'application/vnd.github.v3.raw' }
  });
  return res.data;
}
