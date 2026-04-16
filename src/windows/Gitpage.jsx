import React from 'react'
import { Rnd } from 'react-rnd'
import '../git.scss';
import { ImCross } from "react-icons/im";
import githubProjects from '../assets/Gitdata';

const Gitpage = (props) => {
  return (
    <Rnd
      default={{
        x: -50, // Thoda offset diya hai taki corner mein chipka na rahe
        y: 50,
        width: 800, // Size thoda bada rakha hai portfolio ke hisaab se
        height: 500,
      }}
      // 'parent' ki jagah 'window' use karein agar parent container fix nahi hai
      bounds="window" 
      minWidth={350}
      minHeight={300}
      // Sirf 'top' bar pakad kar move karne ke liye handle specify karein
      dragHandleClassName="top"
      style={{
        zIndex: 1000, // Taki ye hamesha upar rahe
        display: "flex",
        flexDirection: "column",
        overflow: "hidden" // Resize ke waqt content andar hi rahe
      }}
    >
      <div className='box' style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top bar (Drag Handle) */}
        <div className="top" style={{ cursor: 'move' }}>
          <div className="circle-container" style={{ display: 'flex', gap: '8px' }}>
             <div className="circle red" onClick={() => props.setisopen(false)}></div>
             <div className="circle yellow"></div>
             <div className="circle green"></div>
          </div>
          <h3>anandraj-github — zsh</h3>
          <ImCross 
           className="close-icon" 
           onClick={(e) => {
             e.stopPropagation(); // Yeh line bohot zaruri hai
             props.setisopen(false);
           }} 
           style={{ cursor: 'pointer', zIndex: 1001 }}
         />     
        </div>
      
        {/* Content Area (Scrollable) */}
        <div className="projects-container" style={{ overflowY: 'auto', flex: 1, padding: '20px' }}>
          {githubProjects.map((project) => (
            <div key={project.id} className="card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>Tech: {project.techUsed.join(", ")}</p>
              <div className="links">
                <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Rnd>
  )
}

export default Gitpage
