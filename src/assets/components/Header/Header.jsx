import backgroundimage from "../../images/backgroundimage.png";
import test from "../../images/test.png";
import About from "../About/About";

export default function Header({ appSize }) {
  return (
    <div
      className={`${
        appSize >= 950 ? "d-flex-row" : "d-flex-column-reverse"
      } w-full`}
      style={{ height: appSize >= 950 ? "60%" : "auto" }}
    >
      <div className='d-flex-row jc-center' style={{ flex: '1' }}>
        <About appSize={appSize} />
      </div>
      <img
        src={backgroundimage}
        style={
          appSize >= 950
            ? { width: "50%", height: "100%", objectFit: "cover" }
            : { width: "auto", height: "auto", objectFit: "cover" }
        }
      />
      {/* <div
        className="b-cover d-flex-row ai-center jc-center"
        style={{
          width: "50%",
          height: "100%",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          background: `url(${backgroundimage})`,
        }}
      >
      </div> */}
    </div>
  );
}
