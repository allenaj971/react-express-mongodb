import { Form, Button } from "react-bootstrap"
import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        const blog = { author, title, content };

        await fetch("http://192.168.1.101:3000/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => { console.log('Successfully added new blog!') })
    }

    return (
        <div>
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Blog Author</Form.Label>
                    <Form.Control type="text" placeholder="Your name" value={author} onChange={(e) => { setAuthor(e.target.value) }} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>New Blog Content</Form.Label>
                    <Form.Control as="textarea" rows={3} required value={content} onChange={(e) => { setContent(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddPost
