import redlogo from "../../images/redlogo.png";

export default function Text({ appSize }) {
  return (
    <div
      className={`${ appSize >= 950 ? 'p-48' : 'p-32'} d-flex-column jc-center`}
      style={
        appSize >= 950
          ? { maxWidth: "800px" }
          : { flex: "auto", maxWidth: "800px", alignSelf: "center" }
      }
    >
      <div className="pt-24 pb-20 d-flex-row">
        <div className="pos-relative d-flex-row ai-center jc-center">
          <p className={`${ appSize < 340 ? 'fs-28' : appSize < 1100 ? 'fs-32' : appSize < 1650 ? 'fs-40' : 'fs-48' } ff-title`} style={{ zIndex: "1" }}>
            G. Sathan
          </p>
          <img
            src={redlogo}
            className="pos-absolute"
            style={{ width: appSize < 340 ? 'fs-28' : appSize < 1100 ? '45px' : appSize < 1650 ? '60px' : '65px' }}
          />
        </div>
      </div>
      <div className={`${appSize < 340 ? "fs-11" : appSize < 1100 ? "fs-14" : appSize < 1650 ? "fs-16" : 'fs-18' } w-full fw-300`}>
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
