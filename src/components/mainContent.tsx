import { useEffect, useState } from "react";
import InfoEnt from "./mainContentComponents/infoEntreprise";
import RefBanc from "./mainContentComponents/referenceBancairs";
import RefComr from "./mainContentComponents/referenceCommerciales";
import Interlocuteur from "./mainContentComponents/interlocuteur";
import PieceJoindre from "./mainContentComponents/pieceJoindre";

const MainContent = (props: any) => {
  const [form, setForm] = useState(0);
  const [state, setState] = useState(props.state);
  const updateState = props.updateState;

  console.log(state.info_entreprise);

  function addFiles(newFiles: File[]) {
    setState((prevState: any) => ({
      ...prevState,
      fichiers: [...prevState.fichiers, ...newFiles],
    }));
  }

  function removeFile(fileToRemove: any) {
    setState((prevState: any) => ({
      ...prevState,
      fichiers: prevState.fichiers.filter((file: any) => file !== fileToRemove),
    }));
  }

  const changeForm = (e: any) => {
    if (e.target.name == "next") {
      setForm((prev) => prev + 1);
    } else {
      if (form == 0) return;
      setForm((prev) => prev - 1);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleInputInfoEnt = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    setState((prevState: any) => {
      if (name == "groupe") {
        return {
          ...prevState,
          info_entreprise: {
            ...prevState.info_entreprise,
            [name]: value,
            maison_mere:
              value == "false" ? "" : prevState.info_entreprise.maison_mere,
          },
        };
      }
      return {
        ...prevState,
        info_entreprise: {
          ...prevState.info_entreprise,
          [name]: value,
        },
      };
    });
  };

  const handleInputBanque = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    let data = event.target.getAttribute("data-id");
    let banque = `banque${data}`;
    setState((prevState: any) => {
      return {
        ...prevState,
        banques: {
          ...prevState.banques,
          [banque]: {
            ...prevState.banques[banque],
            [name]: value,
          },
        },
      };
    });
  };

  const handleInputCommerciale = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    let data = event.target.getAttribute("data-id");
    let ref = `ref${data}`;
    setState((prevState: any) => {
      return {
        ...prevState,
        ref_commerciales: {
          ...prevState.ref_commerciales,
          [ref]: {
            ...prevState.ref_commerciales[ref],
            [name]: value,
          },
        },
      };
    });
  };

  const handleInputInterlocuteur = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    setState((prevState: any) => {
      return {
        ...prevState,
        interlocuteur: {
          ...prevState.interlocuteur,
          [name]: value,
        },
      };
    });
  };

  const styles = {
    input:
      "border-gray-700  border-2 rounded p-2 text-sm placeholder:font-bold",
    fieldset:
      "grid border-2 p-7 rounded border-gray-700 grid-cols-2 content-center gap-6",
    legend: "text-base font-semibold",
  };

  useEffect(() => {
    updateState(state);
  }, [state]);

  return (
    <section className="flex place-content-center relative h-full">
      <form
        className="lg:w-2/3 md:w-3/4 sm:w-11/12"
        onSubmit={handleSubmit}
        action="#"
        method="POST"
      >
        <h1 className="font-sans font-bold text-2xl text-center p-3 ">
          Fiche de Renseignement Client
        </h1>
        {form == 0 ? (
          <InfoEnt
            state={state.info_entreprise}
            styles={styles}
            handleInput={handleInputInfoEnt}
            changeForm={changeForm}
          />
        ) : form == 1 ? (
          <RefBanc
            state={state.banques}
            styles={styles}
            handleInput={handleInputBanque}
            changeForm={changeForm}
          />
        ) : form == 2 ? (
          <RefComr
            state={state.ref_commerciales}
            styles={styles}
            handleInput={handleInputCommerciale}
            changeForm={changeForm}
          />
        ) : form == 3 ? (
          <Interlocuteur
            state={state.interlocuteur}
            styles={styles}
            handleInput={handleInputInterlocuteur}
            changeForm={changeForm}
          />
        ) : form == 4 ? (
          <PieceJoindre
            state={state.fichiers}
            styles={styles}
            changeForm={changeForm}
            addFiles={addFiles}
            removeFile={removeFile}
            handleSubmit={handleSubmit}
          />
        ) : (
          <></>
        )}
      </form>
    </section>
  );
};

export default MainContent;
