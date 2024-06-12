import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {REACT_APP_URL} from '../allData'

const url = REACT_APP_URL


export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("")

  const [blogs, setBlogs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [blog, setBlog] = useState({});

  useEffect(() => {
    // console.log(url);
    // console.log(process.env.REACT_APP_URL)
    if (token) {
      localStorage.setItem("role", role)
      localStorage.setItem("token", token)
      // console.log("jayppp2", role)
      // console.log("role is ", localStorage.getItem("role", role))
    }
    const localStorageToken = localStorage.getItem("token", token)
    const localStorageRole = localStorage.getItem("role", role)
    // console.log('jjjjj', localStorageRole);

    if (localStorageToken && localStorageRole) {
      setRole(localStorageRole)
      console.log("localStorageRole", localStorageRole)
      setToken(localStorageToken);
      setIsAuthenticated(true);

    }

  }, [token])


  const fetchAllBlog = async () => {
    const api = await axios.get(`${url}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(api.data.data);
    setBlogs(api.data.data);
    console.log(api.data.data)
    // return api.data.data
  }



  const fetchBlogById = async (id) => {
    const api = await axios.get(`${url}/getBlog/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(api.data.data);
    // setBlog(api.data.data);
    return api.data.data
  }


  const sendRequest = async (title, author, authorPic, image, category, content) => {
    const api = await axios.post(`${url}/createBlog`, {
      title, author, authorPic, image, category, content
    },
      {
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        withCredentials: true,
      });
    return api;

  }

  const sendUpdateRequest = async ({ title, author, authorPic, image, category, content, id }) => {
    await axios.put(`${url}/updateBlog/${id}`, {
      title, author, authorPic, image, category, content
    },
      {
        headers: {
          "Content-Type": "application/json",
          "token": token

        },
        withCredentials: true,
      });

  }

  const sendDeleteRequest = async (id) => {
    await axios.delete(`${url}/deleteBlog/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token": token

        },
        withCredentials: true,
      });


  }

  const register = async (name, email, password, password2) => {
    const api = await axios.post(`${url}/register`, {
      name, email, password, password2
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )

    console.log(api)

    return api;
  };
  const login = async (email, password) => {
    const api = await axios.post(`${url}/login`, {
      email, password
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }


    )
    setToken(api.data.token)
    setRole(api.data.role)
    console.log(api.data.role)
    // setIsAuthenticated(true)


    return api;
  }


  const logOut = () => {
    localStorage.removeItem("token", token)
    localStorage.removeItem("role", role)
    setToken("")
    setIsAuthenticated(false)
    setRole("")

  }

  const fetchAllUsers = async () => {
    const api = await axios.get(`${url}/users`, {
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      withCredentials: true,
    });
    return api
  }
  // token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")): null

  const value = {
    blogs,
    setBlogs,
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
    role,
    setRole,
    fetchAllBlog,
    fetchBlogById,
    sendRequest,
    sendUpdateRequest,
    sendDeleteRequest,
    fetchAllUsers,
    register,
    logOut,
    login,
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}