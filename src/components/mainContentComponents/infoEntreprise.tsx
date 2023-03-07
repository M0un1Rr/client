const InfoEnt = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  return (
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
        onChange={state.handleInput}
        name={"siege_sociale"}
        className={state.styles.input}
        type={"text"}
        placeholder={"Siege sociale"}
        value={state.siege_sociale}
      />
      <input
        onChange={state.handleInput}
        name={"activite_principale"}
        className={state.styles.input + " col-span-2"}
        type={"text"}
        placeholder={"Activite principale de l'entreprise"}
        value={state.activite_principale}
      />
      <fieldset className="p-2 col-span-2 border border-gray-400 rounded">
        <legend className={"font-semibold"}>Appartenance a un groupe:</legend>
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
              styles.input + " w-full" + (state.groupe == "false" && " hidden")
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
          className="tracking-wider bg-green-500 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          SUIVANT
        </button>
      </div>
    </fieldset>
  );
};

export default InfoEnt;
