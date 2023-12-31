import { FormInput } from '@dialogs/skills/skill-dialog.types'

export interface SkillsProps {
  opened: boolean
  close: () => void
  confirm: () => void
  id?: string
  onSubmit: (inputs: FormInput) => Promise<void>
  title: string
}
