import React from "react";
export default function Profile() {
  return (
    <section className=" ml-5 w-/5 mr-3 ">
      <section>
        <div className="pt-5 w-100 h-36 flex justify-between">
          <div>
            <img
              className="w-24 h-24 rounded-full"
              src="images/JM.jpeg"
              alt=""
            />
          </div>
          <div className="border w-40 rounded-2xl m-5 h-8">
            <h3 className="text-white ml-5 font-bold ">Editer le profil</h3>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <h2 className="text-white font-bold">
              Samakila mbilika jean marie
            </h2>
            <p className="text-white">@SamakilaM</p>
          </div>
          <p className="text-white">A rejoint Twitter en février 2018</p>
          <div className="flex gap-3">
            <p className="text-white">
              {" "}
              <span class="font-bold">39</span> abonnements
            </p>
            <p className="text-white">
              {" "}
              <span class="font-bold"> 4 </span>abonnés
            </p>
          </div>
          <div className="flex gap-6">
            <p className="text-white">Posts</p>
            <p className="text-white">Réponses</p>
            <p className="text-white">Tweets marquants</p>
            <p className="text-white">Médias</p>
            <p className="text-white">J'aime</p>
          </div>
        </div>
      </section>
      <section className="mt-5">
          <div className="flex gap-5">
            <img className="w-14 h-14 rounded-full" src="images/JM.jpeg" alt="" />
            <h3 className="text-white font-bold">samakila mbilika jean marie.</h3>
            <p className="text-white">@SamakilaM 6 nov. 2022</p>
            <img src="images/More-2.svg" alt="" />
          </div>
        <p className="text-blue-500">#NouvellePhotoDeProfil</p>
        <div>
          <img
            className=" w-72 mt-3 mb-3 ml-10 rounded-2xl items-center "
            src="images/WhatsApp Image 2023-10-31 at 21.53.56.jpeg"
            alt=""
          />
        </div>
      </section>
    </section>
  );
}
