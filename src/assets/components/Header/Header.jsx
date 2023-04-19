import backgroundimage from '../../images/dqsdqsd.png'
import About from '../About/About'

export default function Header({ appSize }) {
  return(
    <div className={`${appSize < 950 ? 'd-flex-column-reverse' : 'd-flex-row'} w-full jc-space-between`} style={{ height: appSize < 950 ? 'auto' : '40%'}}>
      <About appSize={appSize} />
      <img 
        className='b-cover'
        style={{ width: appSize < 950 ? '100%' : 'auto', height: appSize > 950 && '100%' }}
        src={backgroundimage}
        alt='Background Image'
      />
    </div>
  )
}