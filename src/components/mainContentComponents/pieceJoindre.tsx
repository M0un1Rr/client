import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../extraComponents/loadingBar";
import MyDropzone from "./dropzone";
import { AppContext } from "../../App";

const PieceJoindre = (props: any) => {
  const state: Array<File> = props.state;
  const removeFile = props.removeFile;
  const addFiles = props.addFiles;
  const styles = props.styles;
  const changeForm = props.changeForm;
  const completedTrue = props.completedTrue;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleSubmitMiddleWare = (e: any) => {
    if (state.length < 2) {
      alert("Télécharger les deux fichiers");
      return;
    }
    completedTrue();
    navigate("/validation");
  };
  const context = useContext(AppContext);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <u>PIECE A JOINDRE</u>
      </legend>
      <div>
        <p className="font-semibold">
          Derniere Liasse Fiscale <span className="text-red-600">*</span>
        </p>
        <p className="font-semibold">
          Modele J <span className="text-red-600">*</span>
        </p>
      </div>
      <MyDropzone state={state} addFiles={addFiles} removeFile={removeFile} />
      {loading ? (
        <div className="flex col-span-2 place-content-center gap-3">
          <Loading />
        </div>
      ) : (
        <div className="flex col-span-2 place-content-center gap-3">
          <button
            name="prev"
            onClick={changeForm}
            className="tracking-wider bg-green_hues-700 p-3 w-80 font-sans spacing font-bold text-white rounded"
          >
            PRECEDENT
          </button>
          <button
            onClick={handleSubmitMiddleWare}
            className="tracking-wider bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
          >
            VALIDER
          </button>
        </div>
      )}
    </fieldset>
  );
};

export default PieceJoindre;
