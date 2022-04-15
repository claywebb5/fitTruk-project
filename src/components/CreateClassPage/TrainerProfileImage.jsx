import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateClassPage.css';


function TrainerProfileImage(){

  // useEffect(() =>{

  // },[])

  const selectedTrainer = useSelector(store=>store.classDetails.selectedTrainerReducer)
  
    console.log(selectedTrainer);
    return(
        <>
                    {selectedTrainer.profile_image ? 
                    <img className='trainer-image' src={selectedTrainer.profile_image} alt="Profile image of the selected trainer" />
                    :
                    <div className='trainer-image' >This is a div</div>
                    }
        </>
    )
}
export default TrainerProfileImage;