import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import Header from '../Header/Header';
import style from './Profile.module.css'
import ProfileNavigate from '../Header/ProfileHeader';
import profileImg from '../img/profile.jpg'
import ProfileUpDate from './ProfileUpDate';
import Loader from '../UI/Loader/Loader';
import IncreaseBalance from '../PostService/IncreaseBalance';


const Profile = () => {
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios(`${BASE_URL}GetcurrentUser`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setProfile(res.data)
      } catch (e) {
        setLoading(false)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true)
      const res = await axios(`http://frez773-001-site1.atempurl.com/api/Profile/students/${localStorage.getItem('student')}/profile`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setUser(res.data)
      setLoading(false)
    }
    getProfile()
  }, [])


  return (
    <div className="">
      <Header />
      <ProfileNavigate />
      <img src={profileImg} style={{ height: '200px', width: '100%' }} alt="" />
      <div className={style.container}>

        <div className={style.content}>
          {loading ? (
            <Loader />
          ) : user ? (
            <div className="">
              <p style={{ color: 'black', fontSize: '50px', display: 'flex', justifyContent: 'space-between' }}>

                {user.firstName ? user.firstName : profile.userName} {user.lastName}
                <div className="">
                  <IncreaseBalance />
                </div>

              </p>
              <br />
              <br />
              <ProfileUpDate setLoading={setLoading} />
              <br />
              <br />
              {user.aboutMe ? user.aboutMe && (
                <p style={{ color: "black", fontSize: '27px', }}>О себе: {user.aboutMe}</p>
              ) :
                <p style={{ color: "black", fontSize: '27px', marginTop: '30px' }}>О себе: пусто </p>
              }
              {user.city ? user.city && (
                <p style={{ color: "black", fontSize: '27px', marginTop: '30px' }}>Страна: {user.city}</p>
              ) :
                <p style={{ color: "black", fontSize: '27px', marginTop: '30px' }}>Город: пусто </p>
              }
              {user.country ? user.country && (
                <p style={{ color: "black", fontSize: '27px', marginTop: '30px' }}>Страна: {user.country}</p>
              ) :
                <p style={{ color: "black", fontSize: '27px', marginTop: '30px' }}>Страна: пусто </p>
              }

            </div>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '55px', marginTop: '80px' }}>Профиль пуст</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Profile;