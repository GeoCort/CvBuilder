function ResumeExperience(props){

    return(
        <>
        <h1 className="text-3xl font-semibold">Experience</h1>
        <div className="ml-4 font-semibold">
            <div className="flex flex-col">
            <span className="text-xl">{props.jobTitle}</span>
            <span className="italic text-xs ml-5">{props.beforeDate} - {props.afterDate}</span>
            </div>
            <ul className="list-disc ml-8">
                {props.description?.map(x => <li className="bold text-sm">{x}</li>)}
            </ul>
        </div>
        </>
    )
}
export default ResumeExperience;