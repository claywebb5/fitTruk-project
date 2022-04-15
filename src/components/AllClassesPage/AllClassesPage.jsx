import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClassListItem from '../ClassListItem/ClassListItem';
import Nav from '../Nav/Nav';


function AllClassesPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLASSES'
    });
  }, [])



  // ------- Variables ---------
  const user = useSelector(store => store.user)
  // const classes = useSelector(store => store.allClasses) // SYNTAX-UPDATE : test this later

  // ------- Buttons -------
  const handleMyClassClick = () => {
    history.push("/my-classes");
  }
  const runSearch = () => {
    console.log('this is the search term', search);
    dispatch({
      type: 'SEARCH_CLASSES',
      payload: search
    })
    setSearch('')
  }
  // ------- Search Bar -------
  const [search, setSearch] = useState('')


  const classes = [ /// DELETE this when we have working sagas and reducers, this is temporary test data
    {
      id: 1,
      classname: "HIIT",
      description: "high intensity interval training",
      trainer_user_id: 2,
      date: "2022-04-12",
      start_time: "12:00:00",
      end_time: "13:00:00",
      location: "at the park?",
      class_size: 20
    },
    {
      id: 3,
      classname: "Kick boxing",
      description: "This is a class where we are going to kick and box",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "09:00:00",
      end_time: "10:00:00",
      location: "Near the truck",
      class_size: 18
    },
    {
      id: 2,
      classname: "Yoga",
      description: "Its yoga",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "14:00:00",
      end_time: "15:00:00",
      location: "Some place noisy",
      class_size: 10
    }
  ] /// DELETE this when we have working sagas and reducers, this is temporary test data


  return (
    <div>
      <Nav/>
      <input 
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)} />
      <button onClick={runSearch}>search classes</button>
      <h3>If logged in, myclass button appears below, if not then no button</h3>
      {user.id && <button onClick={handleMyClassClick}>Myclasses (this will be an icon eventually)</button>}
      <ul>
      {classes.map((classEvent, i) =>(
        <ClassListItem classEvent={classEvent} key={i} />
      ))}
      </ul>
    </div>
  );
}

export default AllClassesPage;
