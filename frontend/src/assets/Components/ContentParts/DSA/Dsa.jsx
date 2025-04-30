import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Dsa = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   

const dsa_topics = [
  
  "Introduction to DSA",
  "Time and Space Complexity",
  "Big O, Omega, Theta Notations",
  "Recursion and Backtracking",
  "Mathematics for DSA (GCD, Prime Numbers, Bit Manipulation)",

  
  "Arrays Basics",
  "2D Arrays and Matrix Manipulation",
  "Prefix Sum and Sliding Window",
  "Two Pointer Technique",
  "Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap)",
  "Searching Algorithms (Linear, Binary)",

   
  "String Manipulation",
  "Pattern Matching (KMP, Rabin-Karp)",
  "Z-Algorithm",
  "Trie (Prefix Tree)",
  "String Hashing",

  
  "Singly Linked List",
  "Doubly Linked List",
  "Circular Linked List",
  "Linked List Operations",
  "Floyd’s Cycle Detection Algorithm",

   
  "Stack and Applications",
  "Queue and Applications",
  "Circular Queue",
  "Deque",
  "Monotonic Stack/Queue",
  "Infix, Prefix, Postfix Expressions",

   
  "Binary Tree Basics",
  "Tree Traversals (Inorder, Preorder, Postorder, Level Order)",
  "Binary Search Tree (BST)",
  "Heap (Min/Max)",
  "AVL Tree",
  "Segment Tree",
  "Fenwick Tree (Binary Indexed Tree)",
  "Trie",
  "Lowest Common Ancestor (LCA)",
  "Diameter of Tree",
  "Tree DP",

   
  "Graph Representation (Adjacency List/Matrix)",
  "Graph Traversal (BFS, DFS)",
  "Cycle Detection in Graph (Directed/Undirected)",
  "Topological Sort",
  "Strongly Connected Components (Kosaraju, Tarjan)",
  "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)",
  "Minimum Spanning Tree (Prim’s, Kruskal’s)",
  "Disjoint Set Union (DSU)",
  "Bridges and Articulation Points",

  
  "Hash Tables",
  "Hash Maps and Sets",
  "Collision Handling",
  "Custom Hash Functions",

  
  "Greedy Strategy and Examples",
  "Activity Selection",
  "Huffman Coding",
  "Job Scheduling",
  "Fractional Knapsack",

   
  "Introduction to DP",
  "Memoization vs Tabulation",
  "0/1 Knapsack",
  "Longest Common Subsequence (LCS)",
  "Longest Increasing Subsequence (LIS)",
  "Matrix Chain Multiplication",
  "DP on Trees/Graphs",
  "Bitmask DP",
  "Digit DP",

   
  "Merge Sort",
  "Quick Sort",
  "Binary Search Applications",
  "Closest Pair of Points",

   
  "Maximum Subarray Sum",
  "Longest Substring with K Distinct Characters",
  "Minimum Window Substring",

   
  "Bitwise Operators",
  "Power of Two Checks",
  "Set/Unset/Toggle Bits",
  "XOR Problems",
  "Bitmasking Techniques",

  
  "Top Interview Problems",
  "Amortized Analysis",
  "Reservoir Sampling",
  "MO’s Algorithm",
  "Meet in the Middle",
  "Randomized Algorithms",

   
  "KMP and Z Algorithm for String Matching",
  "Heavy Light Decomposition",
  "Centroid Decomposition",
  "Convex Hull",
  "Segment Tree with Lazy Propagation",
  "Suffix Arrays and Trees",
  "Rabin-Karp Rolling Hash",
  "Persistent Data Structures",
  "Online Algorithms and Offline Queries",
  "Treap, Splay Tree, Red-Black Tree",

 
  "Leetcode/Codeforces Practice Patterns",
  "Competitive Programming Patterns",
  "Interview Coding Patterns",
  "DSA System Design Integration"
]

   

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

              {dsa_topics.map((topics, index) => (
                <li key={index}><Link to={`/dsa/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="dsa" tagn={29}/>

        <NextPrevTopic topics={dsa_topics} currentTopic={formattedTopic} basePath="/dsa"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Dsa;
