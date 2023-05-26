import redlogo from "../../images/redlogo.webp";

export default function About({ appWidth, visible, display }) {
  return (
    <div
      className={`${
        appWidth < 300
          ? "p-16 pb-48"
          : appWidth < 1100
          ? "p-32 pb-48"
          : appWidth < 1650
          ? "p-48 pb-96"
          : "p-64 pb-96"
      } d-flex-column jc-center`}
      style={{
        maxWidth:
          appWidth < 950 ? "850px" : appWidth < 2000 ? "900px" : "1500px",
        display: appWidth < 950 ? "flex" : display,
        transition:
          appWidth < 950
            ? "opacity .6s ease-in-out .2s"
            : "opacity .5s ease-out .1s",
        opacity: visible ? "1" : "0",
      }}
    >
      <div
        className={`${
          appWidth < 300
            ? "pt-16 pb-12"
            : appWidth < 391
            ? "pt-20 pb-16"
            : appWidth < 950
            ? "pt-24 pb-20"
            : appWidth < 1100
            ? "pb-20"
            : "pb-28"
        } d-flex-row`}
      >
        <div className="pos-relative d-flex-row ai-center jc-center">
          <p
            className={`${
              appWidth < 160
                ? "fs-20"
                : appWidth < 300
                ? "fs-24"
                : appWidth < 391
                ? "fs-28"
                : appWidth < 1100
                ? "fs-32"
                : appWidth < 1650
                ? "fs-40"
                : appWidth < 2000
                ? "fs-48"
                : "fs-56"
            } ff-title`}
            style={{ zIndex: "1" }}
          >
            G. Sathan
          </p>
          <img
            src={redlogo}
            className="pos-absolute"
            style={{
              width:
                appWidth < 160
                  ? "24px"
                  : appWidth < 300
                  ? "32px"
                  : appWidth < 391
                  ? "37px"
                  : appWidth < 1100
                  ? "45px"
                  : appWidth < 1650
                  ? "60px"
                  : appWidth < 2000
                  ? "70px"
                  : "80px",
            }}
          />
        </div>
      </div>
      <div
        className={`${
          appWidth < 160
            ? "fs-7"
            : appWidth < 300
            ? "fs-9"
            : appWidth < 391
            ? "fs-12"
            : appWidth < 1100
            ? "fs-14"
            : appWidth < 1650
            ? "fs-16"
            : appWidth < 2000
            ? "fs-18"
            : "fs-24"
        } w-full fw-300`}
      >
        <p className="w-full mb-5">
          J’ai débuté mon activité de tatouage il y a 5 ans après avoir été
          proche du milieu pendant de nombreuses années.
        </p>
        <p className="w-full mb-5">
          Bien que n’ayant pas de formation de dessinateur mais une affinité
          marqué pour les arts plastiques, c’est instantanément que j’ai compris
          que ce métier était fait pour moi.
        </p>
        <p className="w-full">
          Une fois débarrassé de tous les préjugés, c’est un métier qui se
          révèle très complet et au sommet, à mon sens en tout cas, de la
          collaboration entre le client et l’artiste.
        </p>
      </div>
    </div>
  );
}
