import express from "express";
import { getNotes, newNotes, updateNotes,deleteNotes, getNoteById } from "../controller/note.controller.js";

const router=express.Router()

router.get('/',getNotes)
router.get('/:id',getNoteById)

router.post('/',newNotes)

router.put('/:id',updateNotes)

router.delete('/:id',deleteNotes)
//to get notes of a particular user
//router.get('/user/:id')
export default router