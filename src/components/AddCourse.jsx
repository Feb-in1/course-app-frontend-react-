import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const AddCourse = () => {
    const [data, setData] = useState(
        {
            "title": "",
            "desc": "",
            "date": "",
            "dur": "",
            "ven": "",
            "tnam": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8082/", data).then((response) => {
            console.log(response.data)
            if (response.data.status == "Success") {
                alert("Added Successfully")
            }
            else {
                alert(response.data)
            }
        }).catch(
            (error) => {
                alert("Error")
            }
        )
        console.log(data)

    }
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course Description</label>
                                <input type="text" className="form-control" name='desc' value={data.desc} onChange={inputHandler} />

                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course Date</label>
                                <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course Duration</label>
                                <input type="text" className="form-control" name='dur' value={data.dur} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='ven' value={data.ven} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Trainer Name</label>
                            <input type="text" className="form-control" name='tnam' value={data.tnam} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse