import { useState } from "react";

const RefBanc = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const banks = [1, 2, 3];

  return (
    <fieldset className={styles.fieldset + " grid-cols-3 max-lg:grid-cols-1"}>
      <legend className={styles.legend}>
        <u>REFERENCES BANCAIRS</u>
      </legend>
      {banks.map((bank) => (
        <div className="flex flex-col gap-3" key={bank}>
          <h1 className="font-medium ">Banque {bank} :</h1>
          <input
            data-id={bank}
            onChange={handleInput}
            name={"nom_banque"}
            className={styles.input}
            type={"text"}
            placeholder={"Nom Banque"}
            data-s
            value={state.nom_banque}
            required
          />
          <input
            data-id={bank}
            onChange={handleInput}
            name={"contact_banque"}
            className={styles.input}
            type={"text"}
            placeholder={"Nom du contact"}
            value={state.contact_banque}
            required
          />
          <input
            data-id={bank}
            onChange={handleInput}
            name={"telephone"}
            className={styles.input}
            type={"text"}
            placeholder={"Telephone"}
            value={state.telephone}
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

export default RefBanc;
