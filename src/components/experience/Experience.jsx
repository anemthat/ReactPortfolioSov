import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
  <h5>The Skills I have</h5>
     <h2> My Skills</h2>
     <br />
     <div className="containe experience__container">
      <div className='Front-end'> 
       <h3>Front end development</h3>

       <div className='experience__content'>
        <article className='details'>
          <h4>HTML&CSS</h4>
        </article>
       </div>

       <div className='experience__content'>
        <article className='details'>
          <h4>Javascript</h4>
        </article>
       </div>


       <div className='experience__content'>
        <article className='details'>
          <h4>React</h4>
        </article>
       </div>
       </div>


      <div className='Back-end'>
      <h3>Back end development</h3>

<div className='experience__content'>
 <article className='details'>
   <h4>Python</h4>
 </article>
</div>

<div className='experience__content'>
 <article className='details'>
   <h4>Java</h4>
 </article>
</div>


<div className='experience__content'>
 <article className='details'>
   <h4>SQL</h4>
 </article>
</div>
</div>

      </div>

      

     </section>
  )
}

export default Experience
