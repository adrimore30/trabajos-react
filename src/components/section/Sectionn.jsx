
import './section.css';
import { useState, useEffect} from 'react'
import {UserCard} from './UserCard/UserCard'
import  estudiantee from '../../assets/estudiante.png'
import graduadaa from '../../assets/graduada.png'
import niñaa from '../../assets/niña.png'



const users =[
  {
    id:1,
    name:'ana',
    description:'niña aburrida',
    image:estudiantee
  },
  {
    id:2,
    name:'sophia',
    description:'estoy graduada',
    image:graduadaa

  },
  {
    id:3,
    name:'julieta',
    description:'yo bien',
    image:niñaa

  }
]
export const Section = () => {

const [count, setCount]= useState(0)
 //console.log('antes dek useEffect');
 useEffect(()=>{
   //console.log('useEffect ejecutandose');

   fetch('https://dummyjson.com/users')
   .then(res=>res.json())
   .then(data=>console.log(data.users))
   //console.log(resultado)
 },[count])

 const handleClick=()=>{
  setCount(count + 1)
 }
 //console.log('despues del useEffect');

    return (

<div>
    <h2>{count}</h2>
    <button className='boton' onClick={handleClick}>Contador</button>
      <section>
        {
          users.map((user)=>{
            return(
              <UserCard key ={user.id} user={user}/>
            )
        })
      }
      </section>
      </div>
    )
    }

  


