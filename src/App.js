import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Posts from './Posts'

function App() {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => setPosts(res))
  }, [])


  function deleteList(e) {
    const tempList = [...posts]
    tempList.splice(e, 1)
    setPosts(tempList)
  }
  function editList(e) {
    const tempList = [...posts]
    const newTitle = prompt("Write the title here");
    const newBody = prompt("Write the Body here");
    tempList[e].title = newTitle;
    tempList[e].body = newBody;
    console.log(tempList[e])
    setPosts(tempList)
  }

  return (
    <>
      {posts.map((item, index)=> (
        <Posts postNumber={index} title={item.title} body={item.body} deleteList={()=>deleteList(index)} editIt={()=> editList(index)} />
      ))}

    </>
  );
}

export default App;
