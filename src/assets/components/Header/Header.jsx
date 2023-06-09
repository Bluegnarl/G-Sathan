import headerImage from "../../images/header.webp";
import logo from "../../images/logo.svg";
import About from "../About/About";

export default function Header({ appInfo, visible, appWidth, appHeight }) {
  return (
    <div
      className={`${
        appWidth >= 950
          ? "d-flex-row b-surface"
          : "d-flex-column-reverse b-surface-1"
      } w-full`}
      style={{
        minHeight:
          appWidth < 950
            ? "auto"
            : appWidth < 1200
            ? appHeight < 600
              ? "400px"
              : "65%"
            : "100%",
        maxHeight:
          appWidth < 950 ? "600px" : appWidth < 1200 ? "800px" : "auto",
      }}
    >
      <div
        className="d-flex-row jc-center"
        style={{ flex: "1", display: appWidth < 950 ? "none" : "flex" }}
      >
        <About visible={visible} appWidth={appWidth} />
      </div>
      <div
        className={`${ appWidth > 950 && 'w-zero' } pos-relative d-flex-row ai-center jc-center overflow-hidden`}
        style={
          appWidth < 180
            ? {
                width: visible && "100%",
                height: visible ? "150px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 250
            ? {
                width: visible && "100%",
                height: visible ? "200px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 300
            ? {
                width: visible && "100%",
                height: visible ? "250px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 350
            ? {
                width: visible && "100%",
                height: visible ? "300px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 391
            ? {
                width: visible && "100%",
                height: visible ? "350px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 450
            ? {
                width: visible && "100%",
                height: visible ? "400px" : "0px",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 650
            ? {
                width: visible && "100%",
                height: visible ? "500px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : appWidth < 950
            ? {
                width: visible && "100%",
                height: visible ? "600px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .6s ease-in-out, opacity .6s ease-in-out",
              }
            : {
                width: visible && "50%",
                height: "100%",
                objectFit: "cover",
                opacity: visible ? "1" : "0",
                transition: "width .6s ease-in-out, opacity .6s ease-in-out",
              }
        }
      >
        <img
          src={headerImage}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          className="pos-absolute"
          style={
            appWidth < 950
              ? {
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  background:
                    "linear-gradient(0deg, rgba(9, 9, 9, 1) 0%, rgba(0, 0, 0, 0) 10%)",
                }
              : {
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 30%)",
                }
          }
        ></div>
        <div
          className="pos-absolute d-flex-row ai-center"
          style={{ transition: "opacity .8s ease-out" }}
        >
          <h1
            className={`${
              appWidth < 180
                ? "fs-12"
                : appWidth < 200
                ? "fs-14"
                : appWidth < 250
                ? "fs-16"
                : appWidth < 300
                ? "fs-20"
                : appWidth < 350
                ? "fs-22"
                : appWidth < 391
                ? "fs-24"
                : appWidth < 430
                ? "fs-28"
                : appWidth < 490
                ? "fs-32"
                : appWidth < 550
                ? "fs-36"
                : appWidth < 650
                ? "fs-40"
                : appWidth < 950
                ? "fs-48"
                : appWidth < 1200
                ? "fs-40"
                : appWidth < 1500
                ? "fs-48"
                : "fs-56"
            } ff-title fw-500 box-shadow`}
          >
            tattoos
          </h1>
          <img
            className={`${
              appWidth < 250 ? "pl-8" : appWidth < 391 ? "pl-12" : "pl-20"
            } box-shadow`}
            style={{
              transition: "width .6s ease-in-out",
              width:
                appWidth < 180
                  ? "50px"
                  : appWidth < 200
                  ? "55px"
                  : appWidth < 220
                  ? "60px"
                  : appWidth < 250
                  ? "70px"
                  : appWidth < 300
                  ? "80px"
                  : appWidth < 350
                  ? "90px"
                  : appWidth < 391
                  ? "110px"
                  : appWidth < 430
                  ? "130px"
                  : appWidth < 490
                  ? "140px"
                  : appWidth < 550
                  ? "160px"
                  : appWidth < 650
                  ? "180px"
                  : appWidth < 950
                  ? "200px"
                  : appWidth < 1200
                  ? "140px"
                  : appWidth < 1500
                  ? "200px"
                  : "250px",
            }}
            src={logo}
            alt="Tattoos Artworks"
          />
          <h1
            className={`${
              appWidth < 180
                ? "fs-12"
                : appWidth < 200
                ? "fs-14"
                : appWidth < 250
                ? "fs-16"
                : appWidth < 300
                ? "fs-20"
                : appWidth < 350
                ? "fs-22"
                : appWidth < 391
                ? "fs-24"
                : appWidth < 430
                ? "fs-28"
                : appWidth < 490
                ? "fs-32"
                : appWidth < 550
                ? "fs-36"
                : appWidth < 650
                ? "fs-40"
                : appWidth < 950
                ? "fs-48"
                : appWidth < 1200
                ? "fs-40"
                : appWidth < 1500
                ? "fs-40"
                : "fs-56"
            } ff-title fw-500 box-shadow`}
          >
            artworks
          </h1>
        </div>
      </div>
    </div>
  );
}
