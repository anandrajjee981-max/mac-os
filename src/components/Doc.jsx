import React, { useState } from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BsAppleMusic } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import Macwindow from '../windows/Macwindow';
import Gitpage from '../windows/Gitpage';


const Doc = () => {
  // Alag states har window ke liye
  const [noteOpen, setNoteOpen] = useState(false);
  const [gitOpen, setGitOpen] = useState(false);

  return (
    <div className='doc'>
      <div className='bar'>
        {/* Note Icon */}
        <FaNoteSticky className='icon note' onClick={() => setNoteOpen(true)} />
        {noteOpen && <Macwindow isopen={noteOpen} setisopen={setNoteOpen} />}

        {/* GitHub Icon */}
        <FaGithub className='icon github' onClick={() => setGitOpen(true)} />
        {gitOpen && <Gitpage isopen={gitOpen} setisopen={setGitOpen} />}

        <VscVscode className='icon vs' />
        <BsAppleMusic className='icon apple'/>
        <FaFilePdf className='icon pdf'/>
      </div>
    </div>
  )
}

export default Doc
