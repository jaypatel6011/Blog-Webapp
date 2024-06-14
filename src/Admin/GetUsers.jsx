import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Title from '../pages/navPage/Title'
import { useNavigate } from 'react-router-dom'

function GetUsers() {
    const[users, setUsers] = useState([])
    const navigate = useNavigate()

    const {fetchAllUsers , deleteUserById} = useContext(AppContext)

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
        
        <table className="w-full">
                        <thead>
                            <tr className=" bg-orange-500 text-white text-left">
                                <th className="sm:px-4 py-3">User`s Name</th>
                                <th>Email</th>
                                <th>Role</th>
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
                                            <div className="flex sm:gap-3">
                                            
                                                <div className="flex flex-col">
                                                    <h1 className="font-semibold">{item.name}</h1>
                                                    <small className="text-gray-600">{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                        <i onClick={() => deleteUserById(item._id)}  className="ri-delete-bin-6-line text-xl"></i>
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