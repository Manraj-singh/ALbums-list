const API_ROOT = "https://jsonplaceholder.typicode.com/albums";

export const API_URLS = {
  getAllAlbums: () => `${API_ROOT}`,
  getAlbum: (id) => `${API_ROOT}/${id}`,
  createAlbum: () => `${API_ROOT}`,
  updateAlbum: (id) => `${API_ROOT}/${id}`,
  deleteAlbum: (id) => `${API_ROOT}/${id}`,
};
