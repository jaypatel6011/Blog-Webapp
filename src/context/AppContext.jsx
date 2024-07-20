import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { REACT_APP_URL } from '../Data/allData'

const url = REACT_APP_URL


export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState("")
  const [user, setUser] = useState([])
  const [userId, setUserId] = useState("")

  const [blogs, setBlogs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [blog, setBlog] = useState({});

  useEffect(() => {
    // console.log(url);
    // console.log(process.env.REACT_APP_URL)
    if (token) {
      localStorage.setItem("role", role)
      localStorage.setItem("token", token)
      localStorage.setItem("id", userId)
      // console.log("jayppp2", role)
      // console.log("role is ", localStorage.getItem("role", role))
    }
    const localStorageToken = localStorage.getItem("token", token)
    const localStorageRole = localStorage.getItem("role", role)
    const localStorageId = localStorage.getItem("id", userId)
    // console.log('jjjjj', localStorageRole);

    if (localStorageToken && localStorageRole && localStorageId) {
      setRole(localStorageRole)
      console.log("localStorageRole", localStorageRole)
      console.log("localStorageId", localStorageId)
      setUserId(localStorageId)
      setToken(localStorageToken);
      setIsAuthenticated(true);

    }

  }, [token])


  const fetchAllBlog = async () => {
    setLoading(true)
    const api = await axios.get(`${url}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(api.data.data);
    setBlogs(api.data.data);
    console.log(api.data.data)
    setLoading(false)
    return api.data.data
    
  }



  const fetchBlogById = async (id) => {
    setLoading(true)

    const api = await axios.get(`${url}/getBlog/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(api.data.data);
    // setBlog(api.data.data);
    setLoading(false)
    return api.data.data
  }


  const sendRequest = async (title, author, authorPic, image, category, content) => {
    setLoading(true)
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
    setLoading(false)
    return api;

  }

  const sendUpdateRequest = async ({ title, author, authorPic, image, category, content, id }) => {
    setLoading(true)
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
    setLoading(false)


  }

  const sendDeleteRequest = async (id) => {
    setLoading(true)
    await axios.delete(`${url}/deleteBlog/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token": token

        },
        withCredentials: true,
      });
      setLoading(false)


  }

  const register = async (name, email, password, password2) => {
    setLoading(true)

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
    setLoading(false)
    

    return api;
  };
  const login = async (email, password) => {
    setLoading(true)
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

    if (api.data.success == true) {
      setUserId(api.data.data._id)
      console.log(api.data.data._id)

    }
    // setIsAuthenticated(true)
    setLoading(false)


    return api;
  }


  const logOut = () => {
    setLoading(true)

    localStorage.removeItem("token", token)
    localStorage.removeItem("role", role)
    localStorage.removeItem("id", userId)
    setToken("")
    setIsAuthenticated(false)
    setRole("")
    setUserId("")
    setLoading(false)

  }

  const fetchAllUsers = async () => {
    setLoading(true)

    const api = await axios.get(`${url}/users`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setLoading(false)

    return api
  }
  // token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")): null

  const fetchUserById = async (id) => {
    setLoading(true)
    const api = await axios.get(`${url}/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // "token": token,
      },
      withCredentials: true,
    });
    // setUser(api.data.data)
    console.log(api);
    setLoading(false)
    return api.data.data

    
  }

  const updateUserById = async ({ name, email, password, newPassword, id }) => {
    setLoading(true)

    await axios.put(`${url}/profile/${id}`, {
      name, email, password, newPassword
    },
      {
        headers: {
          "Content-Type": "application/json",
          "token": token

        },
        withCredentials: true,
      });
    setLoading(false)


  }

  const deleteUserById = async (id) => {
    setLoading(true)

    console.log("id is", id);
    await axios.delete(`${url}/deleteUser/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token": token,
          "role": role

        },
        withCredentials: true,
      });

      setLoading(false)

  }

  

  const value = {
    blogs,
    setBlogs,
    token,
    setToken,
    loading,
    setLoading,
    isAuthenticated,
    setIsAuthenticated,
    role,
    setRole,
    userId,
    user,
    setUser,
    fetchAllBlog,
    fetchBlogById,
    sendRequest,
    sendUpdateRequest,
    sendDeleteRequest,
    fetchAllUsers,
    fetchUserById,
    updateUserById,
    deleteUserById,
    register,
    logOut,
    login,
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}