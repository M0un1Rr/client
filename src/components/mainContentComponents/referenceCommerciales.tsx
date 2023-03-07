import { useState } from "react";

const RefComr = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const commerciales = [1, 2, 3];

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
            name={"nom_entreprise"}
            className={styles.input}
            type={"text"}
            placeholder={"Nom Entreprise"}
            data-s
            value={state.nom_entreprise}
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={"contact_Entreprise"}
            className={styles.input}
            type={"text"}
            placeholder={"Nom du contact"}
            value={state.contact_entreprise}
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={"telephone"}
            className={styles.input}
            type={"text"}
            placeholder={"Telephone"}
            value={state.telephone}
            required
          />
          <input
            data-id={commerciale}
            onChange={handleInput}
            name={"date_debut_relation"}
            className={styles.input}
            type={"text"}
            placeholder={"Date Debut de Relation"}
            value={state.date_debut_relation}
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
          onClick={changeForm}
          className="tracking-wider bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          SUIVANT
        </button>
      </div>
    </fieldset>
  );
};

export default RefComr;
