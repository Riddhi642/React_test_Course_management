import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const EditBlog = () => {
  const{id}=useParams()
  const navigate=useNavigate()
  const[blog,setBlog]=useState({title:'',content:'',imageUrl:'',author:''})
  useEffect(()=>{
    axios.get(`http://localhost:4000/blog/blog/${id}`)
    .then((result) => 
      setBlog(result.data)
    ).catch((err) => 
      console.log(err)
      
    )

  },[])
  const handleEdit= (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/blog/${id}`,blog)
    .then(()=>navigate(`/${id}`))
    .catch((err)=>console.log(err)
    )
    
  }
  return (
    <div>
      <div
        class="container"
      >
        <div
          class="row justify-content-center align-items-center g-2"
        >
          <div class="col"><div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Edit Page</h4>
              <form onSubmit={handleEdit}>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={blog.title}
                    onChange={(e)=>setBlog({...blog,title:e.target.value})}
                  />
                  <label for="formId1">Title</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={blog.content}
                    onChange={(e)=>setBlog({...blog,content:e.target.value})}
                  />
                  <label for="formId1">Content</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={blog.imageUrl}
                    onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
                  />
                  <label for="formId1">Image Url</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={blog.author}
                    onChange={(e)=>setBlog({...blog,author:e.target.value})}
                  />
                  <label for="formId1">Author</label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                >
                  Edit
                </button>
                
                

                   </form>
            </div>
          </div>
          </div>
        </div>
        
      </div>
      

      
    </div>
  )
}

export default EditBlog
