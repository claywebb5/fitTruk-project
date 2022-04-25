import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ClassListItem from '../ClassListItem/ClassListItem';
import TrainersClasses from './TrainersClasses';

function MyClassesPage() {
  // --------- Tools ----------
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)


  // --------- Functions ----------
  useEffect(() => {
    // If the user is a trainer, it'll retrieve all classes and filter by their trainer ID
    if(user.access_level === 2){
      dispatch({
        type: 'FETCH_CLASSES'
      });
    } else {
      // If the user is not a trainer, this dispatch sends a request to the database to retrieve all the classes a user is signed up for.
      dispatch({
        type: 'FETCH_CUSTOMER_CLASS'
      });
    }
  }, [])

  const handleAllClassClick = () => {
    history.push("/all-classes");
  }

  // ------- Search Bar -------
  const [searchTerm, setSearchTerm] = useState('') // SYNTAX-UPDATE  this search bar might need to be replaced with the same searchbar that's currently in the AllClassesPage


  const myClasses = useSelector(store => store.myClasses) // SYNTAX-UPDATE: May not be needed, unsure if the 'tested' status mentioned in AllClassesPage


  return (
    <>
      <h2 align="center">My Classes</h2>
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder='Search'
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleAllClassClick}>All Available classes(this will be an icon eventually)</button>
        <ul>
          {myClasses.filter((val) => {
            if (searchTerm == "") {
              return val
            } else if (val.classname.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((classEvent, i) => ( // classEvent refers to a singular class event and it's basic details.
            <ClassListItem classEvent={classEvent} key={i} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyClassesPage;
