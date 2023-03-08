import { useEffect, useState } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage";
import Validation from "./components/formulaireComplet";

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
        nom_banque1: "1",
        contact_banque1: "",
        telephone1: "",
      },
      banque2: {
        nom_banque2: "2",
        contact_banque2: "",
        telephone2: "",
      },
      banque3: {
        nom_banque3: "3",
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
      errorElement: <ErrorPage />,
    },
    {
      path: "/validation",
      element: (
        <Validation
          state={state}
          completed={completed}
          completedTrue={completedTrue}
        />
      ),
    },
  ]);

  return (
    <main className="w-full h-full">
      <Header />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
