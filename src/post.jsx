
import Postchild from "./Postchild";

export default function Post (){
    return(
        <>
            <container className=" flex  border-t p-5" >
                <div className="w-52">
                    <img src="images/logo cnn.png" alt="" />
                
                </div>
                <Postchild/>
            </container>
        </>
    )
}