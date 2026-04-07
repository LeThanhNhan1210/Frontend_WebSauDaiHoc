import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileCheck, 
  ShieldCheck, 
  History, 
  BarChart3, 
  Settings, 
  LogOut,
  UserCircle,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  role: 'candidate' | 'approver' | 'validator' | 'reviewer' | 'viewer' | 'admin' | 'auditor';
  username?: string;
}

export default function Sidebar({ role, username }: SidebarProps) {
  const navigate = useNavigate();
  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Tổng quan' },
    { to: '/admin/approvals', icon: FileCheck, label: 'Phê duyệt' },
    { to: '/admin/security', icon: ShieldCheck, label: 'Bảo mật & Quyền' },
    { to: '/admin/audit-logs', icon: History, label: 'Nhật ký hệ thống' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Thống kê & Báo cáo' },
  ];

  const candidateLinks = [
    { to: '/candidate/dashboard', icon: LayoutDashboard, label: 'Trang chủ' },
    { to: '/candidate/application', icon: FileText, label: 'Hồ sơ của tôi' },
    { to: '/candidate/profile', icon: UserCircle, label: 'Thông tin cá nhân' },
  ];

  const validatorLinks = [
    { to: '/validator/dashboard', icon: LayoutDashboard, label: 'Tổng quan' },
    { to: '/validator/verification', icon: FileCheck, label: 'Xác minh hồ sơ' },
  ];

  const reviewerLinks = [
    { to: '/validator/dashboard', icon: LayoutDashboard, label: 'Tiếp nhận hồ sơ' },
    { to: '/validator/verification', icon: FileCheck, label: 'Kiểm tra tính đầy đủ' },
  ];

  const viewerLinks = [
    { to: '/admin/analytics', icon: BarChart3, label: 'Thống kê tuyển sinh' },
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Báo cáo tổng hợp' },
  ];

  const auditorLinks = [
    { to: '/admin/audit-logs', icon: History, label: 'Nhật ký hệ thống' },
    { to: '/admin/security', icon: ShieldCheck, label: 'Kiểm tra quyền hạn' },
  ];

  const approverLinks = [
    { to: '/admin/approvals', icon: FileCheck, label: 'Duyệt danh sách' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Kết quả tuyển sinh' },
  ];

  const getLinks = () => {
    switch (role) {
      case 'admin': return adminLinks;
      case 'validator': return validatorLinks;
      case 'reviewer': return reviewerLinks;
      case 'viewer': return viewerLinks;
      case 'auditor': return auditorLinks;
      case 'approver': return approverLinks;
      default: return candidateLinks;
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img 
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/30/Logo_HCMUE.png/200px-Logo_HCMUE.png" 
            alt="HCMUE Logo" 
            className="w-10 h-10"
            referrerPolicy="no-referrer"
          />
          <div>
            <h1 className="font-bold text-primary text-sm leading-tight">HCMUE</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Admission System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">Menu chính</div>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => cn(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              isActive 
                ? "bg-blue-50 text-primary font-semibold shadow-sm" 
                : "text-gray-600 hover:bg-gray-50 hover:text-primary"
            )}
          >
            <link.icon className={cn(
              "w-5 h-5",
              "group-hover:scale-110 transition-transform"
            )} />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {role.substring(0, 2).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-gray-900 truncate">
                {username || (
                  role === 'admin' ? 'Quản trị viên' : 
                  role === 'candidate' ? 'Thí sinh' :
                  role === 'validator' ? 'Thẩm định viên' :
                  role === 'reviewer' ? 'Chuyên viên TN' :
                  role === 'viewer' ? 'Ban Giám hiệu' :
                  role === 'auditor' ? 'Kiểm toán viên' : 'Trưởng phòng'
                )}
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{role}</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="w-full flex items-center justify-center space-x-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất</span>
          </button>
        </div>
        <div className="flex items-center justify-between px-2">
          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-gray-400">v1.0.4-stable</span>
        </div>
      </div>
    </aside>
  );
}
