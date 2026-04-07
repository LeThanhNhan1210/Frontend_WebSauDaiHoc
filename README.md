# Hệ thống Tuyển sinh Sau đại học - HCMUE (Postgraduate Admission System)

Hệ thống quản lý quy trình tuyển sinh sau đại học toàn diện, hỗ trợ từ khâu đăng ký của thí sinh đến khâu thẩm định, phê duyệt và công bố kết quả của nhà trường.

## 🏗 Kiến trúc Hệ thống

Hệ thống được xây dựng theo kiến trúc **Single Page Application (SPA)** hiện đại, tập trung vào trải nghiệm người dùng mượt mà và khả năng phản hồi nhanh.

### 1. Phân tầng Ứng dụng
- **Presentation Layer (React):** Sử dụng React 18 với Functional Components và Hooks.
- **Routing Layer (React Router):** Quản lý điều hướng và phân quyền truy cập dựa trên vai trò (RBAC).
- **Styling Layer (Tailwind CSS):** Sử dụng Utility-first CSS để đảm bảo giao diện nhất quán, hiện đại và responsive.
- **State Management:** Quản lý trạng thái cục bộ và trạng thái điều hướng (Navigation State) để truyền thông tin vai trò người dùng.

### 2. Cơ chế Phân quyền (RBAC)
Hệ thống hỗ trợ 7 nhóm người dùng với các quyền hạn riêng biệt:
- **Applicant (Thí sinh):** Đăng ký, nộp hồ sơ, theo dõi trạng thái.
- **Reviewer (Chuyên viên Tuyển sinh):** Kiểm tra tính đầy đủ của hồ sơ.
- **Validator (Chuyên viên Thẩm định):** Thẩm định tính pháp lý của văn bằng, chứng chỉ.
- **Approver (Trưởng phòng):** Duyệt danh sách trúng tuyển cuối cùng.
- **Viewer (Ban Giám hiệu):** Xem báo cáo thống kê và dashboard tổng hợp.
- **Admin (Quản trị hệ thống):** Cấu hình danh mục, quản lý tài khoản và bảo mật.
- **Audit (Kiểm toán):** Truy vết nhật ký hệ thống (Audit Logs).

---

## 🛠 Công nghệ Sử dụng

| Công nghệ | Mục đích |
| :--- | :--- |
| **React 18** | Thư viện UI chính |
| **TypeScript** | Đảm bảo an toàn kiểu dữ liệu (Type-safety) |
| **Vite** | Công cụ build và phát triển nhanh |
| **Tailwind CSS** | Framework CSS cho giao diện |
| **Lucide React** | Bộ icon vector hiện đại |
| **Motion (React)** | Xử lý hiệu ứng chuyển động và animation |
| **Recharts** | Hiển thị biểu đồ thống kê và báo cáo |
| **React Router** | Quản lý điều hướng ứng dụng |

---

## 🎨 Đặc tả Giao diện (UI Specifications)

### 1. Nguyên tắc Thiết kế
- **Màu sắc chủ đạo:** Xanh dương đậm (`#004a99`) - Đại diện cho sự tin cậy và chuyên nghiệp của giáo dục.
- **Typography:** Sử dụng font Inter (Sans-serif) cho sự rõ ràng và hiện đại.
- **Responsive:** Tối ưu hóa cho cả Desktop, Tablet và Mobile.

### 2. Các Trang Chính
- **Trang Đăng nhập/Đăng ký:** Giao diện chia đôi (Split screen) với hình ảnh thương hiệu và form nhập liệu tối giản.
- **Sidebar (Thanh điều hướng):** Thay đổi linh hoạt theo vai trò người dùng. Sử dụng hiệu ứng hover và active state rõ ràng.
- **Dashboard (Bảng điều khiển):**
    - **Thí sinh:** Hiển thị tiến trình hồ sơ (Stepper), thông tin ngành học và danh sách tài liệu.
    - **Quản trị/Lãnh đạo:** Hiển thị các chỉ số KPI (Cards), biểu đồ lưu lượng (Area Chart) và danh sách hoạt động gần đây.
- **Trang Thẩm định/Phê duyệt:** Giao diện dạng bảng (Table) với các bộ lọc và hành động xử lý nhanh.
- **Trang Thống kê:** Sử dụng biểu đồ trực quan để phân tích dữ liệu tuyển sinh.

---

## 🔐 Danh sách Tài khoản Mẫu (Demo Accounts)

Dưới đây là danh sách tài khoản để kiểm tra các phân hệ (Đã được ẩn khỏi giao diện công khai):

| Nhóm người dùng | Tài khoản (CCCD) | Mật khẩu |
| :--- | :--- | :--- |
| **1. Thí sinh (Applicant)** | `079123456789` | `Candidate@2024` |
| **2. Tuyển sinh (Reviewer)** | `reviewer_dhsp_01` | `Reviewer@Secure` |
| **3. Thẩm định (Validator)** | `validator_dhsp_01` | `Validator@Verify` |
| **4. Trưởng phòng (Approver)** | `approver_dhsp_head` | `Approver@Final` |
| **5. Ban Giám hiệu (Viewer)** | `bgh_viewer_01` | `Leader@Dashboard` |
| **6a. Quản trị Danh mục** | `admin_system_01` | `Admin@System` |
| **6b. Quản trị Bảo mật** | `admin_security_01` | `Admin@Security` |
| **7. Kiểm toán (Audit)** | `auditor_dhsp_01` | `Audit@Trace` |

---

## 🚀 Hướng dẫn Phát triển

1. Cài đặt dependencies: `npm install`
2. Chạy môi trường dev: `npm run dev`
3. Build sản phẩm: `npm run build`
