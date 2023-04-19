import backgroundimage from '../../images/dqsdqsd.png'

export default function Header() {
  return(
    <div className="d-flex-row w-full h-400">
      <img 
        className='b-cover'
        src={backgroundimage}
        alt='Background Image'
      />
    </div>
  )
}