import React, { useContext, useEffect, useState } from 'react'
import addBlog from '../Image/AddBlog.jpg'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom'



function UpdateBlog() {
    
    const {fetchBlogById, sendUpdateRequest   } = useContext(AppContext)
    const [inputData, setInputData] = useState({})
    const navigate = useNavigate();
    const location = useLocation()
    const id = location.pathname.split('/').at(-1).replaceAll('-', ' ');
    console.log(id);


    useEffect(() => {
        async function fetch(){
          const data = await fetchBlogById(id)
          setInputData(data)
          
        }
        fetch()
        
        
    },[id])

  
    function formHandler(event){
      setInputData((PreData) => ({
        ...PreData,
        [event.target.name] : event.target.value
  
      }))
  
    }
  
    function submitHandler(event){
      event.preventDefault()
      console.log(inputData)
      sendUpdateRequest(
        {
          title: String(inputData.title),
          author: String(inputData.author),
          authorPic: String(inputData.authorPic), 
          image: String(inputData.image),
          category: String(inputData.category), 
          content: String(inputData.content),
          id
          }
      ).then(() => navigate("/"))
  
    }


    return (
        
        <div className='bg-white md:w-6/12 shadow-lg border md:my-16 mx-auto'>
            <img src={addBlog} className='' />
            <div className='p-8'>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Title</label>
                        <input
                            required
                            name="title"
                            className="p-3 border border-gray-300 rounded"
                            value={ inputData.title }
                            onChange={formHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">ImageUrl</label>
                        <input
                            required
                            name="image"
                            className="p-3 border border-gray-300 rounded"
                            value={inputData.image}
                            onChange={formHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Category</label>
                        <input
                            required
                            name="category"
                            className="p-3 border border-gray-300 rounded"
                            value={inputData.category}
                            onChange={formHandler}


                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Author</label>
                        <input
                            required
                            name="author"
                            className="p-3 border border-gray-300 rounded"
                            value={inputData.author}
                            onChange={formHandler}


                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">AuthorPic</label>
                        <input
                            required
                            name="authorPic"
                            className="p-3 border border-gray-300 rounded"
                            value={inputData.authorPic}
                            onChange={formHandler}


                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Content</label>
                        <textarea
                            required
                            name="content"
                            className="p-3 border border-gray-300 rounded"
                            rows={4}
                            value={inputData.content}
                            onChange={formHandler}
                        />
                    </div>
                    <button type='submit' className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600">Submit</button>


                </form>
            </div>
        </div>
    )
}

export default UpdateBlog

