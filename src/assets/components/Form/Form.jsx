import { useState } from "react";

import styles from "./Form.module.scss";

import Input from "../Input/Input";

export default function Form({ form, setForm, appWidth }) {
  const [formData, setFormData] = useState({
      name: "",
      address: "",
      position: "",
      description: "",
      more: "",
    }),
    sendTo = "dradarkx@gmail.com",
    mailSubject = `Demande%20de%20tatouage%20envoyée%20depuis%20le%20Formulaire%20par%20${formData.name}`,
    mailBody = `Nom%20complet%20:%20${formData.name}%0AAdresse%20:%20${formData.address}%0A%0ALe tatouage%0AEmplacement%20:%20${formData.position}%0ADescriptif du projet%20:%20${formData.description}%0ARemarques addionelles%20:%20${formData.more}`,
    handleSubmit = (e) => {
      e.preventDefault();
      setForm(false)
      window.open(
        `mailto:${sendTo}?subject=${mailSubject}&body=${mailBody}`,
        "_blank"
      );
    };

  return (
    <>
      <div
        onClick={() => setForm(false)}
        className="pos-fixed d-flex-row"
        style={{
          width: "100%",
          height: "100%",
          zIndex: "99",
          marginTop: form ? "0" : "100vh",
          background: "rgb(0, 0, 0)",
          opacity: form ? "0.5" : "0",
          transition: "opacity .3s ease-out",
        }}
      ></div>
      <div
        className="pos-fixed d-flex-column b-surface-2 br-8"
        style={{
          width: "90%",
          maxWidth: "450px",
          maxHeight: "clamp(400px,90%,600px)",
          zIndex: "100",
          marginTop: form ? "0" : "100vh",
          transition: "margin-top .2s ease-out",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-full d-flex-row jc-flex-end ai-center">
          <span
            onClick={() => setForm(false)}
            className={`${styles.close} material-symbols-outlined fs-32 m-12 p-12 cursor-pointer user-select-none`}
          >
            close
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="d-flex-column w-full h-full pl-20 pr-20 pb-20"
          style={{ gap: "16px" }}
        >
          <p className="fw-400 fs-16">Vos informations</p>
          <Input label="Nom complet" name='name' formData={formData} setFormData={setFormData} />
          <Input label="Adresse précise" name='address' formData={formData} setFormData={setFormData} />
          <p className="fw-400 fs-16">Le tatouage</p>
          <Input label="Emplacement" name='position' formData={formData} setFormData={setFormData} />
          <Input label="Description du projet" name='description' formData={formData} setFormData={setFormData} />
          <Input label="Remarques additionelles" name='more' formData={formData} setFormData={setFormData} />
          <button type="submit" className={`${styles.send} ff-text`} >Envoyer</button>
        </form>
      </div>
    </>
  );
}
