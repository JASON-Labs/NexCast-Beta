import React from "react";
import { useState } from "react";


export default function HomeAbout() {

  const [hoveredBox, setHoveredBox] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const glowEffectStyles = (index) => ({
    boxShadow:
      hoveredBox === index
        ? `0 0 14px 0px #C499F3, 0 0 14px 0px #C499F3`
        : "none",
    transform: hoveredBox === index ? "translateY(-10px)" : "none",
    transition: "all 0.3s ease-in-out",
  });

  return (

    <section className="justify-center flex mb-20 px-20">
      <div className="about-container flex flex-col">
        <div className="about-header">

          <div className="about-head text-4xl font-bold p-9">
            <p>Why use NexCast?</p>
          </div>
          <div className="about-para text-lg font-normal px-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero iste reiciendis aut quo perferendis molestiae, mollitia, impedit fugiat accusamus cumque sit ipsum facilis corrupti ut ab quas, quidem illo?
          </div>
        </div>
        <div className="about-boxes flex justify-center flex justify-evenly p-9">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={`about-box  border-black border-2 overflow-wrap break-words p-6 rounded-xl shadow-xl bg-[#191919] mx-4  ${hoveredBox === index
                    ? "box-hovered"
                    : ""
                  }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={glowEffectStyles(index)}
              >
                <p
                  //   src={
                  //     index === 0
                  //       ? idea
                  //       : index === 1
                  //       ? component
                  //       : index === 2
                  //       ? project
                  //       : collaborate
                  //   }

                  //  alt={`item-${index}`}
                  className="w-16 h-16 mb-4"
                />
                <div className="box-head text-xl font-semibold mb-4">
                  <b>
                    {index === 0
                      ? "Bringing Ideas to Live "
                      : index === 1
                        ? "Bringing Ideas to Live "
                        : index === 2
                          ? "Bringing Ideas to Live "
                          : "Bringing Ideas to Live "}
                  </b>
                </div>
                <div className="box-text text-base mb-4">
                  {index === 0
                    ? "NexCast empowers users to bring their ideas to life, fostering creativity and innovation."
                    : index === 1
                      ? "NexCast empowers users to bring their ideas to life, fostering creativity and innovation."
                      : index === 2
                        ? "NexCast empowers users to bring their ideas to life, fostering creativity and innovation."
                        : "NexCast empowers users to bring their ideas to life, fostering creativity and innovation."}
                </div>
                <a
                  href="#"
                  className="box-link text-blue-500 font-semibold"
                >
                  <br></br>
                  See How
                </a>
              </div>
            ))}
        </div>
      </div>

    </section>


  );
};