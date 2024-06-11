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
        }
        fetched()
    },[])


  return (
    <div>
       <Title title={'Users'}/>
        
        <table>
            <thead>
                <th>Name</th>
                <th>Gmail</th>
                {/* <th></th> */}
            </thead>
            
        </table>
        
    </div>
  )
}

export default GetUsers