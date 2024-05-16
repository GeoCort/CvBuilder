import { useState } from 'react'
function Header(){``
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [hideMenu,setHideMenu] = useState(true);
    function changeHeader(e){
        e.preventDefault();
    }
    function toggleMenu(){
        setHideMenu(!hideMenu);
    }
    return (
        <div className='headerEditContainer' >
            <div className='flex-end'>
                <button onClick={toggleMenu}>V</button>
            </div>
            <form className={hideMenu === false ? "form flex-col": "form flex-col hidden" }>
            <div className="flex-col" >
                <label className="text-field"  htmlFor="firstName">First Name</label>
                <input type='text' id='firstName'/>
            </div>
            <div className="flex-col" >
            <label className="text-field"  htmlFor="lastName">Last Name</label>
            <input type='text' id='lastName'/>
            </div>
            <div className="flex-col" >
            <label className="text-field"  htmlFor="email">E-Mail</label>
            <input type='text' id='email'/>
            </div>
            <div className="flex-col" >
            <label  className="text-field" htmlFor="phoneNumber">Phone #</label>
            <input type='phone'id='phoneNumber' />
            </div >
            <button type='submit' onClick={changeHeader}>Submit</button>
            </form>
        </div>
    )
}

export default Header;