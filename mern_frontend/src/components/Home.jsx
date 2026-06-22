import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const[cor,setCor]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/course')
        .then((result) => setCor(result.data)).catch((err) => console.log(err)
        )
    },[])
  return (
    <>
     <div className="container mt-4">
  <div className="row">
    {cor.map((c) => (
      <div className="col-md-4 mb-4" key={c._id}>
        <div className="card h-100">
          <img
            className="card-img-top"
            src={c.thumbnail}
            alt={c.courseName}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5>Course Name: {c.courseName}</h5>
            <p>Instructor: {c.instructor}</p>

            <NavLink
              className="btn btn-primary"
              to={`/${c._id}`}
            >
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Home
