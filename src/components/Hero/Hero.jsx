import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Transforming Ideas into Digital Reality</h2>
            <p>
            Dedicated <strong style={{color: "#00ADB5"}}>Web Developer</strong> | Turning Concepts into Intuitive and Beautifully Designed Digital Experiences
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/react-icon.png" alt="" />
                </div>
                <img src="./assets/images/img01.jpg" alt="" style={{width: "300px", height: "300px", borderRadius: "25px", objectFit: "cover"}}/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/html-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/css-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/js-icon.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
