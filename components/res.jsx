import Thumbnull from "./Thumbnull"
import FlibMove from "react-flip-move"
const res = ({results}) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((i)=>{
       return   <Thumbnull key={i.id} result={i} />
            })} 
        </div>
    )
}

export default res
