function ResumeHeader(props){
    return(
        <div className="text-lg flex py-2 flex-col justify-center items-center">
        <h1>{props.firstName + " " + props.lastName}</h1>
        <h1>{props.email}</h1>
        <h1>{props.phoneNumber}</h1>
        </div >
    );
}
export default ResumeHeader;