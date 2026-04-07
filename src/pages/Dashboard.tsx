import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  Calendar,
  ChevronRight,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Download,
  Plus,
  Phone,
  Mail
} from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Thứ 2', value: 400 },
  { name: 'Thứ 3', value: 300 },
  { name: 'Thứ 4', value: 600 },
  { name: 'Thứ 5', value: 800 },
  { name: 'Thứ 6', value: 500 },
  { name: 'Thứ 7', value: 900 },
  { name: 'Chủ nhật', value: 700 },
];

interface DashboardProps {
  role: 'candidate' | 'approver' | 'validator' | 'reviewer' | 'viewer' | 'admin' | 'auditor';
}

export default function Dashboard({ role }: DashboardProps) {
  if (role === 'admin' || role === 'viewer' || role === 'auditor' || role === 'approver') {
    return <AdminDashboard role={role} />;
  } else if (role === 'validator' || role === 'reviewer') {
    return <ValidatorDashboard role={role} />;
  } else {
    return <CandidateDashboard />;
  }
}

function AdminDashboard({ role }: { role: string }) {
  const stats = [
    { label: 'Tổng hồ sơ', value: '1,284', change: '+12%', icon: FileText, color: 'bg-blue-500' },
    { label: 'Đã xác minh', value: '856', change: '+8%', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Chờ xử lý', value: '342', change: '-5%', icon: Clock, color: 'bg-amber-500' },
    { label: 'Cần bổ sung', value: '86', change: '+2%', icon: AlertCircle, color: 'bg-red-500' },
  ];

  const getTitle = () => {
    if (role === 'viewer') return 'Báo cáo Thống kê (Ban Giám hiệu)';
    if (role === 'auditor') return 'Giám sát Hệ thống (Kiểm toán)';
    if (role === 'approver') return 'Tổng quan Phê duyệt (Trưởng phòng)';
    return 'Quản trị Hệ thống';
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{getTitle()}</h1>
          <p className="text-gray-500">Chào mừng trở lại, {role.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input type="text" placeholder="Tìm kiếm hồ sơ..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all w-64" />
          </div>
          <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Tạo đợt tuyển sinh</span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn("p-3 rounded-xl text-white shadow-lg", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                stat.change.startsWith('+') ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              )}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts & Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-gray-900">Lưu lượng hồ sơ</h3>
              <p className="text-xs text-gray-500">Thống kê trong 7 ngày gần nhất</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">Tuần</button>
              <button className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors">Tháng</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#004a99" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#004a99" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="value" stroke="#004a99" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Hoạt động gần đây</h3>
            <button className="text-xs text-primary font-semibold hover:underline">Xem tất cả</button>
          </div>
          <div className="space-y-6">
            {[
              { user: 'Nguyễn Văn A', action: 'đã nộp hồ sơ mới', time: '5 phút trước', type: 'new' },
              { user: 'Trần Thị B', action: 'đã cập nhật văn bằng', time: '12 phút trước', type: 'update' },
              { user: 'Lê Văn C', action: 'đã thanh toán lệ phí', time: '45 phút trước', type: 'payment' },
              { user: 'Phạm Minh D', action: 'đã hoàn thành xác minh', time: '1 giờ trước', type: 'verify' },
              { user: 'Hoàng Văn E', action: 'đã nộp hồ sơ mới', time: '2 giờ trước', type: 'new' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className={cn(
                  "w-2 h-2 mt-2 rounded-full",
                  activity.type === 'new' ? "bg-blue-500" : 
                  activity.type === 'payment' ? "bg-green-500" : "bg-amber-500"
                )}></div>
                <div>
                  <p className="text-sm text-gray-900">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Hồ sơ mới nhất</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Ứng viên</th>
                <th className="px-6 py-4 font-semibold">Ngành đăng ký</th>
                <th className="px-6 py-4 font-semibold">Ngày nộp</th>
                <th className="px-6 py-4 font-semibold">Trạng thái</th>
                <th className="px-6 py-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Nguyễn Văn A', major: 'Thạc sĩ CNTT', date: '12/10/2026', status: 'Chờ xác minh', color: 'text-amber-600 bg-amber-50' },
                { name: 'Trần Thị B', major: 'Thạc sĩ Ngôn ngữ Anh', date: '11/10/2026', status: 'Đã xác minh', color: 'text-green-600 bg-green-50' },
                { name: 'Lê Văn C', major: 'Thạc sĩ Quản lý Giáo dục', date: '10/10/2026', status: 'Cần bổ sung', color: 'text-red-600 bg-red-50' },
                { name: 'Phạm Minh D', major: 'Tiến sĩ Tâm lý học', date: '09/10/2026', status: 'Đã xác minh', color: 'text-green-600 bg-green-50' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.major}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", row.color)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CandidateDashboard() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chào mừng, Nguyễn Văn A</h1>
          <p className="text-gray-500">Mã hồ sơ: <span className="font-mono font-bold text-primary">HCMUE-2026-00124</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Application Status Stepper */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-8">Trạng thái hồ sơ</h3>
        <div className="relative">
          <div className="absolute top-5 left-0 w-full h-1 bg-gray-100 -z-0"></div>
          <div className="absolute top-5 left-0 w-1/4 h-1 bg-primary -z-0 transition-all duration-1000"></div>
          
          <div className="flex justify-between relative z-10">
            {[
              { label: 'Khởi tạo', status: 'complete', date: '12/10/2026' },
              { label: 'Đã nộp', status: 'current', date: 'Đang chờ' },
              { label: 'Xác minh', status: 'upcoming', date: '-' },
              { label: 'Phê duyệt', status: 'upcoming', date: '-' },
              { label: 'Kết quả', status: 'upcoming', date: '-' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md",
                  step.status === 'complete' ? "bg-green-500 text-white" :
                  step.status === 'current' ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
                )}>
                  {step.status === 'complete' ? <CheckCircle className="w-5 h-5" /> : <span className="text-sm font-bold">{idx + 1}</span>}
                </div>
                <span className={cn("mt-3 text-xs font-bold uppercase tracking-wider", step.status === 'upcoming' ? "text-gray-400" : "text-gray-900")}>
                  {step.label}
                </span>
                <span className="text-[10px] text-gray-400 mt-1">{step.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900">Thông tin đăng ký</h3>
              <button className="text-sm text-primary font-semibold hover:underline">Chỉnh sửa</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Ngành đăng ký</p>
                <p className="font-medium text-gray-900">Thạc sĩ Công nghệ thông tin</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Hình thức đào tạo</p>
                <p className="font-medium text-gray-900">Chính quy</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Đợt tuyển sinh</p>
                <p className="font-medium text-gray-900">Đợt 2 - Năm 2026</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Lệ phí hồ sơ</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Đã thanh toán
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">Tài liệu đã tải lên</h3>
            <div className="space-y-4">
              {[
                { name: 'Bang_Tot_Nghiep_Dai_Hoc.pdf', size: '2.4 MB', date: '12/10/2026', status: 'Hợp lệ' },
                { name: 'Bang_Diem_Dai_Hoc.pdf', size: '1.8 MB', date: '12/10/2026', status: 'Hợp lệ' },
                { name: 'Chung_Chi_Ngoai_Ngu.pdf', size: '1.2 MB', date: '12/10/2026', status: 'Chờ duyệt' },
              ].map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                    file.status === 'Hợp lệ' ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {file.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-primary p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Thông báo mới</h3>
              <p className="text-blue-100 text-sm mb-4">Bạn có 2 thông báo mới liên quan đến hồ sơ của mình.</p>
              <button className="w-full py-2 bg-white text-primary rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                Xem ngay
              </button>
            </div>
            <Bell className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10" />
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Hỗ trợ kỹ thuật</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary" />
                <span>028 3835 2020 (Ext: 123)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <span>tuyensinh@hcmue.edu.vn</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Thứ 2 - Thứ 6 (07:30 - 17:00)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValidatorDashboard({ role }: { role: string }) {
  const isReviewer = role === 'reviewer';
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isReviewer ? 'Tiếp nhận & Kiểm tra hồ sơ' : 'Thẩm định hồ sơ'}
          </h1>
          <p className="text-gray-500">
            {isReviewer ? 'Kiểm tra tính đầy đủ của hồ sơ' : 'Thẩm định tính pháp lý của văn bằng'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Bắt đầu xác minh</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Đã xử lý hôm nay</p>
          <p className="text-3xl font-bold text-gray-900">12/36</p>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
            <div className="bg-green-500 h-full rounded-full w-1/3"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Thời gian TB / hồ sơ</p>
          <p className="text-3xl font-bold text-gray-900">8.5 phút</p>
          <p className="text-xs text-green-600 mt-2 font-medium">Nhanh hơn 12% so với hôm qua</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Tỷ lệ hồ sơ lỗi</p>
          <p className="text-3xl font-bold text-gray-900">14%</p>
          <p className="text-xs text-amber-600 mt-2 font-medium">Chủ yếu thiếu bảng điểm</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Danh sách chờ xác minh</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Tìm tên, CCCD..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Ứng viên</th>
                <th className="px-6 py-4 font-semibold">Thời gian chờ</th>
                <th className="px-6 py-4 font-semibold">Độ ưu tiên</th>
                <th className="px-6 py-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Nguyễn Văn A', wait: '15 phút', priority: 'Cao', color: 'text-red-600 bg-red-50' },
                { name: 'Trần Thị B', wait: '45 phút', priority: 'Trung bình', color: 'text-amber-600 bg-amber-50' },
                { name: 'Lê Văn C', wait: '1 giờ', priority: 'Thấp', color: 'text-blue-600 bg-blue-50' },
                { name: 'Phạm Minh D', wait: '2 giờ', priority: 'Thấp', color: 'text-blue-600 bg-blue-50' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.wait}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", row.color)}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-800 transition-colors">
                      Xử lý ngay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
