import { useState } from "react";

const InfoEnt = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const changeFormMiddleWare = (e: any) => {
    let errors = false;
    for (let x in state) {
      let element = document.querySelector(`input[name="${x}"]`);
      if (state[x] == "true") {
        if (state["maison_mere"] == "") {
          element = document.querySelector(`input[name="maison_mere"]`);
          element?.classList.add("border-red-600");
          errors = true;
        } else {
          element = document.querySelector(`input[name="maison_mere"]`);
          element?.classList.remove("border-red-600");
        }
      } else if (state[x] == "" && x != "maison_mere") {
        element?.classList.add("border-red-600");
        errors = true;
      } else {
        element?.classList.remove("border-red-600");
      }
    }
    if (!errors) changeForm(e);
  };

  const [maxDate, setMaxDate] = useState(getFormattedDate());

  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <u>INFORMATION SUR L'ENTREPRISE</u>
      </legend>
      <input
        onChange={handleInput}
        name={"raison_sociale"}
        className={styles.input}
        type={"text"}
        placeholder={"Raison Sociale"}
        value={state.raison_sociale}
        required
      />
      <input
        onChange={handleInput}
        name={"annee_creation"}
        className={styles.input}
        type={"Date"}
        max={maxDate}
        placeholder={"Année de création"}
        value={state.annee_creation}
        required
      />
      <select
        onChange={handleInput}
        name={"forme_juridique"}
        className={styles.input}
        value={state.forme_juridique}
        required
      >
        {!state.forme_juridique && (
          <option value={""} selected>
            --Forme Juridique--
          </option>
        )}
        <option value={"SARL"}>SARL</option>
        <option value={"SA"}>SA</option>
        <option value={"SI"}>SI</option>
        <option value={"SCS"}>SCS</option>
      </select>
      <input
        onChange={handleInput}
        name={"siege_sociale"}
        className={styles.input}
        type={"text"}
        placeholder={"Siége sociale"}
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
      <input
        onChange={handleInput}
        name={"ice"}
        className={styles.input}
        type={"Number"}
        min={0}
        placeholder={"ICE"}
        value={state.ice}
      />
      <input
        onChange={handleInput}
        name={"rc"}
        className={styles.input}
        type={"Number"}
        min={0}
        placeholder={"RC"}
        value={state.rc}
      />
      <fieldset className="p-2 col-span-2 border border-gray-400 rounded">
        <legend className={"font-semibold"}>Appartenance a un groupe:</legend>
        <div className="">
          <input
            onChange={handleInput}
            className="p-3"
            id="oui"
            name="groupe"
            type={"radio"}
            value="true"
            required
            checked={state.groupe == "true" ? true : false}
          />
          <label htmlFor="oui"> Oui</label>
          <label
            htmlFor="maison_mere"
            className={"" + (state.groupe != "true" && "hidden")}
          >
            {" "}
            ,Nom de maison mere:{" "}
          </label>
          <input
            onChange={handleInput}
            name={"maison_mere"}
            className={
              styles.input +
              " ml-20 w-1/2 w-full" +
              (state.groupe != "true" && " hidden")
            }
            type={"text"}
            placeholder={"Maison mere"}
            value={state.maison_mere}
            required={state.groupe == "true" ? true : false}
          />
        </div>
        <input
          onChange={handleInput}
          id="non"
          name="groupe"
          type={"radio"}
          value="false"
          checked={state.groupe == "false" ? true : false}
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
          required
        />
        <button
          name="next"
          onClick={changeFormMiddleWare}
          className="tracking-wider bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          SUIVANT
        </button>
      </div>
    </fieldset>
  );
};

export default InfoEnt;
