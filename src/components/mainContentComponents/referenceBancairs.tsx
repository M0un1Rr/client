import { useState } from "react";

const RefBanc = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;

  const [maxDate, setMaxDate] = useState(getFormattedDate());

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

  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const banks = [1, 2, 3];

  return (
    <fieldset className={styles.fieldset + " grid-cols-3 "}>
      <legend className={styles.legend}>
        <u>REFERENCES BANCAIRS</u>
      </legend>
      {banks.map((bank) => (
        <div className="flex flex-col gap-3" key={bank}>
          <h1 className="font-medium ">Banque {bank} :</h1>
          <input
            data-id={bank}
            onChange={handleInput}
            name={`nom_banque${bank}`}
            className={styles.input}
            type={"text"}
            placeholder={"Nom Banque"}
            value={state[`banque${bank}`][`nom_banque${bank}`]}
            required
          />
          <input
            data-id={bank}
            onChange={handleInput}
            name={`contact_banque${bank}`}
            className={styles.input}
            type={"text"}
            placeholder={"Nom du contact"}
            value={state[`banque${bank}`][`contact_banque${bank}`]}
            required
          />
          <input
            data-id={bank}
            onChange={handleInput}
            name={`telephone${bank}`}
            className={styles.input}
            type={"text"}
            placeholder={"Telephone"}
            value={state[`banque${bank}`][`telephone${bank}`]}
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

export default RefBanc;
