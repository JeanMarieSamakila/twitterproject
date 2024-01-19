import Childpost2 from "./Childpost2";

export default function Post3(){
    return(
        <>
            <div className="border-solid border-t flex p-2" >
                <div className="">
                    <img className="w-28" src="images/Tweet-Profile-Photo.png" alt="" />
                </div>
                <Childpost2/>
            </div>
        </>
    )
}