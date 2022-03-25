import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import emailjs from 'emailjs-com'


const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is not valid"),
    email: yup.string().email("is email").required(),
    message: yup.string().required(),
}).required();


function FormComment() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const SERVICE_ID = "service_u69cx1z"
    const TEMPLATE_ID  = "template_tcxvbj7"
    const USER_ID ="user_XW2vGkUpspvv58N1y6dpf"



    const onSubmit = data => {
        let templateParams = {
            ...data,
            formName:"ASLI",
            myEmail:"giottan123@gmail.com", 
            messageThank:"We will be happy to receive your feedback, we will review it and get back to you later. Thank you!",
        };
        emailjs.send(SERVICE_ID,TEMPLATE_ID,templateParams,USER_ID)
            .then(result=>{
                alert("Submitted successfully")
            },error =>{
                alert("Error")
            })
            
    };


    return (
        <form className="form-comment" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="form-comment-title">Comment</h4>
            <div className="form-comment-group">
                <input className="" {...register("name")} placeholder='Name' />
                <p> {errors.name?.message}</p>
            </div>
            <div className="form-comment-group">
                <input className="" {...register("phone")} placeholder="Phone" />
                <p> {errors.phone?.message}</p>
            </div>
            <div className="form-comment-group">
                <input className="" {...register("email")} placeholder="Email"/>
                <p>{errors.email?.message}</p>
            </div>
            <div className="form-comment-group">
                <textarea className="" {...register("message")} placeholder="Message" />
                <p>{errors.message?.message}</p>
            </div>
            <div className="form-comment-btn">
                <button type="submit" className="btn btn-primary"> Send</button>
            </div>
        </form>
    );
}

export default FormComment;