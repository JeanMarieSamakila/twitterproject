
import Menulikecommentaire from "./Menulikecommentaire";

export default function Postchild(){
    return (
        <>
            <container>
                
                <div className="flex">
                    <h2 class="font-bold m-2 text-white">CNN</h2>
                    <img src="images/Verified.svg" alt="" />
                    <p class="m-2 text-white">@CNN. 7m</p>
                </div>
                <p class="text-white">President Joe Biden touted a new agreement reached with the European Union to ease Trumpe-era tariffs on aluminum and steel as a "major breakthrough" that woul. </p>
                <Menulikecommentaire/>
            </container>
        </>
    )
}