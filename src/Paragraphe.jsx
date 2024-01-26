import { useState } from "react";

export default function (props) {

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
    return (
       <p className="text-white">{props.text}</p>
    )
}