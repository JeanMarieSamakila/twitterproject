export default function Tweetchild(){
    return(
        <>
            <div id="btntweet" className='p-2 flex space-x-60 justify-between'>
                
                    <div className="flex space-x-5">
                        <img src="images/Media.svg" alt="" />
                        <img src="images/Poll.svg" alt="" />
                        <img src="images/Gif.svg" alt="" />
                        <img src="images/Emoji.svg" alt="" />
                        <img src="images/Schedule.svg" alt="" />
                    </div>
                    <div className="btntweet">
                        <button id="btn" className='bg-blue-500 rounded-3xl h-12 w-28'>Tweet</button>
                    </div>
            </div>
        </>
    )
}