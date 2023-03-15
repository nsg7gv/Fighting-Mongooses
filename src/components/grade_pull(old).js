import React, { useState, useEffect } from "react";
import { db } from '../firebase'

function GetGrades({Email, classNum}) {
    const [data, setData] = useState([]);

    useEffect(() => {
      db.collection("profile")
      .where('Email', '==', Email)
        .get()
        .then((querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push(doc.data());
          });
          setData(documents);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }, []);

    switch(classNum) {
        case 'CS101':
            return (
                <div>
                    {data.map((doc) => (
                        <p>{classNum}: {doc.CS101}</p>
                    ))}
                </div>
            );
        case 'CS191':
            return (
                <div>
                    {data.map((doc) => (
                        <p>{classNum}: {doc.CS191}</p>
                    ))}
                </div>
            );
    }
}
  
export default GetGrades;