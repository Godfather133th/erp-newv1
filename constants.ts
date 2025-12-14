import { Ministry, Employee, BudgetItem, InventoryItem, FixedAsset, ProcurementRequest, TrainingCourse, JobApplication, CashAdvance, BankAccount, LeaveRequest } from './types';

export const MINISTRIES: Ministry[] = [
  { id: 'mof', nameEn: 'Ministry of Finance', nameAr: 'وزارة المالية', logo: 'https://picsum.photos/id/1/200/200' },
  { id: 'moi', nameEn: 'Ministry of Interior', nameAr: 'وزارة الداخلية', logo: 'https://picsum.photos/id/2/200/200' },
  { id: 'moe', nameEn: 'Ministry of Education', nameAr: 'وزارة التربية', logo: 'https://picsum.photos/id/3/200/200' },
  { id: 'moh', nameEn: 'Ministry of Health', nameAr: 'وزارة الصحة', logo: 'https://picsum.photos/id/4/200/200' },
];

export const EMPLOYEES: Employee[] = [
  { id: 'E001', fullNameEn: 'Ahmed Al-Baghdadi', fullNameAr: 'أحمد البغدادي', position: 'Senior Accountant', department: 'Finance', status: 'Active', salary: 1500000, joinDate: '2019-03-12', leaveBalance: 21 },
  { id: 'E002', fullNameEn: 'Fatima Hassan', fullNameAr: 'فاطمة حسن', position: 'HR Specialist', department: 'Human Resources', status: 'Active', salary: 1200000, joinDate: '2020-06-01', leaveBalance: 14 },
  { id: 'E003', fullNameEn: 'Ali Hussein', fullNameAr: 'علي حسين', position: 'Warehouse Manager', department: 'SCM', status: 'On Leave', salary: 1350000, joinDate: '2018-11-20', leaveBalance: 5 },
  { id: 'E004', fullNameEn: 'Zainab Mohammed', fullNameAr: 'زينب محمد', position: 'IT Support', department: 'IT', status: 'Active', salary: 1100000, joinDate: '2021-01-15', leaveBalance: 18 },
  { id: 'E005', fullNameEn: 'Omar Farouk', fullNameAr: 'عمر فاروق', position: 'Procurement Officer', department: 'SCM', status: 'Active', salary: 1250000, joinDate: '2022-04-10', leaveBalance: 25 },
];

export const BUDGET_ITEMS: BudgetItem[] = [
  { id: 'B001', sectionType: 'I', code: '101', itemEn: 'Basic Salaries', itemAr: 'الرواتب الأساسية', allocation: 500000000, spent: 420000000 },
  { id: 'B002', sectionType: 'I', code: '102', itemEn: 'Allowances & Benefits', itemAr: 'المخصصات والمزايا', allocation: 150000000, spent: 130000000 },
  { id: 'B003', sectionType: 'II', code: '201', itemEn: 'Office Supplies', itemAr: 'القرطاسية والتجهيزات', allocation: 25000000, spent: 12000000 },
  { id: 'B004', sectionType: 'II', code: '205', itemEn: 'Maintenance', itemAr: 'الصيانة', allocation: 50000000, spent: 45000000 },
  { id: 'B005', sectionType: 'II', code: '210', itemEn: 'Capital Projects', itemAr: 'المشاريع الرأسمالية', allocation: 1200000000, spent: 300000000 },
];

export const INVENTORY: InventoryItem[] = [
  { id: 'I001', nameEn: 'Desktop Computer Dell', nameAr: 'حاسوب مكتبي ديل', sku: 'IT-COMP-001', warehouse: 'Main Baghdad WH', quantity: 45, unit: 'Pcs', status: 'In Stock' },
  { id: 'I002', nameEn: 'Office Chair Ergonomic', nameAr: 'كرسي مكتب طبي', sku: 'FUR-CHR-022', warehouse: 'Basra Branch', quantity: 12, unit: 'Pcs', status: 'Low Stock' },
  { id: 'I003', nameEn: 'A4 Paper Ream', nameAr: 'ورق A4', sku: 'SUP-PAP-100', warehouse: 'Main Baghdad WH', quantity: 500, unit: 'Box', status: 'In Stock' },
  { id: 'I004', nameEn: 'Printer Ink HP 85A', nameAr: 'حبر طابعة HP 85A', sku: 'IT-INK-085', warehouse: 'Mosul Branch', quantity: 0, unit: 'Cartridge', status: 'Out of Stock' },
];

export const ASSETS: FixedAsset[] = [
  { id: 'A001', nameEn: 'Toyota Land Cruiser', nameAr: 'تويوتا لاند كروزر', purchaseDate: '2022-01-10', value: 85000000, bookValue: 65000000, depreciationMethod: 'Actual Days', location: 'HQ Garage' },
  { id: 'A002', nameEn: 'Power Generator 500kVA', nameAr: 'مولدة كهرباء 500 ك.ف', purchaseDate: '2021-05-20', value: 35000000, bookValue: 21000000, depreciationMethod: 'Fixed Monthly', location: 'Warehouse B' },
];

export const PROCUREMENT_REQUESTS: ProcurementRequest[] = [
  { id: 'PR001', description: '50x Laptops for IT Dept', requester: 'IT Department', amount: 45000000, status: 'Payment', date: '2023-10-01' },
  { id: 'PR002', description: 'Office Furniture Renovation', requester: 'Admin', amount: 12000000, status: 'Receiving', date: '2023-10-15' },
  { id: 'PR003', description: 'Annual Stationery Supply', requester: 'Warehouse', amount: 5000000, status: 'Pricing', date: '2023-10-20' },
  { id: 'PR004', description: 'Cleaning Services Contract', requester: 'Services', amount: 8000000, status: 'Request', date: '2023-10-25' },
];

export const TRAINING_COURSES: TrainingCourse[] = [
  { id: 'TR01', titleEn: 'Advanced Accounting Standards', titleAr: 'المعايير المحاسبية المتقدمة', provider: 'Baghdad University', startDate: '2023-11-10', attendees: 15, status: 'Scheduled' },
  { id: 'TR02', titleEn: 'IT Security Fundamentals', titleAr: 'أساسيات أمن المعلومات', provider: 'Internal IT', startDate: '2023-10-20', attendees: 25, status: 'In Progress' },
];

export const JOB_APPLICATIONS: JobApplication[] = [
  { id: 'JA01', candidateName: 'Hassan Ali', position: 'Senior Accountant', stage: 'Interview', date: '2023-10-22' },
  { id: 'JA02', candidateName: 'Noor Jassim', position: 'HR Assistant', stage: 'Applied', date: '2023-10-24' },
  { id: 'JA03', candidateName: 'Mustafa Kareem', position: 'Driver', stage: 'Hired', date: '2023-10-01' },
];

export const CASH_ADVANCES: CashAdvance[] = [
  { id: 'CA01', type: 'Permanent', recipient: 'Finance Dept Head', amount: 5000000, descriptionEn: 'Petty Cash Fund', descriptionAr: 'سلفة نثرية دائمة', status: 'Approved' },
  { id: 'CA02', type: 'Temporary', recipient: 'Ahmed Al-Baghdadi', amount: 250000, descriptionEn: 'Transport for Site Visit', descriptionAr: 'نقل زيارة موقعية', status: 'Liquidated' },
  { id: 'CA03', type: 'Temporary', recipient: 'Ali Hussein', amount: 1500000, descriptionEn: 'Emergency Repairs', descriptionAr: 'صيانة طارئة', status: 'Pending' },
];

export const BANKS: BankAccount[] = [
  { id: 'BNK01', bankName: 'Rafidain Bank', accountNumber: 'IQ-RAF-001234', balance: 4500000000, currency: 'IQD', lastReconciled: '2023-09-30' },
  { id: 'BNK02', bankName: 'Trade Bank of Iraq (TBI)', accountNumber: 'IQ-TBI-998877', balance: 1200000, currency: 'USD', lastReconciled: '2023-10-01' },
];

export const MY_LEAVES: LeaveRequest[] = [
  { id: 'L01', type: 'Vacation', startDate: '2023-11-15', days: 5, status: 'Pending' },
  { id: 'L02', type: 'Sick', startDate: '2023-08-10', days: 2, status: 'Approved' },
];

export const TRANSLATIONS = {
  en: {
    welcome: 'Welcome to',
    selectMinistry: 'Select Ministry',
    login: 'Login',
    username: 'Username',
    password: 'Password',
    dashboard: 'Dashboard',
    hr: 'Human Resources',
    finance: 'Financial Mgmt',
    scm: 'Warehouse & SCM',
    ess: 'Self Service',
    settings: 'Settings',
    logout: 'Logout',
    employees: 'Employees',
    payroll: 'Payroll',
    attendance: 'Attendance',
    training: 'Training',
    recruitment: 'Recruitment',
    budget: 'Budget',
    banking: 'Banking',
    cashAdvances: 'Cash Advances',
    generalLedger: 'General Ledger',
    inventory: 'Inventory',
    procurement: 'Procurement',
    fixedAssets: 'Fixed Assets',
    totalEmployees: 'Total Employees',
    budgetUtilization: 'Budget Utilization',
    lowStockItems: 'Low Stock Items',
    search: 'Search...',
    actions: 'Actions',
    status: 'Status',
    ministryOf: 'Ministry of',
    iraqDataCenter: 'Iraq National Data Center',
    demoHint: 'Use demo/demo to login',
    copyright: '© 2024 Iraqi National Data Center. All rights reserved.',
    requestLeave: 'Request Leave',
    requestLoan: 'Request Loan',
    payslip: 'Payslip',
    sectionI: 'Section I: Salaries',
    sectionII: 'Section II: Operational',
  },
  ar: {
    welcome: 'مرحبا بكم في',
    selectMinistry: 'اختر الوزارة',
    login: 'تسجيل الدخول',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    dashboard: 'لوحة المعلومات',
    hr: 'الموارد البشرية',
    finance: 'الإدارة المالية',
    scm: 'المخازن والمشتريات',
    ess: 'الخدمة الذاتية',
    settings: 'الإعدادات',
    logout: 'خروج',
    employees: 'الموظفين',
    payroll: 'الرواتب',
    attendance: 'الحضور والانصراف',
    training: 'التدريب',
    recruitment: 'التعيينات',
    budget: 'الموازنة',
    banking: 'المصارف',
    cashAdvances: 'السلف',
    generalLedger: 'دفتـر الأستاذ',
    inventory: 'المخزون',
    procurement: 'المشتريات',
    fixedAssets: 'الأصول الثابتة',
    totalEmployees: 'إجمالي الموظفين',
    budgetUtilization: 'استخدام الموازنة',
    lowStockItems: 'مواد منخفضة الرصيد',
    search: 'بحث...',
    actions: 'إجراءات',
    status: 'الحالة',
    ministryOf: 'وزارة',
    iraqDataCenter: 'مركز البيانات الوطني العراقي',
    demoHint: 'استخدم demo/demo للدخول',
    copyright: '© 2024 مركز البيانات الوطني العراقي. جميع الحقوق محفوظة.',
    requestLeave: 'طلب إجازة',
    requestLoan: 'طلب سلفة',
    payslip: 'قسيمة الراتب',
    sectionI: 'الفصل الأول: الرواتب',
    sectionII: 'الفصل الثاني: التشغيلية',
  }
};
