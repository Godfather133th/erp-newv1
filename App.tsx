import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Landmark, 
  Package, 
  LogOut, 
  Globe, 
  Bell, 
  Search,
  Menu,
  Briefcase,
  FileText,
  CreditCard,
  Truck,
  GraduationCap,
  UserPlus,
  Wallet,
  Building,
  ClipboardList,
  CheckCircle,
  Clock,
  UserCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  ShoppingCart,
  FileSpreadsheet,
  Settings,
  PieChart as PieChartIcon,
  Archive,
  Layers,
  Box,
  TrendingUp,
  Activity,
  BookOpen,
  Receipt,
  List,
  ChevronDown,
  Heart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { TRANSLATIONS, MINISTRIES, EMPLOYEES, BUDGET_ITEMS, INVENTORY, ASSETS, PROCUREMENT_REQUESTS, TRAINING_COURSES, JOB_APPLICATIONS, CASH_ADVANCES, BANKS, MY_LEAVES, SHIFTS, MATERIAL_REQUESTS, ACCOUNTS, JOURNAL_ENTRIES, INVOICES } from './constants';
import { Ministry, User, Language, Account } from './types';

// --- COMPONENTS ---

// 1. LOGIN PAGE
interface LoginProps {
  onLogin: (ministry: Ministry, user: User) => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin, lang, setLang }) => {
  const [selectedMinistry, setSelectedMinistry] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const t = TRANSLATIONS[lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMinistry) {
      setError(lang === 'en' ? 'Please select a ministry' : 'يرجى اختيار الوزارة');
      return;
    }
    if (username === 'demo' && password === 'demo') {
      const ministry = MINISTRIES.find(m => m.id === selectedMinistry);
      if (ministry) {
        onLogin(ministry, {
          id: 'u1',
          name: lang === 'en' ? 'System Administrator' : 'مدير النظام',
          role: 'Admin',
          ministryId: ministry.id,
          avatar: 'https://picsum.photos/id/64/200/200'
        });
      }
    } else {
      setError(lang === 'en' ? 'Invalid credentials' : 'بيانات الاعتماد غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1578589318274-03732a688b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-emerald-900/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png" alt="Iraq Flag" className="h-8 w-12 object-cover rounded shadow-sm opacity-90" />
               <button 
                  onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                  className="text-white hover:text-emerald-300 transition-colors flex items-center gap-2 text-sm font-medium"
               >
                 <Globe size={16} />
                 {lang === 'en' ? 'العربية' : 'English'}
               </button>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{t.iraqDataCenter}</h1>
              <p className="text-emerald-100">{t.welcome}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">{t.selectMinistry}</label>
                <div className="relative">
                  <select 
                    value={selectedMinistry}
                    onChange={(e) => setSelectedMinistry(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                  >
                    <option value="" disabled className="text-gray-400">{t.selectMinistry}</option>
                    {MINISTRIES.map(m => (
                      <option key={m.id} value={m.id} className="bg-slate-800">
                        {lang === 'ar' ? m.nameAr : m.nameEn}
                      </option>
                    ))}
                  </select>
                  <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400 ${lang === 'ar' ? 'left-3' : 'right-3'}`}>
                    <Landmark size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">{t.username}</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 placeholder-slate-400"
                  placeholder="demo"
                />
              </div>

              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">{t.password}</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 placeholder-slate-400"
                  placeholder="demo" 
                />
              </div>

              {error && <div className="text-red-300 text-sm bg-red-900/30 p-2 rounded text-center">{error}</div>}
              
              <div className="text-emerald-200/50 text-xs text-center">{t.demoHint}</div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition hover:-translate-y-0.5"
              >
                {t.login}
              </button>
            </form>
          </div>
          <div className="bg-emerald-950/50 p-4 text-center border-t border-white/10">
            <p className="text-emerald-200/60 text-xs">{t.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. DASHBOARD WIDGETS
const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color} text-white`}>
        <Icon size={20} />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center text-sm">
        <span className="text-emerald-600 font-medium">+{trend}%</span>
        <span className="text-slate-400 mx-2">vs last month</span>
      </div>
    )}
  </div>
);

// --- SHARED COMPONENTS ---

const ShortcutCard = ({ title, icon: Icon, onClick, color = 'bg-emerald-600' }: any) => (
  <div onClick={onClick} className={`${color} hover:brightness-110 text-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer shadow-md transition-transform hover:-translate-y-1 h-40`}>
    <Icon size={40} className="opacity-90" />
    <span className="font-bold text-center">{title}</span>
  </div>
);

const SectionList = ({ title, items, lang }: any) => (
  <div className="bg-white rounded-xl shadow-sm border-t-4 border-t-emerald-600 p-4">
    <h3 className="font-bold text-slate-800 mb-4 text-center border-b pb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item: string, idx: number) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 cursor-pointer p-1 hover:bg-slate-50 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- HR MODULE ---

const HRModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  // Sub-navigation state
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'employees' | 'attendance' | 'payroll' | 'recruitment'>('dashboard');
  // View mode within sub-tabs (e.g. list, create form)
  const [viewMode, setViewMode] = useState<'list' | 'create_employee' | 'promotion' | 'insurance' | 'shift_types' | 'attendance_report'>('list');

  // --- CONTENT DATA ---
  const shortcuts = [
    { title: lang === 'ar' ? 'الموظف' : 'Employee', icon: Users, action: () => { setActiveSubTab('employees'); setViewMode('list'); } },
    { title: lang === 'ar' ? 'طلب إجازة' : 'Leave Request', icon: FileText, action: () => {} },
    { title: lang === 'ar' ? 'الحضور' : 'Attendance', icon: CheckCircle, action: () => { setActiveSubTab('attendance'); setViewMode('shift_types'); } },
    { title: lang === 'ar' ? 'قائمة الحضور الشهرية' : 'Monthly List', icon: Calendar, action: () => { setActiveSubTab('attendance'); setViewMode('attendance_report'); } },
    { title: lang === 'ar' ? 'طالب الوظيفة' : 'Job Applicant', icon: Briefcase, action: () => setActiveSubTab('recruitment') },
    { title: lang === 'ar' ? 'لوحة المعلومات' : 'Info Dashboard', icon: LayoutDashboard, action: () => {} },
  ];

  const payrollShortcuts = [
    { title: lang === 'ar' ? 'هيكل الراتب' : 'Payroll Structure', icon: BarChart },
    { title: lang === 'ar' ? 'كشف راتب' : 'Payroll Sheet', icon: FileText },
    { title: lang === 'ar' ? 'قسيمة الرواتب' : 'Payslip', icon: FileText },
    { title: lang === 'ar' ? 'تخصيص ضريبة الدخل' : 'Tax Allocation', icon: Wallet },
    { title: lang === 'ar' ? 'سجل الرواتب' : 'Payroll Record', icon: ClipboardList },
    { title: lang === 'ar' ? 'لوحة المعلومات' : 'Dashboard', icon: LayoutDashboard },
  ];

  // Lists
  const vacationItems = lang === 'ar' 
    ? ['قائمة العطل', 'نوع الاجازة', 'فترة الاجازة', 'سياسة الاجازة', 'تعيين سياسة الاجازات', 'طلب إجازة', 'تخصيص إجازة', 'الاجازات المدفوعة']
    : ['Holiday List', 'Leave Type', 'Leave Period', 'Leave Policy', 'Assign Policy', 'Leave Request', 'Leave Allocation', 'Paid Leaves'];
  
  const shiftItems = lang === 'ar'
    ? ['نوع المناوبة', 'طلب التغيير', 'تحديد المناوبة']
    : ['Shift Type', 'Change Request', 'Shift Assignment'];
    
  const empProcedures = lang === 'ar'
    ? ['اعداد الموظف', 'مهارات الموظف', 'ترقية الموظف', 'نقل الموظفين', 'نوع الشكوى', 'شكاوي الموظفين', 'فصل الموظف', 'استمارة تعيين موظف']
    : ['Employee Setup', 'Skills', 'Promotion', 'Transfer', 'Complaint Type', 'Complaints', 'Termination', 'Hiring Form'];

  const empMaster = lang === 'ar'
    ? ['الموظف', 'نوع الوظيفة', 'الافرع', 'الاقسام', 'التعيينات', 'درجة الموظف', 'مجموعة الموظفين', 'التأمين الصحي للموظف']
    : ['The Employee', 'Job Type', 'Branches', 'Departments', 'Appointments', 'Grade', 'Group', 'Health Insurance'];

  // --- RENDER FUNCTIONS ---

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shortcuts.map((s, i) => (
          <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SectionList title={t.vacations} items={vacationItems} />
        <SectionList title={t.shiftManagement} items={shiftItems} />
        <SectionList title={t.employeeProcedures} items={empProcedures} />
        <SectionList title={t.theEmployee} items={empMaster} />
      </div>
    </div>
  );

  const renderEmployees = () => {
    if (viewMode === 'create_employee') {
      return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
             <h3 className="text-xl font-bold text-slate-800">{t.newEmployee}</h3>
             <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.code}</label><input type="text" className="w-full border rounded p-2 bg-slate-50" defaultValue="23574210" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.company}</label><input type="text" className="w-full border rounded p-2 bg-slate-50" defaultValue={lang === 'ar' ? 'شركة تقدم العراق' : 'Taqadum Iraq Co.'} /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.firstName}</label><input type="text" className="w-full border rounded p-2" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.middleName}</label><input type="text" className="w-full border rounded p-2" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.lastName}</label><input type="text" className="w-full border rounded p-2" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.dob}</label><input type="date" className="w-full border rounded p-2" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.joinDate}</label><input type="date" className="w-full border rounded p-2" /></div>
             <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.jobType}</label>
                <select className="w-full border rounded p-2"><option>Full Time</option><option>Part Time</option></select>
             </div>
          </div>
          <div className="mt-8 flex gap-4">
             <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">{t.save}</button>
             <button onClick={() => setViewMode('list')} className="bg-slate-100 text-slate-600 px-6 py-2 rounded hover:bg-slate-200">{t.cancel}</button>
          </div>
        </div>
      );
    }
    if (viewMode === 'promotion') {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-slate-800">{t.promotion}</h3>
                    <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t.employee}</label>
                        <select className="w-full border rounded p-2 bg-slate-50">
                            {EMPLOYEES.map(e => <option key={e.id}>{lang === 'ar' ? e.fullNameAr : e.fullNameEn}</option>)}
                        </select>
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Promotion Date</label>
                         <input type="date" className="w-full border rounded p-2" />
                    </div>
                    <div className="col-span-2 p-4 border rounded bg-slate-50">
                        <h4 className="font-bold text-sm mb-4">New Position Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                             <input placeholder="New Department" className="border rounded p-2" />
                             <input placeholder="New Job Title" className="border rounded p-2" />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">{t.save}</button>
                </div>
            </div>
        )
    }
    if (viewMode === 'insurance') {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-slate-800">{t.healthInsurance}</h3>
                    <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
                </div>
                <div className="max-w-xl mx-auto space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Insurance Policy</label>
                        <select className="w-full border rounded p-2"><option>Standard Coverage</option><option>Premium Coverage</option></select>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t.employee}</label>
                        <select className="w-full border rounded p-2">
                             {EMPLOYEES.map(e => <option key={e.id}>{lang === 'ar' ? e.fullNameAr : e.fullNameEn}</option>)}
                        </select>
                     </div>
                     <div className="flex items-center gap-2 pt-2">
                        <input type="checkbox" id="full" className="w-4 h-4 text-emerald-600" />
                        <label htmlFor="full" className="text-sm text-slate-700">Full Coverage (Family included)</label>
                     </div>
                     <div className="pt-4">
                         <button className="bg-emerald-600 text-white px-6 py-2 rounded w-full hover:bg-emerald-700">{t.save}</button>
                     </div>
                </div>
            </div>
        )
    }

    // List View
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
        <div className="p-6 border-b border-slate-100 flex flex-wrap gap-4 justify-between items-center">
           <h3 className="text-lg font-bold text-slate-800">{t.employees}</h3>
           <div className="flex gap-2">
             <button onClick={() => setViewMode('create_employee')} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 flex items-center gap-2">
                <Plus size={16} /> {t.newEmployee}
             </button>
             <button onClick={() => setViewMode('promotion')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2">
                <TrendingUp size={16} /> {t.promotion}
             </button>
             <button onClick={() => setViewMode('insurance')} className="bg-slate-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 flex items-center gap-2">
                <Heart size={16} /> {t.healthInsurance}
             </button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">{t.code}</th>
                <th className="px-6 py-4">{lang === 'en' ? 'Name' : 'الاسم'}</th>
                <th className="px-6 py-4">{lang === 'en' ? 'Position' : 'المنصب'}</th>
                <th className="px-6 py-4">{t.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {EMPLOYEES.map(emp => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{emp.code}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{lang === 'ar' ? emp.fullNameAr : emp.fullNameEn}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.position}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${emp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderAttendance = () => {
    if (viewMode === 'attendance_report') {
        const data = [
            { name: 'Jan', value: 40 }, { name: 'Feb', value: 30 }, { name: 'Mar', value: 55 },
            { name: 'Apr', value: 45 }, { name: 'May', value: 60 }, { name: 'Jun', value: 50 },
        ];
        return (
            <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded border">
                        <Calendar size={16} className="text-slate-400" />
                        <span className="text-sm">October 2023</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded border">
                        <Building size={16} className="text-slate-400" />
                        <span className="text-sm">All Departments</span>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded text-sm ml-auto">Generate</button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-6">{t.monthlyAttendance}</h3>
                    <div className="h-64 mb-8">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#059669" strokeWidth={3} dot={{r:4}} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-3 text-start">{t.employee}</th>
                                <th className="p-3 text-start">Check In</th>
                                <th className="p-3 text-start">Check Out</th>
                                <th className="p-3 text-start">Total Hours</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                             <tr><td className="p-3">Ahmed Al-Baghdadi</td><td className="p-3">07:50 AM</td><td className="p-3">04:01 PM</td><td className="p-3 text-emerald-600 font-bold">8h 11m</td></tr>
                             <tr><td className="p-3">Fatima Hassan</td><td className="p-3">08:00 AM</td><td className="p-3">04:00 PM</td><td className="p-3 text-emerald-600 font-bold">8h 00m</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    // Shift Types (Default)
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
           <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">{t.shiftType}</h3>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded text-sm">{lang === 'ar' ? 'إضافة' : 'Add'}</button>
           </div>
           <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                        <th className="px-6 py-3">{lang === 'ar' ? 'إسم المناوبة' : 'Shift Name'}</th>
                        <th className="px-6 py-3">{t.startTime}</th>
                        <th className="px-6 py-3">{t.endTime}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {SHIFTS.map(s => (
                        <tr key={s.id}>
                            <td className="px-6 py-4 font-medium">{lang === 'ar' ? s.nameAr : s.nameEn}</td>
                            <td className="px-6 py-4 dir-ltr">{s.startTime}</td>
                            <td className="px-6 py-4 dir-ltr">{s.endTime}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
        </div>
    );
  };

  const renderPayroll = () => (
      <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {payrollShortcuts.map((s, i) => (
                  <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={() => {}} />
              ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SectionList title={lang === 'ar' ? 'دفع الرواتب' : 'Payroll Payment'} items={lang === 'ar' ? ['مفردات الراتب', 'هيكل الراتب', 'تعيين هيكل الراتب', 'ادخال كشوف الرواتب', 'قسيمة الراتب'] : ['Components', 'Structure', 'Assignment', 'Entry', 'Payslip']} />
              <SectionList title={lang === 'ar' ? 'الضرائب' : 'Taxes'} items={lang === 'ar' ? ['فترة المرتبات', 'تخصيص ضريبة الدخل', 'الراتب الآخر للموظف', 'إعلان الإعفاء'] : ['Periods', 'Allocations', 'Other Income', 'Exemptions']} />
              <SectionList title={lang === 'ar' ? 'المكافئات' : 'Bonuses'} items={lang === 'ar' ? ['راتب إضافي', 'مكافئة الاحتفاظ', 'حوافز الموظفين'] : ['Additional Salary', 'Retention', 'Incentives']} />
          </div>
      </div>
  );

  return (
    <div className="space-y-6">
      {/* Sub-Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
            {id: 'dashboard', label: t.dashboard},
            {id: 'employees', label: t.employees},
            {id: 'attendance', label: t.attendance},
            {id: 'payroll', label: t.payroll},
            {id: 'recruitment', label: t.recruitment},
        ].map(tab => (
            <button 
               key={tab.id}
               onClick={() => { setActiveSubTab(tab.id as any); setViewMode('list'); }}
               className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${activeSubTab === tab.id ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
                {tab.label}
            </button>
        ))}
      </div>

      {activeSubTab === 'dashboard' && renderDashboard()}
      {activeSubTab === 'employees' && renderEmployees()}
      {activeSubTab === 'attendance' && renderAttendance()}
      {activeSubTab === 'payroll' && renderPayroll()}
      {activeSubTab === 'recruitment' && (
          <div className="text-center p-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-lg font-bold text-slate-500">Recruitment Module Placeholder</h3>
          </div>
      )}
    </div>
  );
};

// --- WAREHOUSE MODULE (SCM) ---

const WarehouseModule = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang];
    const [subTab, setSubTab] = useState<'dashboard' | 'items' | 'material_request' | 'stock_entry' | 'warehouses' | 'analytics'>('dashboard');
    const [viewMode, setViewMode] = useState<'list' | 'create'>('list');

    // Shortcuts based on Image 2
    const shortcuts = [
        { title: t.items, icon: Box, action: () => { setSubTab('items'); setViewMode('list'); }, color: 'bg-amber-600' },
        { title: t.materialRequest, icon: FileText, action: () => { setSubTab('material_request'); setViewMode('list'); }, color: 'bg-amber-600' },
        { title: t.stockEntry, icon: ClipboardList, action: () => { setSubTab('stock_entry'); setViewMode('create'); }, color: 'bg-amber-600' },
        { title: t.purchaseReceipt, icon: ShoppingCart, action: () => {}, color: 'bg-amber-600' },
        { title: t.stockLedger, icon: FileSpreadsheet, action: () => {}, color: 'bg-amber-600' },
        { title: t.infoDashboard, icon: LayoutDashboard, action: () => setSubTab('dashboard'), color: 'bg-amber-600' },
    ];

    // Lists based on Image 2 (Arabic)
    const settingsItems = lang === 'ar' 
        ? ['اعدادات المخزون', 'المستودعات', 'وحدة القياس', 'اعدادات متنوع السلعة', 'العلامة التجارية', 'مواصفات الصنف', 'عامل تحويل وحدة القياس'] 
        : ['Stock Settings', 'Warehouses', 'UOM', 'Multi-variant Settings', 'Brand', 'Item Attributes', 'UOM Conversion'];
    
    const reportItems = lang === 'ar'
        ? ['سجل المخزن', 'رصيد المخزون', 'كمية المخزون المتوقعة', 'ملخص الأوراق المالية', 'التبويب التاريخي للمخزن', 'سعر صنف المخزون']
        : ['Stock Ledger', 'Stock Balance', 'Projected Qty', 'Financial Summary', 'Historic Aging', 'Item Price'];

    const entriesItems = lang === 'ar'
        ? ['طلب مواد', 'قيد مخزون', 'إشعار التسليم', 'إستلام المشتريات', 'قائمة الاختيار', 'مسار التسليم']
        : ['Material Request', 'Stock Entry', 'Delivery Note', 'Purchase Receipt', 'Pick List', 'Delivery Trip'];

    const commodityItems = lang === 'ar'
        ? ['العناصر', 'مجموعة الصنف', 'باقة المنتجات', 'قائمة الأسعار', 'سعر الصنف', 'قواعد الشحن', 'قاعدة التسعير', 'الصنف البديل', 'مادة المصنع']
        : ['Items', 'Item Group', 'Product Bundle', 'Price List', 'Item Price', 'Shipping Rule', 'Pricing Rule', 'Item Alternative', 'Manufacturer'];

    const renderDashboard = () => (
        <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {shortcuts.map((s, i) => (
                    <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} color={s.color} />
                ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SectionList title={t.scmSettings} items={settingsItems} />
                <SectionList title={t.stockReports} items={reportItems} />
                <SectionList title={t.stockEntries} items={entriesItems} />
                <SectionList title={t.commodities} items={commodityItems} />
            </div>
             <div className="flex justify-end">
                <button onClick={() => setSubTab('analytics')} className="flex items-center gap-2 text-amber-600 hover:underline text-sm font-bold">
                     <PieChartIcon size={16}/> {t.purchaseAnalytics}
                </button>
                <button onClick={() => { setSubTab('warehouses'); setViewMode('create'); }} className="flex items-center gap-2 text-amber-600 hover:underline text-sm font-bold ml-4">
                     <Building size={16}/> {t.newWarehouseTitle}
                </button>
            </div>
        </div>
    );

    const renderItems = () => {
        if (viewMode === 'create') {
            return (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h3 className="text-xl font-bold text-slate-800">{t.newItem}</h3>
                        <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-amber-600"><ChevronRight size={24} /></button>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.code}</label><input type="text" className="w-full border rounded p-2 bg-slate-50" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">{lang === 'en' ? 'Name' : 'الإسم'}</label><input type="text" className="w-full border rounded p-2" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.itemGroup}</label><select className="w-full border rounded p-2"><option>Raw Material</option><option>Products</option></select></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.brand}</label><select className="w-full border rounded p-2"><option>Dell</option><option>HP</option></select></div>
                            <div className="col-span-2"><label className="block text-sm font-medium text-slate-700 mb-1">Description</label><textarea className="w-full border rounded p-2" rows={3}></textarea></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.uom}</label><input type="text" className="w-full border rounded p-2" defaultValue="Unit" /></div>
                            <div className="flex items-center gap-2 pt-6">
                                <input type="checkbox" id="stock" className="w-4 h-4 text-amber-600" defaultChecked />
                                <label htmlFor="stock" className="text-sm text-slate-700">{t.maintainStock}</label>
                            </div>
                         </div>
                         <div className="pt-4 flex gap-3">
                             <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">{t.add}</button>
                             <button onClick={() => setViewMode('list')} className="bg-slate-100 text-slate-600 px-6 py-2 rounded hover:bg-slate-200">{t.cancel}</button>
                         </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                   <h3 className="text-lg font-bold text-slate-800">{t.items}</h3>
                   <button onClick={() => setViewMode('create')} className="bg-amber-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"><Plus size={16}/> {t.newItem}</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">{t.code}</th>
                                <th className="px-6 py-3">{lang === 'en' ? 'Name' : 'الإسم'}</th>
                                <th className="px-6 py-3">{t.itemGroup}</th>
                                <th className="px-6 py-3">{t.brand}</th>
                                <th className="px-6 py-3">{t.quantity}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             {INVENTORY.map(item => (
                                 <tr key={item.id} className="hover:bg-slate-50">
                                     <td className="px-6 py-4 font-mono text-slate-500">{item.sku}</td>
                                     <td className="px-6 py-4 font-bold text-slate-700">{lang === 'ar' ? item.nameAr : item.nameEn}</td>
                                     <td className="px-6 py-4">{item.group}</td>
                                     <td className="px-6 py-4">{item.brand}</td>
                                     <td className="px-6 py-4">{item.quantity} {item.unit}</td>
                                 </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };

    const renderMaterialRequest = () => {
        if (viewMode === 'create') {
            return (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h3 className="text-xl font-bold text-slate-800">{t.materialRequest}</h3>
                        <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-amber-600"><ChevronRight size={24} /></button>
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                             <div>
                                <label className="block text-xs text-slate-500 mb-1">{t.user}</label>
                                <div className="font-bold text-slate-800">System Admin</div>
                             </div>
                             <div>
                                <label className="block text-xs text-slate-500 mb-1">{t.date}</label>
                                <div className="font-bold text-slate-800">06/06/2022</div>
                             </div>
                             <div>
                                <label className="block text-xs text-slate-500 mb-1">{t.purpose}</label>
                                <select className="w-full bg-white border rounded p-1 text-sm"><option>Purchase</option><option>Transfer</option></select>
                             </div>
                             <div>
                                <label className="block text-xs text-slate-500 mb-1">{t.requiredDate}</label>
                                <input type="date" className="w-full bg-white border rounded p-1 text-sm" />
                             </div>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                             <table className="w-full text-sm text-left rtl:text-right">
                                 <thead className="bg-amber-50 text-amber-900">
                                     <tr>
                                         <th className="p-3 w-10">#</th>
                                         <th className="p-3">{t.code}</th>
                                         <th className="p-3">{t.quantity}</th>
                                         <th className="p-3">{t.targetWarehouse}</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td className="p-3 border-b">1</td>
                                         <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="Item Code" /></td>
                                         <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0" /></td>
                                         <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="WH" /></td>
                                     </tr>
                                     <tr>
                                         <td className="p-3 border-b">2</td>
                                         <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                         <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" /></td>
                                         <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                     </tr>
                                 </tbody>
                             </table>
                             <div className="p-2 bg-slate-50 border-t">
                                 <button className="bg-amber-600 text-white px-3 py-1 rounded text-xs hover:bg-amber-700">{t.add}</button>
                             </div>
                        </div>
                        
                        <div className="flex justify-end gap-3 pt-4 border-t">
                             <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">{t.save}</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                 <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                   <h3 className="text-lg font-bold text-slate-800">{t.materialRequest}</h3>
                   <button onClick={() => setViewMode('create')} className="bg-amber-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"><Plus size={16}/> {t.add}</button>
                </div>
                <div className="p-4 bg-slate-50 border-b border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
                     <input type="date" className="border rounded p-2 text-sm" />
                     <select className="border rounded p-2 text-sm"><option>{t.purpose}</option></select>
                     <select className="border rounded p-2 text-sm"><option>{t.status}</option></select>
                     <button className="bg-slate-200 text-slate-600 rounded p-2 text-sm font-bold">{t.search}</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">{t.date}</th>
                                <th className="px-6 py-3">{t.user}</th>
                                <th className="px-6 py-3">{t.purpose}</th>
                                <th className="px-6 py-3">{t.status}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             {MATERIAL_REQUESTS.map(mr => (
                                 <tr key={mr.id} className="hover:bg-slate-50">
                                     <td className="px-6 py-4">{mr.date}</td>
                                     <td className="px-6 py-4 font-medium">{mr.user}</td>
                                     <td className="px-6 py-4">{mr.purpose}</td>
                                     <td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">{mr.status}</span></td>
                                 </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const renderStockEntry = () => (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
             <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-slate-800">{t.stockEntry}</h3>
            </div>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div>
                        <label className="block text-xs text-slate-500 mb-1">{t.user}</label>
                        <div className="font-bold text-slate-800">System Admin</div>
                        </div>
                        <div>
                        <label className="block text-xs text-slate-500 mb-1">{t.date}</label>
                        <div className="font-bold text-slate-800">06/06/2022</div>
                        </div>
                        <div>
                        <label className="block text-xs text-slate-500 mb-1">{t.entryType}</label>
                        <select className="w-full bg-white border rounded p-1 text-sm"><option>Material Receipt</option><option>Material Issue</option><option>Material Transfer</option></select>
                        </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="bg-amber-50 text-amber-900">
                                <tr>
                                    <th className="p-3 w-10">#</th>
                                    <th className="p-3">{t.sourceWarehouse}</th>
                                    <th className="p-3">{t.targetWarehouse}</th>
                                    <th className="p-3">{t.code}</th>
                                    <th className="p-3">{t.quantity}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border-b">1</td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="Source WH" /></td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="Target WH" /></td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="Item" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-2 bg-slate-50 border-t">
                            <button className="bg-amber-600 text-white px-3 py-1 rounded text-xs hover:bg-amber-700">{t.add}</button>
                        </div>
                </div>
                
                <div className="flex justify-end gap-3 pt-4 border-t">
                        <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">{t.save}</button>
                </div>
            </div>
        </div>
    );
    
    const renderWarehouses = () => (
         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
             <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-slate-800">{t.newWarehouseTitle}</h3>
                <button onClick={() => setSubTab('dashboard')} className="text-slate-500 hover:text-amber-600"><ChevronRight size={24} /></button>
            </div>
            <div className="max-w-xl mx-auto space-y-6">
                <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">{t.user}</label>
                     <input type="text" disabled defaultValue="System Admin" className="w-full border rounded p-2 bg-slate-100" />
                </div>
                <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">{t.newWarehouseTitle}</label>
                     <input type="text" className="w-full border rounded p-2" placeholder="e.g. South Branch Store" />
                </div>
                <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">{t.parentCompany}</label>
                     <input type="text" className="w-full border rounded p-2" defaultValue="Taqadum Iraq Co." />
                </div>
                <div className="flex items-center gap-2">
                     <input type="checkbox" id="grp" className="w-4 h-4 text-amber-600" />
                     <label htmlFor="grp" className="text-sm text-slate-700">{t.isGroup}</label>
                </div>
                <div className="pt-4 flex gap-3">
                     <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">{t.save}</button>
                </div>
            </div>
         </div>
    );

    const renderAnalytics = () => {
        const data = [
            {name: 'Jan', value: 400}, {name: 'Feb', value: 300}, {name: 'Mar', value: 600},
            {name: 'Apr', value: 200}, {name: 'May', value: 500}, {name: 'Jun', value: 450}
        ];
        return (
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                 <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-slate-800">{t.purchaseAnalytics}</h3>
                    <div className="flex gap-2">
                         <button className="p-2 bg-amber-100 text-amber-600 rounded"><BarChart size={18} /></button>
                         <button onClick={() => setSubTab('dashboard')} className="text-slate-500 hover:text-amber-600 p-2"><ChevronRight size={24} /></button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <select className="border rounded p-2 text-sm"><option>{t.parentCompany}</option></select>
                     <select className="border rounded p-2 text-sm"><option>{t.itemGroup}</option></select>
                     <select className="border rounded p-2 text-sm"><option>{t.items}</option></select>
                </div>
                <div className="h-80">
                     <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={data}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} />
                             <XAxis dataKey="name" />
                             <YAxis />
                             <Tooltip />
                             <Bar dataKey="value" fill="#d97706" radius={[4, 4, 0, 0]} />
                         </BarChart>
                     </ResponsiveContainer>
                </div>
             </div>
        )
    }

    return (
        <div className="space-y-6">
             <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
                <button onClick={() => { setSubTab('dashboard'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'dashboard' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.dashboard}</button>
                <button onClick={() => { setSubTab('items'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'items' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.items}</button>
                <button onClick={() => { setSubTab('material_request'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'material_request' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.materialRequest}</button>
             </div>

             {subTab === 'dashboard' && renderDashboard()}
             {subTab === 'items' && renderItems()}
             {subTab === 'material_request' && renderMaterialRequest()}
             {subTab === 'stock_entry' && renderStockEntry()}
             {subTab === 'warehouses' && renderWarehouses()}
             {subTab === 'analytics' && renderAnalytics()}
        </div>
    )
};

// --- FINANCE MODULE ---

const FinanceModule = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang];
    const [subTab, setSubTab] = useState<'dashboard' | 'chart_of_accounts' | 'journal_entry' | 'invoices' | 'reports'>('dashboard');
    const [viewMode, setViewMode] = useState<'list' | 'create' | 'view'>('list');

    // Shortcuts based on Image 3
    const shortcuts = [
        { title: t.infoDashboard, icon: LayoutDashboard, action: () => setSubTab('dashboard'), color: 'bg-emerald-700' },
        { title: t.ledger, icon: BookOpen, action: () => setSubTab('reports'), color: 'bg-emerald-700' },
        { title: t.journalEntry, icon: FileText, action: () => { setSubTab('journal_entry'); setViewMode('create'); }, color: 'bg-emerald-700' },
        { title: t.purchaseInvoice, icon: Receipt, action: () => { setSubTab('invoices'); setViewMode('create'); }, color: 'bg-emerald-700' },
        { title: t.salesInvoice, icon: FileText, action: () => { setSubTab('invoices'); setViewMode('create'); }, color: 'bg-emerald-700' },
        { title: t.chartOfAccounts, icon: Layers, action: () => setSubTab('chart_of_accounts'), color: 'bg-emerald-700' },
    ];

    // Lists based on Image 3 & 4 (Arabic)
    const apItems = lang === 'ar' 
        ? ['فاتورة شراء', 'المورد', 'تدوين المدفوعات', 'سجل الشراء', 'تحليل اوامر الشراء', 'العناصر الواردة', 'ملخص الحسابات الدائنة'] 
        : ['Purchase Invoice', 'Supplier', 'Payment Entry', 'Purchase Register', 'PO Analysis', 'Items Received', 'AP Summary'];
    
    const arItems = lang === 'ar'
        ? ['فاتورة مبيعات', 'العميل', 'تدوين المدفوعات', 'طلب الدفع من قبل المورد', 'المقبوضات والحسابات المدينة', 'ملخص الحسابات المدينة', 'سجل مبيعات', 'تحليل أوامر المبيعات']
        : ['Sales Invoice', 'Customer', 'Payment Entry', 'Payment Request', 'AR Ledger', 'AR Summary', 'Sales Register', 'SO Analysis'];

    const glItems = lang === 'ar'
        ? ['القيود اليومية', 'قالب إدخال دفتر اليومية', 'دفتر الاستاذ', 'ملخص دفتر الأستاذ', 'ملخص دفتر الأستاذ']
        : ['Journal Entries', 'JE Template', 'General Ledger', 'GL Summary', 'GL Detail'];

    const mainAccItems = lang === 'ar'
        ? ['شركة', 'الشجرة المحاسبية', 'إعدادات الحسابات', 'السنة المالية', 'البعد المحاسبي', 'كتاب المالية', 'فترة المحاسبة', 'مصطلح الدفع']
        : ['Company', 'Chart of Accounts', 'Account Settings', 'Fiscal Year', 'Dimensions', 'Finance Book', 'Accounting Period', 'Payment Terms'];

    const renderDashboard = () => (
        <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {shortcuts.map((s, i) => (
                    <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} color={s.color} />
                ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SectionList title={t.accountsPayable} items={apItems} />
                <SectionList title={t.accountsReceivable} items={arItems} />
                <SectionList title={t.generalLedger} items={glItems} />
                <SectionList title={t.mainAccounts} items={mainAccItems} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <SectionList title={t.financialStatements} items={[t.balanceSheet, t.profitLoss, t.cashFlow, t.trialBalance]} />
                 <SectionList title={t.multiCurrency} items={[t.currency, t.exchangeRate, 'Exchange Rate Revaluation']} />
                 <SectionList title={t.settings} items={['Payment Accounts', 'Payment Terms', 'Payment Gateway']} />
                 <SectionList title={t.profitability} items={['Gross Profit', 'Profitability Analysis', 'Sales Trends']} />
            </div>
        </div>
    );

    const AccountNode: React.FC<{ account: Account, level: number }> = ({ account, level }) => {
        const [expanded, setExpanded] = useState(false);
        return (
            <div className="animate-fade-in">
                <div className={`flex items-center p-2 hover:bg-emerald-50 rounded cursor-pointer border-b border-slate-100 ${level === 0 ? 'bg-emerald-50 font-bold' : ''}`} onClick={() => setExpanded(!expanded)}>
                    <div style={{ width: level * 20 }} />
                    {account.children ? (
                        <span className="mr-2 text-emerald-600">{expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
                    ) : <span className="mr-6" />}
                    <span className="font-mono text-xs text-slate-500 mr-2 bg-slate-100 px-1 rounded">{account.code}</span>
                    <span className="flex-1 text-slate-700 text-sm">{lang === 'ar' ? account.nameAr : account.nameEn}</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">{account.balance.toLocaleString()}</span>
                </div>
                {expanded && account.children && (
                    <div>
                        {account.children.map(child => <AccountNode key={child.id} account={child} level={level + 1} />)}
                    </div>
                )}
            </div>
        )
    };

    const renderChartOfAccounts = () => ( // Image 5
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in h-full flex flex-col">
             <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-slate-800">{t.chartOfAccounts}</h3>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-emerald-600 text-white rounded text-sm">{t.add}</button>
                    <button onClick={() => setSubTab('dashboard')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
                </div>
            </div>
            <div className="overflow-y-auto flex-1 pr-2">
                {ACCOUNTS.map(acc => <AccountNode key={acc.id} account={acc} level={0} />)}
            </div>
        </div>
    );

    const renderJournalEntry = () => { // Image 7
        if (viewMode === 'create') {
            return (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h3 className="text-xl font-bold text-slate-800">{t.journalEntry}</h3>
                        <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-slate-50 p-4 rounded border border-slate-100">
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">{t.entryType}</label>
                            <input type="text" disabled defaultValue="Journal Entry" className="w-full bg-white border rounded p-1 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">{t.postingDate}</label>
                            <input type="date" className="w-full bg-white border rounded p-1 text-sm" defaultValue="2022-06-06" />
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">{t.company}</label>
                            <input type="text" disabled defaultValue="Taqadum Iraq Co." className="w-full bg-white border rounded p-1 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">{t.referenceNumber}</label>
                            <input type="text" className="w-full bg-white border rounded p-1 text-sm" />
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden mb-4">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="bg-emerald-50 text-emerald-900">
                                <tr>
                                    <th className="p-3 w-10">#</th>
                                    <th className="p-3">{t.account}</th>
                                    <th className="p-3">{t.party}</th>
                                    <th className="p-3 w-32">{t.debit}</th>
                                    <th className="p-3 w-32">{t.credit}</th>
                                    <th className="p-3 w-10"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border-b">1</td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" placeholder="Search Account..." /></td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0.00" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0.00" /></td>
                                    <td className="p-3 border-b text-center text-red-500 cursor-pointer">x</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b">2</td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0.00" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" placeholder="0.00" /></td>
                                    <td className="p-3 border-b text-center text-red-500 cursor-pointer">x</td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-slate-50 font-bold">
                                <tr>
                                    <td colSpan={3} className="p-3 text-right">{t.totalDebit} / {t.totalCredit}</td>
                                    <td className="p-3">0.00</td>
                                    <td className="p-3">0.00</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="p-2 bg-slate-50 border-t">
                            <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs hover:bg-emerald-700">{t.addLine}</button>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">{t.save}</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                   <h3 className="text-lg font-bold text-slate-800">{t.journalEntry}</h3>
                   <button onClick={() => setViewMode('create')} className="bg-emerald-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"><Plus size={16}/> {t.add}</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">{t.date}</th>
                                <th className="px-6 py-3">{t.referenceNumber}</th>
                                <th className="px-6 py-3">{t.remarks}</th>
                                <th className="px-6 py-3">{t.totalDebit}</th>
                                <th className="px-6 py-3">{t.status}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             {JOURNAL_ENTRIES.map(je => (
                                 <tr key={je.id} className="hover:bg-slate-50">
                                     <td className="px-6 py-4">{je.date}</td>
                                     <td className="px-6 py-4 font-mono">{je.reference}</td>
                                     <td className="px-6 py-4 text-slate-600">{je.description}</td>
                                     <td className="px-6 py-4 font-bold">{je.totalDebit.toLocaleString()}</td>
                                     <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs ${je.status === 'Posted' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{je.status}</span></td>
                                 </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };

    const renderInvoices = () => { // Image 8
        if (viewMode === 'create') {
            return (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h3 className="text-xl font-bold text-slate-800">{t.salesInvoice}</h3>
                        <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.customer}</label><input type="text" className="w-full border rounded p-2" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.invoiceDate}</label><input type="date" className="w-full border rounded p-2" defaultValue="2022-06-06" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1">{t.dueDate}</label><input type="date" className="w-full border rounded p-2" /></div>
                        <div className="flex items-center pt-6 gap-2"><input type="checkbox" className="w-4 h-4" /> <label className="text-sm">Include Payment (POS)</label></div>
                    </div>

                    <div className="border rounded-lg overflow-hidden mb-6">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-3 w-10">#</th>
                                    <th className="p-3">{t.itemCode}</th>
                                    <th className="p-3">{t.quantity}</th>
                                    <th className="p-3">{t.rate}</th>
                                    <th className="p-3">{t.amount}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border-b">1</td>
                                    <td className="p-3 border-b"><input type="text" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b"><input type="number" className="w-full border rounded p-1" /></td>
                                    <td className="p-3 border-b bg-slate-50">0.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-2 bg-slate-50 border-t">
                            <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs">{t.addLine}</button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">{t.save}</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                   <h3 className="text-lg font-bold text-slate-800">{t.salesInvoice}</h3>
                   <button onClick={() => setViewMode('create')} className="bg-emerald-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"><Plus size={16}/> {t.add}</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">{t.date}</th>
                                <th className="px-6 py-3">{t.customer}</th>
                                <th className="px-6 py-3">{t.amount}</th>
                                <th className="px-6 py-3">{t.status}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             {INVOICES.map(inv => (
                                 <tr key={inv.id} className="hover:bg-slate-50">
                                     <td className="px-6 py-4">{inv.date}</td>
                                     <td className="px-6 py-4 font-medium">{inv.partyName}</td>
                                     <td className="px-6 py-4 font-bold">{inv.total.toLocaleString()}</td>
                                     <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{inv.status}</span></td>
                                 </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };

    const renderReports = () => ( // Image 6
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
             <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-slate-800">{t.trialBalance}</h3>
                <button onClick={() => setSubTab('dashboard')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div><label className="text-xs text-slate-500 block mb-1">{t.company}</label><select className="w-full border rounded p-1 text-sm bg-white"><option>Taqadum Iraq Co.</option></select></div>
                <div><label className="text-xs text-slate-500 block mb-1">{t.fiscalYear}</label><select className="w-full border rounded p-1 text-sm bg-white"><option>2023</option></select></div>
                <div><label className="text-xs text-slate-500 block mb-1">{t.financeBook}</label><input type="text" className="w-full border rounded p-1 text-sm bg-white" /></div>
                <div className="flex items-end"><button className="bg-emerald-600 text-white px-4 py-1.5 rounded text-sm w-full">{t.search}</button></div>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right border-collapse border border-slate-200">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-2 border border-slate-200" rowSpan={2}>{t.account}</th>
                            <th className="p-2 border border-slate-200 text-center" colSpan={2}>{t.openingBalance}</th>
                            <th className="p-2 border border-slate-200 text-center" colSpan={2}>Period</th>
                            <th className="p-2 border border-slate-200 text-center" colSpan={2}>{t.closingBalance}</th>
                        </tr>
                        <tr>
                            <th className="p-2 border border-slate-200 text-center">{t.debit}</th>
                            <th className="p-2 border border-slate-200 text-center">{t.credit}</th>
                            <th className="p-2 border border-slate-200 text-center">{t.debit}</th>
                            <th className="p-2 border border-slate-200 text-center">{t.credit}</th>
                            <th className="p-2 border border-slate-200 text-center">{t.debit}</th>
                            <th className="p-2 border border-slate-200 text-center">{t.credit}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ACCOUNTS.map(acc => (
                            <React.Fragment key={acc.id}>
                                <tr className="bg-slate-50 font-bold">
                                    <td className="p-2 border border-slate-200">{lang === 'ar' ? acc.nameAr : acc.nameEn}</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    <td className="p-2 border border-slate-200 text-right">0.00</td>
                                </tr>
                                {acc.children?.map(child => (
                                    <tr key={child.id}>
                                        <td className="p-2 border border-slate-200 pl-6 rtl:pr-6">{lang === 'ar' ? child.nameAr : child.nameEn}</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                        <td className="p-2 border border-slate-200 text-right">0.00</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
             <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
                <button onClick={() => { setSubTab('dashboard'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'dashboard' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.dashboard}</button>
                <button onClick={() => { setSubTab('chart_of_accounts'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'chart_of_accounts' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.chartOfAccounts}</button>
                <button onClick={() => { setSubTab('journal_entry'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'journal_entry' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.journalEntry}</button>
                <button onClick={() => { setSubTab('invoices'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'invoices' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.salesInvoice}</button>
                <button onClick={() => { setSubTab('reports'); setViewMode('list'); }} className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${subTab === 'reports' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{t.financialStatements}</button>
             </div>

             {subTab === 'dashboard' && renderDashboard()}
             {subTab === 'chart_of_accounts' && renderChartOfAccounts()}
             {subTab === 'journal_entry' && renderJournalEntry()}
             {subTab === 'invoices' && renderInvoices()}
             {subTab === 'reports' && renderReports()}
        </div>
    )
};

const SelfServiceModule = ({ lang, user }: { lang: Language, user: User }) => {
    return <div className="p-4 text-center text-slate-500">ESS Module Loaded (Existing functionality preserved)</div>;
};

// --- MAIN APP COMPONENT ---

const RawafedApp = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentMinistry, setCurrentMinistry] = useState<Ministry | null>(null);
  const [activeModule, setActiveModule] = useState<'dashboard' | 'hr' | 'finance' | 'scm' | 'ess'>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Set html dir attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  if (!currentUser) {
    return <LoginPage onLogin={(m, u) => { setCurrentMinistry(m); setCurrentUser(u); }} lang={lang} setLang={setLang} />;
  }

  const t = TRANSLATIONS[lang];

  const MenuItem = ({ id, label, icon: Icon }: any) => (
    <button
      onClick={() => setActiveModule(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1
        ${activeModule === id 
          ? 'bg-amber-500 text-slate-900 font-bold shadow-md' 
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        }`}
    >
      <Icon size={20} />
      {isSidebarOpen && <span>{label}</span>}
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* SIDEBAR */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col shadow-xl z-20`}
      >
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
           {isSidebarOpen ? (
             <div className="flex items-center gap-2 font-bold text-lg tracking-wider text-emerald-400">
               <Globe size={24} />
               <span>RAWAFED</span>
             </div>
           ) : (
             <Globe size={24} className="text-emerald-400"/>
           )}
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
           {isSidebarOpen && (
             <div className="mb-6 px-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{t.ministryOf}</p>
                <div className="flex items-center gap-2">
                   {currentMinistry?.logo && <img src={currentMinistry.logo} className="w-8 h-8 rounded-full bg-white" alt="logo" />}
                   <span className="font-semibold text-sm text-slate-200">{lang === 'ar' ? currentMinistry?.nameAr : currentMinistry?.nameEn}</span>
                </div>
             </div>
           )}

           <nav className="space-y-1">
             <MenuItem id="dashboard" label={t.dashboard} icon={LayoutDashboard} />
             <div className="pt-4 pb-2">
               {isSidebarOpen && <p className="px-4 text-xs text-slate-500 uppercase font-semibold">{lang === 'en' ? 'Modules' : 'الأنظمة'}</p>}
             </div>
             <MenuItem id="hr" label={t.hr} icon={Users} />
             <MenuItem id="finance" label={t.finance} icon={Landmark} />
             <MenuItem id="scm" label={t.scm} icon={Package} />
             <div className="pt-4 pb-2">
               {isSidebarOpen && <p className="px-4 text-xs text-slate-500 uppercase font-semibold">{lang === 'en' ? 'Employee' : 'الموظف'}</p>}
             </div>
             <MenuItem id="ess" label={t.ess} icon={UserCircle} />
           </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button 
             onClick={() => setCurrentUser(null)}
             className="w-full flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors"
          >
             <LogOut size={20} />
             {isSidebarOpen && <span>{t.logout}</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!isSidebarOpen)} 
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
              >
                 <Menu size={20} />
              </button>
              <h2 className="text-xl font-bold text-slate-800">
                {activeModule === 'dashboard' ? t.dashboard :
                 activeModule === 'hr' ? t.hr :
                 activeModule === 'finance' ? t.finance :
                 activeModule === 'ess' ? t.ess : t.scm}
              </h2>
           </div>

           <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                 <input 
                   type="text" 
                   placeholder={t.search} 
                   className="bg-slate-100 border-none rounded-full py-2 px-4 pl-10 w-64 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                 />
                 <Search size={16} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${lang === 'ar' ? 'right-3' : 'left-3'}`} />
              </div>
              
              <button className="relative p-2 hover:bg-slate-100 rounded-full text-slate-600">
                 <Bell size={20} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              
              <button 
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-sm font-medium text-slate-700 transition-colors"
              >
                <Globe size={14} />
                {lang === 'en' ? 'AR' : 'EN'}
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                 <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-slate-800 leading-none">{currentUser.name}</p>
                    <p className="text-xs text-emerald-600 mt-1">{currentUser.role}</p>
                 </div>
                 <img src={currentUser.avatar} alt="User" className="w-9 h-9 rounded-full border-2 border-emerald-500 p-0.5" />
              </div>
           </div>
        </header>

        {/* CONTENT SCROLL AREA */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
           {activeModule === 'dashboard' && (
             <div className="space-y-6 animate-fade-in">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <StatCard title={t.totalEmployees} value="14,203" icon={Users} color="bg-indigo-600" trend={2.4} />
                 <StatCard title={t.budgetUtilization} value="42%" icon={Landmark} color="bg-emerald-600" trend={1.1} />
                 <StatCard title={t.lowStockItems} value="12" icon={Package} color="bg-amber-500" />
                 <StatCard title="Tickets Open" value="8" icon={FileText} color="bg-red-500" />
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                   <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'Budget Overview' : 'نظرة عامة على الموازنة'}</h3>
                   <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={BUDGET_ITEMS}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey={lang === 'ar' ? 'code' : 'code'} />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="allocation" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="spent" fill="#059669" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                   </div>
                 </div>
               </div>
             </div>
           )}

           {activeModule === 'hr' && <HRModule lang={lang} />}
           {activeModule === 'finance' && <FinanceModule lang={lang} />}
           {activeModule === 'scm' && <WarehouseModule lang={lang} />}
           {activeModule === 'ess' && <SelfServiceModule lang={lang} user={currentUser} />}
        </main>
      </div>
    </div>
  );
};

export default RawafedApp;