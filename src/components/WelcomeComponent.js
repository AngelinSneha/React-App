import React from 'react'

function WelcomeComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="imgTag" alt="laptop" src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div className="col-md-7 pTag">
                    <div className="h2">Welcome to <span className="mainColor">Dwidasa Samara Indonesia</span></div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    <br />
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent
