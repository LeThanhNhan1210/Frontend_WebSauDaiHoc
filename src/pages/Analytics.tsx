import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar, 
  Download, 
  Filter, 
  ChevronRight,
  PieChart as PieChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  MoreVertical,
  FileText
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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const majorData = [
  { name: 'CNTT', value: 450 },
  { name: 'Ngôn ngữ Anh', value: 380 },
  { name: 'Quản lý GD', value: 320 },
  { name: 'Tâm lý học', value: 280 },
  { name: 'Toán học', value: 210 },
  { name: 'Văn học', value: 190 },
];

const provinceData = [
  { name: 'TP.HCM', value: 65 },
  { name: 'Đồng Nai', value: 15 },
  { name: 'Bình Dương', value: 10 },
  { name: 'Long An', value: 5 },
  { name: 'Khác', value: 5 },
];

const COLORS = ['#004a99', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef'];

const trendData = [
  { name: 'Tuần 1', value: 120 },
  { name: 'Tuần 2', value: 240 },
  { name: 'Tuần 3', value: 180 },
  { name: 'Tuần 4', value: 360 },
  { name: 'Tuần 5', value: 420 },
  { name: 'Tuần 6', value: 380 },
];

export default function Analytics() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thống kê & Báo cáo</h1>
          <p className="text-gray-500">Phân tích dữ liệu tuyển sinh đợt 2 - Năm 2026</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Tháng 10/2026</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo PDF</span>
          </button>
        </div>
      </header>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Tổng hồ sơ', value: '1,842', trend: '+15.2%', up: true, icon: FileText, color: 'text-blue-600 bg-blue-50' },
          { label: 'Tỷ lệ trúng tuyển', value: '64.5%', trend: '+2.4%', up: true, icon: TrendingUp, color: 'text-green-600 bg-green-50' },
          { label: 'Thời gian xử lý TB', value: '2.4 ngày', trend: '-0.5 ngày', up: true, icon: Calendar, color: 'text-amber-600 bg-amber-50' },
          { label: 'Hồ sơ bị từ chối', value: '124', trend: '+8.1%', up: false, icon: Users, color: 'text-red-600 bg-red-50' },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-xl", metric.color)}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                metric.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              )}>
                {metric.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {metric.trend}
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">{metric.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Applications by Major */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Hồ sơ theo ngành đăng ký</span>
            </h3>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={majorData} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                <Tooltip 
                  cursor={{fill: '#f9fafb'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="value" fill="#004a99" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Phân bố theo tỉnh thành</span>
            </h3>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around h-80">
            <div className="w-full md:w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={provinceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {provinceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {provinceData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-gray-900 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Xu hướng nộp hồ sơ theo tuần</span>
          </h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-primary rounded-lg">Đợt 2 - 2026</button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-600">Đợt 1 - 2026</button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="value" stroke="#004a99" strokeWidth={3} fillOpacity={1} fill="url(#colorTrend)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Stats Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Chi tiết theo chuyên ngành</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input type="text" placeholder="Tìm chuyên ngành..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Chuyên ngành</th>
                <th className="px-6 py-4 font-semibold text-center">Tổng hồ sơ</th>
                <th className="px-6 py-4 font-semibold text-center">Đã xác minh</th>
                <th className="px-6 py-4 font-semibold text-center">Trúng tuyển</th>
                <th className="px-6 py-4 font-semibold text-center">Tỷ lệ chọi</th>
                <th className="px-6 py-4 font-semibold text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Thạc sĩ Công nghệ thông tin', total: 450, verified: 420, approved: 120, ratio: '1:3.7', status: 'Đã đủ chỉ tiêu' },
                { name: 'Thạc sĩ Ngôn ngữ Anh', total: 380, verified: 350, approved: 150, ratio: '1:2.5', status: 'Đang xét' },
                { name: 'Thạc sĩ Quản lý Giáo dục', total: 320, verified: 310, approved: 100, ratio: '1:3.2', status: 'Đang xét' },
                { name: 'Tiến sĩ Tâm lý học', total: 280, verified: 260, approved: 40, ratio: '1:7.0', status: 'Cạnh tranh cao' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{row.total}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{row.verified}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{row.approved}</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">{row.ratio}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      row.status === 'Đã đủ chỉ tiêu' ? "bg-red-50 text-red-600" :
                      row.status === 'Đang xét' ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {row.status}
                    </span>
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
