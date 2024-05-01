import React from 'react'
import Blogs from '../Blogs/Blogs';

const DisplayBlogs = ({postList, editPost}) => {

    


  return (
    <div class="album p-5" style={{backgroundColor: "#4e7e90"}}>
    <div class="container-fluid">
    
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {postList.map((post, ind) => <Blogs post={post} key={post.id} editPost={editPost}/>)}
      </div>
    </div>
  </div>
  )
}

export default DisplayBlogs