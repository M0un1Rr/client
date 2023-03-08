import { useState } from "react";

const Validation = (props: any) => {
  const completed = props.completed;
  const data = props.state;
  if (!completed) {
    document.location.href = "/";
  }
  const completedTrue = props.completedTrue;
  const [state, setState] = useState(props.state);
  let infoEnt = data.info_entreprise;
 

  return (
    <>
      <section className="w-full h-full flex place-items-center p-10 flex-col gap-3">
        <h1 className="font-bold text-3xl">Fiche de Renseignement Client</h1>
        <section className="border-2 border-black  w-2/3 rounded p-4 gap-4">
          <section>
            <h1 className="font-semibold ">
              <u>INFORMATIONS SUR L'ENTREPRISE</u>
            </h1>
            <div className="grid grid-cols-2 gap-2">

              <div className="flex gap-4">                
                <p className="">Raison Sociale : </p>
                <div>
                  <p>Dell Entreprise</p>
                </div>
              </div>        
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Validation;

/*
{
    info_entreprise: {
      raison_sociale: "",
      annee_creation: "",
      forme_juridique: "",
      activite_principale: "",
      siege_sociale: "",
      groupe: "",
      maison_mere: "",
      nom_gerant: "",
      ice: "",
      rc: "",
    },
    banques: {
      banque1: {
        nom_banque1: "1",
        contact_banque1: "",
        telephone1: "",
      },
      banque2: {
        nom_banque2: "2",
        contact_banque2: "",
        telephone2: "",
      },
      banque3: {
        nom_banque3: "3",
        contact_banque3: "",
        telephone3: "",
      },
    },
    ref_commerciales: {
      ref1: {
        nom_entreprise1: "",
        contact_entreprise1: "",
        telephone1: "",
        date_debut_relation1: "",
      },
      ref2: {
        nom_entreprise2: "",
        contact_entreprise2: "",
        telephone2: "",
        date_debut_relation2: "",
      },
      ref3: {
        nom_entreprise3: "",
        contact_entreprise3: "",
        telephone3: "",
        date_debut_relation3: "",
      },
    },
    interlocuteur: {
      nom_interlocuteur: "",
      telephone: "",
      fonction: "",
      adresse_mail: "",
    },
    fichiers: [],
  }
*/
