import redlogo from "../../images/redlogo.png";

export default function Text({ appSize, visible }) {
  return (
    <div
      className={`${
        appSize < 300
          ? "p-16"
          : appSize < 950
          ? "p-32"
          : appSize < 1650
          ? "p-48"
          : "p-64"
      } d-flex-column jc-center`}
      style={
        appSize < 950
          ? { maxWidth: "800px", transition: 'all .8s', opacity: visible ? '1' : '0' }
          : appSize < 2000
          ? { maxWidth: "900px", transition: 'all .8s', opacity: visible ? '1' : '0' }
          : { maxWidth: "1500px", transition: 'all .8s', opacity: visible ? '1' : '0' }
      }
    >
      <div
        className={`${
          appSize < 300
            ? "pt-16 pb-12"
            : appSize < 391
            ? "pt-20 pb-16"
            : appSize < 1100
            ? "pt-24 pb-20"
            : "pt-24 pb-28"
        } d-flex-row`}
      >
        <div className="pos-relative d-flex-row ai-center jc-center">
          <p
            className={`${
              appSize < 160
                ? "fs-20"
                : appSize < 300
                ? "fs-24"
                : appSize < 391
                ? "fs-28"
                : appSize < 1100
                ? "fs-32"
                : appSize < 1650
                ? "fs-40"
                : appSize < 2000
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
                appSize < 160
                  ? "24px"
                  : appSize < 300
                  ? "32px"
                  : appSize < 391
                  ? "37px"
                  : appSize < 1100
                  ? "45px"
                  : appSize < 1650
                  ? "60px"
                  : appSize < 2000
                  ? "70px"
                  : "80px",
            }}
          />
        </div>
      </div>
      <div
        className={`${
          appSize < 160
            ? "fs-7"
            : appSize < 300
            ? "fs-9"
            : appSize < 391
            ? "fs-12"
            : appSize < 1100
            ? "fs-14"
            : appSize < 1650
            ? "fs-16"
            : appSize < 2000
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
