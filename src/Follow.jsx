
import Followbloc1 from "./Followbloc1";
import Followbloc2 from "./Followbloc2";
import Followbloc3 from "./Followbloc3";

export default function Follow(){
    return(
        <section >
            <div className="space-y-8">
                <div>
                    <h2 class="text-white font-bold">Who to follow</h2>
                </div>
                <Followbloc1/>
                <Followbloc2/>
                <Followbloc3/>
                <div>
                    <h2 className="text-blue-500 font-bold">Show more</h2>
                </div>
            </div>
        </section>
    )
}