
# Albums list using React.js
**Deployed on :**  https://manraj-singh.github.io/ALbums-list/

**Overview :** A React app for rendering and performing CRUD on jsonplaceholder's album resource.




## Tech Stack

*REACT.JS , contextAPI*
## API Reference

```http
 API : https://jsonplaceholder.typicode.com/albums
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Manraj-singh/ALbums-list.git
```

install the nodemodules from package.json  :

```bash
  npm install
```

finally start it on your local server

```bash
  npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




## Features

- Create : create a new album 
- Read : get all albums and display the list
- Update : edit an existing album making dummy request to API
- Delete : delete an album making a dummy requies to APi



## Folder structure
```
src
├── api
│   └── index.js
├── components
│   ├── Albums.js
│   ├── App.js
│   ├── Loader.js
│   └── Navbar.js
├── hooks
│   └── index.js
├── providers
│   └── index.js
├── utils
│   └── constants.js
├── index.css
└── index.js
```

overview: 
- api folder contains all the calls made to api
- components folder contains all react components
- hooks folder contains all custom hooks made for CRUD operation with api
- provider folder contains the context created for state management using react contextAPI
- utils contains constants file which has all the constants like api url
- index.css file has all the styles for the App


basic flow  : component event  > hook function > api call 
