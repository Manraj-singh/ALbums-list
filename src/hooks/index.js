import { useContext, useEffect, useState } from "react";
import { getAllAlbums, editAlbum, removeAlbum } from "../api";
import { AlbumsContext } from "../providers";

//this will return all the state in the context provider
export const useAlbums = () => {
  // useContext is a React Hook that lets you read and subscribe to context from your component.
  return useContext(AlbumsContext);
};

export const useProvideAlbums = () => {
  //states for albums
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await getAllAlbums();

      setAlbums(response.data);
      if (response.success) {
        // setAlbums2(response.data);
      }

      setLoading(false);
    };

    fetchAlbums();
  }, []);

  const updateAlbum = async (id, title, userid) => {
    //call api and perform put operation and return success or false
    const response = await editAlbum(id, title, userid);
    if (response.success) {
      const newAlbum = albums.map((alb) => {
        if (alb.id === response.data.id) {
          alb.title = title;
        }
        return alb;
      });
      setAlbums([...newAlbum]);
      return {
        success: true,
      };
    } else {
      throw new Error(response.message);
    }
  };

  const deleteAlbum = async (id) => {
    const response = await removeAlbum(id);

    if (response.success) {
      console.log("del hook", response);
      const newAlbum = [...albums].filter((alb) => alb.id !== id);
      console.log(newAlbum);

      await setAlbums([]);
      console.log("alb", albums);

      return;
    }
  };

  return {
    data: albums,
    loading,
    updateAlbum,
    deleteAlbum,
  };
};
