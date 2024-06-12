import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';
import { AppContext } from '../context/AppContext';

const BlogDetails = () => {
  const {fetchBlogById, sendDeleteRequest, role} = useContext(AppContext)
  const [blog, setBlog] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.pathname.split('/').at(-1).replaceAll('-', ' ');
  console.log(id);


  useEffect(() => {
    async function fetch(){
      const data = await fetchBlogById(id)
      setBlog(data)
      
    }
    fetch()
    
},[id])

 
  

  return (
    <div className=' w-[95%] lg:w-[85%] mx-auto flex flex-col items-center justify-center gap-10 bg-white p-8 rounded-lg'>
                <div className='w-full flex items-center justify-between'>
                  <PostAuthor data={blog} />

                {role == "Admin" &&
                  <div className='flex flex-row gap-2 md:gap-8'>

                  <Link
                    className='bg-primary font-semibold text-white px-2 py-1 rounded-lg'
                    to={`/admin/blog/edit/${blog._id}`}>
                      <i className="ri-pencil-line"></i>
                    </Link>

                  <button
                    className=' bg-red font-semibold text-white px-2 py-1 rounded-lg'
                      onClick={() => sendDeleteRequest(blog._id).then(() => navigate("/"))}>
                         <i className="ri-delete-bin-6-line"></i>
                      </button>

                </div>}
                </div>
                <h1 className='font-bold text-2xl text-black'>{blog.title}</h1>
                <div className='w-full'>
                  <img
                    className='w-full rounded-lg'
                    src={blog.image} alt="" />
                </div>
                <p>
                  {blog.content}

                </p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quisquam itaque! Repellat ex, alias ipsum sint, consequuntur totam similique et recusandae blanditiis, nihil cumque tempore amet nemo veniam dolorum autem voluptatem. Quidem atque eveniet dignissimos eos! Doloribus sunt provident doloremque dolore. Nobis expedita distinctio ducimus reprehenderit quidem rem ipsa est veritatis voluptatum dignissimos deleniti, aliquid aperiam sint praesentium vel culpa labore dolor tempore dicta quisquam! Beatae eius quia officiis laborum unde nulla ab eos, officia atque, aut dolor quod rerum reiciendis quis in non obcaecati blanditiis. Et non distinctio dolorem a quos quo, debitis molestiae possimus rem velit omnis fugiat!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur nam libero tenetur iste! Voluptatibus optio illum deleniti, incidunt debitis aliquam rerum quis amet nesciunt, necessitatibus harum mollitia fugit laudantium accusamus quo magnam numquam labore aut. Repellendus expedita sequi accusantium hic voluptatum id deserunt explicabo vero voluptatibus, maxime doloribus sapiente laboriosam nostrum itaque dolores quibusdam delectus quae. Unde, nemo! Facere!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit id, perspiciatis possimus harum corporis animi vel? Eaque, ex a dolorem eveniet rerum minus nulla accusamus ad ratione perferendis delectus, eos dolores laudantium nobis exercitationem, facilis laborum illo! Nulla optio unde ipsum ad magni temporibus, sed quod aperiam quasi a aliquid iste possimus aut soluta. Rerum distinctio animi fugiat nemo libero quibusdam. Quia ex vero quaerat exercitationem asperiores odit nostrum assumenda quos officia nobis. Asperiores laudantium blanditiis placeat eius, non aspernatur aperiam sapiente reiciendis aut inventore, possimus, voluptas magnam explicabo odit pariatur. Consequatur maxime exercitationem delectus, ratione voluptas incidunt eaque neque fugit. Sint quia eveniet expedita nulla libero? Repudiandae, dignissimos. Similique adipisci laudantium fugiat voluptatibus aliquid quod. Cupiditate ducimus eius esse itaque consequuntur, quod magnam est ex minima corporis nemo ullam laudantium debitis hic rerum. Impedit repellat dignissimos in quisquam quas, libero excepturi possimus amet itaque eos. Pariatur facere ipsa natus rem ex necessitatibus cum eligendi repellat, illum ratione temporibus et, delectus doloremque nesciunt repudiandae aperiam rerum impedit deserunt nostrum laudantium animi cupiditate. Magnam architecto voluptate quia, modi amet quibusdam repellat qui ex quod minus harum iusto laudantium quos voluptates labore non culpa autem illum reprehenderit, commodi quae provident. Reprehenderit!</p> */}

              </div>
    // <div className='max-w-full'>

    //   {

    //     allData.map((dataId) => (
    //       <div key={dataId.id} className='w-full'>

    //         {dataId.id == id &&


    //           <div className=' w-[95%] lg:w-[85%] mx-auto flex flex-col items-center justify-center gap-10 bg-white p-8 rounded-lg'>
    //             <div className='w-full flex items-center justify-between'>
    //               <PostAuthor data={dataId} />

    //               <div className='flex flex-row gap-2 md:gap-10'>

    //                 <Link
    //                   className='bg-primary font-semibold text-white px-2 py-1 rounded-lg'
    //                   to={'/posts/werwer/edit'}>Edit</Link>

    //                 <Link
    //                   className=' bg-red font-semibold text-white px-2 py-1 rounded-lg'
    //                   to={'/posts/werwer/delete'}>Delete</Link>

    //               </div>
    //             </div>
    //             <h1 className='font-bold text-2xl text-black'>{dataId.title}</h1>
    //             <div className='w-full'>
    //               <img
    //                 className='w-full rounded-lg'
    //                 src={dataId.image} alt="" />
    //             </div>
    //             <p>
    //               {dataId.content}

    //             </p>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quisquam itaque! Repellat ex, alias ipsum sint, consequuntur totam similique et recusandae blanditiis, nihil cumque tempore amet nemo veniam dolorum autem voluptatem. Quidem atque eveniet dignissimos eos! Doloribus sunt provident doloremque dolore. Nobis expedita distinctio ducimus reprehenderit quidem rem ipsa est veritatis voluptatum dignissimos deleniti, aliquid aperiam sint praesentium vel culpa labore dolor tempore dicta quisquam! Beatae eius quia officiis laborum unde nulla ab eos, officia atque, aut dolor quod rerum reiciendis quis in non obcaecati blanditiis. Et non distinctio dolorem a quos quo, debitis molestiae possimus rem velit omnis fugiat!</p>
    //             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur nam libero tenetur iste! Voluptatibus optio illum deleniti, incidunt debitis aliquam rerum quis amet nesciunt, necessitatibus harum mollitia fugit laudantium accusamus quo magnam numquam labore aut. Repellendus expedita sequi accusantium hic voluptatum id deserunt explicabo vero voluptatibus, maxime doloribus sapiente laboriosam nostrum itaque dolores quibusdam delectus quae. Unde, nemo! Facere!</p>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit id, perspiciatis possimus harum corporis animi vel? Eaque, ex a dolorem eveniet rerum minus nulla accusamus ad ratione perferendis delectus, eos dolores laudantium nobis exercitationem, facilis laborum illo! Nulla optio unde ipsum ad magni temporibus, sed quod aperiam quasi a aliquid iste possimus aut soluta. Rerum distinctio animi fugiat nemo libero quibusdam. Quia ex vero quaerat exercitationem asperiores odit nostrum assumenda quos officia nobis. Asperiores laudantium blanditiis placeat eius, non aspernatur aperiam sapiente reiciendis aut inventore, possimus, voluptas magnam explicabo odit pariatur. Consequatur maxime exercitationem delectus, ratione voluptas incidunt eaque neque fugit. Sint quia eveniet expedita nulla libero? Repudiandae, dignissimos. Similique adipisci laudantium fugiat voluptatibus aliquid quod. Cupiditate ducimus eius esse itaque consequuntur, quod magnam est ex minima corporis nemo ullam laudantium debitis hic rerum. Impedit repellat dignissimos in quisquam quas, libero excepturi possimus amet itaque eos. Pariatur facere ipsa natus rem ex necessitatibus cum eligendi repellat, illum ratione temporibus et, delectus doloremque nesciunt repudiandae aperiam rerum impedit deserunt nostrum laudantium animi cupiditate. Magnam architecto voluptate quia, modi amet quibusdam repellat qui ex quod minus harum iusto laudantium quos voluptates labore non culpa autem illum reprehenderit, commodi quae provident. Reprehenderit!</p>

    //           </div>

    //         }
    //       </div>
    //     ))

    //   }

    // </div>
  )
}

export default BlogDetails