import React from 'react'
import { toast } from 'react-toastify';
import api from '../services/apiConfig'

export default function DeleteButton(props) {

  const handleDelete = async () => {
    const res = await api.delete(`/${props.studentId}`)
    toast("Application Deleted")
    props.setToggle(prevToggle => !prevToggle)
  }
  return <button className='delete' onClick={handleDelete}>Delete Application</button>
}
