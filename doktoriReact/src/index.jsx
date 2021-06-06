import React from 'react';
import { render } from 'react-dom';


import Doctor from './Doctor';
import {facilities} from './doctors';
import './style.css';

const App = () => (
  
  <>
<div className="doctorfinder">
  <h2>Find your doctor</h2>
</div>

<p>Language:</p>
    <hr />

   <input type="checkbox" name="language1" id="language1" value="russian" />
   <label for="language1"> Russian</label><br></br>
   <input type="checkbox" name="language2" id="language2" value="english" />
   <label for="language2"> English</label><br></br>
   <input type="checkbox" name="language3" id="language3" value="arabic" />
   <label for="language1"> Arabic</label><br></br>
   <hr />
   <p>Specialisation:</p>
   <input type="checkbox" name="specialisation1" id="specialisation1" value="pediatric" />
   <label for="language1"> Pediatric</label><br></br>
   <input type="checkbox" name="specialisation2" id="specialisation2" value="dentist" />
   <label for="language1"> Dentist</label><br></br>
   <input type="checkbox" name="specialisation3" id="specialisation3" value="neurologist" />
   <label for="language1"> Neurologist</label><br></br>

<div className="doctorsList">
{
  facilities.map( doctor =><Doctor 
    key={doctor.id}
    id={doctor.id} 
    name={doctor.name} 
    cover={doctor.cover}
    specialisation={doctor.specialisation} 
    languagues={doctor.languagues}
    link={doctor.link} 
    /> )
}
</div>

  </>
);

render(<App />, document.querySelector('#app'));
