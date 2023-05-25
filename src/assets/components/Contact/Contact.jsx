import styles from "./Contact.module.scss";

import ContactInformations from "../ContactInformations/ContactInformations";
import ping from "../../images/ping.svg";
import arobase from "../../images/arobase.svg";
import agenda from "../../images/agenda.svg";
import form from '../../images/form.svg'

export default function Contact({ visible, appWidth, appHeight }) {
  return (
    <div
      className={`${
        appWidth < 391
          ? "pb-48"
          : appWidth < 1100
          ? "p-20 pb-48"
          : appWidth < 1650
          ? "p-48 pb-96"
          : "p-64 pb-96"
      } d-flex-column ai-center`}
    >
      <div className="d-flex-row jc-space-around flex-wrap">
        <ContactInformations
          appWidth={appWidth}
          icon={ping}
          iconWidth={`${ appWidth < 391 ? '13px' : appWidth < 1100 ? '18px' : '24.5px' }`}
          title="Régions disponible"
          content="Belgique, Ardennes"
        />
        <ContactInformations
          appWidth={appWidth}
          icon={arobase}
          iconWidth={`${ appWidth < 391 ? '18px' : appWidth < 1100 ? '24px' : '32px' }`}
          title="Moyens de contact"
          content="Réseaux sociaux, mail, formulaire"
        />
        <ContactInformations
          appWidth={appWidth}
          icon={agenda}
          iconWidth={`${ appWidth < 391 ? '16px' : appWidth < 1100 ? '22px' : '30px' }`}
          title="Souvent en déplacement"
          content="Contactez-moi pour en savoir plus"
        />
      </div>
      <div className={`${ appWidth < 391 ? 'mt-40' : 'mt-64' } pos-relative d-flex-row jc-center`}>
        <div className={`${ styles.formButton } d-flex-column ai-center br-8`} style={{ zIndex: '1', padding: appWidth < 391 ? '7px 10px 7px 10px' : '10px 16px 10px 16px' }}>
          <p className={`${ appWidth < 160 ? 'fs-9' : appWidth < 210 ? 'fs-11' : appWidth < 300 ? 'fs-12' : appWidth < 391 ? 'fs-14' : appWidth < 1100 ? 'fs-16' : 'fs-20' } ${ appWidth < 391 ? 'pb-3' : 'pb-5'} fw-500`}>Envie d'un tatouage ?</p>
          <p className={`${ appWidth < 160 ? 'fs-5' : appWidth < 210 ? 'fs-7' : appWidth < 300 ? 'fs-9' : appWidth < 391 ? 'fs-11' : appWidth < 1100 ? 'fs-12' : 'fs-16' } ${ appWidth < 391 ? 'pt-3' : 'pt-5'} fw-400`}>Prenez rendez-vous via ce formulaire !</p>
        </div>
        <img className="pos-absolute" src={form} style={{ transform: 'translateY(-30%)', width: appWidth < 391 ? '35px' : '45px' }} />
      </div>
    </div>
  );
}
