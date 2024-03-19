import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import AuthorPosts from "./pages/AuthorPosts";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import Dashboard from "./pages/Dashboard";
import ErrorPage from './pages/ErrorPage';
import Services from "./pages/navPage/Services";
import About from "./pages/navPage/About";
import Blogs from "./pages/navPage/Blogs";
import Contact from "./pages/navPage/Contact";
import Categories from "./pages/Categories";
import BlogDetails from "./pages/BlogDetails";



function App() {
  return (
    <div className="w-full">
      
      <div className="w-full mb-[50px] ">
      <Header />
      </div>
    

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index={true} element={<Home/>}/>
        <Route path="/posts/:id" element={<PostDetail />}/>
        <Route path="/register" element={<Register >}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/profile/:id" element={<UserProfile />/> 
        <Route path="/authors" element={<Authors />}/> 
        <Route path="/create" element={<CreatePost />}/> 
        <Route path="/posts/:id/edite" element={<EditPost />}/> 
        <Route path="/posts/categories/:category" element={<CategoryPosts />}/> 
        <Route path="/posts/users/:id" element={<AuthorPosts />}/> 
        <Route path="logout" element={<Logout />}/> 
        <Route path="/myposts/sdfsdf" element={<Dashboard />}/> 
          */}
        <Route path="/services" element={<Services />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/blogs" element={<Blogs />}/> 
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/myposts/sdfsdf" element={<Dashboard />}/> 
        <Route path="/myposts/sdfsdf" element={<Dashboard />}/> 
        <Route path="/blogs/:category" element={<Categories />}/> 
        <Route path="blog/:id" element={<BlogDetails />}/>
        <Route path="/blogs/author" element={<Authors />}/> 
        <Route path="/blog/user/:author" element={<AuthorPosts />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/>





        <Route path="*" element={<ErrorPage />}/> 


        {/* </Route>  */}
      </Routes>
      <Outlet/>

     <div className="w-full">
     <Footer/>
     </div>

    </div>
  );
}

export default App;
