import { v4 as uuidv4 } from 'uuid';
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md"

const Duties = ({duties}) => {
  return <div >
    {duties.map((oneDuty)=>{
        const id = uuidv4()
        console.log(id);
        return <div key={id} className="job-desc">
            <MdOutlineKeyboardDoubleArrowRight className='job-icon'/>
            <p>{oneDuty}</p>
        </div>
    })}
  </div>
}
export default Duties