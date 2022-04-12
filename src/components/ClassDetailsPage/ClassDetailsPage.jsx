// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClassDetailsPage(){
    const history = useHistory();

    const handleReturnClick = () => {
        history.goBack();
    }


    return(
        <>
            <button onClick={handleReturnClick}>return</button>
        </>
    )
}
export default ClassDetailsPage;