export interface AuthCredential {
  email: string;
  password: string;
  duration?: number;
}
export interface AuthProfile {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  is_sys_admin: boolean;
  last_login_date: Date;
  host: string;
  role_id: number;
  role: string;
  session_token: string;
  session_id: string;
}