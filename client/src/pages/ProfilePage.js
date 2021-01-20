import React, {useState} from 'react'
import SignOut from '../components/signin/SignOut'
import Accoms from '../components/accomplishments/Acomms'
import Sidebar from '../components/navbar/index'
import Navbar from '../components/sidebar/index'
import Goals from '../components/goals/Goals'

const ProfilePage = (props) => {
    // console.log("profile page props",props)
    const {user} = props
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    if (user !== null && user !== undefined) {
        return (
            <div>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <Accoms {...props} user={user} />
                <Goals {...props} user={user} />
                {/* <SignOut {...props} /> */}
            </div>
        )
    }
}

export default ProfilePage