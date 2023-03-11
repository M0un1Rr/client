import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Loading from "./extraComponents/loadingBar";

const Validation = (props: any) => {
  const completed = props.completed;
  const completedTrue = props.completedTrue;
  const { state } = useContext(AppContext);
  const [sent, setSent] = useState(false);
  const setSuccessTrue = props.setSuccessTrue;
  const data = state;
  const navigation = useNavigate();
  let infoEnt: any = data.info_entreprise;
  const filesArray = state.fichiers;
  const [confirmed, setConfirmed] = useState(false);
  const files = Array.from(filesArray).map((file: any) => {
    return [file.name, `${Math.round(file.size / 1024)} kb`];
  });

  const isSure = () => {
    setConfirmed(!confirmed);
  };

  const confirm = () => {
    if (confirmed) {
      const formData = new FormData();

      // Iterate through the state object and append each property to the FormData object:
      for (const [key, value] of Object.entries(data) as Array<any>) {
        if (key === "fichiers") {
          // Handle files separately
          value.forEach(function (file: any) {
            formData.append("fichiers[]", file);
          });
        } else if (typeof value === "object") {
          // If the property is an object, iterate through its properties and append them
          for (const [innerKey, innerValue] of Object.entries(
            value
          ) as Array<any>) {
            if (typeof innerValue === "object") {
              formData.append(`${key}.${innerKey}`, JSON.stringify(innerValue));
            } else {
              formData.append(`${key}.${innerKey}`, innerValue);
            }
          }
        } else {
          // For regular string/number properties, append them directly
          formData.append(key, value);
        }
      }

      // Make a POST request to the server using Axios:
      setSent(true);
      axios
        .post("http://localhost:3000/api/client", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response.data);
          setSent(false);
          if (!response.data.success) {
            alert(response.data.message);
          } else {
            setSuccessTrue();
            document.location.href = "/inserted";
          }
        })
        .catch(function (error) {
          console.log(error);
          setSent(false);
        });
    }
  };

  const goBack = () => {
    completedTrue();
    navigation("/");
  };

  useEffect(() => {
    if (!completed) {
      console.log("go back");
      navigation("/");
    }
  }, []);

  return (
    <>
      <section className="w-full h-full flex place-items-center  p-1 md:p-10 flex-col gap-3">
        {completed && (
          <section className="border-2 border-black   w-full md:w-5/6 lg:w-4/5 rounded p-4 gap-5 flex flex-col place-content-center">
            <h1 className="font-bold text-2xl md:text-3xl self-center">
              Fiche de Renseignement Client
            </h1>
            <fieldset
              id={"info_entreprise"}
              className="border-2 border-black p-3 rounded"
            >
              <legend className="font-semibold ">
                <u>INFORMATIONS SUR L'ENTREPRISE</u>
              </legend>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm">
                {Object.entries(infoEnt).map(([key, value]: any) => (
                  <div key={key} className="grid-cols-1 gap:2 sm:flex sm:gap-4">
                    <p className="font-semibold font-mono">
                      <u>{`${key[0].toUpperCase()}${key
                        .substring(1)
                        .replace(/_/g, " ")}`}</u>
                      :{" "}
                    </p>
                    <div>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset
              id="banques"
              className="border-2 border-black p-3 rounded"
            >
              <legend className="font-semibold ">
                <u>REFERENCES BANCAIRS</u>
              </legend>
              {Object.entries(data.banques).map(([key, value]: any) => (
                <div key={key}>
                  <h2 className="font-semibold">
                    <u>{`Banque:`}</u>
                  </h2>
                  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm p-1">
                    <div className="flex gap-4">
                      <p className="font-semibold font-mono">
                        <> Nom:</>
                      </p>
                      <div>
                        <p>{value[`nom_banque${key.slice(-1)}`]}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <p className="font-semibold font-mono">
                        <>Contact:</>
                      </p>
                      <div>
                        <p>{value[`contact_banque${key.slice(-1)}`]}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <p className="font-semibold font-mono">
                        <>Téléphone:</>
                      </p>
                      <div>
                        <p>{value[`telephone${key.slice(-1)}`]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </fieldset>
            <fieldset
              id="banques"
              className="border-2 border-black p-3 rounded"
            >
              <legend className="font-semibold ">
                <u>REFERENCES COMMERCIALES</u>
              </legend>
              {Object.entries(data.ref_commerciales).map(
                ([key, value]: any) => (
                  <div key={key}>
                    <h2 className="font-semibold">
                      <u>{`Entreprise :`}</u>
                    </h2>
                    <div className="grid grid-cols-2 gap-2 p-1 text-sm">
                      <div className="flex gap-4">
                        <p className="font-semibold font-mono">
                          <>Nom:</>
                        </p>
                        <div>
                          <p>{value[`nom_entreprise${key.slice(-1)}`]}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-semibold font-mono">
                          <>Contact:</>
                        </p>
                        <div>
                          <p>{value[`contact_entreprise${key.slice(-1)}`]}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-semibold font-mono">
                          <>Téléphone:</>
                        </p>
                        <div>
                          <p>{value[`telephone${key.slice(-1)}`]}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-semibold font-mono">
                          <>Date:</>
                        </p>
                        <div>
                          <p>{value[`date_debut_relation${key.slice(-1)}`]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </fieldset>
            <fieldset
              id={"info_entreprise"}
              className="border-2 border-black p-3 rounded"
            >
              <legend className="font-semibold ">
                <u>INTERLOCUTEUR</u>
              </legend>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm">
                {Object.entries(data.interlocuteur).map(([key, value]: any) => (
                  <div key={key} className="grid-cols-1 gap:2 sm:flex sm:gap-4">
                    <p className="font-semibold font-mono">
                      <u>{`${key[0].toUpperCase()}${key
                        .substring(1)
                        .replace(/_/g, " ")}`}</u>
                      :{" "}
                    </p>
                    <div>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset
              id={"info_entreprise"}
              className="border-2 border-black p-3 rounded"
            >
              <legend className="font-semibold ">
                <u>PIECE JOINDRE</u>
              </legend>
              <div className="flex flex-col place-content-center place-items-center">
                <p className="font-semibold">{`${files[0][0]} -- ${files[0][1]}`}</p>
                <p className="font-semibold">{`${files[1][0]} -- ${files[1][1]}`}</p>
              </div>
            </fieldset>
            <div className="flex place-items-center gap-4 p-4">
              <input id={"confirm"} type={"checkbox"} onChange={isSure} />
              <label htmlFor="confirm">
                Je confirme que toutes les informations saisies sont correctes{" "}
                <i className="text-red-600">*</i>
              </label>
            </div>
            <div className="flex place-content-center gap-4">
              {!sent ? (
                <>
                  {" "}
                  {confirmed ? (
                    <button
                      onClick={confirm}
                      className="tracking-wider bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
                    >
                      Confirmer
                    </button>
                  ) : (
                    <button
                      onClick={confirm}
                      className="tracking-wider opacity-60 bg-green_hues-600 p-3 w-80 font-sans spacing font-bold text-white rounded"
                      disabled
                    >
                      Confirmer
                    </button>
                  )}
                  <button
                    onClick={goBack}
                    className="tracking-wider bg-green_hues-700 p-3 w-80 font-sans spacing font-bold text-white rounded"
                  >
                    Modifier
                  </button>{" "}
                </>
              ) : (
                <Loading />
              )}
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Validation;
