const BtnContainer = ({review,changer,index}) => {

  return <div className="btn-container">
    {review.map((oneCompany,id)=>{
        let mainClass =""
        if(id === index){
            mainClass="active-btn"
        }
    return <button className= {`job-btn ${mainClass}`} 
                  onClick={()=>  
                  changer(id)}
                  >{oneCompany.company}
            </button>

  })
}
</div> 
}
export default BtnContainer