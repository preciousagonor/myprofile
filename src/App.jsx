import './App.css'
import Profile from './component/Profile'


const bio = {
  firstName: "Precious",
  lastName: "Abdulmalik",
  emailAddress: "preciousagonor.developer.com",
  location: "Abuja FCT",
  phoneNumber: "08078515409",
  stack: "HTML,CSS, React,Javascript",
  avatar: "./myprofilepic.jpg"
}
function App() {
 

  return (
    <>
    <Profile user={bio} />
    </>
  )
}

export default App
