import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full h-full flex flex-col place-items-center place-content-center font-bold"
    >
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <div>
        <a href="/" className="text-green_hues-700">
          <u>Cliquer pour actualiser la page</u>
        </a>
      </div>
    </div>
  );
}
