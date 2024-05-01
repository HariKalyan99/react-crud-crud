import React, { useState } from 'react'

const EditBlogs = ({post, showEdit,
    setShowEdit, editPost}) => {
        const [getId, setId] = useState(post.id)
    const [getuserId, setuserId] = useState(post.userId)
const [gettitle, settitle] = useState(post.title)
const [getbody, setbody] = useState(post.body)
const [gettags, settags] = useState(post.tags)
const [getreactions, setreactions] = useState(post.reactions)


    const handleSubmit = (e) => {
        e.preventDefault();
        editPost({userId: getuserId, title: gettitle, body: getbody, tags: gettags.split(","), reactions: getreactions, id: getId})
        setShowEdit(!showEdit)
    }



  return (
    <form className='container d-flex flex-column justify-content-center w-100 align-items-center gap-5 p-5' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="userId" className='text-white'>UserId</label>
        <input type="text" id='userId' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} value={getuserId} onChange={(e) => setuserId(e.target.value)}/>
        <label htmlFor="title" className='text-white'>Title</label>
        <input type="text" id='title'  className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} value={gettitle} onChange={(e) => settitle(e.target.value)}/>
        <label htmlFor="body" className='text-white'>Body</label>
        <textarea type="text" id='body' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} value={getbody} onChange={(e) => setbody(e.target.value)}/>
        <label htmlFor="tags" className='text-white'>Tags</label>
        <input type="text" id='tags' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} value={gettags} onChange={(e) => settags(e.target.value)}/>
        <label htmlFor="reactions" className='text-white'>Reactions</label>
        <input type="text" id='reactions' className='w-50' style={{height:"50px", padding: "20px",borderRadius: "10px"}} value={getreactions} onChange={(e) => setreactions(e.target.value)}/>


        <button type='submit' className='btn btn-dark'>Edit Post</button>
        <button type='button' className='btn btn-dark' onClick={() => setShowEdit(!showEdit)}>Don't edit</button>

    </form>
  )
}

export default EditBlogs