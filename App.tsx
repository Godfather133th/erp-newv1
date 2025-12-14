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
  UserCircle
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
  Cell
} from 'recharts';
import { TRANSLATIONS, MINISTRIES, EMPLOYEES, BUDGET_ITEMS, INVENTORY, ASSETS, PROCUREMENT_REQUESTS, TRAINING_COURSES, JOB_APPLICATIONS, CASH_ADVANCES, BANKS, MY_LEAVES } from './constants';
import { Ministry, User, Language } from './types';

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

// 3. HR MODULE
const HRModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'employees' | 'payroll' | 'attendance' | 'training' | 'recruitment'>('employees');

  const TabButton = ({ id, label }: any) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === id ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-2 overflow-x-auto">
        <TabButton id="employees" label={t.employees} />
        <TabButton id="payroll" label={t.payroll} />
        <TabButton id="attendance" label={t.attendance} />
        <TabButton id="training" label={t.training} />
        <TabButton id="recruitment" label={t.recruitment} />
      </div>

      {activeTab === 'employees' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">{t.employees}</h3>
             <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700">
                + {lang === 'en' ? 'Add Employee' : 'إضافة موظف'}
             </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">{lang === 'en' ? 'Name' : 'الاسم'}</th>
                  <th className="px-6 py-4">{lang === 'en' ? 'Position' : 'المنصب'}</th>
                  <th className="px-6 py-4">{lang === 'en' ? 'Department' : 'القسم'}</th>
                  <th className="px-6 py-4">{t.status}</th>
                  <th className="px-6 py-4">{lang === 'en' ? 'Salary (IQD)' : 'الراتب (د.ع)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {EMPLOYEES.map(emp => (
                  <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{lang === 'ar' ? emp.fullNameAr : emp.fullNameEn}</td>
                    <td className="px-6 py-4 text-slate-600">{emp.position}</td>
                    <td className="px-6 py-4 text-slate-600">{emp.department}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${emp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-mono">{emp.salary.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'payroll' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'Salary Distribution' : 'توزيع الرواتب'}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Basic', value: 65 },
                        { name: 'Allowances', value: 25 },
                        { name: 'Bonuses', value: 10 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#059669" />
                      <Cell fill="#d97706" />
                      <Cell fill="#0284c7" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'Monthly Payroll Cost' : 'تكلفة الرواتب الشهرية'}</h3>
               <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { month: 'Jan', amount: 420 },
                    { month: 'Feb', amount: 430 },
                    { month: 'Mar', amount: 425 },
                    { month: 'Apr', amount: 450 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#059669" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
               </div>
           </div>
        </div>
      )}

      {activeTab === 'attendance' && (
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">{lang === 'en' ? 'Today\'s Attendance' : 'حضور اليوم'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
               <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-800">92%</div>
                  <div className="text-xs text-slate-500 uppercase">{lang === 'en' ? 'Present' : 'حضور'}</div>
               </div>
               <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-600">3%</div>
                  <div className="text-xs text-slate-500 uppercase">{lang === 'en' ? 'Late' : 'تأخير'}</div>
               </div>
               <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">5%</div>
                  <div className="text-xs text-slate-500 uppercase">{lang === 'en' ? 'On Leave' : 'إجازة'}</div>
               </div>
               <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">0%</div>
                  <div className="text-xs text-slate-500 uppercase">{lang === 'en' ? 'Absent' : 'غياب'}</div>
               </div>
            </div>
         </div>
      )}

      {activeTab === 'training' && (
        <div className="grid grid-cols-1 gap-6">
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex justify-between">
                <h3 className="text-lg font-bold text-slate-800">{lang === 'en' ? 'Training Courses' : 'الدورات التدريبية'}</h3>
                <button className="text-emerald-600 text-sm hover:underline">{lang === 'en' ? 'Request Training' : 'طلب تدريب'}</button>
             </div>
             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {TRAINING_COURSES.map(course => (
                  <div key={course.id} className="border border-slate-100 rounded-lg p-4 flex justify-between items-center hover:bg-slate-50">
                    <div>
                      <h4 className="font-bold text-slate-800">{lang === 'ar' ? course.titleAr : course.titleEn}</h4>
                      <p className="text-sm text-slate-500 mt-1">{course.provider} • {course.attendees} Attendees</p>
                    </div>
                    <div className="text-right">
                       <span className={`px-2 py-1 rounded text-xs font-medium ${course.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                         {course.status}
                       </span>
                       <div className="text-xs text-slate-400 mt-2">{course.startDate}</div>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      )}

      {activeTab === 'recruitment' && (
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'Job Applications' : 'طلبات التوظيف'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {['Applied', 'Interview', 'Hired'].map(stage => (
                 <div key={stage} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-sm text-slate-600 mb-3 uppercase flex justify-between">
                      {stage}
                      <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs">
                        {JOB_APPLICATIONS.filter(j => j.stage === stage).length}
                      </span>
                    </h4>
                    <div className="space-y-3">
                       {JOB_APPLICATIONS.filter(j => j.stage === stage).map(app => (
                         <div key={app.id} className="bg-white p-3 rounded shadow-sm border border-slate-100">
                            <div className="font-bold text-slate-800">{app.candidateName}</div>
                            <div className="text-xs text-emerald-600">{app.position}</div>
                            <div className="text-[10px] text-slate-400 mt-2">{app.date}</div>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      )}
    </div>
  );
};

// 4. FINANCE MODULE
const FinanceModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'budget' | 'banking' | 'advances' | 'reports'>('budget');
  
  const TabButton = ({ id, label }: any) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === id ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-2 overflow-x-auto">
        <TabButton id="budget" label={t.budget} />
        <TabButton id="banking" label={t.banking} />
        <TabButton id="advances" label={t.cashAdvances} />
        <TabButton id="reports" label="Reports" />
      </div>

       {/* Budget Section */}
       {activeTab === 'budget' && (
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-slate-800">{lang === 'en' ? 'Budget Execution (Sec I & II)' : 'تنفيذ الموازنة (الفصل الأول والثاني)'}</h3>
                 <span className="text-sm text-slate-500">FY 2023-2024</span>
               </div>
               
               <div className="mb-6">
                  <h4 className="text-sm font-bold text-emerald-700 mb-2 border-b border-emerald-100 pb-1">{t.sectionI}</h4>
                  <div className="space-y-4">
                     {BUDGET_ITEMS.filter(b => b.sectionType === 'I').map(item => (
                       <div key={item.id} className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="text-sm font-medium text-slate-700">{item.code} - {lang === 'ar' ? item.itemAr : item.itemEn}</div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-emerald-600">
                                {((item.spent / item.allocation) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-emerald-100">
                            <div style={{ width: `${(item.spent / item.allocation) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                             <span>Spent: {item.spent.toLocaleString()}</span>
                             <span>Total: {item.allocation.toLocaleString()}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-sm font-bold text-blue-700 mb-2 border-b border-blue-100 pb-1">{t.sectionII}</h4>
                  <div className="space-y-4">
                     {BUDGET_ITEMS.filter(b => b.sectionType === 'II').map(item => (
                       <div key={item.id} className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="text-sm font-medium text-slate-700">{item.code} - {lang === 'ar' ? item.itemAr : item.itemEn}</div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                {((item.spent / item.allocation) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-blue-100">
                            <div style={{ width: `${(item.spent / item.allocation) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                             <span>Spent: {item.spent.toLocaleString()}</span>
                             <span>Total: {item.allocation.toLocaleString()}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'Budget Distribution' : 'توزيع الموازنة'}</h3>
               <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={BUDGET_ITEMS}
                        dataKey="allocation"
                        nameKey={lang === 'ar' ? 'itemAr' : 'itemEn'}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                         {BUDGET_ITEMS.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={['#059669', '#10b981', '#3b82f6', '#60a5fa', '#f59e0b'][index % 5]} />
                         ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </div>
       )}

       {/* Banking Section */}
       {activeTab === 'banking' && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BANKS.map(bank => (
              <div key={bank.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Landmark size={64} className="text-slate-800" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800 mb-1">{bank.bankName}</h3>
                 <p className="text-slate-500 font-mono text-sm mb-4">{bank.accountNumber}</p>
                 <div className="text-2xl font-bold text-emerald-600 mb-2">
                   {bank.balance.toLocaleString()} {bank.currency}
                 </div>
                 <p className="text-xs text-slate-400 mb-4">Last Reconciled: {bank.lastReconciled}</p>
                 <div className="flex gap-2">
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded text-sm transition-colors">
                      {lang === 'en' ? 'Statement' : 'كشف حساب'}
                    </button>
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded text-sm transition-colors">
                      {lang === 'en' ? 'Reconcile' : 'مطابقة'}
                    </button>
                 </div>
              </div>
            ))}
         </div>
       )}

       {/* Cash Advances */}
       {activeTab === 'advances' && (
         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between">
              <h3 className="text-lg font-bold text-slate-800">{t.cashAdvances}</h3>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700">
                + {lang === 'en' ? 'New Request' : 'طلب جديد'}
              </button>
            </div>
            <table className="w-full text-left rtl:text-right text-sm">
               <thead className="bg-slate-50">
                  <tr>
                     <th className="px-6 py-3">{lang === 'en' ? 'Recipient' : 'المستفيد'}</th>
                     <th className="px-6 py-3">{lang === 'en' ? 'Type' : 'النوع'}</th>
                     <th className="px-6 py-3">{lang === 'en' ? 'Description' : 'الوصف'}</th>
                     <th className="px-6 py-3">{lang === 'en' ? 'Amount' : 'المبلغ'}</th>
                     <th className="px-6 py-3">{t.status}</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {CASH_ADVANCES.map(adv => (
                    <tr key={adv.id}>
                       <td className="px-6 py-4 font-medium">{adv.recipient}</td>
                       <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${adv.type === 'Permanent' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                             {adv.type}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-slate-600">{lang === 'ar' ? adv.descriptionAr : adv.descriptionEn}</td>
                       <td className="px-6 py-4 font-mono">{adv.amount.toLocaleString()}</td>
                       <td className="px-6 py-4">
                         <span className={`px-2 py-1 rounded text-xs font-medium ${adv.status === 'Approved' ? 'bg-green-100 text-green-700' : adv.status === 'Liquidated' ? 'bg-slate-100 text-slate-600' : 'bg-yellow-100 text-yellow-700'}`}>
                           {adv.status}
                         </span>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
       )}

       {/* Reports Grid */}
       {activeTab === 'reports' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Bank Reconciliation', 'Cash Advances', 'Financial Statements', 'Salary Analysis', 'Supplier Payments', 'Budget Execution'].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 cursor-pointer transition-colors group">
                  <div className="flex justify-between items-center mb-4">
                    <FileText className="text-slate-400 group-hover:text-emerald-600" />
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">PDF / Excel</span>
                  </div>
                  <h4 className="font-bold text-slate-800">{item}</h4>
                  <p className="text-sm text-slate-500 mt-2">Generate and export official government report.</p>
              </div>
            ))}
        </div>
       )}
    </div>
  );
};

// 5. WAREHOUSE MODULE
const WarehouseModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'inventory' | 'procurement' | 'assets'>('inventory');

  const TabButton = ({ id, label }: any) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === id ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-2 overflow-x-auto">
        <TabButton id="inventory" label={t.inventory} />
        <TabButton id="procurement" label={t.procurement} />
        <TabButton id="assets" label={t.fixedAssets} />
      </div>

       {activeTab === 'inventory' && (
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden lg:col-span-2">
               <div className="p-6 border-b border-slate-100 flex justify-between">
                 <h3 className="text-lg font-bold text-slate-800">{t.inventory}</h3>
                 <div className="flex gap-2">
                    <span className="bg-slate-100 px-3 py-1 rounded text-sm text-slate-600 flex items-center gap-1"><Building size={14}/> Main WH</span>
                    <span className="bg-slate-100 px-3 py-1 rounded text-sm text-slate-600 flex items-center gap-1"><Building size={14}/> Basra</span>
                 </div>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left rtl:text-right text-sm">
                   <thead className="bg-slate-50">
                      <tr>
                         <th className="px-4 py-3">{lang === 'en' ? 'Item' : 'المادة'}</th>
                         <th className="px-4 py-3">{lang === 'en' ? 'SKU' : 'الرمز'}</th>
                         <th className="px-4 py-3">{lang === 'en' ? 'Warehouse' : 'المخزن'}</th>
                         <th className="px-4 py-3">{lang === 'en' ? 'Qty' : 'الكمية'}</th>
                         <th className="px-4 py-3">{t.status}</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {INVENTORY.map(item => (
                         <tr key={item.id}>
                            <td className="px-4 py-3 font-medium">{lang === 'ar' ? item.nameAr : item.nameEn}</td>
                            <td className="px-4 py-3 text-slate-500 font-mono text-xs">{item.sku}</td>
                            <td className="px-4 py-3 text-slate-500">{item.warehouse}</td>
                            <td className="px-4 py-3">{item.quantity} {item.unit}</td>
                            <td className="px-4 py-3">
                               <span className={`px-2 py-1 rounded text-xs font-medium ${item.quantity === 0 ? 'bg-red-100 text-red-700' : item.quantity < 20 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
                                  {item.status}
                               </span>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </div>
         </div>
       )}

       {activeTab === 'procurement' && (
         <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
               {['Request', 'Pricing', 'Supplier Selection', 'Receiving', 'Payment'].map((step, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-slate-200 text-center shadow-sm">
                     <div className="text-xs text-slate-400 uppercase mb-1">Step {idx + 1}</div>
                     <div className="font-bold text-slate-700 text-sm">{step}</div>
                  </div>
               ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="p-6 border-b border-slate-100">
                 <h3 className="text-lg font-bold text-slate-800">{lang === 'en' ? 'Active Requests' : 'الطلبات النشطة'}</h3>
               </div>
               <div className="divide-y divide-slate-100">
                  {PROCUREMENT_REQUESTS.map(req => (
                     <div key={req.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                        <div>
                           <div className="font-bold text-slate-800">{req.description}</div>
                           <div className="text-sm text-slate-500 mt-1">{req.requester} • {req.date}</div>
                        </div>
                        <div className="text-right">
                           <div className="font-mono font-bold text-slate-700">{req.amount.toLocaleString()} IQD</div>
                           <div className="mt-1">
                              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                                {req.status}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
       )}

       {activeTab === 'assets' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="p-6 border-b border-slate-100">
               <h3 className="text-lg font-bold text-slate-800">{t.fixedAssets}</h3>
             </div>
             <div className="p-6 space-y-4">
                {ASSETS.map(asset => (
                   <div key={asset.id} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg">
                      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                         <Truck size={20} />
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between">
                            <h4 className="font-bold text-slate-800">{lang === 'ar' ? asset.nameAr : asset.nameEn}</h4>
                            <span className="text-sm font-mono text-slate-600">Purchased: {asset.value.toLocaleString()} IQD</span>
                         </div>
                         <div className="mt-2 text-xs text-slate-500 grid grid-cols-3 gap-2">
                            <div>Location: {asset.location}</div>
                            <div>Method: {asset.depreciationMethod}</div>
                            <div className="text-emerald-600 font-bold">Book Value: {asset.bookValue.toLocaleString()}</div>
                         </div>
                         <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                           <div className="bg-emerald-500 h-full" style={{ width: `${(asset.bookValue / asset.value) * 100}%` }}></div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       )}
    </div>
  );
};

// 6. SELF SERVICE MODULE (ESS)
const SelfServiceModule = ({ lang, user }: { lang: Language, user: User }) => {
  const t = TRANSLATIONS[lang];
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Users size={120} />
          </div>
          <div className="relative z-10 flex items-center gap-6">
             <img src={user.avatar} className="w-20 h-20 rounded-full border-4 border-white/20" alt="Profile" />
             <div>
               <h2 className="text-3xl font-bold mb-1">{user.name}</h2>
               <p className="text-emerald-100 opacity-90">{user.role} • {lang === 'en' ? 'IT Department' : 'قسم تكنولوجيا المعلومات'}</p>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Clock size={20} /></div>
                <h3 className="font-bold text-slate-800">{lang === 'en' ? 'Leave Balance' : 'رصيد الإجازات'}</h3>
             </div>
             <div className="text-3xl font-bold text-slate-800 mb-1">21 <span className="text-sm font-normal text-slate-500">{lang === 'en' ? 'Days' : 'يوم'}</span></div>
             <p className="text-xs text-slate-400">Annual Leave</p>
             <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 rounded text-sm transition-colors">
               {t.requestLeave}
             </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Wallet size={20} /></div>
                <h3 className="font-bold text-slate-800">{lang === 'en' ? 'Next Salary' : 'الراتب القادم'}</h3>
             </div>
             <div className="text-3xl font-bold text-slate-800 mb-1">1.5M <span className="text-sm font-normal text-slate-500">IQD</span></div>
             <p className="text-xs text-slate-400">Due in 12 days</p>
             <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 rounded text-sm transition-colors">
               {t.payslip}
             </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><CheckCircle size={20} /></div>
                <h3 className="font-bold text-slate-800">{lang === 'en' ? 'Evaluation' : 'التقييم السنوي'}</h3>
             </div>
             <div className="text-3xl font-bold text-slate-800 mb-1">4.8 <span className="text-sm font-normal text-slate-500">/ 5.0</span></div>
             <p className="text-xs text-slate-400">Excellent Performance</p>
             <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 rounded text-sm transition-colors">
               View Report
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
             <div className="p-6 border-b border-slate-100">
               <h3 className="font-bold text-slate-800">{lang === 'en' ? 'My Requests' : 'طلباتي'}</h3>
             </div>
             <div className="divide-y divide-slate-100">
                {MY_LEAVES.map(req => (
                  <div key={req.id} className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                           <FileText size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-slate-800 text-sm">{req.type} Leave</div>
                           <div className="text-xs text-slate-500">{req.startDate} • {req.days} Days</div>
                        </div>
                     </div>
                     <span className={`px-2 py-1 rounded text-xs font-medium ${req.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {req.status}
                     </span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="font-bold text-slate-800 mb-4">{lang === 'en' ? 'Company Documents' : 'وثائق الشركة'}</h3>
             <div className="space-y-3">
                {['Employee Handbook', 'Safety Guidelines', 'Holiday Calendar'].map((doc, i) => (
                   <div key={i} className="flex items-center p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                      <FileText size={18} className="text-emerald-500 mr-3 rtl:ml-3 rtl:mr-0" />
                      <span className="text-sm text-slate-700 font-medium">{doc}</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
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

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                   <h3 className="text-lg font-bold text-slate-800 mb-6">{lang === 'en' ? 'System Notifications' : 'تنبيهات النظام'}</h3>
                   <div className="space-y-4">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="p-2 bg-blue-100 text-blue-600 rounded-full h-fit">
                             <Bell size={16} />
                          </div>
                          <div>
                             <h4 className="font-bold text-sm text-slate-800">{lang === 'en' ? 'Budget Approval Required' : 'مطلوب الموافقة على الموازنة'}</h4>
                             <p className="text-xs text-slate-500 mt-1">Section II request for operational expenses needs review.</p>
                             <span className="text-[10px] text-slate-400 mt-2 block">2 hours ago</span>
                          </div>
                       </div>
                     ))}
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
