import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const SearchCourse = () => {

    const [data, setData] = useState(
        {
            "title": ""
        }
    )

    const [result, setResult] = useState(
        []
    )
    //DELETE EVENT HANDLING
    const DeleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8082/delete",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "Success") {
                    alert("Successfully deleted")

                } else {
                    alert("Error in Deletion")

                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally

    }
    //INPUT VALUE FETCHING
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    //SEARCH BUTTON EVENT
    const readValue = () => {
        axios.post("http://localhost:8082/search", data).then((response) => {
            setResult(response.data)
        }

        ).catch(
            (error) => {
                console.log(error)
            }

        ).finally()

    }


    return (

        <div>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>




                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-dark table-striped table-hover">

                            <thead>
                                <tr>

                                    <th scope="col">Course Title</th>
                                    <th scope="col">Course Description</th>
                                    <th scope="col">Course Date</th>

                                    <th scope="col">Course Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer Name</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.title}</td>
                                                <td>{value.desc}</td>
                                                <td>{value.date}</td>
                                                <td>{value.dur}</td>
                                                <td>{value.ven}</td>
                                                <td>{value.tnam}</td>
                                                <td> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <button className="btn btn-danger" onClick={()=>{DeleteCourse(value._id)}}>Delete</button>
                                                </div></td>

                                            </tr>
                                        }
                                    )
                                }















                            </tbody>
                        </table>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchCourse