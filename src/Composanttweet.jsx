import Menulikecommentaire from "./Menulikecommentaire";

export default function Composanttweet(props){
    return(
            <section className="">
                <div className="flex">
                    <img src={props.src} alt={props.alt}/>
                </div>
                <div>
                    <div className="flex">
                        <h2> {props.name1} </h2>
                        <img src="images/Verified.svg" alt="verified" />
                        <p>{props.name2}</p>
                    </div>
                    <p>{props.name3}</p>
                    <Menulikecommentaire/>
                </div>
            </section>
    )
}