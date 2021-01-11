import React, {useState} from 'react'
import SignIn from '../components/signin/SignIn'
import SignUp from '../components/signin/SignUp'
import Sidebar from '../components/navbar/index'
import Navbar from '../components/sidebar/index'
import HeroSection from '../components/heroSection'
import Accoms from '../components/accomplishments/Acomms'
import Affirmations from '../components/affirmation/Affirmations'
import InfoSection from '../components/infoSection/index'
const HomePage = (props) => {
    const {user} = props
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            {/* <InfoSection /> */}
            <Accoms {...props} user={user} />
            <Affirmations {...props} user={user} />
        </>
    )
}

export default HomePage
