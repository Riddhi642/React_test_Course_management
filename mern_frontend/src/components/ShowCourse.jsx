import React, { useEffect, useState } from 'react'
import { useNavigate, useParams ,NavLink} from 'react-router-dom'
import axios from 'axios'

const ShowCourse = () => {
  const[course,setCourse]=useState({})
  const{id}=useParams()
  const navigate=useNavigate()
   useEffect(()=>{
      axios.get(`http://localhost:4000/course/course/${id}`)
      .then((result) => setCourse(result.data)).catch((err) => console.log(err)
      )
    },[])
    const handleDelete= () => {
      axios.delete(`http://localhost:4000/course/${id}`)
      .then(() =>navigate('/') ).catch((err) => console.log(err)
      )
    }
  return (
    <div>
      <div
        className="container"
      >
        <div
          className="row justify-content-center align-items-center g-2"
        >
          
          <div className="col-md-10">
            <div className="card">
              <img className="card-img-top" src={course.thumbnail}    alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Course Name:    {course.courseName}</h4>
                <h4 className="card-title">Instructor:      {course.instructor}</h4>
                <h4 className="card-title">Course Category: {course.category}</h4>
                <h4 className="card-title">Course Duration: {course.duration}</h4>
                <h4 className="card-title"> Course Level:   {course.level}</h4>
                <NavLink
                  name=""
                  id=""
                  className="btn btn-primary me-2"
                  to="/"
                  role="button"
                  >Back to Home</NavLink>
                <NavLink
                  name=""
                  id=""
                  className="btn btn-warning me-2"
                  to={`/edit/${course._id}`}
                  role="button"
                  >Edit</NavLink>
                <button
                  type="button"
                  className="btn btn-danger me-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                
                



              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default ShowCourse
