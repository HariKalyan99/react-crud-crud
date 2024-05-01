import React from 'react'

const Sidebar = ({pageToDisplay, pageDisplay}) => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 " style={{width:" 200px", backgroundColor: "#4e6c80"}}>
    {/* <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span class="fs-4 text-center">Sidebar</span>
    {/* </a> */}
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" onClick={() => pageToDisplay("createBlog")}>
        <a href="#" class={`nav-link text-white ${pageDisplay === "createBlog" && 'active'}`} aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Create Blogs
        </a>
      </li>
      <li onClick={() => pageToDisplay("dashboard")}>
        <a href="#" class={`nav-link text-white ${pageDisplay === "dashboard" && 'active'}`}>
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      
      
    </ul>
    
  </div>
  )
}

export default Sidebar