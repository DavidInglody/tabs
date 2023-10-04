import Duties from "./Duties"

const Review = ({review}) => {

    const {company,dates,title,duties} = review

  return <article className="job-info">
    <h3>{title}</h3>
    <span className="job-company">{company}</span>
    <p className="job-date">{dates}</p>
    <Duties duties={duties}/>
  </article> 
}
export default Review