import {useState } from 'react';
import ResumeExperience from './ResumeExperience';
import ResumeHeader from './ResumeHeader';

function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleXp, setToggleXp] = useState(false);
    const [firstName, setFirstName] = useState("George");
    const [lastName, setLastName] = useState("Cortes");
    const [email, setEmail] = useState("cortes.george93@icloud.com");
    const [phoneNumber,setPhoneNumber] = useState("510-555-5555");
    // form input
    const [firstNameForm, setFirstNameForm] = useState("");
    const [lastNameForm, setLastNameForm] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const [phoneNumbeForm,setPhoneNumberForm] = useState("");
    
    // Experience
    const [jobTitle, setJobTitle] = useState("")
    const [beforeDate, setBeforeDate] = useState("")
    const [afterDate, setAfterDate] = useState("")
    const [currDescription, setCurrDescription] = useState("")
    const [description, setDescription] = useState([])
    const [experience, setExperience] = useState([]);
    function addDescription(){
        let copy = []
        copy.push(...description)
        copy.push(currDescription)
        setDescription(copy)
        setCurrDescription("");
    }
    function createExpObj(){
        let copy = []
        copy.push(...experience)
        copy.push({
            jobTitle: jobTitle, beforeDate:beforeDate,afterDate:afterDate,description:description
         })
         clearExperience()
         setExperience(copy)
    }
    function clearExperience(){
        setAfterDate("")
        setBeforeDate("")
        setCurrDescription("")
        setJobTitle("")
        setToggleXp(!toggleXp)
    }
    return(
        <div className='max-w-full'>
    <div className='grid grid-cols-3 grid-rows-1 p-5'>
 <div className='border-r-2 pr-4'>
    <div  className={toggleMenu === false ? '':'rounded-lg bg-slate-50'}>
            <button className='w-full flex justify-between items-center p-2  rounded-lg  bg-slate-50 hover:bg-blue-300' onClick={()=> setToggleMenu(!toggleMenu)}>
                <span>Contact Information</span>
                <span className='text-xl'>{toggleMenu === false ? "+" : "-"}</span>
            </button>
            <form className={toggleMenu === false?' m-5 hidden bg-slate-500' :"flex flex-col m-5 bg-slate-50"} >
                <div className='flex items-center flex-col'>
                <label htmlFor="firstName">First Name</label>
                <input type='text' id='firstName' placeholder='Enter your first name' onChange={e => setFirstNameForm(e.target.value)} required value={firstNameForm} ></input>
                </div>
                <div className='flex items-center flex-col'>
                <label htmlFor="lastName">Last Name</label>
                <input type='text' id='lastName' placeholder='Enter your last name' onChange={e => setLastNameForm(e.target.value)} required value={lastNameForm} ></input>
                </div>
                <div className='flex items-center flex-col'>
                <label htmlFor="email">Email</label>
                <input type='email' id='email' placeholder='Enter your an email' onChange={e => setEmailForm(e.target.value)} required={true} value={emailForm} ></input>
                </div>
                <div className='flex items-center flex-col'>
                <label htmlFor="phoneNumber">Phone #</label>
                <input type='email' id='phoneNumber' placeholder='Enter your an email' onChange={e => setPhoneNumberForm(e.target.value)} required value={phoneNumbeForm} ></input>
                </div>
                <button className='hover:bg-slate-500' type='submit' onClick={(e)=>{
                    e.preventDefault();
                    setFirstName(firstNameForm)
                    setLastName(lastNameForm)
                    setPhoneNumber(phoneNumbeForm)
                    setEmail(emailForm)
                    setToggleMenu(!toggleMenu)
                }}>submit</button>
            </form>
        </div>
        <div  className={toggleXp === false ? '':'rounded-lg bg-slate-50 '}>
            <button className='w-full flex justify-between items-center p-2  rounded-lg  bg-slate-50 hover:bg-blue-300' onClick={()=> setToggleXp(!toggleXp)}>
                <span className='text-'>Experience</span>
                <span className='text-xl'>{toggleXp === false ? "+" : "-"}</span>
            </button>
            <form className={toggleXp === false?' m-5 hidden bg-slate-500' :"flex flex-col m-5 bg-slate-50"} >
                <div className='flex items-center flex-col'>
                <label htmlFor="jobTitle">Job Title</label>
                <input type='text' id='firstName' placeholder='Enter your job title' onChange={e => setJobTitle(e.target.value)} required value={jobTitle}></input>
                </div>
                <div className='flex items-center flex-col'>
                <label htmlFor="from">From</label>
                <input type='date' id='from' onChange={e => setBeforeDate(e.target.value)} required value={beforeDate}></input>
                <span>to</span>
                <input type='date' id='from' onChange={e => setAfterDate(e.target.value)} required value={afterDate}></input>
                </div>
                <div className='flex items-center flex-col'>
                    <label htmlFor="descriptionBullets">Description</label>
                <div className='flex'>
                    <input type='text'id='descriptionBullets' className='rounded-l-lg' value={currDescription} onChange={e=> setCurrDescription(e.target.value)}></input>
                    <button type='button' required className='bg-slate-200 min-w-8 rounded-r-lg text-center'
                        onClick={addDescription}
                        >+</button></div>
                </div>
                <button className='hover:bg-slate-500' onClick={(e)=>{
                    e.preventDefault();
                    createExpObj();
                }}>submit</button>
            </form>
        </div>
 </div>
        <div className='m-10 bg-green-200 col-span-2'>
        <ResumeHeader
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber} />

        <ResumeExperience 
        experience={experience}
        />
        </div>
    </div>
        </div>
    )
}
export default Header;