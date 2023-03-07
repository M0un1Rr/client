import { useState } from "react";
import InfoEnt from "./mainContentComponents/infoEntreprise";
import RefBanc from "./mainContentComponents/referenceBancairs";

const MainContent = () => {
  const [form, setForm] = useState(0);
  const [state, setState] = useState({
    raison_sociale: "",
    annee_creation: "",
    forme_juridique: "",
    activite_principale: "",
    siege_sociale: "",
    groupe: "false",
    maison_mere: "",
    nom_gerant: "",
  });

  const changeForm = (e: any) => {
    if (e.target.name == "next") {
      setForm((prev) => prev + 1);
    } else {
      if (form == 0) return;
      setForm((prev) => prev - 1);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleInput = (event: any) => {
    var name = event.target.name;
    var value = event.target.value;
    setState((prevState) => {
      if (name == "groupe") {
        return {
          ...prevState,
          [name]: value,
          maison_mere: value == "false" ? "" : prevState.maison_mere,
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const styles = {
    input: "border-gray-700  border-2 rounded p-2 text-sm",
    fieldset:
      "grid border-2 p-7 rounded border-gray-700 grid-cols-2 content-center gap-6",
    legend: "text-base font-semibold",
  };

  return (
    <section className="flex place-content-center">
      <form
        className="lg:w-2/3 md:w-3/4 sm:w-11/12"
        onSubmit={handleSubmit}
        action="#"
        method="POST"
      >
        <h1 className="font-sans font-bold text-2xl text-center p-3 ">
          Fiche de Renseignement Client
        </h1>
        {form == 0 ? (
          <InfoEnt
            state={state}
            styles={styles}
            handleInput={handleInput}
            changeForm={changeForm}
          />
        ) : form == 1 ? (
          <RefBanc state={state} />
        ) : (
          <h1>Lol</h1>
        )}
      </form>
    </section>
  );
};

export default MainContent;
