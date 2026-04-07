import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  User, 
  Activity, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function AuditLogs() {
  const [logs, setLogs] = useState([
    { id: '1', timestamp: '10/10/2026 14:30:22', actor: 'Admin (Quản trị viên)', action: 'Cập nhật cấu hình đợt tuyển sinh', target: 'Admission_2026_D2', status: 'Success', ip: '192.168.1.1' },
    { id: '2', timestamp: '10/10/2026 14:25:10', actor: 'Nguyễn Văn A (Candidate)', action: 'Đăng nhập hệ thống', target: 'Account_012345678901', status: 'Success', ip: '113.161.2.45' },
    { id: '3', timestamp: '10/10/2026 14:15:05', actor: 'Trần Thị B (Approver)', action: 'Phê duyệt hồ sơ', target: 'App_HCMUE_2026_00124', status: 'Success', ip: '192.168.1.15' },
    { id: '4', timestamp: '10/10/2026 14:02:45', actor: 'Unknown', action: 'Đăng nhập thất bại', target: 'Account_admin', status: 'Failure', ip: '45.12.34.89' },
    { id: '5', timestamp: '10/10/2026 13:55:12', actor: 'Lê Văn C (Validator)', action: 'Xác minh tài liệu', target: 'Doc_Diploma_00124', status: 'Success', ip: '192.168.1.22' },
    { id: '6', timestamp: '10/10/2026 13:40:30', actor: 'Phạm Minh D (Reviewer)', action: 'Đánh giá chuyên môn', target: 'App_HCMUE_2026_00124', status: 'Success', ip: '192.168.1.18' },
    { id: '7', timestamp: '10/10/2026 13:20:15', actor: 'System', action: 'Sao lưu dữ liệu định kỳ', target: 'Database_Backup', status: 'Success', ip: 'Internal' },
  ]);

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nhật ký hệ thống</h1>
          <p className="text-gray-500">Theo dõi và truy vết mọi hoạt động trên hệ thống</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Hôm nay</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input type="text" placeholder="Tìm kiếm theo hành động, đối tượng, IP..." className="pl-10 pr-4 py-2 w-full text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
            <option>Tất cả vai trò</option>
            <option>Admin</option>
            <option>Candidate</option>
            <option>Approver</option>
            <option>Validator</option>
          </select>
          <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
            <option>Tất cả trạng thái</option>
            <option>Thành công</option>
            <option>Thất bại</option>
          </select>
          <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Thời gian</th>
                <th className="px-6 py-4 font-semibold">Người thực hiện</th>
                <th className="px-6 py-4 font-semibold">Hành động</th>
                <th className="px-6 py-4 font-semibold">Đối tượng</th>
                <th className="px-6 py-4 font-semibold">Trạng thái</th>
                <th className="px-6 py-4 font-semibold">IP</th>
                <th className="px-6 py-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{log.timestamp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                        log.actor === 'System' ? "bg-gray-100 text-gray-600" : "bg-blue-50 text-primary"
                      )}>
                        {log.actor === 'System' ? 'S' : log.actor[0]}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{log.actor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{log.action}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{log.target}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5">
                      {log.status === 'Success' ? (
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className={cn(
                        "text-xs font-bold uppercase tracking-wider",
                        log.status === 'Success' ? "text-green-600" : "text-red-600"
                      )}>
                        {log.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500 font-mono">{log.ip}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">Hiển thị 1-7 trên tổng số 1,245 nhật ký</p>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-lg text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-lg text-sm">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-lg text-sm">178</button>
            <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
