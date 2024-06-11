import React, { useContext, useState } from 'react'
import addBlog from '../Image/AddBlog.jpg'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';



function AddBlog() {

  const {sendRequest} = useContext(AppContext)
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    title:"",
    image: "",
    category:"",
    author: "",
    authorPic: "",
    content:""

  })

  function formHandler(event){
    setInputData((PreData) => ({
      ...PreData,
      [event.target.name] : event.target.value

    }))

  }

  async function submitHandler(event){
    event.preventDefault()
    console.log(inputData)
    const result = await sendRequest(
      
        inputData.title,
        inputData.author,
        inputData.authorPic, 
        inputData.image,
        inputData.category, 
        inputData.content,
        
    ).then(() => navigate("/"))
    alert(result.data.message)

  }




  return (
    <div className='bg-white md:w-6/12 shadow-lg border md:my-16 mx-auto'>
      <img src={addBlog} className=''/>
      <div className='p-8'>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">Title</label>
            <input
              required
              name="title"
              placeholder="Title"
              className="p-3 border border-gray-300 rounded"
              value={inputData.title}
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">ImageUrl</label>
            <input
              required
              name="image"
              placeholder="imageUrl"
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
              placeholder="Category"
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
              placeholder="Author"
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
              placeholder="AuthorPic"
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
              placeholder="Content"
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

export default AddBlog


// image,
//             category,
//             author,
//             authorPic,
//             content