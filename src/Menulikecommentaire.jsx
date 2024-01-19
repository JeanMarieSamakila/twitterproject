import { useState } from "react"

export default function Menulikecommentaire (){
  const [compteur, setCompteur] = useState(0);
  const [couleur, setCouleur] = useState('');


   const [valeur, setValeur] = useState(0);

   const gererIncrementationDecrementation = () => {
     if (valeur !== 1) {
       setValeur(valeur + 1);
       setCouleur('blue');

     } else {
       setValeur(valeur - 1);
       setCouleur('');
     }
   };

    
    const handleClick =  () => {
        setCompteur(compteur + 1);
    } 
   
    return(
        <>  
            <container className="p-2 flex space-x-5">
                <img onClick={gererIncrementationDecrementation}  src="images/Reply.svg" alt="" />
                <p className="text-white">0</p>
                <img onClick={handleClick} src="images/Retweet.svg" alt="" />
                <p className="text-white">{compteur}</p>
                <img onClick={gererIncrementationDecrementation} style={{ backgroundColor: couleur, borderRadius: '50%', padding: '5px'}} src="images/React.svg" alt=""/>
                <p className="text-white">{valeur}</p>
                <img  src="images/Share.svg" alt="" />
            </container>
        </>
    )
}