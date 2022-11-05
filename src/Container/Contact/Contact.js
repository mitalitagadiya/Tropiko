import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

    function Contact(props) {

        let schema = yup.object().shape({
            name: yup.string().required("please enter name."),
            email: yup.string().email("please enter vaild email id.").required("please enter email id."),
            phone: yup.string().required("please enter your phone number"),
            message: yup.string(),
        });
    
        const formik = useFormik({
            initialValues: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            validationSchema: schema,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        });
    
        const { handleChange, handleBlur, handleSubmit, errors, touched } = formik;

        console.log(errors);


    return (
    <main id="main">
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">
                    Contact Us
                </h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input onChange={handleChange} onBlur={handleBlur} type="text" id="name" placeholder="Name" />
                                        <p className='text-color'>
                                            {errors.name && touched.name ? errors.name : ''}
                                        </p>
                                    </div>
                                    <div>
                                        <input onChange={handleChange} onBlur={handleBlur} type="tel" id="phone" placeholder="Phone Number" />
                                        <p className='text-color'>
                                            {errors.phone && touched.phone ? errors.phone : ''}
                                        </p>
                                    </div>
                                    <div>
                                        <input onChange={handleChange} onBlur={handleBlur} type="email" id="email" placeholder="Email" />
                                        <p className='text-color'> 
                                            {errors.email && touched.email ? errors.email : ''}
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <input onChange={handleChange} onBlur={handleBlur} type="text" name="message" placeholder="Message" />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit">
                                            send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
    export default Contact;