import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AddCourse = () => {

    const [course, setCourse] = useState({
        courseName:'',
        instructor:'',
        category:'',
        duration:'',
        level:'',
        thumbnail:''
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(
            'http://localhost:4000/course/add',
            // 'https://react-test-course-management.onrender.com/course/add',
            course
        )
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }


    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card mt-4">

                        <div className="card-body">

                            <h4 className="text-center">
                                Add Course Here
                            </h4>


                            <form onSubmit={handleSubmit}>


                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                courseName:e.target.value
                                            })
                                        }
                                    />
                                    <label>Name</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                instructor:e.target.value
                                            })
                                        }
                                    />
                                    <label>Instructor</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                category:e.target.value
                                            })
                                        }
                                    />
                                    <label>Category</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                duration:Number(e.target.value)
                                            })
                                        }
                                    />
                                    <label>Duration</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                level:e.target.value
                                            })
                                        }
                                    />
                                    <label>Level</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>
                                            setCourse({
                                                ...course,
                                                thumbnail:e.target.value
                                            })
                                        }
                                    />
                                    <label>Thumbnail</label>
                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-dark"
                                >
                                    ADD
                                </button>


                            </form>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddCourse