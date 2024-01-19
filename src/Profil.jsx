export default function Profile (){
    return(
        <section className="w-/5" >
            
            <section>
                    <div className="bg-gray-500 w-2/2 h-32">

                    </div>
                    <div className="w-100 h-36 flex justify-between">
                        <div>
                            <img className="w-16 h-16 rounded-3xl" src="images/JM.jpeg" alt="" />
                        </div>
                        <div>
                            <h3 className="text-white">Editer le profil</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white">samakila mbilika jean marie</h3>
                        <p className="text-white">SamakilaM</p>
                    </div>
                        <p className="text-white">A rejoint Twitter en février 2018</p>
                    <div className="flex gap-3">
                        <p className="text-white"> <span class="font-bold">39</span> abonnements</p>
                        <p className="text-white"> <span class="font-bold">  4</span>abonnés</p>
                    </div>
                    <div className="flex gap-6">
                        <p className="text-white">Posts</p>
                        <p className="text-white">Réponses</p>
                        <p className="text-white">Tweets marquants</p>
                        <p className="text-white">Médias</p>
                        <p className="text-white">J'aime</p>
                    </div>
            </section>
            <section>
                <div>
                    <img className="w-14 h-14 rounded-3xl" src="images/JM.jpeg" alt="" />
                    <h3 className="text-white">samakila mbilika jean marie.</h3>
                    <p className="text-white">@SamakilaM 6 nov. 2022</p>
                    <img src="images/More-2.svg" alt="" />
                </div>
                <p className="text-blue-500">#NouvellePhotoDeProfil</p>
                <div>
                    <img className="w32 rouded-2xl"  src="images/WhatsApp Image 2023-10-31 at 21.53.56.jpeg" alt="" />
                </div>
            </section>
        </section>
    )
}