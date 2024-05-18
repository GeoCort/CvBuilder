function ResumeExperience(props){
    return(
        <div>
            <h1 className="text-3xl font-semibold">Experience</h1>
            {props.experience && props.experience.map( (exp)=>{
                return(
                    <div className="ml-4 font-semibold">
                        <div className="flex flex-col">
                        <span className="text-xl">{exp.jobTitle}</span>
                        <span className="italic text-xs ml-5">{exp.beforeDate} - {exp.afterDate}</span>
                        </div>
                        <ul className="list-disc ml-8">
                            {exp.description?.map(x => <li className="bold text-sm">{x}</li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default ResumeExperience;