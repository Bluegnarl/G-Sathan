import redlogo from "../../images/redlogo.png";

export default function Text({ appSize }) {
  return (
    <div
      className="p-32 d-flex-column jc-center"
      style={
        appSize >= 950
          ? { maxWidth: "800px" }
          : { flex: "auto", maxWidth: "800px", alignSelf: "center" }
      }
    >
      <div className="pt-24 pb-24 d-flex-row">
        <div className="pos-relative d-flex-row ai-center jc-center">
          <p className="ff-title fs-32" style={{ zIndex: "1" }}>
            G. Sathan
          </p>
          <img
            src={redlogo}
            className="pos-absolute"
            style={{ width: "45px" }}
          />
        </div>
      </div>
      <div className="w-full">
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
