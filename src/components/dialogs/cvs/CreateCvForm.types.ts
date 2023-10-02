import { IUser } from '../../../interfaces/user.interface'

export interface CreateCvFormInput {
  [key: string]: string | boolean;
  name: string;
  description: string;
  template: boolean;
}

export interface CreateCvFormProps {
  opened: boolean
  close: () => void
  confirm: () => void
}

export interface UserAllResult {
  user: IUser
}