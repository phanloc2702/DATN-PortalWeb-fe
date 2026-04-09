import type { Role } from "../utils/roles";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginData {
  token: string;
  role: Role;
}

export interface LoginResponse {
  message?: string;
  data?: LoginData;
  token?: string;
  role?: Role;
}