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
  FileText, 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  ArrowLeft,
  Download,
  ExternalLink,
  ShieldCheck,
  History,
  Clock,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Verification({ role }: { role?: string }) {
  const isReviewer = role === 'reviewer';
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const candidates = [
    { id: '1', name: 'Nguyễn Văn A', cccd: '012345678901', major: 'Thạc sĩ CNTT', status: 'Pending', date: '12/10/2026', phone: '0901234567', email: 'vana@gmail.com' },
    { id: '2', name: 'Trần Thị B', cccd: '012345678902', major: 'Thạc sĩ Ngôn ngữ Anh', status: 'Verifying', date: '11/10/2026', phone: '0901234568', email: 'thib@gmail.com' },
    { id: '3', name: 'Lê Văn C', cccd: '012345678903', major: 'Thạc sĩ Quản lý Giáo dục', status: 'Pending', date: '10/10/2026', phone: '0901234569', email: 'vanc@gmail.com' },
    { id: '4', name: 'Phạm Minh D', cccd: '012345678904', major: 'Tiến sĩ Tâm lý học', status: 'Rejected', date: '09/10/2026', phone: '0901234570', email: 'minhd@gmail.com' },
    { id: '5', name: 'Hoàng Văn E', cccd: '012345678905', major: 'Thạc sĩ Toán học', status: 'Verified', date: '08/10/2026', phone: '0901234571', email: 'vane@gmail.com' },
  ];

  if (selectedCandidate) {
    return <VerificationDetail candidate={selectedCandidate} onBack={() => setSelectedCandidate(null)} role={role} />;
  }

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isReviewer ? 'Tiếp nhận & Kiểm tra nội dung' : 'Thẩm định hồ sơ'}
          </h1>
          <p className="text-gray-500">
            {isReviewer ? 'Kiểm tra tính đầy đủ và tính chính xác của nội dung hồ sơ' : 'Thẩm định tính pháp lý của văn bằng và xác minh điểm'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input type="text" placeholder="Tìm tên, CCCD, mã hồ sơ..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none w-64" />
          </div>
          <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Chờ xác minh', count: 24, color: 'text-amber-600 bg-amber-50', icon: Clock },
          { label: 'Đang xử lý', count: 8, color: 'text-blue-600 bg-blue-50', icon: Activity },
          { label: 'Đã xác minh', count: 156, color: 'text-green-600 bg-green-50', icon: CheckCircle },
          { label: 'Cần bổ sung', count: 12, color: 'text-red-600 bg-red-50', icon: AlertCircle },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={cn("p-3 rounded-xl", stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Candidate List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{candidate.name}</p>
                        <p className="text-xs text-gray-500">CCCD: {candidate.cccd}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{candidate.major}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{candidate.date}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      candidate.status === 'Pending' ? "bg-amber-50 text-amber-600" :
                      candidate.status === 'Verifying' ? "bg-blue-50 text-blue-600" :
                      candidate.status === 'Verified' ? "bg-green-50 text-green-600" :
                      "bg-red-50 text-red-600"
                    )}>
                      {candidate.status === 'Pending' ? 'Chờ xác minh' :
                       candidate.status === 'Verifying' ? 'Đang xử lý' :
                       candidate.status === 'Verified' ? 'Đã xác minh' : 'Từ chối'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedCandidate(candidate)}
                      className="flex items-center space-x-2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <span>Xử lý</span>
                      <ChevronRight className="w-4 h-4" />
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

function VerificationDetail({ candidate, onBack }: { candidate: any, onBack: () => void }) {
  const [documents, setDocuments] = useState([
    { id: '1', name: 'Bằng tốt nghiệp Đại học', type: 'Diploma', status: 'Pending', file: 'Bang_Tot_Nghiep.pdf' },
    { id: '2', name: 'Bảng điểm Đại học', type: 'Transcript', status: 'Pending', file: 'Bang_Diem.pdf' },
    { id: '3', name: 'Chứng chỉ Ngoại ngữ (IELTS)', type: 'Certificate', status: 'Pending', file: 'IELTS_Certificate.pdf' },
    { id: '4', name: 'Sơ yếu lý lịch', type: 'CV', status: 'Verified', file: 'CV_NguyenVanA.pdf' },
  ]);

  const handleVerify = (id: string, status: 'Verified' | 'Rejected') => {
    setDocuments(docs => docs.map(d => d.id === id ? { ...d, status } : d));
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg bg-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Chi tiết hồ sơ: {candidate.name}</h1>
            <p className="text-gray-500">Mã hồ sơ: <span className="font-mono font-bold text-primary">HCMUE-2026-00124</span></p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition-colors">
            Yêu cầu bổ sung
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Hoàn tất xác minh</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Candidate Info Card */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <User className="w-5 h-5 text-primary" />
              <span>Thông tin ứng viên</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-lg">
                  {candidate.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{candidate.name}</p>
                  <p className="text-xs text-gray-500">CCCD: {candidate.cccd}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-4 border-t">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{candidate.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{candidate.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Ngày sinh: 12/10/1995</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <History className="w-5 h-5 text-primary" />
              <span>Lịch sử xử lý</span>
            </h3>
            <div className="space-y-4">
              {[
                { action: 'Nộp hồ sơ', time: '12/10/2026 08:30', user: 'Ứng viên' },
                { action: 'Thanh toán lệ phí', time: '12/10/2026 09:15', user: 'Hệ thống' },
                { action: 'Bắt đầu xác minh', time: '13/10/2026 14:20', user: 'Lê Văn C' },
              ].map((log, idx) => (
                <div key={idx} className="flex items-start space-x-3 relative">
                  {idx < 2 && <div className="absolute left-2 top-6 w-0.5 h-6 bg-gray-100"></div>}
                  <div className="w-4 h-4 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{log.action}</p>
                    <p className="text-[10px] text-gray-500">{log.time} • {log.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Document Verification Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <FileCheck className="w-5 h-5 text-primary" />
              <span>Danh mục tài liệu cần xác minh</span>
            </h3>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="p-4 border border-gray-100 rounded-2xl hover:border-primary/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-50 text-primary rounded-xl">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{doc.name}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{doc.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg" title="Xem tài liệu">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-200 rounded-lg" title="Tải xuống">
                        <Download className="w-5 h-5" />
                      </button>
                      <div className="h-8 w-px bg-gray-100 mx-2"></div>
                      {doc.status === 'Pending' ? (
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleVerify(doc.id, 'Rejected')}
                            className="px-4 py-1.5 border border-red-200 text-red-600 text-xs font-bold rounded-lg hover:bg-red-50 transition-colors"
                          >
                            Không hợp lệ
                          </button>
                          <button 
                            onClick={() => handleVerify(doc.id, 'Verified')}
                            className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors"
                          >
                            Hợp lệ
                          </button>
                        </div>
                      ) : (
                        <div className={cn(
                          "flex items-center space-x-1.5 px-3 py-1.5 rounded-lg",
                          doc.status === 'Verified' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                        )}>
                          {doc.status === 'Verified' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          <span className="text-xs font-bold uppercase tracking-wider">{doc.status === 'Verified' ? 'Hợp lệ' : 'Từ chối'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Document Preview Placeholder */}
                  <div className="mt-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                      <ExternalLink className="w-8 h-8 mb-2" />
                      <p className="text-sm font-medium">Nhấn để xem bản xem trước của {doc.file}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Tiêu chuẩn xác minh</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Văn bằng có dấu mộc đỏ hợp lệ',
                'Thông tin cá nhân khớp với CCCD',
                'Bảng điểm có chữ ký lãnh đạo',
                'Chứng chỉ ngoại ngữ còn thời hạn',
                'Ảnh thẻ đúng quy định',
                'Lệ phí đã được xác nhận'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center bg-white">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Activity {
  action: string;
  time: string;
  user: string;
}
