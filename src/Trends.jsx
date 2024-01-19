import Follow from "./Follow";
import Squid from "./Squid";
import Trendsforyou from "./Trendsforyou";

export default function Trends (){
    return(
       
       <section>
            <div className="bg-gray-900 p-4 m-4 rounded-2xl space-y-4">
                <Trendsforyou/>
                <Squid/>
                <Squid/>
                <Squid/>
                <h2 className=" font-bold text-blue-500">Show more</h2>
            </div>
            <div className="bg-gray-900 p-2 m-4 rounded-2xl">
                <Follow/>
            </div>
       </section>

    )
}