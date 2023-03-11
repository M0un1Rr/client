import { useState } from "react";

const RefComr = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const commerciales = [1, 2, 3];

  const changeFormMiddleWare = (e: any) => {
    changeForm(e);
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
    <fieldset className="border-2 p-7  rounded border-gray-700 gap-6 lg:grid lg:grid-cols-3">
      <legend className={styles.legend}>
        <u>REFERENCES COMMERCIALES</u>
      </legend>
      {commerciales.map((commerciale) => (
        <div className="flex flex-col gap-3 p-3" key={commerciale}>
          <h1 className="font-medium ">Entreprise {commerciale} :</h1>
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
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            max={maxDate}
            placeholder={"Date Debut de Relation"}
            value={
              state[`ref${commerciale}`][`date_debut_relation${commerciale}`]
            }
            required
          />
        </div>
      ))}
      <div className="flex place-content-center gap-6 md:col-span-3">
        <button
          name="prev"
          onClick={changeForm}
          className="tracking-wider bg-green_hues-700 p-3 w-1/3 font-sans spacing font-bold text-white rounded"
        >
          PRECEDENT
        </button>
        <button
          name="next"
          onClick={changeFormMiddleWare}
          className="tracking-wider bg-green_hues-600 p-3 w-1/3 font-sans spacing font-bold text-white rounded"
        >
          SUIVANT
        </button>
      </div>
    </fieldset>
  );
};

export default RefComr;
