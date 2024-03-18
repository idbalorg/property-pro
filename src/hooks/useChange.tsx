import {ChangeEvent, useState} from 'react'

export interface FormValues {
    [keys : string] : string;
  }
  
  export interface useFormProps {
    initialState: FormValues;

  }



 const useFormChange = ({initialState} : useFormProps  ) => {
    const [formValues, setFormValues] = useState<FormValues>(initialState)

    const handleChange  = (e: ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target
  
      setFormValues({...formValues, [name]:value  })
  
}
return {formValues,setFormValues, handleChange}


 }

export {useFormChange}