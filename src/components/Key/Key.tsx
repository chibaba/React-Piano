import  clsx from "clsx"
import { NoteType } from "../../domain/note";

interface KeyProps {
  type: NoteType
  label: string
  disabled?: boolean
}
