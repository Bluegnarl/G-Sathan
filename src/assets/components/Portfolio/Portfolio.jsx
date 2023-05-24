import { illustrations } from "../../datas/illustrations";
import redlogo from "../../images/redlogo.webp";

export default function Portfolio({ appWidth }) {
  return (
    <div
      className={`${
        (appWidth < 950 && "pt-40",
        appWidth < 300
          ? "p-16"
          : appWidth < 950
          ? "p-32"
          : appWidth < 1650
          ? "p-48"
          : "p-64")
      } d-flex-column w-full h-full`}
    >
      <div
        className={`${
          appWidth < 300
            ? "pb-12"
            : appWidth < 391
            ? "pb-16"
            : appWidth < 1100
            ? "pb-20"
            : "pb-28"
        } d-flex-row`}
        style={{ justifyContent: "flex-end" }}
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
            Portfolio
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
      <div className="d-flex-column w-full jc-space-between" style={{ height: '800px' }}>
        <div className="d-flex-row w-full h-full jc-center b-test br-8"></div>
      </div>
    </div>
  );
}
