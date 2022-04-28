import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function TrainersClasses() {
    // --------- Tools ----------
    const history = useHistory();
    const dispatch = useDispatch();

    // The Trainer
    const user = useSelector(store => store.user);

    // --------- Functions ----------
    useEffect(() => {
        // This dispatch to GET all the classes
        dispatch({
            type: 'FETCH_CLASSES'
        });
    }, [])



    return (
        <>

        </>
    );
}

export default TrainersClasses;