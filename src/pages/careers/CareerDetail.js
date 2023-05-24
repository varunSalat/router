import { useParams } from "react-router-dom";


const CareerDetail = ({careerData}) => {
    const id = useParams();
    
    (()=>{
        const paramId = id.id
        const data = careerData(paramId)
        console.log(data)
    })()
  return (
    <div> {console.log()} </div>
  )
}

export default CareerDetail