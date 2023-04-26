import backgroundimage from "../../images/backgroundimage.png";
import About from "../About/About";

export default function Header({ appSize }) {
  return (
    <div
      className={`${
        appSize >= 950 ? "d-flex-row b-surface" : "d-flex-column-reverse b-surface-1"
      } w-full`}
      style={{ height: appSize < 950 ? "auto" : appSize < 1100 ? "55%" : appSize < 1200 ? "65%" : '100%', minHeight: '300px' }}
    >
      <div className='d-flex-row jc-center' style={{ flex: '1' }}>
        <About appSize={appSize} />
      </div>
      <img
        src={backgroundimage}
        style={
          appSize < 450
          ? { width: "auto", height: "auto", objectFit: "cover" }
          : appSize < 950
          ? {  width: "100%", height: "400px", objectFit: "cover", objectPosition: '0 0' }
          : {  width: "50%", height: "100%", objectFit: "cover" }
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
