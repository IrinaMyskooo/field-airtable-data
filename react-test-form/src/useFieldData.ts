import {Field} from './redux/types';
import {useFields} from './redux/selectors';

export const useFieldData = () => {
    const fieldData = useFields();
    const objectFieldsData = fieldData.map((field: Field) => {
        return {
            "Title": "title",
            "Description": "description",
            "Notes": "notes",
            "Buget": 40,
        }
        // if(field.type === "number") {
        //     return {
        //         Title: field.id,
        //         Description: field.name,
        //         Notes: field.value,
        //         Budget: field.value
        //     };
        // } else {
        //     return {
        //         Title: field.id,
        //         Description: field.name,
        //         Notes: field.value,
               
        //     }
        // }
        
    })

    return objectFieldsData;
   
};

