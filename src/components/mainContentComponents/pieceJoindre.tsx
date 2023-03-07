import MyDropzone from "./dropzone";

const PieceJoindre = (props: any) => {
  const state = props.state;
  const styles = props.styles;
  const handleInput = props.handleInput;
  const changeForm = props.changeForm;
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <u>PIECE A JOINDRE</u>
      </legend>
      <div>
        <p className="font-semibold">Derniere Liasse Fiscale</p>
        <p className="font-semibold">Modele J</p>
      </div>
      <MyDropzone />
      <div className="flex col-span-2 place-content-center gap-3">
        <button
          name="prev"
          onClick={changeForm}
          className="tracking-wider bg-green_hues-700 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          PRECEDENT
        </button>
        <button
          type="submit"
          className="tracking-wider bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
        >
          VALIDER
        </button>
      </div>
    </fieldset>
  );
};

export default PieceJoindre;
