import React from 'react';
import Img from '../../assets/rt.webp'
const AboutUs = () => {
  return (
    <div className="bg-[#15214c] text-white ">
      {/* Banner Image */}
      <div className="" >
       <img className='w-full h-[600px] pt-[89px]' src={Img} alt='abc' />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">My360Tribe</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Who We Are:</h2>
          <p className="text-lg leading-relaxed">
            My 360 Tribe was founded on the premise of support and guidance for members of the Special Operations Forces (SOF) community 
            as they embark on the pivotal journey transitioning from military valor to civilian achievement. Transitioning for Operators 
            can be very stressful as they leave their brotherhood and community behind. My 360 Tribe aims to bridge that gap, providing 
            peer support of Operators to Operators who have successfully transitioned and understand the challenges of someone who has 
            walked in their shoes.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Established by a cadre of SOF veterans and insightful, experienced civilian mentors, our organization is uniquely poised to 
            address the multifaceted challenges encountered by our operators during this critical time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission:</h2>
          <p className="text-lg leading-relaxed">
            Dedicated to offering peer-to-peer and concierge-level support, My 360 Tribe ensures U.S. Special Operations Forces SOF 
            Operators are well-prepared, empowered, and supported by those who understand the emotional and intellectual challenges of 
            transition. Our mission is to bridge the gap between military service and civilian success, addressing the challenging 
            aspects of transition while honoring their service, exceptional skills, and experience. We are here to ensure these 
            Operators have access to the services that set them up for success during their transition and beyond.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Vision:</h2>
          <p className="text-lg leading-relaxed">
            To become the cornerstone of support for every SOF Operator, providing concierge-level peer support by providing access to a 
            suite of services that cater to their holistic needs — professional, personal, and emotional. We envision a future where 
            our heroes integrate seamlessly into civilian life, leveraging their unique capabilities to continue to lead, innovate, and 
            inspire.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
