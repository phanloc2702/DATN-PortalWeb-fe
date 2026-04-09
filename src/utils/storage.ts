export const storage = {
  getToken(): string | null {
    return localStorage.getItem("token");
  },

  setToken(token: string): void {
    localStorage.setItem("token", token);
  },

  removeToken(): void {
    localStorage.removeItem("token");
  },

  getRole(): string | null {
    return localStorage.getItem("role");
  },

  setRole(role: string): void {
    localStorage.setItem("role", role);
  },

  removeRole(): void {
    localStorage.removeItem("role");
  },

  clearAuth(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  },
};