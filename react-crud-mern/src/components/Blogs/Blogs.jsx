import React, { useState } from 'react'
import EditBlogs from '../EditBlogs/EditBlogs'

const Blogs = ({post, editPost}) => {
    const [showEdit, setShowEdit] = useState(false);
  return (
    <div class="col" >
        {showEdit && <div>
            <EditBlogs post={post} showEdit={showEdit}
setShowEdit={setShowEdit} editPost={editPost}/>
        </div>}
           <div class="card shadow-sm" style={{height: "700px"}}>
            <img src="https://www.greengeeks.com/blog/wp-content/uploads/2017/12/network-expansion.jpg" alt="blog-img" />
            <div class="card-body" >
              <h3 class="card-text">{post.title}</h3>
              <p class="card-text">{post.body}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {post.tags.map((tag, ind) => <button key={ind} type="button" class="btn btn-sm btn-outline-secondary">{tag}</button>
                  )}
                </div>
                <small class="text-body-secondary">Reactions: {post.reactions}</small>
              </div>
              <button className='btn btn-dark' type='btn' onClick={() => setShowEdit(!showEdit)}>EDIT</button>
            </div>
          </div>
        </div>
  )
}

export default Blogs