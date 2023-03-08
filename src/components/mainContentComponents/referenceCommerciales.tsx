import { useState } from "react";

const RefComr = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const commerciales = [1, 2, 3];

  const changeFormMiddleWare = (e: any) => {
    let errors = false;
    for (let x in state) {
      for (let y in state[x]) {
        let element = document.querySelector(`input[name="${y}"]`);
        if (state[x][y] == "") {
          element?.classList.add("border-red-600");
          errors = true;
        } else {
          element?.classList.remove("border-red-600");
        }
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
    <fieldset className={styles.fieldset + " grid-cols-3"}>
      <legend className={styles.legend}>
        <u>REFERENCES COMMERCIALES</u>
      </legend>
      {commerciales.map((commerciale) => (
        <div className="flex flex-col gap-3" key={commerciale}>
          <h1 className="font-medium ">
            Entreprise {commerciale} :<i className="text-red-600">*</i>
          </h1>
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={`nom_entreprise${commerciale}`}
            className={styles.input}
            type={"text"}
            placeholder={"Nom Entreprise"}
            data-s
            value={state[`ref${commerciale}`][`nom_entreprise${commerciale}`]}
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={`contact_entreprise${commerciale}`}
            className={styles.input}
            type={"text"}
            placeholder={"Nom du contact"}
            value={
              state[`ref${commerciale}`][`contact_entreprise${commerciale}`]
            }
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={`telephone${commerciale}`}
            className={styles.input}
            type={"text"}
            placeholder={"Telephone"}
            value={state[`ref${commerciale}`][`telephone${commerciale}`]}
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={`date_debut_relation${commerciale}`}
            className={styles.input}
            type={"Date"}
            max={maxDate}
            placeholder={"Date Debut de Relation"}
            value={
              state[`ref${commerciale}`][`date_debut_relation${commerciale}`]
            }
            required
          />
        </div>
      ))}
      <div className="flex col-span-3 place-content-center gap-3">
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

export default RefComr;
