import Posts from "./components/Posts.js";
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'


function App() {
  const [posts, setPosts] = useState([]);

  // fetch data
  async function fetchData() {
    const res = await fetch("http://192.168.1.101:3000/")
      .then(res => res.json())
      .then(response => setPosts(response))
      .catch((e) => console.log(e));
    return res;
  }

  // useEffect to fetch Data, but only load once by using empty array 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Allen's News</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid="md" >
        <Posts posts={posts} />
      </Container>
    </div>
  );
}

export default App;
