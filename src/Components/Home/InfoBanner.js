import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Images/InfoBanner1.jpg';
import './InfoBanner.css';

function InfoBanner() {
  return (
    <>
    <div className='infoBannerContainer'>
        <img src={Image} className='imageBanner'></img>
        <p className='textoInformativo'>En estado puro, la plata es bastante suave, su color es blanco y al pulirse adquiere un color brillante capaz de reflejar el 95% de la luz.La plata se utiliza en joyería, en la industria fotográfica, química y eléctrica. Por su fabuloso brillo, es ideal para la elaboración de joyería, tan es así que México se colocado como el cuarto productor de joyería de plata a nivel mundial, después de India, Italia y Tailandia.</p>
    </div>
    </>

  );
}
export default InfoBanner;