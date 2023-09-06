export interface Department {
  id: string;
  created_at: string;
  name: string;
}

export interface Language {
  id: string;
  iso2: string;
  created_at?: string;
  name: string;
  native_name?: string;
}

export interface LanguageProficiency {
  language_name: string;
  proficiency: string;
}

export interface Position {
  id: string;
  created_at: string;
  name: string;
}

export interface SkillMastery {
  skill_name: string;
  mastery: string;
}

export interface Skill {
  id: string;
  created_at: string;
  name: string;
}

export interface Profile {
  id: string;
  created_at: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar?: string;
  skills: SkillMastery[];
  languages: LanguageProficiency[];
}

export interface Project {
  id: string;
  created_at: string;
  name: string;
  internal_name?: string;
  description: string;
  domain: string;
  start_date: string;
  end_date?: string;
  team_size: number;
  tech_stack?: Skill[];
}

export interface Cv {
  id: string;
  created_at: string;
  name: string;
  description: string;
  user?: Omit<User, 'cvs'>;
  projects?: Project[];
  skills: SkillMastery[];
  languages: LanguageProficiency[];
  is_template: boolean;
}

export interface User {
  id: string;
  created_at: string;
  email: string;
  is_verified?: boolean;
  profile: Profile;
  cvs?: Cv[];
  department?: Department;
  department_name?: string;
  position?: Position;
  position_name?: string;
  role: string;
}

export interface UserResult {
  user: User;
}