import etiquette from "../../images/etiquette.svg";

export default function ContactInformations({
  appInfo,
  appWidth,
  icon,
  title,
  content,
  iconWidth,
  visible,
  latence,
  className = "",
}) {
  return (
    <div className={`d-flex-column m-16 ${className}`}
    style={{
      transition: `opacity .3s ease-in-out ${latence}, transform .35s ease-in-out ${latence}`,
      opacity: visible ? "1" : "0",
      transform: visible ? "translateY(0%)" : "translateY(20%)",
    }}>
      <div
        className={`${
          appWidth < 391 ? "mb-5" : appWidth < 950 ? "mb-8" : "mb-16"
        } pos-relative d-flex-row ai-center jc-center`}
      >
        <img
          src={etiquette}
          style={{
            width:
              appWidth < 391
                ? "35px"
                : appWidth < 1100
                ? "50px"
                : appWidth < 1650
                ? "65px"
                : "70px",
          }}
        />
        <img
          src={icon}
          alt="Régions disponible"
          className="pos-absolute"
          style={{ zIndex: "1", width: `${iconWidth}` }}
        />
      </div>
      <div className="d-flex-column ai-center">
        <p
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
          } fw-300`}
        >
          {title}
        </p>
        <p
          className={`${
            appWidth < 160
              ? "fs-5"
              : appWidth < 330
              ? "fs-7"
              : appWidth < 425
              ? "fs-9"
              : appWidth < 1100
              ? "fs-11"
              : appWidth < 1650
              ? "fs-12"
              : appWidth < 2000
              ? "fs-14"
              : "fs-20"
          } fw-200`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
