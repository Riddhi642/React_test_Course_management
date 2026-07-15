import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditCourse = () => {

    const { id } = useParams()

    const [course, setCourse] = useState({
        courseName:'',
        instructor:'',
        category:'',
        duration:'',
        level:'',
        thumbnail:''
    })

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`https://react-test-course-management.onrender.com/course/${id}`)
        .then((result) => setCourse(result.data))
        .catch((err) => console.log(err))

    }, [id])


    const handleEdit = (e) => {

        e.preventDefault()

        axios.put(`https://react-test-course-management.onrender.com/course/${id}`, course)
        .then(() => navigate(`/${id}`))
        .catch((err) => console.log(err))

    }


    return (
        <div>

            <div className="container">

                <div className="row justify-content-center align-items-center g-2">

                    <div className="col">

                        <div className="card">

                            <div className="card-body">

                                <h4 className="card-title text-center">
                                    Edit Course
                                </h4>


                                <form onSubmit={handleEdit}>


                                    <div className="form-floating mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.courseName}
                                            onChange={(e)=>setCourse({...course, courseName:e.target.value})}
                                        />

                                        <label>Name</label>

                                    </div>



                                    <div className="form-floating mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.instructor}
                                            onChange={(e)=>setCourse({...course, instructor:e.target.value})}
                                        />

                                        <label>Instructor</label>

                                    </div>



                                    <div className="form-floating mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.category}
                                            onChange={(e)=>setCourse({...course, category:e.target.value})}
                                        />

                                        <label>Category</label>

                                    </div>



                                    <div className="form-floating mb-3">

                                        <input
                                            type="number"
                                            className="form-control"
                                            value={course.duration}
                                            onChange={(e)=>setCourse({...course, duration:e.target.value})}
                                        />

                                        <label>Duration</label>

                                    </div>



                                    <div className="form-floating mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.level}
                                            onChange={(e)=>setCourse({...course, level:e.target.value})}
                                        />

                                        <label>Level</label>

                                    </div>



                                    <div className="form-floating mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.thumbnail}
                                            onChange={(e)=>setCourse({...course, thumbnail:e.target.value})}
                                        />

                                        <label>Thumbnail</label>

                                    </div>



                                    <button
                                        type="submit"
                                        className="btn btn-dark"
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

export default EditCourse