import React, {useState} from 'react'
import Sidebar from '../components/navbar/index'
import Navbar from '../components/sidebar/index'
import HeroSection from '../components/heroSection'
import Accoms from '../components/accomplishments/Acomms'
import Affirms from '../components/affirmation/Affirms'
import Goals from '../components/goals/Goals'

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
            <Goals {...props} user={user} />
            <Affirms {...props} user={user} />
            
        </>
    )
}

export default HomePage
