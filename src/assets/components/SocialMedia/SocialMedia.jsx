export default function SocialMedia({
  socialMedia,
  socialMediaLink,
  socialMediaIcon,
  socialMediaName,
  appWidth,
}) {
  return (
    <div
      className="d-flex-row ai-center b-surface-3 m-5"
      style={{ borderRadius: "150px" }}
    >
      <img
        className={`${
          appWidth < 160
            ? "pl-5"
            : appWidth < 1100
            ? "pl-8"
            : appWidth < 2000
            ? "pl-12"
            : "pl-16"
        } pl-12`}
        style={{
          width:
            appWidth < 160
              ? "23px"
              : appWidth < 300
              ? "25px"
              : appWidth < 391
              ? "28px"
              : appWidth < 1100
              ? "30px"
              : appWidth < 1650
              ? "32px"
              : appWidth < 2000
              ? "35px"
              : "40px",
        }}
        src={socialMediaIcon}
        alt={socialMediaName}
      />
      <a
        href={socialMediaLink}
        target="_blank"
        className={`${
          appWidth < 160
            ? "fs-7 p-5"
            : appWidth < 300
            ? "fs-9 p-5"
            : appWidth < 391
            ? "fs-12 p-8"
            : appWidth < 1100
            ? "fs-14 p-8"
            : appWidth < 1650
            ? "fs-16 p-12"
            : appWidth < 2000
            ? "fs-18 p-12"
            : "fs-24 p-16"
        } fw-300 td-none c-on-surface`}
      >
        {socialMedia}
      </a>
    </div>
  );
}
