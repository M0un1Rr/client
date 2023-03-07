import { useState } from "react";
const MainContent = () => {
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
  const handleSubmit = (event: any) => {
    event.preventDevault();
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
        <fieldset
          className={
            "grid border-2 p-7 rounded border-gray-700 grid-cols-2 content-center gap-6"
          }
        >
          <legend className="text-base font-semibold ">
            <u>INFORMATION SUR L'ENTREPRISE</u>
          </legend>
          <input
            onChange={handleInput}
            name={"raison_sociale"}
            className={styles.input}
            type={"text"}
            placeholder={"Raison Sociale"}
            value={state.raison_sociale}
          />
          <input
            onChange={handleInput}
            name={"annee_creation"}
            className={styles.input}
            type={"Number"}
            placeholder={"Annee de creation"}
            value={state.annee_creation}
          />
          <input
            onChange={handleInput}
            name={"forme_juridique"}
            className={styles.input}
            type={"text"}
            placeholder={"Forme juridique"}
            value={state.forme_juridique}
          />
          <input
            onChange={handleInput}
            name={"siege_sociale"}
            className={styles.input}
            type={"text"}
            placeholder={"Siege sociale"}
            value={state.siege_sociale}
          />
          <input
            onChange={handleInput}
            name={"activite_principale"}
            className={styles.input + " col-span-2"}
            type={"text"}
            placeholder={"Activite principale de l'entreprise"}
            value={state.activite_principale}
          />
          <fieldset className="p-2 col-span-2 border border-gray-400 rounded">
            <legend className={"font-semibold"}>
              Appartenance a un groupe:
            </legend>
            <div>
              <input
                onChange={handleInput}
                className="p-3"
                id="oui"
                name="groupe"
                type={"radio"}
                value="true"
              />
              <label htmlFor="oui"> Oui</label>
              <label
                htmlFor="maison_mere"
                className={"" + (state.groupe == "false" && "hidden")}
              >
                {" "}
                ,Nom de maison mere:{" "}
              </label>
              <input
                onChange={handleInput}
                name={"maison_mere"}
                className={
                  styles.input +
                  " w-full" +
                  (state.groupe == "false" && " hidden")
                }
                type={"text"}
                placeholder={"Maison mere"}
                value={state.maison_mere}
              />
            </div>
            <input
              onChange={handleInput}
              id="non"
              name="groupe"
              type={"radio"}
              value="false"
            />
            <label htmlFor="non"> Non</label>
          </fieldset>
          <div className="col-span-2 w-full flex place-items-center flex-col gap-4">
            <input
              onChange={handleInput}
              name={"nom_gerant"}
              className={styles.input + " w-1/2"}
              type={"text"}
              placeholder={"Nom de gerant"}
              value={state.nom_gerant}
            />
            <button
              type="submit"
              className="tracking-wider bg-blue-500 p-3 w-80 font-sans spacing font-bold text-white rounded"
            >
              ENVOYER
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default MainContent;
