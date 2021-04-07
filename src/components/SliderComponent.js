import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../css/slider-animations.css";
import "../css/styles.css";

const content = [
  {
    title: "Vulputate Mollis Part",
    description:
      "Aenean eu leo quam. Pellentesquea quam venenatis vestibulum.  Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Quam",
    description:
      "Nullam id dolor id nibhut id elit. Cras mattis con sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volut metus",
    description:
      "Lorem ipsum dolorr adipiscing elit. o, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

function SliderComponent() {
    return (
        <Slider className="slider-wrapper">
        {content.map((item, index) => (
            <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
            >
            <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
            </div>
            </div>
        ))}
        </Slider>
    )
}

export default SliderComponent
