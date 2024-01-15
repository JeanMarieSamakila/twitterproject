export default function Sidebar(props){
    return(
            <section className="flex space-x-3 p-5">
                <img src={props.src} alt={props.alt}/>
                <button class="text-white"> {props.name} </button>
            </section>
    )
}