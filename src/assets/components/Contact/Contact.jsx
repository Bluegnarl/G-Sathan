import ContactInformations from "../ContactInformations/ContactInformations"

export default function Contact(){
  return(
    <div className="d-flex-column">
      <div>
        <ContactInformations />
        <ContactInformations />
        <ContactInformations />
      </div>
      <div className="p-16 b-primary">
        <p>FORMULAIRE</p>
      </div>
    </div>
  )
}