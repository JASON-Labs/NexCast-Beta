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
            ? `0 0 14px 0px #64BEFF, 0 0 14px 0px #64BEFF`
            : "none",
        transform: hoveredBox === index ? "translateY(-20px)" : "none",
        transition: "all 0.3s ease-in-out",
      });

    return (
    
            <section className="justify-center flex mb-20">
            <div className="about-container flex flex-col">
        <div className="about-header">
          <div className="key-feature text-white font-medium text-center bg-blue-400 rounded-full px-4 py-2">
            Key Feature
          </div>
          <div className="about-head text-4xl font-bold">
            <p>Why use DoodleCollab ?</p>
          </div>
          <div className="about-para text-lg font-normal">
            DoodleCollab revolutionizes collaboration with intuitive whiteboard
            features and seamless real-time sharing.
          </div>
        </div>
        <div className="about-boxes flex justify-center flex justify-evenly">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={ `about-box  border-black border-2 overflow-wrap break-words p-6 rounded-lg shadow-lg bg-white mx-4  ${
                  hoveredBox === index
                    ? "box-hovered"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={glowEffectStyles(index)}
              >
                <img
                //   src={
                //     index === 0
                //       ? idea
                //       : index === 1
                //       ? component
                //       : index === 2
                //       ? project
                //       : collaborate
                //   }
                  alt={`item-${index}`}
                  className="w-16 h-16 mb-4"
                />
                <div className="box-head text-xl font-semibold mb-4">
                  <b>
                    {index === 0
                      ? "Bring Ideas to Live"
                      : index === 1
                      ? "Component Templates"
                      : index === 2
                      ? "Project Management"
                      : "Live Collaboration"}
                  </b>
                </div>
                <div className="box-text text-base mb-4">
                  {index === 0
                    ? "DoodleCollab empowers users to bring their ideas to life, fostering creativity and innovation."
                    : index === 1
                    ? "DoodleCollab provides a variety of customizable component templates, streamlining the creation process."
                    : index === 2
                    ? "DoodleCollab offers project management tools, facilitating efficient organization, tracking, and coordination of tasks."
                    : "DoodleCollab enables live collaboration, allowing team members to work together, enhancing productivity."}
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