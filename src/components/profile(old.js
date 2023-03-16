import React, { useState, useEffect } from "react"
import GetUserProfile from './profile_pull'
import GetGrades from './grade_pull'
// import SetGrades from './grade_push'
import { db } from '../firebase'
import 'firebase/firestore';


export const Database = () => {
    const [cs101, setCS101] = useState('');
    const [cs191, setCS191] = useState('');      

    const getOptions = () => {
      return [
        { value: '', label: 'Select a grade' },
        { value: 'A', label: 'Grade A' },
        { value: 'A-', label: 'Grade A-' },
        { value: 'B+', label: 'Grade B+' },
        { value: 'B', label: 'Grade B' },
        { value: 'B-', label: 'Grade B-' },
        { value: 'C+', label: 'Grade C+' },
        { value: 'C', label: 'Grade C' },
        { value: 'C-', label: 'Grade C-' },
        { value: 'F', label: 'Grade F' },
        { value: 'W', label: 'Withdrawn' },
        { value: 'Drop', label: 'Dropped' },
      ];
    };

    const handleCS101Change = (event) => {
        const newValue = event.target.value;
    };

    const handleCS191Change = (event) => {
        setCS191(event.target.value);
        updateDocument();
    };
  
  const options = getOptions();
  const userEmail = 'jill@umkc.edu';

  return (
    <div>
        <div>
            <h1>User Info: </h1>
            <GetUserProfile Email={userEmail}/>            
        </div>
        <br></br>

        <h1>Classes:</h1>
        <form>
        <label>
            <div><GetGrades Email={userEmail} classNum='CS101'/>
            <select name='CS101' value={cs101} onChange={handleCS101Change}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
            ))}
            </select>
            <button onClick={updateDocument}>Update</button>
            </div>
        </label>
        
        <br />
        <label>
          <div><GetGrades Email={userEmail} classNum='CS191'/>
            <select value={cs191} onChange={handleCS191Change}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </label>
        <br />
        </form>
    </div>
  );
};

export default Database;
