import React, { useEffect, useState } from 'react'
import './style.css'
import Profile from '../Profile/Profile';
import { useNavigate } from 'react-router-dom';

const ProfileList = () => {

  const [data,setData] = useState([]);
  const [searchData, setSearchData] = useState("");

   const navigate = useNavigate();

   const handleNavigate=(profile)=>{
      navigate('/profile',{state:{profile}})
   }

  useEffect(()=>{
    fetch('/ProfileData.json')
    .then((response)=>response.json())
    .then((data)=>setData(data))
    .catch((error)=>console.error(error))
  },[])
  
  const handleSearch =(e)=>{
    setSearchData(e.target.value);
  }
  
  const findData = data.filter(item => item.name.toLowerCase().includes(searchData.toLowerCase()));
  return (
    <div>
        <div className='listHeader'>
            <h2 style={{fontWeight:'800',fontSize:'35px'}}>List of Profiles</h2>
        </div>

        <div className="searchInput">
            <input type='text' placeholder='Search Here......' onChange={handleSearch} />
        </div>

        <div className='profileList'>
        
          {
            findData.map((profile)=>(

          <div className='profileData'>
            <img src={profile.photo} height={100} width={80}  />
            <h3>Name : {profile.name}</h3>
            <h4>Designation: {profile.description}</h4>
            <button onClick={()=>handleNavigate(profile)}>See Profile</button>
          </div>
            ))
          }
         
        </div>




    </div>
  )
}

export default ProfileList