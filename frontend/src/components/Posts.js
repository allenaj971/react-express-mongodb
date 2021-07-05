import { Card, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap/';
import { useState } from 'react';
import AddPost from './AddPost';
import EditPost from './EditPost';

const Posts = ({ posts }) => {
    const [toggleNewPost, setNewTogglePost] = useState(false);
    const [toggleEditPost, setToggleEditPost] = useState(false);
    const [editFormID, setEditFormID] = useState('');

    const toggleNewForm = (e) => {
        e.preventDefault();
        setNewTogglePost(!toggleNewPost);
    }

    const toggleEditForm = (e) => {
        e.preventDefault()
        setToggleEditPost(!toggleEditPost);
        setEditFormID(e.target.id)
    }

    // handle deleting posts
    const handleDelete = async (e) => {
        await fetch(`http://192.168.1.101:3000/${e.target.id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        }).then(() => {
            console.log('Successfully deleted new blog!');
        }).catch((e) => {
            console.log(e);
        })
    }

    // This loop just creates the Posts and stuff with bootstrap card style
    var items = [];
    for (var i = 0; i < posts.length; i++) {
        items.push(
            <Row className="justify-content-md-center" key={posts[i]._id}>
                <Card>
                    <Card.Header>By {posts[i].author}</Card.Header>
                    <Card.Body>
                        <Card.Title>{posts[i].title}</Card.Title>
                        <blockquote className="blockquote mb-0">
                            <p>{posts[i].content} </p>
                        </blockquote>
                    </Card.Body>
                    <Button variant="info" onClick={toggleEditForm} id={posts[i]._id}>Edit Post</Button>
                    <Button variant="danger" onClick={handleDelete} id={posts[i]._id}>Delete Post</Button>
                </Card>
                <br></br>
            </Row>
        )
    }

    return (
        <div>
            <br></br>
            {toggleEditPost ? <EditPost postID={editFormID} posts={posts} /> : < Button variant="outline-info" onClick={toggleNewForm}>
                {toggleNewPost ? "See Posts" : " New Post"}
            </Button>}
            <br></br>
            {(toggleNewPost) ? <AddPost /> : <Container><br></br>{items}</Container>}
            <br></br>
        </div >
    )
}

export default Posts
