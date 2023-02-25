import React, { useState } from "react";
import { useProvideAlbums } from "../hooks/index";
import Loader from "./Loader";
export default function Album({ data }) {
  const { updateAlbum, deleteAlbum } = useProvideAlbums();
  //-----------------------STATES BEGIN----------------------------------
  const [newValue, setNewValue] = useState(data.title);
  const [prevValue, setPrevValue] = useState(data.title);
  const [inEditMode, setInEditMode] = useState(false);
  const [updating, setUpdating] = useState(false);
  //-----------------------STATES END----------------------------------

  //-----------------------EVENTLISTENERS BEGIN----------------------------------
  const handleEdit = async () => {
    //overview: set as updating and call hook to update ,based on hook response update the title and set updating false
    if (inEditMode) {
      setUpdating(true);
      const response = await updateAlbum(data.id, newValue, data.userId);
      response.success ? setNewValue(newValue) : setNewValue(prevValue);
      setInEditMode(false);
      setUpdating(false);
    } else {
      setInEditMode(true);
    }
  };
  const handleDelete = async () => {
    //overview: set updating true and call hook to delete
    console.log(updating);
    setUpdating(true);
    await deleteAlbum(data.id);
    setUpdating(false);
    console.log(updating);
  };
  //-----------------------EVENT LISTENER END----------------------------------
  return (
    <li className="albumLi">
      {inEditMode ? (
        <>
          {/*? alkdjaldj */}
          {updating && <Loader />}
          <input
            defaultValue={newValue}
            onChange={(e) => {
              setNewValue(e.target.value);
            }}
          />
          <div className="buttons">
            <button onClick={handleEdit}>confirm</button>
            <button onClick={() => handleDelete()}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <h2>{data.id}</h2>
          <p>{newValue}</p>

          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
