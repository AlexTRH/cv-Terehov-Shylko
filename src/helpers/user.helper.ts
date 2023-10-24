import { IUser } from '@interfaces/user.interface'

export const setDefaultUserValues = (user: IUser) => ({
  first_name: user.profile.first_name || '',
  last_name: user.profile.last_name || '',
  department: user.department?.id || '',
  position: user.position?.id || '',
})
