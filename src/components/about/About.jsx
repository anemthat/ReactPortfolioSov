import React from 'react'
import './about.css'
import me from '../../images/me.jpg'

const About = () => {
  return (
    <section id = "about">
      <h2>
        About me</h2>
        
        <div className="container about__container">
          <div className='about__me'>
            <div className="about__mee-image">
              <img src={me} alt='about image'/>

            </div>
          </div>

          <p>
            Hi my name is Anelisa Mthathi, 25 years of age. I have a bachelor of commerce in Information Systems degree now persuing
            a certificate in Software engineering. I am very passionate about technology and I enjoy
            being challenged and engaging with projects that require me to work outside my comfort and knowledge set.
            I have the ability to solve problems quickly and efficiently and I work very well in teams with great leadership skills,
            like taking innitiative, risks and proper decisions. I value being honest, reliable, staying true to myself
            and holding honest views on things.

            The reason why I want to be a developer as SovTech is because I believe I have the right skills and mindset
            to get started with this path but I also believe there is also a room to learn more and be able to implement
            these skills. Secondly I want to be able to learn how to identify business problems and choosing strategies to 
            solve those issues. I want to be equipped into building the real world solutions that will reduce costs in businesses and 
            also have a positive impact on people.
          </p>
          
         
        </div>


        </section>

  )
}

export default About
