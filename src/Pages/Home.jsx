import '../Styles/HomeAndInfo.css'
import Photo from '../Assets/1._HOME.png'

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">
        <div>Pay fast,</div>
        <div>Pay secure.</div>
      </h1>
      <p className="home-text">
        PayPulp is a secure and efficient online payment website that is dedicated to providing its
        customers with a positive experience.
      </p>
      <img className="home-image" src={Photo} alt={'woman happy to pay with PayPulp'} />
    </div>
  )
}
