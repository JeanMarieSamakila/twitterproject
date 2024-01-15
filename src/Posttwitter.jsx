import Childposttwitter from "./Childposttwitter";

export default function Posttwitter(){
    return(
        <>
            <container className=' flex space-x-10 p-5'>
                <div className="w-50">
                    <img src="images/image 1.png" alt="" />
                </div>
                <Childposttwitter/>
            </container>
        </>
    )
}