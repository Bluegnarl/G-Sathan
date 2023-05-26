export default function SocialMedia({ socialMedia, socialMediaLink, socialMediaIcon, socialMediaName, appWidth  }){
    return(
        <div className="d-flex-row ai-center b-surface-3 m-5" style={{ borderRadius: '150px' }}>
            <img className="pl-12" style={{ width: '35px' }} src={socialMediaIcon} alt={socialMediaName} />
            <a href={socialMediaLink} className={`${
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
        } fw-300 td-none c-on-surface p-12`}>{socialMedia}</a>
        </div>
    )
}