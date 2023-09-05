export enum RoutesPath {
  initial = '/',
  other = '*',
  login = '/login',
  signup = '/signup',
  main = '/main',
  projects = '/projects',
  cvs = '/cvs',
  departments = '/departments',
  positions = '/positions',
  skills = '/skills',
  languages = '/languages',
  employee_profile = '/employees/:id/profile',
  employee_skills = '/employees/:id/skills',
  employee_languages = '/employees/:id/languages',
  employee_cvs = '/employees/:id/cvs'
}