import s from "./ContactForm.module.css"

// import React from 'react'
import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addContacts } from "../../redux/Contacts/slice"
import { selectUser } from "../../redux/userSlice"
// import { addContacts } from "../../redux/Contacts/action"

export const ContactForm = () => {

  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  
  const submit = ({ name, number }) => {
		const newContact = { name, number, id: nanoid(), favorite: false, author:user }
		dispatch(addContacts(newContact))
		reset()
  }

  return (
    <form className={s.formContainer} onSubmit={handleSubmit(submit)}>
      <h1 className={s.label}>Contacts book</h1>
      <label className={s.label}>   Name
        <input {...register('name')} type="text" name="name" required className={s.inputField} /> </label>
      <label className={s.label}>  Number
        <input {...register('number')} type="tel" name="number"  required className={s.inputField} />
      </label>

      <button className={s.submitButton}>Add contact</button>
    </form>
  )
}
