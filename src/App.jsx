import { useEffect,useState } from "react";
import JobInfo from "./JobInfo";
import Loading from "./Loading";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';


const App = () => {
  const [review, setReview] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [index,setIndex] = useState(0)

  const fetchInfo = async()=>{
    const response = await fetch(url)
    const info = await response.json()
    setReview(info)
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchInfo()

  },[])

  const changer = ((id)=>{
    setIndex(id)
  })

  return <main>
    {isLoading? <Loading/> : 
    <section className="jobs-center">
      <BtnContainer review={review} changer={changer} index={index}/>
      <JobInfo review={review[index]}/>
    </section> }
  </main>;
};
export default App;
