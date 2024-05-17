import {useState } from 'react';
import ResumeExperience from './ResumeExperience';
import ResumeHeader from './ResumeHeader';

function Header(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return(
        <div className='max-w-full'>
    <div className='grid grid-cols-2 grid-rows-1'>
    <div className="bg-blue-500" >
            <button className='w-full flex justify-between px-2'>
                <span>Contact Information</span>
                <span className='text-xl'>+</span>
            </button>
        </div>
        <div>
        <ResumeHeader
        firstName="George"
        lastName="Cortes"
        email="cortes.george93@icloud.com"
        phoneNumber="+1-(510)-460-0905" />
        <ResumeExperience />
        </div>
    </div>
        </div>
    )
}
export default Header;