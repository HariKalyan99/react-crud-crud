import React, { useRef } from 'react'
import {v4 as uuidV4} from 'uuid';

const CreateBlogs = ({addPost}) => {

    const userIdRef = useRef("")
    const titleRef = useRef("")
    const bodyRef = useRef("")
    const tagsRef = useRef("")
    const reactionsRef = useRef("")



    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({userId: userIdRef.current.value, title: titleRef.current.value, body: bodyRef.current.value, tags: tagsRef.current.value.split(","), reactions: reactionsRef.current.value, id: uuidV4()})
    }
  return (
    <form className='container d-flex flex-column justify-content-center w-100 align-items-center gap-5 p-5' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="userId" className='text-white'>UserId</label>
        <input type="text" id='userId' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} ref={userIdRef}/>
        <label htmlFor="title" className='text-white'>Title</label>
        <input type="text" id='title'  className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} ref={titleRef}/>
        <label htmlFor="body" className='text-white'>Body</label>
        <textarea type="text" id='body' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} ref={bodyRef}/>
        <label htmlFor="tags" className='text-white'>Tags</label>
        <input type="text" id='tags' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} ref={tagsRef}/>
        <label htmlFor="reactions" className='text-white'>Reactions</label>
        <input type="text" id='reactions' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} ref={reactionsRef}/>


        <button type='submit' className='btn btn-dark'>Add Post</button>
    </form>
  )
}

export default CreateBlogs