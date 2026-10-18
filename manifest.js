/**
 * DANH MỤC BÀI NGỮ PHÁP (MANIFEST). Mỗi bài 1 dòng.
 * Thêm bài mới = thêm 1 dòng ở đây + đăng tệp bài vào thư mục data/.
 *
 *  id        : duy nhất, dạng "hsk2-bai-4". PHẢI trùng LESSON_ID trong tệp bài.
 *  level     : "HSK1" ... "HSK6" (cấp độ mới tự xuất hiện trong Thư viện).
 *  number    : số bài, dùng để sắp xếp.
 *  title     : tên bài tiếng Trung.   titleVi: nghĩa tiếng Việt.
 *  points    : số điểm ngữ pháp.      questions: số câu bài tập (chỉ để hiện trước khi tải bài).
 *  file      : đường dẫn tệp bài, tính từ index.html.
 *  v         : (tuỳ chọn) tăng số này khi sửa nội dung để trình duyệt tải bản mới.
 */
window.GRAMMAR_MANIFEST = [
  { id: "hsk2-bai-1", level: "HSK2", number: 1, title: "九月去北京旅游最好", titleVi: "Đi Bắc Kinh du lịch vào tháng 9 là tốt nhất", points: 3, questions: 38, dialogues: 3, file: "data/hsk2/bai-1.js", v: 1 },
  { id: "hsk2-bai-2", level: "HSK2", number: 2, title: "我每天六点起床", titleVi: "Hàng ngày tôi thức dậy lúc 6 giờ", points: 3, questions: 38, dialogues: 3, file: "data/hsk2/bai-2.js", v: 1 },
  { id: "hsk2-bai-3", level: "HSK2", number: 3, title: "左边那个红色的是我的", titleVi: "Cái màu đỏ ở bên trái là của tôi", points: 3, questions: 37, file: "data/hsk2/bai-3.js", v: 1 },

  // { id: "hsk2-bai-4", level: "HSK2", number: 4, title: "...", titleVi: "...", points: 3, questions: 30, file: "data/hsk2/bai-4.js", v: 1 },
];
