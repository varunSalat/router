import { useLoaderData,Link } from "react-router-dom"

const Careers = () => {
    const data= useLoaderData();
    
return (
    <div className="careers">
        {
            data.map((item)=>{
                return(
                    <Link className="careers" to='/'key={item.id}>
                    <p>{item.title}</p>
                    <p>Based IN: {item.location}</p>
                    </Link>
                )
            })
        }
    </div>
)
}

export default Careers