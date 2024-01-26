import Tweetchild from "./Tweetchild"
export default function Tweet (){
    return(
        <>
            <div className=' space-y-6  border-slate-800 border-b border-t'>
                <div className="ml-5 flex">
                    <div><img className=" w-20 h-18" src="images/Profile-Photo.svg" alt="" /></div>
                    <div className="mt-5 ml-5"><input class="w-80 h-10 bg-black text-white" type="text" placeholder="What's happening"/></div>
                </div>
                <div className=" ml-5 mr-5 flex justify-between">
                    <div><Tweetchild/></div>
                    <div className="mb-3 mr-5"><button className=' text-white font-bold bg-blue-500 rounded-3xl h-10 w-24 hover:bg-gradient-to-r from-green-400 to-blue-400 justify-center ml-5 bg-blue-500' >Tweet</button></div>
                </div> 
            </div>
        
        </>
    )
}