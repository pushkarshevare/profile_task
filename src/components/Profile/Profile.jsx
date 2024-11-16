import { React,useEffect,useRef} from 'react';
import { useLocation } from 'react-router-dom';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

const Profile = () => {
  const location = useLocation();
  const { profile } = location.state;

  
  const latitude = parseFloat(profile.address.latitude);
  const longitude = parseFloat(profile.address.longitude);
  
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHVzaGthcmFqc2hldmFyZSIsImEiOiJjbTNrZnF2Y2wwYW9tMmlzNTJ1M21oMTQ1In0.QFoeOJcZkzxH0GRy5Kkt_Q'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center:[longitude,latitude],
      zoom:13.12
      });
    return () => {
        mapRef.current.remove()
      }
    },[]);


  return (
    <div>
      <div className='profile'>
      <div className="profile-head">
        <h2 style={{fontWeight:'800',fontSize:'35px'}}>Profile</h2>
      </div>
      <div className="profileDetails">  
        <div className="profileInfo">
            <h2>Name: {profile.name}</h2>
            <h3>Designation: {profile.description}</h3>
            <h3>Address: {profile.address.city}</h3>
            <h3>Contact: {profile.contactInfo}</h3>
        </div>
        <div className="profileImage">
            <img src={profile.photo} />
        </div>
      </div>
        <div id='map-container' ref={mapContainerRef}/>


      </div>
    </div>
  );
};

export default Profile;
