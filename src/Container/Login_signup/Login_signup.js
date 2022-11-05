import React, { useContext } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useState } from 'react';
import { themeContext } from '../../contextapi/ThemeContext';
import { useDispatch } from 'react-redux';
import { forgotPassAction, signInAction, signUpAction, SignWithGoogle } from '../../redux/action/auth.action';

function Login_signup(props) {
    const dispatch = useDispatch();
    const value = useContext(themeContext)
    const [usertype, setUsertype] = useState("Login");
    const [reset, setReset] = useState(false);

    let schemaObj, initval;

    if (usertype === "Login" && reset === false) {
        schemaObj = {
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password.")
        }
        initval = {
            email: '',
            password: ''
        }
    }else if (usertype === "Signup"  && reset === false) {
        schemaObj = {
            name: yup.string().required("Please enter Name."),
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password.")
        }
        initval = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset === true) {
        schemaObj = {
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id.")
        }
        initval = {
            email: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const handleData = (values) => {
        // let LocalData = JSON.parse(localStorage.getItem("user"));

        // if (LocalData === null) {
        //     localStorage.setItem("user", JSON.stringify([values]));
        // } else {
        //     LocalData.push(values);
        //     localStorage.setItem("user", JSON.stringify(LocalData));
        // }

        dispatch(signUpAction(values));

        console.log(values);
        formik.resetForm()
    }

    const handleSignWithGoogle = () => {
        dispatch(SignWithGoogle())
    }

    const handleLogin = (values) => {
        dispatch(signInAction(values));
        formik.resetForm()
    }

    const formik = useFormik({
        initialValues: initval,
        validationSchema: schema,
        onSubmit: values => {
            if (usertype === "Login" && reset === false) {
                handleLogin(values);
            } else if(usertype === "Signup" && reset == false){
                handleData(values);
            }else if(reset === true){
                dispatch(forgotPassAction(values));
            }
        },

        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formik;


    return (
        <section id="appointment" className={`appointment margin ${value.theme}`}>
            <div className="container">
                <div className="section-title text-center">
                    {
                        reset === true ?
                            <h2 class="text-center mb-5 pt-5">Forgot Password</h2>
                            :
                            usertype === "Login" ?
                                <h2 class="text-center mb-5 pt-5">Login</h2>
                                :
                                <h2 class="text-center mb-5 pt-5">Sign Up</h2>
                    }
                </div>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                reset === true ?
                                    null
                                    :
                                    usertype === "Login" ?
                                        null
                                        :
                                        <div className="col-md-4 form-group text-center ">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-msg="Please enter at least 4 chars"
                                                onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                        </div>
                        <div className='row justify-content-center'>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                        </div>
                        {
                            reset === true ?
                                null
                                :
                                <div className='row justify-content-center'>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                                </div>
                        }
                        {
                            reset === true ?
                                <div className="row justify-content-center"><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block">Submit</button></div>
                                :
                                usertype === "Login" ?
                                    <>
                                        <div className="row justify-content-center"><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block">Login</button></div>
                                        {/* <div className="text-center mt-3 "><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block" onClick={() => handleSignWithGoogle()}>Sign in With Google</button></div> */}
                                    </>
                                    :
                                    <div className="row justify-content-center"><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block">Signup</button></div>
                        }
                        {
                            usertype === "Login" ?
                                <p className='mt-4 text-center'>Create an account ? <a class="sign-up" onClick={() => { setReset(false); setUsertype("Signup") }}>Signup</a></p>
                                :
                                <p className=' text-center mt-4'>Allready have an account ?<a class="sign-up" onClick={() => { setReset(false); setUsertype("Login") }}>Login</a></p>
                        }
                        <a class='text-orange row justify-content-center' onClick={() => setReset(true)}>Forgot Your Password ?</a>
                    </Form>
                </Formik>
                  <div className=" row justify-content-center mt-3 "><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block" onClick={() => handleSignWithGoogle()}>Sign in With Google</button></div>
                  <br />
            </div>
        </section>
    );
}

export default Login_signup;

