import React, {FC, useRef} from 'react';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import './QuestionsComp.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string;
    additionalInfo: string;
}

const QuestionsComp: FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const { register,
        handleSubmit,
        formState: { errors }, reset } = useForm<FormData>();

    const sendEmail = async () => {
        try {
            if (!form.current) {
                console.error('Form element is not available');
                return;
            }

             await emailjs
                .sendForm('service_48b9qsi', 'template_zcwl55k', form.current, 'mE7q44hn29T0TTVE2');
            reset();
        } catch (error) {
            console.error('Email sending failed:', error);
        }
    };


    return (
        <div className="mainQuestBox">
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="questionAnswerDiv">
                    <label htmlFor="name">Your name:</label>
                    <input id="name" className="text1" {...register('name', { required: 'This field is required' })} />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="emailPhoneDiv">
                    <div className="questionAnswerDiv labelW">
                        <label htmlFor="phone">Phone number:</label>
                        <input id="phone" className="text1"{...register('phone', { required: 'This field is required' })} />
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>
                    <div className="questionAnswerDiv labelW">
                        <label htmlFor="email">Email address:</label>
                        <input id="email" className="text1"{...register('email', { pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="questionAnswerDiv">
                    <label htmlFor="address">Property address:</label>
                    <input id="address" className="text1" {...register('address')} />
                </div>
                <div className="questionAnswerDiv">
                    <label htmlFor="additionalInfo">
                        Is there anything you want to tell us about your house or why you are selling?
                    </label>
                    <textarea id="additionalInfo" className="text1"{...register('additionalInfo')} />
                </div>
                <button className='btnInQuest' type="submit">Submit</button>
            </form>
        </div>
    );
};

export { QuestionsComp };
