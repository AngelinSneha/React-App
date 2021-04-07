import React from 'react'
import Wave from 'react-wavify'
import Contact from './Contact'
import Footer from './Footer'
import Products from './Products'
import SliderComponent from './SliderComponent'
import WelcomeComponent from './WelcomeComponent'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div>
            <div className="conatiner pl-5">
                <div className="row">
                    <div className="col-md-7 col-xs-12 textValue">
                        <div className="h2 font">Making the most of the ever-growing</div>
                        <div className="mainColor h2 font">
                        <Typewriter
                            options={{
                                strings: ["Information Technology", "Information Technology"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </div>
                        <p className="pb-3 pt-3" style={{lineHeight:"1.5"}}>Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                        <button className="btn mb-3 mt-3 mainColorbg btn-raised">Read More</button>
                    </div>
                    <div className="col-md-5 col-xs-12">
                        <img src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="imgHome" />
                    </div>
                </div>
            </div>
            <Wave fill='#c70039'
                paused={false}
                options={{
                height: 50,
                amplitude: 20,
                speed: 0.2,
                points: 6
                }}
            />
            <WelcomeComponent />
            <SliderComponent />
            <Products />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
