import axios from "axios";

// All routes should follow the pattern 'API.dbname.CRUDrequest'.
// Data should follow db schemas.

// Creating an axios instance - more config params can  be added, for now baseURL makes code DRY.
const API = axios.create({
  baseURL: "/api/v1",
});

// Family axios routes
const family = {
  get: (params) => API.get("/family", { params }),
  update: (data, params) => API.put("/family", data, { params }),
  create: (data) => API.post("/", data),
  archive: (params) => API.put("/family/archive", { params }),
};

// User axios routes
// Note that for creating a new user, the param must be the FAMILY id.
const users = {
  // data for comparePassword must contain email and password
  comparePassword: (data) => API.post("/", data),
  get: (params) => API.get("/user", { params }),
  update: (data, params) => API.put("/user", data, { params }),
  create: (data, params) => API.post("/user/family", data, { params }),
  archive: (params) => API.put("/user/archive", { params }),
};

// Recipe axios routes
// Note that for creating a new recipe, the param must be the FAMILY id.
const recipes = {
  get: (params) => API.get("/recipe", { params }),
  update: (data, params) => API.put("/recipe", data, { params }),
  create: (data, params) => API.post("/recipe/family", data, { params }),
  archive: (params) => API.put("/recipe/archive", { params }),
};

// Discussion Topics axios routes
const discussionTopics = {
  // Gets All Discussion Topics
  get: () => API.get("/discussiontopics"),

};

// Exporting API methods
export default {
  family,
  users,
  recipes,
  discussionTopics,
  // Example axios requests
  // Gets all books
  getBooks() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook(id) {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook(bookData) {
    return axios.post("/api/books", bookData);
  },
};
