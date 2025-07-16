import express from "express";
import { getNotes, newNotes, updateNotes,deleteNotes } from "../controller/note.controller.js";

const router=express.Router()

router.get('/',getNotes)

router.post('/',newNotes)

router.put('/:id',updateNotes)

router.delete('/:id',deleteNotes)

export default router