import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Title from '../pages/navPage/Title'

function GetUsers() {
    const[users, setUsers] = useState([])

    const {fetchAllUsers} = useContext(AppContext)

    useEffect(() => {
        const fetched = async() =>{
        const result = await fetchAllUsers() 
            // console.log(result.data.data)
            setUsers(result.data.data)
            console.log(result.data.data)
        }
        fetched()
    },[])


  return (
    <div>
       <Title title={'Users'}/>
        
        {/* <table>
            <thead className=' bg-orange-500 text-center '>
                <tr >
                <th className=" w-16">Name</th>
                <th className=" w-16">Gmail</th>
                <th className=" w-16">Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((data, index) => (
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                        <i className="ri-pencil-line"></i>
                        <i className="ri-delete-bin-6-line"></i>

                        </td>
                        </tr>
                    ))
                }
            </tbody> */}
            
        {/* </table> */}


        <table className="w-full">
                        <thead>
                            <tr className=" bg-orange-500 text-white text-left">
                                <th className="px-4 py-3">User`s Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((item, index)=>(
                                    <tr className="text-left" key={index} style={{
                                        background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className="capitalize px-4 py-3">
                                            <div className="flex gap-3">
                                            
                                                <div className="flex flex-col">
                                                    <h1 className="font-semibold">{item.name}</h1>
                                                    <small className="text-gray-600">{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>
                                        <i className="ri-delete-bin-6-line text-xl"></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>    
        
    </div>
  )
}

export default GetUsers