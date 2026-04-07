import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Lock, 
  Eye, 
  Edit3, 
  Trash2,
  CheckCircle2,
  XCircle,
  ShieldAlert
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Security() {
  const [users, setUsers] = useState([
    { id: '1', name: 'Nguyễn Văn A', email: 'vana@hcmue.edu.vn', role: 'Admin', status: 'Active', lastLogin: '10/10/2026 08:30' },
    { id: '2', name: 'Trần Thị B', email: 'thib@hcmue.edu.vn', role: 'Approver', status: 'Active', lastLogin: '10/10/2026 09:15' },
    { id: '3', name: 'Lê Văn C', email: 'vanc@hcmue.edu.vn', role: 'Validator', status: 'Inactive', lastLogin: '05/10/2026 14:20' },
    { id: '4', name: 'Phạm Minh D', email: 'minhd@hcmue.edu.vn', role: 'Reviewer', status: 'Active', lastLogin: '10/10/2026 10:05' },
    { id: '5', name: 'Hoàng Văn E', email: 'vane@hcmue.edu.vn', role: 'Viewer', status: 'Active', lastLogin: '09/10/2026 16:45' },
  ]);

  const roles = [
    { name: 'Admin', count: 2, color: 'bg-red-500', desc: 'Toàn quyền hệ thống' },
    { name: 'Approver', count: 5, color: 'bg-blue-500', desc: 'Phê duyệt hồ sơ cuối cùng' },
    { name: 'Validator', count: 12, color: 'bg-green-500', desc: 'Xác minh tính hợp lệ tài liệu' },
    { name: 'Reviewer', count: 8, color: 'bg-amber-500', desc: 'Đánh giá chuyên môn' },
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bảo mật & Phân quyền</h1>
          <p className="text-gray-500">Quản lý tài khoản cán bộ và quyền truy cập hệ thống</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <UserPlus className="w-4 h-4" />
          <span>Thêm tài khoản mới</span>
        </button>
      </header>

      {/* Role Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, idx) => (
          <motion.div
            key={role.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg", role.color)}>
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{role.count}</span>
            </div>
            <h3 className="font-bold text-gray-900">{role.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{role.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* User Management Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="font-bold text-gray-900">Danh sách tài khoản cán bộ</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Tìm kiếm cán bộ..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none w-64" />
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
                <th className="px-6 py-4 font-semibold">Cán bộ</th>
                <th className="px-6 py-4 font-semibold">Vai trò</th>
                <th className="px-6 py-4 font-semibold">Trạng thái</th>
                <th className="px-6 py-4 font-semibold">Đăng nhập cuối</th>
                <th className="px-6 py-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      user.role === 'Admin' ? "bg-red-50 text-red-600" :
                      user.role === 'Approver' ? "bg-blue-50 text-blue-600" :
                      "bg-green-50 text-green-600"
                    )}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5">
                      {user.status === 'Active' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={cn(
                        "text-sm",
                        user.status === 'Active' ? "text-green-600 font-medium" : "text-gray-400"
                      )}>
                        {user.status === 'Active' ? 'Đang hoạt động' : 'Đã khóa'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Xem chi tiết">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Chỉnh sửa">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Khóa tài khoản">
                        <Lock className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Xóa">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <ShieldAlert className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-gray-900">Chính sách bảo mật</h3>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Xác thực 2 yếu tố (2FA)', status: 'Bắt buộc cho Admin', enabled: true },
              { label: 'Thời gian hết hạn phiên làm việc', status: '30 phút', enabled: true },
              { label: 'Yêu cầu đổi mật khẩu định kỳ', status: '90 ngày', enabled: false },
              { label: 'Giới hạn IP truy cập', status: 'Chỉ mạng nội bộ', enabled: false },
            ].map((policy, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-gray-900">{policy.label}</p>
                  <p className="text-xs text-gray-500">{policy.status}</p>
                </div>
                <div className={cn(
                  "w-10 h-5 rounded-full relative transition-colors cursor-pointer",
                  policy.enabled ? "bg-primary" : "bg-gray-200"
                )}>
                  <div className={cn(
                    "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                    policy.enabled ? "right-1" : "left-1"
                  )}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden flex items-center">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Mẹo bảo mật</h3>
            <p className="text-blue-100 mb-6">
              Luôn kiểm tra kỹ quyền hạn trước khi cấp cho tài khoản mới. Tránh sử dụng chung tài khoản cho nhiều cán bộ khác nhau.
            </p>
            <button className="px-6 py-2 bg-white text-primary rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Xem hướng dẫn bảo mật
            </button>
          </div>
          <ShieldCheck className="absolute -bottom-8 -right-8 w-48 h-48 text-white/10" />
        </div>
      </div>
    </div>
  );
}
