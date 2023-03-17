import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import { Typography, Container, Grid, Card, CardActions, CardContent, TextField, CssBaseline, Divider, Button, Popover, PaperProps, Select } from "@material-ui/core";

function MyComponent() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = getOptions();
  
    const getOptions = () => {
        return [
          { value: '', label: 'Select a grade' },
          { value: 'A', label: 'Grade A' },
          { value: 'A-', label: 'Grade A-' },
          { value: 'B+', label: 'Grade B+' },
        ];
      };
  
    const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
  
    return (
        <div>
            <h1>Stuff</h1>
            <Select value={selectedOption} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
            ))}</Select>
        </div>
    );
  }
  
  export default MyComponent;