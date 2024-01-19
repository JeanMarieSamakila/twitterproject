import Menulikecommentaire from "./Menulikecommentaire";

export default function Childpost2 (){
    return(
        <div className="p-5">
            <div className="flex">
                <h3 class="font-bold m-2 text-white">The NEW York Times</h3>
                <img src="images/Verified.svg" alt="" />
                <p class=" m-2 text-white">@nytimes . 2h</p>
            </div>
            <p class="text-white">Gardening boomed during the pandemic. Six Black writers share home it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
            <img src="images/Img.png" alt="" />
            <Menulikecommentaire/>  
        </div>
    )
}   