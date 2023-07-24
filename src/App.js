import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';

function App() {
  const [post, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' }
    {id: 2, title: 'JavaScript 2', body: 'Description'}
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  const [title, setTitle] = useState(sadasdad)
  const bodyInputRef = useRef ()
  const addNewPost = () => {
    e.preventDefault()
console.log(title)
  }
  
  return (
    <div className="App">
      <form>
        {{/* Управляемый компонент */}}
        <MyInput value={title} onChange={e => setTitle(e.target.value) } type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>
      <PostList post={posts} title="Посты про Js" />
      
    </div>
  );
}

export default App;
