import React from 'react'

export default function Alert(props) {
     const Captalize =(word)=>{
         const textword=word.toLowerCase()
         return textword.charAt(0).toUpperCase() + textword.slice(1)
     }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Captalize(props.alert.msg)}</strong> 
       </div>
        
   
  )
}
