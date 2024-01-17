export default function Tweetchild(){
    return(
            <section id="tweet" className="flex justify-between">
                
                    <div className="flex space-x-5">
                        <img src="images/Media.svg" alt="" />
                        <img src="images/Poll.svg" alt="" />
                        <img src="images/Gif.svg" alt="" />
                        <img src="images/Emoji.svg" alt="" />
                        <img src="images/Schedule.svg" alt="" />
                    </div>
                    <button id="btn" className='bg-blue-500 rounded-3xl h-12 w-28'>Tweet</button>
            </section>
    )
}