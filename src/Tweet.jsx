import Tweetchild from "./Tweetchild"
export default function Tweet (){
    return(
        <>
            <div className='p-8 space-y-6 border-slate-800 border-b border-t'>
                <div className="flex">
                    <div><img className="w-12 h-8" src="images/Profile-Photo.svg" alt="" /></div>
                    <div><input class="w-80 h-10 bg-black text-white" type="text" placeholder="What's happening"/></div>
                </div>
                <div className="flex justify-between">
                    <div><Tweetchild/></div>
                    <div><button className='hover:bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold bg-blue-500 rounded-3xl h-10 w-24' >Tweet</button></div>
                </div> 
            </div>
            
        </>
    )
}