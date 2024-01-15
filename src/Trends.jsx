import Follow from "./Follow";

export default function Trends (){
    return(
        <div className="border-solid border-2">
            <div className="flex space-x-20">
                <h2 className="text-white">Treds for you</h2>
                <img src="images/Settings.svg" alt="" />
            </div>
            <div className="flex space-x-19">
                <div>
                    <p className="text-white">Trending in Turkey</p>
                    <h2 className="text-white">#SQUID</h2>
                    <p className="text-white">2,066 Tweets</p>
                </div>
                <img src="images/More-2.svg" alt="" />
            </div>
            <div>
                <h2>Show more</h2>
            </div>
            <Follow/>
        </div>

    )
}