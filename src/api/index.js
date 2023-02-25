import { API_URLS } from "../utils/constants";

const customFetch = async (url, { body, ...customConfig }) => {
  //we are defining headers below
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };

  //creating a assimilation of config with what we get as argument and what we defined in headers
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  try {
    //here we are making a simple api call and converting it to json
    const response = await fetch(url, config);
    // console.log("api try res", response);
    const data = await response.json();

    // console.log("data", data);

    // if status of the fetch is a success, then returning the data
    if (data) {
      return {
        data: data,
        success: true,
      };
    }

    //else throw the error
    throw new Error(data.message);
  } catch (error) {
    // console.error("error",error);
    return {
      message: "error in api ",
      success: false,
    };
  }
};

export const getAllAlbums = () => {
  return customFetch(API_URLS.getAllAlbums(), {
    method: "GET",
  });
};

export const editAlbum = (id, title, userid) => {
  return customFetch(API_URLS.updateAlbum(id), {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      title: title,
      userid: userid,
    }),
  });
};
export const removeAlbum = (id) => {
  return customFetch(API_URLS.deleteAlbum(id), {
    method: "DELETE",
  });
};
// export const register = async (name, email, password, confirmPassword) => {
//   return customFetch(API_URLS.signup(), {
//     method: "POST",
//     body: { name, email, password, confirm_password: confirmPassword },
//   });
// };
