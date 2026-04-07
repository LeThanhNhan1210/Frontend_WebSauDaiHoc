export type UserRole = 'candidate' | 'approver' | 'validator' | 'reviewer' | 'viewer' | 'admin' | 'auditor';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  cccd: string;
}

export interface Application {
  id: string;
  candidateId: string;
  status: 'draft' | 'submitted' | 'verified' | 'approved' | 'results';
  major: string;
  submissionDate: string;
  score?: number;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  status: 'success' | 'failure';
}
