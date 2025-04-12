import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
import  '../Python/Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Git = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Version Control" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const git_topics = [
  "Introduction to Version Control",
  "What is Git and Why Use It?",
  "Installing Git",
  "Basic Git Workflow (Init, Add, Commit)",
  "Cloning a Repository",
  "Understanding .git Directory",
  "Git Configuration and Setup",
  "Understanding Git States (Untracked, Staged, Committed)",
  "Checking Status with `git status`",
  "Viewing Changes with `git diff`",
  "Staging Changes with `git add`",
  "Committing with Messages (`git commit -m`)",
  "Viewing Commit History (`git log`)",
  "Branching in Git",
  "Merging Branches",
  "Fast-Forward vs 3-Way Merge",
  "Resolving Merge Conflicts",
  "Working with `git checkout`",
  "Using `git switch` and `git restore`",
  "Git Rebase Explained",
  "Cherry-Picking Commits",
  "Stashing Changes",
  "Tagging Releases",
  "Undoing Changes (`git reset`, `git revert`)",
  "Understanding HEAD and Detached HEAD",
  "Remote Repositories (`git remote`, `git fetch`, `git pull`, `git push`)",
  "Forking and Pull Requests (conceptual, mostly used on platforms)",
  "Working with GitHub, GitLab, Bitbucket",
  "SSH Keys for Git Authentication",
  "Git Aliases for Shortcuts",
  "Git Hooks (Pre-commit, Post-merge, etc.)",
  "Submodules in Git",
  "Git Internals and Object Model (blobs, trees, commits)",
  "Reflog and Recovering Lost Commits",
  "Git Ignore Files and `.gitignore`",
  "Collaborative Workflows (Feature Branch, Git Flow, Forking)",
  "Using Git in IDEs (VSCode, IntelliJ, etc.)",
  "Git and Continuous Integration",
  "Common Git Errors and Troubleshooting",
  "Best Practices in Git Usage",
  "Git GUI Clients (GitKraken, Sourcetree, etc.)",
  "Rewriting History with `git rebase -i` and `git commit --amend`",
  "Squashing Commits",
  "Comparing Branches (`git diff branch1..branch2`)",
  "Bisecting Bugs with `git bisect`",
  "Archiving and Exporting Repositories",
  "Git for Teams and Collaboration",
  "Git Glossary of Commands"
]







   

  const navigate = useNavigate();
  const routerchange = (Title,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,tag}});
  }
  const routerchange1 = (Title,Content,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content,tag}})
  }
  // http://13.201.93.211/api/home

  const getContent = async () => {
    // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
    try {
      const data = await axios.get(`${BASE_URL}/app/getcont/getgitcontent`, { params: { title: searchtitle } });
      //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
      setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
    } catch (error) {
      console.log("Error", error)

    }
  }
  useEffect(() => {
    getContent();
  }, [searchtitle])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}><FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {git_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,37)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,37)}>Modify Content</button>
          }

           

          <div className='disp-cont-btns'>
            <button className='btn-12'>Previous Topic Topic Name</button>
            <button className='btn-12'>Next Topic Topic Name</button>
          </div>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Git;
