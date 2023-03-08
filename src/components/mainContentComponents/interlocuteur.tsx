const Interlocuteur = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const changeFormMiddleWare = (e: any) => {
    let errors = false;
    for (let x in state) {
      let element = document.querySelector(`input[name="${x}"]`);

      if (state[x] == "") {
        element?.classList.add("border-red-600");
        errors = true;
      } else {
        element?.classList.remove("border-red-600");
      }
    }
    if (!errors) changeForm(e);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <u>INTERLOCUTEUR A JOINDRE AU SEIN DE L'ENTREPRISE</u>
      </legend>
      <input
        onChange={handleInput}
        name={"nom_interlocuteur"}
        className={styles.input}
        type={"text"}
        placeholder={"Nom"}
        value={state.nom_interlocuteur}
      />
      <input
        onChange={handleInput}
        name={"telephone"}
        className={styles.input}
        type={"text"}
        placeholder={"Telephone"}
        value={state.telephone}
      />
      <input
        onChange={handleInput}
        name={"fonction"}
        className={styles.input}
        type={"text"}
        placeholder={"Fonction"}
        value={state.fonction}
      />
      <input
        onChange={handleInput}
        name={"adresse_mail"}
        className={styles.input}
        type={"text"}
        placeholder={"Adresse Mail"}
        value={state.adresse_mail}
      />
      <div className="flex col-span-2 place-content-center gap-3">
        <button
          name="prev"
          onClick={changeForm}
          className="tracking-wider bg-green_hues-700 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          PRECEDENT
        </button>
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

export default Interlocuteur;
