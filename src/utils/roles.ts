export const ROLES = {
  ADMIN: "ADMIN",
  CANDIDATE: "CANDIDATE",
  RECRUITER: "RECRUITER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];