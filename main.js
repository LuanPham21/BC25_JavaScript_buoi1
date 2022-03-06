//Bài 1
document.getElementById("btnLuongNv").onclick =function(){
    var txtSoNgayLam = parseInt(document.getElementById("txtSoNgayLam").value);
        // Format tien vnd
        var currentFormat = new Intl.NumberFormat("vn-VN");   
/**
 * Giả sử : n = 5
 * => 5 * 100000
 * 
 * Đầu vào 
 *  Tạo biến n 
 * Xử lý : 
 *      - Tien luong nhan vien = n * 100000
 * 
 * Đầu ra : hiển thị kqtienluongnv
 */
 var luong = txtSoNgayLam * 100000;
 var kqtienluongnv = "Tiền lương của nhân viên " + currentFormat.format(luong) + " VND";

 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả

 document.getElementById("footerThongBaoBai1").innerHTML = kqtienluongnv;    
}
//Bài 2
document.getElementById("btnTrungBinh").onclick =function(){
    var txtSo1 = parseFloat(document.getElementById("txtSo1").value);
    var txtSo2 = parseFloat(document.getElementById("txtSo2").value);
    var txtSo3 = parseFloat(document.getElementById("txtSo3").value);
    var txtSo4 = parseFloat(document.getElementById("txtSo4").value);
    var txtSo5 = parseFloat(document.getElementById("txtSo5").value);
    
/**
 * Giả sử : 
 *      so1 = 1
 *      so2 = 2
 *      so3 = 3
 *      so4 = 4
 *      so5 = 5
 * => (1+2+3+4+5)/5
 * 
 * Đầu vào 
 *  Tạo 5 biến đầu vào
 *      so1
 *      so2
 *      so3
 *      so4
 *      so5
 * Xử lý : 
 *      - Tien luong nhan vien = (so1+so2+so3+so4+so5)/5
 * 
 * Đầu ra : hiển thị kqtienluongnv
 */
 var tinhtrb = (txtSo1+txtSo2+txtSo3+txtSo4+txtSo5)/5;
 var kqtinhtrb = "Giá trị trung bình " + tinhtrb;

 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả
 document.getElementById("footerThongBaoBai2").innerHTML = kqtinhtrb;    
}
//Bài 3
document.getElementById("btnSoTienUSD").onclick =function(){
    var txtSoTienUSD = parseFloat(document.getElementById("txtSoTienUSD").value);
    
    // Format tien vnd
    var currentFormat = new Intl.NumberFormat("vn-VN");   
/**
 * Giả sử : 
 *      txtSoTienUSD = 2
 * => 2*235000 = 47000
 * 
 * Đầu vào 
 *  Tạo 1 biến đầu vào
 *      txtSoTienUSD
 * Xử lý : 
 *      - Quy doi tien  = txtSoTienUSD * 235000
 * 
 * Đầu ra : hiển thị kqQuyDoi
 */
 var TinhQuyDoi = txtSoTienUSD * 23500;
 var kqQuyDoi = "Giá trị quy đổi " + currentFormat.format(TinhQuyDoi) + " VND";

 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả
 document.getElementById("footerThongBaoBai3").innerHTML = kqQuyDoi;    
}
//Bài 4
document.getElementById("btnTinhCVDT").onclick =function(){
    var txtChieuDai = parseFloat(document.getElementById("txtChieuDai").value); 
    var txtChieuRong = parseFloat(document.getElementById("txtChieuRong").value); 
/**
 * Giả sử : 
 *      txtChieuDai = 2
 *      txtChieuRong = 3
 * => Chu vi (2 + 3 )* 2=10
 * => Dien tich 2 * 3 = 6
 * 
 * Đầu vào 
 *  Tạo 2 biến đầu vào
 *      txtChieuDai
 *      txtChieuRong
 * Xử lý : 
 *      - Tinh dien tich  = txtChieuDai * txtChieuRong
 *      - Tinh Chu vi  = (txtChieuDai + txtChieuRong)*2
 * 
 * Đầu ra : hiển thị kqTinhDTCV
 */
 var TinhDienTich = txtChieuDai * txtChieuRong;
 var TinhChuVi = (txtChieuDai + txtChieuRong)*2;
 var kqTinhDTCV = "Diện tích hình chữ nhật " + TinhDienTich +
                "<br/>Chu vi hình chữ nhật " + TinhChuVi ;

 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả
 document.getElementById("footerThongBaoBai4").innerHTML = kqTinhDTCV;    
}
//Bài 5
document.getElementById("btnTong2KySo").onclick =function(){
    var txtSoNhapVao = parseInt(document.getElementById("txtSoNhapVao").value); 
/**
 * Giả sử : 
 *      txtSoNhapVao = 22
 * => Lay so don vi 22 % 10 = 2
 * => Lay so hang chuc 22 % 10 = 2
 * 
 * Đầu vào 
 *  Tạo 1 biến đầu vào
 *      txtSoNhapVao
 * Xử lý : 
 *       - Lay so don vi txtSoNhapVao % 10 = LaySoHangDV
 *       - Lay so hang chuc txtSoNhapVao / 10 = LaySoHangChuc
 * 
 * Đầu ra : hiển thị kqQuyDoi
 */
 var LaySoHangDV = txtSoNhapVao % 10;
 var LaySoHangChuc = parseInt( txtSoNhapVao / 10);
 var TongSo2Ky = LaySoHangDV + LaySoHangChuc;
 var kqTongSo2Ky = "Tổng 2 ký số " + TongSo2Ky;

 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả
 document.getElementById("footerThongBaoBai5").innerHTML = kqTongSo2Ky;    
}