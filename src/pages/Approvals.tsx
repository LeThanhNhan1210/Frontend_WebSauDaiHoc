import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileCheck, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Eye, 
  ChevronRight, 
  User, 
  TrendingUp, 
  Award, 
  Download, 
  MoreVertical,
  CheckCircle2,
  XCircle as XCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Approvals() {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);

  const candidates = [
    { id: '1', name: 'Nguyễn Văn A', major: 'Thạc sĩ CNTT', score: 8.5, status: 'Verified', priority: 'Cao' },
    { id: '2', name: 'Trần Thị B', major: 'Thạc sĩ Ngôn ngữ Anh', score: 7.8, status: 'Verified', priority: 'Trung bình' },
    { id: '3', name: 'Lê Văn C', major: 'Thạc sĩ Quản lý Giáo dục', score: 9.2, status: 'Verified', priority: 'Cao' },
    { id: '4', name: 'Phạm Minh D', major: 'Tiến sĩ Tâm lý học', score: 8.0, status: 'Verified', priority: 'Trung bình' },
    { id: '5', name: 'Hoàng Văn E', major: 'Thạc sĩ Toán học', score: 7.5, status: 'Verified', priority: 'Thấp' },
    { id: '6', name: 'Vũ Thị F', major: 'Thạc sĩ Văn học', score: 8.8, status: 'Verified', priority: 'Cao' },
  ];

  const toggleSelect = (id: string) => {
    setSelectedCandidates(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedCandidates(prev => 
      prev.length === candidates.length ? [] : candidates.map(c => c.id)
    );
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Phê duyệt hồ sơ</h1>
          <p className="text-gray-500">Hội đồng tuyển sinh xem xét và ra quyết định cuối cùng</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Xuất danh sách</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Phê duyệt hàng loạt</span>
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 text-primary rounded-xl">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">156</span>
          </div>
          <h3 className="font-bold text-gray-900">Chờ phê duyệt</h3>
          <p className="text-xs text-gray-500 mt-1">Đã qua bước xác minh văn bằng</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">842</span>
          </div>
          <h3 className="font-bold text-gray-900">Đã trúng tuyển</h3>
          <p className="text-xs text-gray-500 mt-1">Đã gửi thông báo kết quả</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <XCircle2 className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">42</span>
          </div>
          <h3 className="font-bold text-gray-900">Không đạt</h3>
          <p className="text-xs text-gray-500 mt-1">Hồ sơ không đủ điều kiện</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <h3 className="font-bold text-gray-900">Danh sách ứng viên</h3>
            {selectedCandidates.length > 0 && (
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                Đã chọn {selectedCandidates.length}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Tìm kiếm ứng viên..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none w-64" />
            </div>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    checked={selectedCandidates.length === candidates.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-4 font-semibold">Ứng viên</th>
                <th className="px-6 py-4 font-semibold">Ngành đăng ký</th>
                <th className="px-6 py-4 font-semibold">Điểm xét tuyển</th>
                <th className="px-6 py-4 font-semibold">Độ ưu tiên</th>
                <th className="px-6 py-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className={cn(
                  "hover:bg-gray-50 transition-colors group",
                  selectedCandidates.includes(candidate.id) ? "bg-blue-50/50" : ""
                )}>
                  <td className="px-6 py-4">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => toggleSelect(candidate.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{candidate.name}</p>
                        <p className="text-xs text-gray-500">ID: HCMUE-{candidate.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{candidate.major}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-900">{candidate.score}</span>
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${(candidate.score / 10) * 100}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      candidate.priority === 'Cao' ? "bg-red-50 text-red-600" :
                      candidate.priority === 'Trung bình' ? "bg-amber-50 text-amber-600" :
                      "bg-blue-50 text-blue-600"
                    )}>
                      {candidate.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Xem chi tiết">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors" title="Phê duyệt">
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Từ chối">
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-gray-900">Tiêu chí phê duyệt</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-700">Điểm sàn xét tuyển</span>
                <span className="font-bold text-primary">7.0</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-700">Chỉ tiêu còn lại</span>
                <span className="font-bold text-primary">124/200</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-700">Ưu tiên khu vực</span>
                <span className="font-bold text-green-600">Đã áp dụng</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-700">Xác minh văn bằng</span>
                <span className="font-bold text-green-600">100% Hoàn tất</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Ghi chú hội đồng</h3>
          <textarea 
            placeholder="Nhập nhận xét hoặc ghi chú chung cho đợt phê duyệt này..."
            className="w-full h-32 p-4 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"
          ></textarea>
          <button className="w-full mt-4 btn-primary">
            Lưu ghi chú
          </button>
        </div>
      </div>
    </div>
  );
}
