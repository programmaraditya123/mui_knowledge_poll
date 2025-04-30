import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Git = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

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
                <li key={index}><Link to={`/git/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="git" tagn={37}/>

        <NextPrevTopic topics={git_topics} currentTopic={formattedTopic} basePath="/git"/>

         
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Git;
