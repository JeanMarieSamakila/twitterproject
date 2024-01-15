import Tweetchild from "./Tweetchild"
export default function Tweet (){
    return(
        <>
            <div className='p-8 flex space-x-5 border-solid border-2'>
                <div>
                    <img className="w-150" src="images/Profile-Photo.svg" alt="" />
                </div>
                <div>
                    <input class="w-80 h-10 bg-black" type="text" placeholder="What's happening"/>
                    <Tweetchild/>
                </div>
                
            </div>
            
        </>
    )
}