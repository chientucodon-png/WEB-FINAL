// ===================
// DATA DEFINITIONS
// ===================

// Main data for students, teachers, memories
const data = {
    hs1: {
        name: "Hoàng Lê Thiên Đức",
        img: "images/coder1.jpg",
        desc: "Chăm chỉ - có trách nhiệm"
    },
    hs2: {
        name: "Dương Thị Hương Giang ",
        img: "images/bien.jpg",
        desc: "Thân thiện - vui vẻ  "
    },
    hs3: {
        name: "Lục Thị Ngọc Khuyên",
        img: "images/gojo.png",
        desc: "Năng động - sáng tạo"
    },
    hs4: {
        name: "Lê Thị Hoàng My Thảo",
        img: "images/hoicham.jpg",
        desc: "Hài hước - nhiệt tình - vui vẻ "
    },
    hs5: {
        name: "Nguyễn Minh Thư",
        img: "images/may.jpg",
        desc: "Bình thường thui"
    },
    gvcn1: {
        name: "Vũ Thị Vân",
        img: "images/covan1.jpg",
        desc: "Giáo viên chủ nhiệm – bộ môn Tiếng Anh, Hướng nghiệp (HK 1)"
    },
    toan: {
        name: "Vũ Thị Thanh Thảo",
        img: "images/cothao.jpg",
        desc: "Giáo viên bộ môn Toán"
    },
    gvbm2: {
        name: "K'Loan",
        img: "images/cokloan1.jpg",
        desc: "Giáo viên bộ môn Ngữ Văn"
    },
    gvbm3: {
        name: "Nguyễn Long Thuận",
        img: "images/thaythuan1.jpg",
        desc: "Giáo viên bộ môn Giáo dục Kinh tế - Pháp luật "
    },
    gvbm4: {
        name: "Đỗ Thị Ngọc Trang ",
        img: "images/cotrang.jpg",
        desc: "Giáo viên bộ môn Hóa học"
    },
    gvbm5: {
        name: "Nguyễn Thị Thuật",
        img: "images/cothuat.jpg",
        desc: "Giáo viên bộ môn Sinh học "
    },
    gvbm6: {
        name: "GV Nguyễn Thị Hải Yến",
        img: "images/coyen1.jpg",
        desc: "Giáo viên bộ môn Lịch Sử"
    },
    gvbm7: {
        name: "Bùi Thị Thanh Nhung",
        img: "images/conhung1.jpg",
        desc: "Giáo viên bộ môn Tin Học"
    },
    gvbm8: {
        name: "Trần Văn Ngọc",
        img: "images/thayngoc.jpg",
        desc: "Giáo viên bộ môn Giáo dục Quốc phòng - An ninh"
    },
    gvbm9: {
        name: "Phạm Đình Điển",
        img: "images/thaydiem.jpg",
        desc: "Giáo viên bộ môn GD Thể chất "
    },
    img1: {
        name: "Đà Lạt 2024",
        img: "images/20,10(1).jpg",
        desc: "Chuyến đi Đà Lạt - Kỷ niệm đáng nhớ nhất"
    },
    img2: {
        name: "Chuyến đi ngoại khóa",
        img: "images/20,10(2).jpg",
        desc: "Các bạn học sinh tại điểm du lịch"
    },
    img3: {
        name: "Kỉ niệm tập thể",
        img: "images/20,10(3).jpg",
        desc: "Lớp 12A4 - Gia đình to"
    },
    vid1: {
        name: "Video Đà Lạt",
        img: "https://picsum.photos/500/400?random=4",
        video: "video/qtpn 1.mp4",
        desc: "Video ghi lại những khoảnh khắc ở Đà Lạt"
    },
    vid2: {
        name: "Video lớp 12A4",
        img: "https://picsum.photos/500/400?random=5",
        video: "video/qtpn 2.mp4",
        desc: "Video giới thiệu lớp 12A4"
    },
    vid3: {
        name: "Tập thể video",
        img: "https://picsum.photos/500/400?random=6",
        video: "video/qtpn.mp4",
        desc: "Video tập thể của cả lớp"
    }
};

// Modal data for popups
const modalData = {
    // Học sinh
    "hs1": { title: "Hoàng Lê Thiên Đức", desc: "Chăm chỉ - có trách nhiệm", img: "images/coder1.jpg" },
    "hs2": { title: "Dương Thị Hương Giang", desc: "Thân thiện - vui vẻ", img: "images/bien.jpg" },
    "hs3": { title: "Lục Thị Ngọc Khuyên", desc: "Năng động - sáng tạo", img: "images/gojo.png" },
    "hs4": { title: "Lê Thị Hoàng My Thảo", desc: "Hài hước - nhiệt tình - vui vẻ", img: "images/hoicham.jpg" },
    "hs5": { title: "Nguyễn Minh Thư", desc: "Bình thường thui", img: "images/may.jpg" },
    // GVCN
    "gvcn1": { title: "Vũ Thị Vân", desc: "Giáo viên chủ nhiệm – bộ môn Tiếng Anh, Hướng nghiệp (HK 1)", img: "images/covan1.jpg" },
    // Giáo viên bộ môn
    "toan": { title: "Vũ Thị Thanh Thảo", desc: "Giáo viên bộ môn Toán", img: "images/cothao.jpg" },
    "gvbm2": { title: "K'Loan", desc: "Giáo viên bộ môn Ngữ Văn", img: "images/cokloan1.jpg" },
    "gvbm3": { title: "Nguyễn Long Thuận", desc: "Giáo viên bộ môn Giáo dục Kinh tế - Pháp luật", img: "images/thaythuan1.jpg" },
    "gvbm4": { title: "Đỗ Thị Ngọc Trang", desc: "Giáo viên bộ môn Hóa học", img: "images/cotrang.jpg" },
    "gvbm5": { title: "Nguyễn Thị Thuật", desc: "Giáo viên bộ môn Sinh học", img: "images/cothuat.jpg" },
    "gvbm6": { title: "GV Nguyễn Thị Hải Yến", desc: "Giáo viên bộ môn Lịch Sử", img: "images/coyen1.jpg" },
    "gvbm7": { title: "Bùi Thị Thanh Nhung", desc: "Giáo viên bộ môn Tin Học", img: "images/conhung1.jpg" },
    "gvbm8": { title: "Trần Văn Ngọc", desc: "Giáo viên bộ môn Giáo dục Quốc phòng - An ninh", img: "images/thayngoc.jpg" },
    "gvbm9": { title: "Phạm Đình Điển", desc: "Giáo viên bộ môn GD Thể chất", img: "images/thaydiem.jpg" },
    // Kỷ niệm
    "img1": {
        title: "Ngày phụ nữ Việt Nam",
        desc: "Kỷ niệm chúc mừng các bạn nữ trong lớp ngày 20/10.",
        img: "images/20,10(1).jpg"
    },
    "img2": {
        title: "Ngày 20/10",
        desc: "Tiệc nhỏ tại lớp.",
        img: "images/20,10(2).jpg"
    },
    "img3": {
        title: "Kỉ niệm 20/10",
        desc: "Lớp 12A4 - Gia đình to",
        img: "images/20,10(3).jpg"
    },
    "vid1": {
        title: "Ngày 20/10",
        desc: "Thanh xuân rực rỡ.",
        video: "video/qtpn 1.mp4"
    },
    "vid2": {
        title: "",
        desc: "Video lớp 12A4",
        video: "video/qtpn 2.mp4"
    },
    "vid3": {
        title: "Kỷ niệm 20/10",
        desc: "Một ngày đáng nhớ",
        video: "video/qtpn.mp4"
    }
};

// Game data for guessing games
const gameData = {
    classmate: [
        {
            id: 1,
            hints: ["Người này đeo kính", "Nam", "Giữ vai trò khá cao trong lớp"],
            accept: ["Lê Nguyễn Hữu Phúc", "Hữu Phúc", "Phúc"]
        },
        {
            id: 2,
            hints: ["Người này to con", "Tóc rất ngắn", "Tổ một"],
            accept: ["Trần Ngọc Bảo Duy", "Bảo Duy", "Duy"]
        },
        {
            id: 3,
            hints: ["Người này là nữ", "Giỏi nhất môn tiếng anh", "Có thể điều hành tổ 3"],
            accept: ["Vũ Thị Vân", "Vân Vũ", "Cô Vân"]
        },
        {
            id: 4,
            hints: ["Người này đeo kính", "Là nam", "Chơi Wuthering Wave"],
            accept: ["Nguyễn Hoàng Thiên Tuấn", "Thiên Tuấn", "Tuấn"]
        },
        {
            id: 5,
            hints: ["Người này cao", "Tham gia nhiều phong trào", "Không biết ghi gì"],
            accept: ["Nguyễn Gia Bảo", "Gia Bảo", "Bảo"]
        }
    ],
    famous: [
        {
            id: 1,
            hints: ["Là một hầu gái (Maid), có sừng", "Tóc xanh lam", "Từ con số không, chúng ta hãy bắt đầu lại từ đầu"],
            accept: ["Rem", "Hầu gái Rem"]
        },
        {
            id: 2,
            hints: ["Có bạn thân tóc trắng", "Bị mất não", "Có trang phục đặc trưng là bộ áo cà sa, vết sẹo dài trên trán"],
            accept: ["Getou", "Geto", "getou suguru", "geto suguru", "suguru geto"]
        },
        {
            id: 3,
            hints: ["Được mệnh danh là: nhà phát minh ra thế kỷ 20", "Là đối thủ chính của Thomas Edison trong cuộc chiến dòng điện", "Tên của một hãng xe điện nổi tiếng nhất thế giới hiện nay."],
            accept: ["Tesla", "Nicola Tesla", "Nikola Tesla"]
        },
        {
            id: 4,
            hints: ["Một người đàn ông có hai khuôn mặt: Một bàn tay nuôi sống cả nhân loại, bàn tay kia gieo rắc cái chết trong gió.", "Ông đã tìm ra cách 'rút thức ăn từ không khí', biến những thứ vô hình thành sự sống cho hàng tỷ người", "Được gọi là 'Cha đẻ của chiến tranh hóa học' vì là người trực tiếp giám sát việc sử dụng khí Clo trong Thế chiến thứ nhất"],
            accept: ["haber", "fritz haber", "ha-bơ"]
        },
        {
            id: 5,
            hints: ["Một bộ não thiên tài ẩn sau vẻ ngoài của một học sinh mẫu mực, kẻ tin rằng mình có thể thanh lọc thế giới bằng cách phán xét cái chết", "Được mệnh danh là 'Kẻ thách thức tạo hóa' khi nắm giữ một cuốn sổ mang quyền năng của các vị thần, tự phong mình là Chúa tể của thế giới mới", "Một cuộc đấu trí giữa hai cái đầu vĩ đại, nơi công lý bị lung lay bởi một cái tên được viết bằng mực đen"],
            accept: ["light yagami", "light", "kira", "yagami light"]
        }
    ]
};

// Detailed info for modal popups
const detailedInfo = {
    hs1: {
        intro: "Hoàng Lê Thiên Đức là học sinh của lớp 12A4, luôn giúp đỡ các bạn trong học tập.",
        style: "Đức có phong cách học tập chuyên nghiệp,luôn nỗ lực và cố gắng học tập.",
        feature: "Điểm đặc trưng của Đức là trầm tính, và rất trách nhiệm với công việc được giao phó.",
        impact: "Với nỗ lực của mình, Đức đã giúp nhiều bạn cải thiện điểm số và tạo ra một không khí học tập tích cực trong lớp."
    },
    hs2: {
        intro: "Dương Thị Hương Giang là thành viên của lớp 12A4. Cô ấy có thường xuyên tham gia hoạt động của lớp.",
        style: "Cô ấy có phong cách làm việc năng động và rất gần gũi với các bạn.",
        feature: "Điểm đặc trưng của Giang là sự vui vẻ, hòa đồng với các bạn.",
        impact: "Sự hòa đồng của Giang giúp cho lớp học có thêm niềm vui."
    },
    hs3: {
        intro: "Lục Thị Ngọc khuyên là học sinh lớp 12A4, phụ trách các hoạt động trang trí lớp. Khuyên rất năng động và sáng tạo trong việc tạo ra những bức tranh đẹp .",
        style: "Khuyên có phong cách làm việc vui vẻ, luôn mang lại năng lượng tích cực cho mọi người. Cô ấy biết cách kết hợp giữa học tập và giải trí.",
        feature: "Điểm đặc trưng của C là khả năng tổ chức sự kiện, sáng tạo trong các hoạt động, và luôn tạo ra không khí vui vẻ cho lớp.",
        impact: "Nhờ những hoạt động trang trí lớp của Khuyên giúp lớp có nhiều kỷ niệm đẹp và tinh thần tập thể được nâng cao."
    },
    hs4: {
        intro: "Lê Thị Hoàng My Thảo là thành viên của lớp 12A4, phụ trách gh chép sổ công nghệ thông tin. Cô ấy rất tỉ mỉ và có trách nhiệm cao trong công việc.",
        style: "Thảo có phong cách học tập chăm chỉ, luôn hoàn thành bài tập đúng hạn. Cô ấy rất chu đáo trong công việc.",
        feature: "Điểm đặc trưng của Thảo là sự hài hước và thân thiện.",
        impact: "Với sự hài hước của Thảo giúp tập thể lớp luôn tràn đầy tiếng cười."
    },
    hs5: {
        intro: "Nguyễn Minh Thư là thành của lớp 12A4. Thư rất nhiệt tình và hòa đồng với mọi người.",
        style: "Thư có phong cách học tập thân thiện, luôn sẵn sàng giúp đỡ các bạn.",
        feature: "Điểm đặc trưng của Thư là sự nhiệt tình, hòa đồng, và luôn tích cực.",
        impact: "Sự hòa đồng của Thư đã góp phần làm cho lớp thêm nhiều niềm vui ."
    },
    gvcn1: {
        intro: "Cô Vũ Thị Vân là giáo viên chủ nhiệm của lớp 12A4, thời gian gắn bó: lớp 11 và lớp 12 ( niên khóa 2024-2026), tính cách hiền lành, liêm khiết, có những lúc cô hơi khó ở một chút.",
        style: "Cô giáo có phong cách dạy giảng sâu, kĩ và tâm huyết .",
        feature: "Câu nói đặc trưng: Tôi thừa biết các anh chị muốn gì?; Lên dò từ vựng để cô lấy điểm; Lớp phó lao động, phân công trực lớp như thế nào rồi?",
        impact: "Với nhiều năm làm GVCN, cô đã thành công dẫn dắt tập thể lớp a4 từ hạng bét của trường lên một lớp có thành tích xuất sắc, giải quyết những mâu thuẫn của các bạn trong lớp một cách dứt điểm, giúp tập thể lớp đoàn kết, cố gắng từng ngày ."
    },
    toan: {
        intro: "Cô Vũ Thi Thanh Thảo giáo viên dạy bộ môn Toán Học, thời gian gắn bó là lớp 12 (niên khóa 2025-2026) cô có tính cách hiền lành, vui vẻ, hòa đồng và thân thiện.",
        style: "Cô có phong cách giảng  dạy dễ hiểu, giảng sâu, trọng tâm ",
        feature: "Câu nói đặc trưng là: Điểm cao quá chắc cô phải trừ bớt.",
        impact: "Với kinh nghiệm nhiều năm đứng trên bục giảng giảng bài qua biết bao nhiêu thế hệ cô đã thành công dẫn dắt nhiều học sinh tập thể lớp 12a4 đạt kết quả tốt trong học tập ( trừ một vài trường hợp đặc biệt trong tập thể lớp)."
    },
    gvbm2: {
        intro: "Cô K'Loan giáo viên dạy bộ môn Ngữ Văn và Giáo dục địa phương, thời gian gắn bó lớp 11 và 12 (niên khóa 2024-2026) cô có tính cách hiền lành, vui vẻ, dễ mến, dễ tính, bắt kịp xu hướng của giới trẻ. ",
        style: "Cô có phong cahs giảng dạy dễ hiểu, luôn sẵn sàng giúp đỡ khi mọi người cần giải đáp thắc mắc.",
        feature: "Câu nói đặc trưng là: Cố gắng đi nhé các con, sắp thi rồi cô và các con cùng cố gắng để vượt qua kì thi có kế quả tốt nhé!.",
        impact: "Vượt qua sự phân biệt về dân tộc, định kiến và thái độ của xã hội nỗ lực vươn lên, cố gắng cho tương lai, để trở thành một người giáo viên dạy Văn giỏi, người giáo viên tốt được nhiều người quý mến, giúp đỡ nhiều thế hệ học sinh học tại ngội trường THPT Chu Văn An và tập thể lớp 12a4. "
    },
    gvbm3: {
        intro: "Thầy Nguyễn Long Thuận giáo viên bộ môn Giáo dục Kinh tế-Pháp luật, thời gian gắn bó lớp 12 (niên khóa 2025-2026) thầy có tính cách hơi nóng nảy, nghiêm túc, thầy cũng có phần vui tính và rất quan tâm  học sinh.",
        style: "Thầy có phong cách dạy thầy sẽ chiếu slide lên cho học sinh và giảng bài; sau đọc học sinh phía dưới sẽ ghi chép bài. Sau tiết học thầy sẽ dặn dò cả lớp học bài và làm bài tập. Thầy sẽ thường xuyên kiểm tra để học sinh nhớ lâu kiến thức.",
        feature: "Câu nói đặc trưng là làm bài tập tui giao lát tui kiểm tra, không làm tui ghi sổ đầu bài, bao nhiêu điểm tui nhập bấy nhiêu.",
        impact: "Với nhiều năm kinh nghiệm đi dạy thầy đã thành công truyền lại nhiều kiến thức cho biết bao thế hệ học sinh, giúp học sinh đạt kết quả cao."
    },
    gvbm4: {
        intro: "Cô Đỗ Thị Ngọc Trang giáo viên bộ môn Hóa Học, thời gian gắn bó 3 năm (niên khóa 2023-2026) cô có tính cách hòa đồng, thân thiện, vui vẻ và hạt nhài.",
        style: "Cô có phòng cách giảng dạy dễ hiểu, giảng kĩ  vả thôi thúc học sinh học bài.",
        feature: "Câu nói đặc trưng: Làm bài tập đi các bạn.",
        impact: "Với nhiều năm đi dạy cô đã thành công truyền đạt lại những kiến thức khó nhằn, khó hiểu về môn Hóa cho biết bao học sinh, giúp học sinh ghi nhớ kiến thức một cách trọn vẹn và đạt điểm cao trong bộ môn (trừ một vài trường hợp đặc biệt)."
    },
    gvbm5: {
        intro: "Cô Nguyễn Thị Thuật giáo viên bộ môn Sinh Học, thời gian gắn bó lớp 12 (niên khóa 2025-2026) cô có tính cách vui vẻ, thân thiên, hay chuyện. ",
        style: "Cô có phong cách dạy giảng kĩ phần bài tập khó, kiểm tra lý thuyết để củng cố kiến thức, cô thường hay cho kiểm tra lại để gỡ điểm.",
        feature: "Câu nói đặc trưng: Viết bài đi, viết xong chưa,... .",
        impact: "Với nhiều năm kinh nghiệm đứng trên bục giảng cô đã thành công mang lại những kinh nghiệm ghi nhớ bài học và giảng giải nhiều bài tập khó với nhiều thế hệ học sinh giúp đạt được điểm cao và nắm vững kiến thức."
    },
    gvbm6: {
        intro: "Cô Nguyễn Thị Hải Yến giáo viên bộ môn Lịch Sử, thời gian gắn bó lớp 10 và 12 (niên khóa 2023-2024 & 2025-2026)cô là một người nhiệt huyết trong công việc; thích sự gọn gàng, chỉnh chu, có phần cứng cỏi và năng động, tạo cho học sinh nhiều tiếng cười .",
        style: "Cô có phong cách dạy phong cách giảng dạy rất độc đáo: cô không cho học sinh ghi chép nhiều vì sẽ rất nhanh chán và học sinh sẽ buồn ngủ, mất tập trung nên cô cho học sinh chơi trò chơi để ghi nhớ kiến thức lâu hơn không bị nhàm chán; kể nhiều câu chuyện lịch sử lồng với vấn đề ở thực tại đẻ học sinh hiểu sâu hơn, tạo sự tập trung.",
        feature: "Câu nói đặc trưng: Hôm nay lớp mình...; xếp lại bàn cho thẳng thớm nha các bạn!; cô là cô giáo hiền nhất trường đó; sao nay bảng lớp bẩn vậy!.",
        impact: " Cô là người luôn giúp đỡ lớp để tất cả học sinh đều đạt điểm từ trung bình đến cao( ko có bạn nào dưới trung bình)."
    },
    gvbm7: {
        intro: "Cô Bùi Thị Thanh Nhung giáo viên bộ môn Tin Học,thời gian gắn bó lớp 12 ( niên khóa 2025-2026), tính cách vui vẻ, hòa đồng, thích trêu học sinh, thỉnh thoảng cô hơi cọc.",
        style: "Cô có phong cách giảng dạy: dễ hiểu, quan tâm học sinh.",
        feature: "Câu nói đặc trưng: kiểm tra sách, không có sách trừ điểm.",
        impact: "Học sinh của cô có nhận thức tốt về lịch sử dân tộc và thế giới, góp phần xây dựng thế hệ trẻ có trách nhiệm với xã hội."
    },
    gvbm8: {
        intro: "Thầy Trần Văn Ngọc giáo viên bộ môn Giáo dục Quốc phòng - An ninh, thời gian gắn bó 3 năm cấp 3 ( niên khóa 2023-2026), tính cách nghiêm túc, vui vẻ, hòa đồng, dễ gần, hạt nhài.",
        style: "Thầy có phong cách giảng dạy: thầy rất thương và yêu quý học trò của mình, nên thầy đã sắp xếp rất chu đáo lịch trình. Đầu học kì thầy sẽ cho học các phần lí thuyết trước, sau đó đến gần cuối kì thầy sẽ cho học sinh học thực hành. Điều đó khiến học sinh thoải mái, nhẹ nhàng hơn để học sinh tập trung vào học những môn quan trọng.",
        feature: "Câu nói đặc trưng: è hèm.., phải....gì ạ?, phải....sao ạ?.",
        impact: "Tất cả các thành viên trong lớp đều đạt được điểm tương đối cao, học sinh được trải nghiệm với mô hình trực tiếp khi tham gia thi đấu và đạt giải, một thành tựu mà thầy luôn tự hào về học sinh của mình.",
    },
    gvbm9: {
        intro: "Thầy Phạm Đình Điển giáo viên bộ môn GD Thể chất, thời gian gắn bó: 3 năm cấp 3 ( niên khóa 2023-2026), tính cách vui vẻ, hòa đồng => rất bình thường .",
        style: "Thầy có phong cách giảng dạy giảng kĩ nhiều động tác, bắt làm đến khi dạt môn thể dục .",
        feature: "Câu nói đặc trưng: Không đủ đồng phục thì bật cóc và báo với GVCN.",
        impact: "Dẫn dắt học sinh a4 học môn bóng chuyền, có sức khỏe tốt, kĩ năng chơi bóng chuyền."
    },
};