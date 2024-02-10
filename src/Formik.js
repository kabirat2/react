import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Formik = () => {



    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/user")
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
            }).catch((err) => {
                console.log(err);
            })

    }, [])



    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: ""

        },

        validationSchema: yup.object({
            email: yup.string().email("must be a valid email").required("email is required"),
            password: yup.string().required("password is required"),
            username: yup.string().min(5, "must be a valid username").required("username is required")
        }),



        onSubmit: (value) => {
            console.log(value);
            const user = data.find(el => el.email == value.email)
            if (user) {

                alert("user already exist")

                toast.error("error occur while signed up")
                
                formik.setValues({
                    email: "",
                    password: "",
                    username: ""

                })
            } else {
                try {
                    axios.post('http://localhost:3002/user', value)
                        .then((res) => {
                            toast.success("signed up successful")
                            console.log(res);

                            formik.setValues({
                                email: "",
                                password: "",
                                username: ""

                            })

                        }).catch((error) => {
                            toast.error("error occur while signed up")
                            console.log(error);
                            formik.setValues({
                                email: "",
                                password: "",
                                username: ""

                            })
                        })
                } catch (error) {
                    console.log(error);
                }
            }


        }

    })
    console.log(formik.errors);
    console.log(formik.touched);
    return (
        <div>
            <div className="container d-flex align-items-center justify-content-center flex-column w-50 mt-5 shadow-sm p-3 mb-5 bg-body-secondary rounded">


                <h2>Signup Form</h2>
                <form onSubmit={formik.handleSubmit} className="col-10 col-md-8 col-lg-6 mx-auto my-5 p-3" action='' >
                    <div>
                        <input onBlur={formik.handleBlur} value={formik.values.username} onChange={formik.handleChange} name='username' className='form-control w-100 my-2' placeholder='username' type='text' />
                        <p>{formik.touched.username &&formik.errors.username? formik.errors.username:''}</p>
                    </div>
                    <div>
                        <input onBlur={formik.handleBlur}  value={formik.values.email} onChange={formik.handleChange} name='email' className='form-control w-100 my-2' placeholder='email' type='text' />
                        <p>{formik.touched.email &&formik.errors.email? formik.errors.email:''}</p>
                    </div>
                    <div>
                    <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} name='password' className='form-control w-100 my-2' placeholder='password' type='password' />
                    <p>{formik.touched.password &&formik.errors.password? formik.errors.password:''}</p>
                   </div>
                    <button type='submit' className="btn btn-primary ">click me</button>
                    <ToastContainer/>
                </form>
            </div>
            
        </div>

    )
}

export default Formik