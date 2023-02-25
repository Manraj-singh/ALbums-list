import { createContext } from "react";

import { useProvideAlbums } from "../hooks";

const initialState = {
  albums: [],
  loading: true,
  updateAlbum: () => {},
  deleteAlbum: () => {},
};

export const AlbumsContext = createContext(initialState);

export const AlbumsProvider = ({ children }) => {
  const albums = useProvideAlbums();

  return (
    <AlbumsContext.Provider value={albums}>{children}</AlbumsContext.Provider>
  );
};
