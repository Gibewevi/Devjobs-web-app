import React, { createContext, useState } from "react";
import { createPortal } from "react-dom";

export const JobAPIContext = createContext();

const JobAPIContextProvider = (props) => {

    const fetchAPI = (StringfileName)=> 
    {
        fetch(StringfileName)
        .then((response) => response.json())
        .then((API) => SetjobToBeSorted([... API]));
    }


// Jobs API à afficher
const [jobToDisplay, setJobToDisplay] = useState([]);
const [jobToBeSorted, SetjobToBeSorted] = useState(fetchAPI('./assets/data.json'));

const getSearchInputValue = ()=> 
{
    let inputTitleJob = document.getElementById('inputTitleJob');
    let inputLocationJob = document.getElementById('inputTitleJob');
    let fullTimeChecked = document.getElementById('fullTimeChecked');
}

const isIncludesToJobAPI = (inputSearchValue) => 
{

}

const sortJobsBySearch = () => 
{
    // J'actualise les données des inputs dans des variables
    let inputTitleJob = document.getElementById('inputTitleJob');
    let inputLocationJob = document.getElementById('inputTitleJob');
    let fullTimeChecked = document.getElementById('fullTimeChecked');
    let find = false;
  
    jobToBeSorted.forEach(element => {
        console.log(element);
    });

}
console.log(jobToBeSorted)

// const verifyDataByInput = (val_data, val_title, array_dataTemp) => 
//     {
//         let data_position = val_data.position.toLocaleLowerCase().split(' ');
//         let input_position = val_title.toLocaleLowerCase().split(' ');
//         let find = false;

//         data_position.forEach(position => {
//             if(!find)
//             {
//                 find = input_position.includes(position);
//             } 
//         });

//         if(find)
//         {
//         array_dataTemp.push(val_data);
//         }
//     }

//     const sortData = (val_title, val_location) => 
//     {
//         // array en local
//         let dataTemp = []; 

//         dataSort.forEach(data => {
//         // la localisation existe
//         if(data.location == val_location)
//         {
//             if(val_title!='')
//             {verifyDataByInput(data, val_title, dataTemp);} 

//             else {dataTemp.push(data);}
//         } 
        
//         else if(val_location==='' && val_title != '' )
//         {verifyDataByInput(data, val_title, dataTemp);}

//         else if(val_location==='' && val_title ==='')
//         {dataTemp = dataSort;}

//         else if(val_location==='' && val_title !='')
//         {verifyDataByInput(data, val_title, dataTemp);}
//         });

//        setData(dataTemp)
//     }



return(
        <JobAPIContext.Provider value = {{jobToDisplay}}>
            {props.children}
        </JobAPIContext.Provider>
    )
}

export default JobAPIContextProvider;