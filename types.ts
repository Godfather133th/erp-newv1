export type Language = 'en' | 'ar';

export interface User {
  id: string;
  name: string;
  role: string;
  ministryId: string;
  avatar: string;
}

export interface Ministry {
  id: string;
  nameEn: string;
  nameAr: string;
  logo: string;
}

// HR Types
export interface Employee {
  id: string;
  fullNameAr: string;
  fullNameEn: string;
  position: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  salary: number;
  joinDate: string;
  leaveBalance: number;
}

export interface TrainingCourse {
  id: string;
  titleEn: string;
  titleAr: string;
  provider: string;
  startDate: string;
  attendees: number;
  status: 'Scheduled' | 'In Progress' | 'Completed';
}

export interface JobApplication {
  id: string;
  candidateName: string;
  position: string;
  stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired';
  date: string;
}

// Finance Types
export interface BudgetItem {
  id: string;
  sectionType: 'I' | 'II'; // I = Salaries, II = Operational
  code: string;
  itemEn: string;
  itemAr: string;
  allocation: number;
  spent: number;
}

export interface CashAdvance {
  id: string;
  type: 'Permanent' | 'Temporary';
  recipient: string;
  amount: number;
  descriptionEn: string;
  descriptionAr: string;
  status: 'Pending' | 'Approved' | 'Liquidated';
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  balance: number;
  currency: string;
  lastReconciled: string;
}

// SCM Types
export interface ProcurementRequest {
  id: string;
  description: string;
  requester: string;
  amount: number;
  status: 'Request' | 'Pricing' | 'Supplier Selection' | 'Receiving' | 'Payment';
  date: string;
}

export interface InventoryItem {
  id: string;
  nameEn: string;
  nameAr: string;
  sku: string;
  warehouse: string;
  quantity: number;
  unit: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface FixedAsset {
  id: string;
  nameEn: string;
  nameAr: string;
  purchaseDate: string;
  value: number;
  depreciationMethod: 'Fixed Monthly' | 'Actual Days';
  location: string;
  bookValue: number;
}

// ESS Types
export interface LeaveRequest {
  id: string;
  type: 'Vacation' | 'Sick' | 'Emergency';
  startDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}
