import {useState} from 'react'
import "./UserCard.css";

export const UserCard = ({user}) => {
    //estructura general de un hook
  const [isContacted, setIsContacted]=useState(false)
  const [alertContacted, setAlertContacted]=useState(false)
  const {id,name,description,image}=user

const handleClick=()=>{
    setIsContacted(!isContacted);
    setAlertContacted(!alertContacted);

     alertContacted ? alert(`ya contactaste a ${name}`):alert(`contacta ${name}`)
}
console.log(`tarjetas de ${name} fue renderizada`)
        
return(
    <div className='card'>
        <img className='image' src={image} alt={name} />
        <h2 className='name'>{name}</h2>
        <p className=''>{description}</p>
        <button id={id} onClick={()=>handleClick()}>
            {
                isContacted ? 'Contactado' : 'Contactar'
               
            }
        </button>
    </div>

) 

}


export default UserCard
