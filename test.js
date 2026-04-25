// 1. قائمة الكتب (بيانات المشروع)
const books = ["C++ Basics", "JavaScript for Beginners", "Learning Turkish", "React Guide", "Git Master"];

// 2. الحرف الذي نريد البحث عنه
const searchTerm = "b";

// 3. مهمتك: استخدم دالة .filter() لتصفية الكتب
const filteredBooks = books.filter((book) => {
  // هذا الجزء يشبه الـ Logic في C++
  return book.toLowerCase().includes(searchTerm.toLowerCase());
});

// 4. طباعة النتائج
console.log("found books:");
console.log(filteredBooks);