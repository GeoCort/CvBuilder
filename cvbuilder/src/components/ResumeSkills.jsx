function ResumeSkills(props){
    return(
        <>
            <h1 className="text-3xl font-semibold" >Skills</h1>
            <ul className="flex gap-x-4 gap-y-2 text-md italic justify-center flex-wrap">
               {props.skills?.filter(x=>x != "").map( (skill)=>{
                    return ( <li key={skill}>{skill}</li>)
               })}
            </ul>
        </>
    );
}
export default ResumeSkills