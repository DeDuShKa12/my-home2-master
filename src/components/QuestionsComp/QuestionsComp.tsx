import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import './QuestionsComp.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string;
    additionalInfo: string;
}

const QuestionsComp: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="mainQuestBox">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="questionAnswerDiv">
                    <label>Your name</label>
                    <input className="text1" {...register('name', { required: true })} />
                </div>
                <div className="emailPhoneDiv">
                    <div className="questionAnswerDiv labelW">
                        <label>Phone number</label>
                        <input className="text1"{...register('phone', { required: true })} />
                    </div>
                    <div className="questionAnswerDiv labelW">
                        <label>Email address</label>
                        <input className="text1"{...register('email', { pattern: /^\S+@\S+$/i })} />
                    </div>
                </div>
                <div className="questionAnswerDiv">
                    <label>Property address</label>
                    <input className="text1" {...register('address')} />
                </div>
                <div className="questionAnswerDiv">
                    <label>
                        Is there anything you want to tell us about your house or why you are selling?
                    </label>
                    <textarea className="text1"{...register('additionalInfo')} />
                </div>
                <button className='btnInQuest' type="submit">Submit</button>
            </form>
        </div>
    );
};

export { QuestionsComp };
