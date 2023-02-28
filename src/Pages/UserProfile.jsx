import { Avatar } from '@mui/material'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import DashboardCard from '../Components/DashboardCard'
import CustomerInfo from '../Components/Profile/CustomerInfo'
import { userContext } from '../Context/UserContext'
import Dates from '../Helpers/Dates'
import UserInfo from '../Services/User'
import '../Styles/UserProfile.css'

const UserProfile = () => {
  const { userInfo, setUserInfo } = useContext(userContext)
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    values: {
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo.country,
      birthDate: Dates.formatDateYMD(userInfo.birthDate),
      // securityQuestion: "Who is Robert?",
      // securityQuestionAnswer: "Who wants to",
    },
  })

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await UserInfo.getUserInfo()
        setUserInfo(res.data)
      } catch (error) {
        console.error(error.response.data)
        // localStorage.clear();
        // navigate("/");
      }
    }
    getUserInfo()
  }, [])

  const onSubmit = (userData) => {
    try {
      const res = UserInfo.updateUserInfo(userData)
      console.log(res.data)
    } catch (error) {
      console.error('🥳SURPRISE!', error)
    }
  }

  return (
    <section className="profile">
      <h2 className="profile-title">Profile</h2>
      <DashboardCard className="profile-basic-info-card">
        <div className="profile-basic-info">
          <Avatar sx={{ width: 100, height: 100 }} />
          <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <p>Member since: {Dates.stringToLocaleString(userInfo.creationTime)}</p>
        </div>
      </DashboardCard>
      <DashboardCard className="profile-costumer-info-card">
        <CustomerInfo
          register={register}
          errors={errors}
          userInfo={userInfo}
          setFocus={setFocus}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </DashboardCard>
    </section>
  )
}

export default UserProfile
