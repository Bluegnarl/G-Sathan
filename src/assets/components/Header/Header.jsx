import headerImage from "../../images/header.webp";
import About from "../About/About";

export default function Header({ visible, appWidth, appHeight }) {
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
            ? "65%"
            : "100%",
      }}
    >
      <div className="d-flex-row jc-center" style={{ flex: '1', display: appWidth < 950 ? 'none' : 'flex' }}>
        <About appWidth={appWidth} visible={visible} />
      </div>
      <div
        className="pos-relative w-zero"
        style={
          appWidth < 180
            ? {
                width: visible && "100%",
                height: visible ? "150px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 250
            ? {
                width: visible && "100%",
                height: visible ? "200px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 300
            ? {
                width: visible && "100%",
                height: visible ? "250px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 350
            ? {
                width: visible && "100%",
                height: visible ? "300px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 391
            ? {
                width: visible && "100%",
                height: visible ? "350px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 450
            ? {
                width: visible && "100%",
                height: visible ? "400px" : "0px",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 650
            ? {
                width: visible && "100%",
                height: visible ? "500px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : appWidth < 950
            ? {
                width: visible && "100%",
                height: visible ? "600px" : "0",
                opacity: visible ? "1" : "0",
                transition: "height .8s ease, opacity .8s ease",
              }
            : {
                width: visible && "50%",
                height: '100%',
                objectFit: 'cover',
                opacity: visible ? "1" : "0",
                transition: 'width .8s ease, opacity .8s ease'
              }
        }
      >
        <img
          src={headerImage}
          style={
            appWidth < 950
              ? {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "0 0",
                }
              : {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }
          }
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
                "linear-gradient(0deg, rgba(9, 9, 9, 1) 0%, rgba(0, 0, 0, 0) 10%)"
            } 
            : {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 30%)",
          }}
        ></div>
      </div>
    </div>
  );
}
