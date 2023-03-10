import { createContext, useState } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Validation from "./components/formulaireComplet";
import Inserted from "./components/inserted";

export const AppContext = createContext<any>({});

function App() {
  const [state, setState] = useState({
    info_entreprise: {
      raison_sociale: "",
      annee_creation: "",
      forme_juridique: "",
      activite_principale: "",
      siege_sociale: "",
      groupe: "",
      maison_mere: "",
      nom_gerant: "",
      ice: "",
      rc: "",
    },
    banques: {
      banque1: {
        nom_banque1: "",
        contact_banque1: "",
        telephone1: "",
      },
      banque2: {
        nom_banque2: "",
        contact_banque2: "",
        telephone2: "",
      },
      banque3: {
        nom_banque3: "",
        contact_banque3: "",
        telephone3: "",
      },
    },
    ref_commerciales: {
      ref1: {
        nom_entreprise1: "",
        contact_entreprise1: "",
        telephone1: "",
        date_debut_relation1: "",
      },
      ref2: {
        nom_entreprise2: "",
        contact_entreprise2: "",
        telephone2: "",
        date_debut_relation2: "",
      },
      ref3: {
        nom_entreprise3: "",
        contact_entreprise3: "",
        telephone3: "",
        date_debut_relation3: "",
      },
    },
    interlocuteur: {
      nom_interlocuteur: "",
      telephone: "",
      fonction: "",
      adresse_mail: "",
    },
    fichiers: [],
  });
  const [successful, setSuccessful] = useState(false);
  const setSuccessTrue = () => {
    setSuccessful(true);
  };
  const [completed, setCompleted] = useState(false);

  const completedTrue = () => {
    setCompleted(!completed);
  };

  const updateState = (newState: any) => {
    setState(newState);
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <MainContent
          state={state}
          updateState={updateState}
          completed={completed}
          completedTrue={completedTrue}
        />
      ),
    },
    {
      path: "/validation",
      element: (
        <Validation
          state={state}
          completed={completed}
          completedTrue={completedTrue}
          setSuccessTrue={setSuccessTrue}
        />
      ),
    },
    {
      path: "/inserted",
      element: <Inserted successful={successful} />,
    },
  ]);

  return (
    <main className="w-full h-full">
      <Header />
      <AppContext.Provider value={{ state }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </main>
  );
}

export default App;
