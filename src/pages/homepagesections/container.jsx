import React from 'react'
import Homepage from './homepage'
import Homepagesec2 from './homepagesec2'
import Homepagesec3 from './homepagesec3'
import Homepagesec4 from './homepagesec4'
import Homepagesec5 from './homepagesec5'
import Homepagesec6 from './homepagesec6'
import Homepagesec7 from './homepagesec7'

const Container = ({isModalOpen,setIsModalOpen}) => {
    return (
        <div>
            <Homepage setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
            <Homepagesec2 />
            <Homepagesec3 />
            <Homepagesec4 />
            <Homepagesec5 />
            <Homepagesec6 />
            <Homepagesec7 />
        </div>
    )
}

export default Container