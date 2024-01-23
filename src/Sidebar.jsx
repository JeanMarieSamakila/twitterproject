export default function Sidebar(props){
    return(
            <section className="hover:bg-gray-900 flex space-x-3 p-5">
                <img src={props.src} alt={props.alt}/>
                <button class="text-white"> {props.name} </button>
            </section>
    )
}