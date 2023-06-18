export default function Title({ title, appWidth, menu }) {
  return (
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
      } ff-title m-16 cursor-pointer`}
      style={{
        transform: menu ? 'translateY(0%)' : 'translateY(50%)',
        opacity: menu ? "1" : "0",
        transition: "opacity .2s ease-out .4s, transform .3s ease-out .6s",
      }}
    >
      {title}
    </p>
  );
}
