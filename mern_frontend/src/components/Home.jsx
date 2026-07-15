import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const Home = () => {

    const [search,setSearch] = useState('');
    const [cor,setCor] = useState([]);


    useEffect(()=>{

        axios.get(
            'https://react-test-course-management.onrender.com/course'
        )
        .then((result)=>{
            setCor(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);



    return (

        <div className="container mt-4">


            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Course Name or Instructor"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />


            <div className="row">


            {
                cor
                .filter((c)=>
                    c.courseName?.toLowerCase()
                    .includes(search.toLowerCase())

                    ||

                    c.instructor?.toLowerCase()
                    .includes(search.toLowerCase())
                )

                .map((c)=>(


                    <div className="col-md-4 mb-4" key={c._id}>


                        <div className="card h-100">


                            <img
                                src={c.thumbnail}
                                className="card-img-top"
                                alt={c.courseName}
                                style={{
                                    height:"200px",
                                    objectFit:"cover"
                                }}
                            />


                            <div className="card-body">


                                <h5>
                                    Course Name: {c.courseName}
                                </h5>


                                <p>
                                    Instructor: {c.instructor}
                                </p>


                                <NavLink
                                    className="btn btn-primary"
                                    to={`/${c._id}`}
                                >
                                    Read More
                                </NavLink>


                            </div>


                        </div>


                    </div>


                ))
            }


            </div>


        </div>

    )
}


export default Home