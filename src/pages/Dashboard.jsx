import React, { useContext, useEffect, useState } from 'react'
// import { REACT_APP_URL } from '../blogs/allblogs'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Title from './navPage/Title'
import Loading from '../components/Loading'
const Dashboard = () => {
  const [blogsData, setBlogsData] = useState([])
  const { blogs, fetchAllBlog, sendDeleteRequest, loading } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetched() {
      const data = await fetchAllBlog()
      console.log(data);
      setBlogsData(data)

    }
    fetched()
  }, [])
  // let shortTitle = blogs.title.length > 30 ? blogs.title.substr(0,30)+'...' : blogs.title;

  async function deleteHandler(id) {

    await sendDeleteRequest(id)
    const data = await fetchAllBlog()
    console.log(data);
    setBlogsData(data)
  }

  return (
    <div className='w-full '>
      <Title title={"My Blogs"} />
      {
        loading ? (<Loading />) : (
          <div>
            <div className='w-full'>
              {
                blogsData.map((blog) => {
                  return (
                    <div
                      className='w-[90%] mx-auto mt-6 bg-gray-300 px-3 p-2 rounded-lg'
                      key={blog._id}>
                      <div className='flex flex-row gap-7 mx-auto '>
                        <div className=' w-[50%] sm:w-[30%] my-auto'>
                          <img
                            className=' rounded-md  sm:h-[40px]'
                            src={blog.image} alt="" />
                        </div>
                        <div className='w-[50%] sm:w-[70%] my-auto mx-auto flex flex-col sm:flex-row items-center justify-between'>
                          <div>
                            <h5 className='font-semibold'>{blog.title.length > 30 ? blog.title.substr(0, 30) + '...' : blog.title}</h5>
                          </div>
                          <div className='flex gap-2 md:gap-6'>
                            <Link
                              className='bg-white font-semibold text-black px-2 sm:px-3 py-1 sm:py-2 rounded-full '
                              to={`/blog/${blog._id}`} >
                              <i className="ri-eye-line"></i>
                            </Link>

                            <Link
                              className='bg-primary font-semibold text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full '
                              to={`/admin/blog/edit/${blog._id}`} >
                              <i className="ri-pencil-line"></i>
                            </Link>

                            <Link onClick={() => deleteHandler(blog._id)}
                              className=' bg-red font-semibold text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full'
                            >
                              <i className="ri-delete-bin-6-line"></i>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Dashboard