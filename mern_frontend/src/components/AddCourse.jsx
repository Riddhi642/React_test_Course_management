//     Course Name (text input)
//  Instructor Name (text input)
//  Category (text input)
//  Duration (number input – hours)
//  Level (dropdown or text input)
//  Course Thumbnail (file input)
   
   // id:Number,
    // courseName:String,
    // instructor:String,
    // category:String,
    // duration:Numbar,
    // level:String,
    // thumbnail:String

// {
//   "courseName":"IT",
//     "instructor":"XC",
//      "category":"ABc",
//      "duration":"2",
//   "level":"Beginner",
//      "thumbnail":"axv@com.com"

// }

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AddCourse = () => {
    const[course,setCourse]=useState({courseName:'',instructor:'',category:'',duration:'',level:'',thumbnail:''})
    const navigate=useNavigate()
    const handleSubmit=  (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/course/add',course)
        .then(() =>navigate('/')).catch((err) =>console.log(err)
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
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-center">Add Course Here</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                                />
                                <label for="formId1">Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                                />
                                <label for="formId1">Instructor</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,category:e.target.value})}
                                />
                                <label for="formId1">Category</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="number"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,duration:e.target.value})}
                                />
                                <label for="formId1">Duration</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,level:e.target.value})}
                                />
                                <label for="formId1">Level</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                />
                                <label for="formId1">Thumbnail</label>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-dark"
                            >
                                ADD 
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

export default AddCourse
