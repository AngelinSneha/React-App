import React from 'react'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ComputerIcon from '@material-ui/icons/Computer';

function Products() {
    return (
        <div className="container">
            <div className="text-center h2 pb-5">Product and Service</div>
            <div className="row">
                <div className="col-md-4 pro cardEff">
                    <FormatListBulletedIcon fontSize="large" className="mainColor" />
                    <div className="h5 mainColor">Our Product</div>
                    <p>Vestibulum ante ipsum ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    <button className="btn mb-3 mt-3 mainColorbg btn-raised">Read More</button>
                </div>
                <div className="col-md-4 pro cardEff">
                    <InsertChartIcon fontSize="large" className="mainColor" />
                    <div className="h5 mainColor">Our Service</div>
                    <p>Vivamus suscipit tortor eget felis porttitor in faucibus orci luctus et ultrices volutpat. Nulla quis lorem ut libero malesuada feugiat.</p>
                    <button className="btn mb-3 mt-3 mainColorbg btn-raised">Read More</button>
                </div>
                <div className="col-md-4 pro cardEff">
                    <ComputerIcon fontSize="large" className="mainColor" />
                    <div className="h5 mainColor">Our Technology</div>
                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    <button className="btn mb-3 mt-3 mainColorbg btn-raised">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Products
