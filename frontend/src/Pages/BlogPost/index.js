import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    imageURL: '',
    job: '',
    name: '',
    profileImageURL: '',
    title: '',
    type: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://runoblog.onrender.com/blogs', formData);
      console.log('Blog saved:', response.data);
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="job">Job</label>
          <input
            type="text"
            className="form-control"
            id="job"
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="profileImageURL">Profile Image URL</label>
          <input
            type="text"
            className="form-control"
            id="profileImageURL"
            name="profileImageURL"
            value={formData.profileImageURL}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="content">Content</label>
          <ReactQuill
            value={formData.content}
            onChange={handleContentChange}
            className="bg-white"
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                 {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']                                        
              ],
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
