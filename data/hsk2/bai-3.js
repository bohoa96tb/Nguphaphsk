/**
 * NGỮ PHÁP HSK2 · BÀI 3: 左边那个红色的是我的
 * Nguồn: Giáo trình chuẩn HSK 2 online (HSK MAX). Ba điểm gốc: cụm "…的", 一下, 真.
 * Các ví dụ/bài tập bổ sung do biên soạn thêm để luyện tập.
 * Lưu ý: nếu sửa câu hỏi đã đăng, tiến trình của câu đó sẽ tính lại từ đầu (id sinh từ nội dung câu).
 */
(function () {
const LESSON_LEVEL = "HSK2", LESSON_NUMBER = 3;
const LESSON_ID = `${LESSON_LEVEL.toLowerCase()}-bai-${LESSON_NUMBER}`;   // phải trùng id trong manifest.js

// ---- hàm viết câu hỏi nhanh ----
// choice(điểm, đề, [các lựa chọn], vị trí đáp án đúng (0,1,2…), giải thích, {gloss, audio})
// fill  (điểm, đề có ____, [[đáp án chỗ 1],[đáp án chỗ 2]…], giải thích, {gloss, hint})
// order (điểm, đề tiếng Việt, [các từ], câu đúng, giải thích, {alt:[câu đúng khác], audio})
const choice = (point, stem, options, answer, why, o = {}) => ({ type: "choice", point, stem, options, answer, why, ...o });
const fill   = (point, stem, answers, why, o = {}) => ({ type: "fill", point, stem, answers, why, ...o });
const order  = (point, prompt, tokens, answer, why, o = {}) => ({ type: "order", point, prompt, tokens, answer, why, ...o });

GRAMMAR_REGISTER({
  id: LESSON_ID, level: LESSON_LEVEL, number: LESSON_NUMBER,
  title: "左边那个红色的是我的",
  titleVi: "Cái màu đỏ ở bên trái là của tôi",
  source: "Giáo trình chuẩn HSK 2 · HSK MAX",
  objectives: [
    "Dùng cụm “……的” thay cho danh từ đã biết (我的, 红色的, 昨天买的)",
    "Dùng 一下 sau động từ để nói hành động nhẹ nhàng, ngắn",
    "Dùng 真 + tính từ để bày tỏ cảm xúc (真好!, 真漂亮!)"
  ],

  points: [
    /* ======================= ĐIỂM 1: CỤM CÓ 的 ======================= */
    {
      id: "p1",
      title: "Cụm từ có 的 (的字结构)",
      cn: "……的",
      pattern: [["Đại từ / Tính từ / Động từ", "a"], ["的", "k"], ["(Danh từ đã lược)", "o"]],
      meaning: "Cả cụm hoạt động như một danh từ: “cái của…”, “cái màu…”, “cái mà … đã …”.",
      summary: "Đại từ, tính từ hoặc động từ kết hợp với 的 tạo thành cụm có tính chất như danh từ; danh từ trung tâm được lược bỏ khi người nghe đã biết đang nói về cái gì.",
      explain: [
        "Bình thường ta nói 我的书 (quyển sách của tôi). Khi hai người đã biết đang nói về sách, ta lược 书 và chỉ nói 我的, nghĩa là “cái của tôi”.",
        "Thành phần đứng trước 的 có thể là đại từ (我的, 你的, 谁的), tính từ (红色的, 大的) hoặc cụm động từ (昨天买的, 朋友送的).",
        "Tiếng Việt đặt “của tôi” sau danh từ, còn tiếng Trung đặt định ngữ TRƯỚC: 我的书. Khi lược danh từ thì 的 nằm ở cuối cụm: 这本书是我的。"
      ],
      table: {
        head: ["Cụm có 的", "Đầy đủ", "Nghĩa"],
        rows: [["我**的**", "我的书", "sách của tôi"], ["昨天买**的**", "昨天买的杯子", "cái cốc mua hôm qua"], ["你**的**", "你的手表", "đồng hồ của bạn"]],
        key: 0
      },
      examples: [
        { zh: "这本书不是我**的**。", py: "Zhè běn shū bú shì wǒ de.", vi: "Quyển sách này không phải của tôi.", note: "= 我的书" },
        { zh: "这个杯子是昨天买**的**。", py: "Zhège bēizi shì zuótiān mǎi de.", vi: "Cái cốc này là cái mua hôm qua.", note: "= 昨天买的杯子" },
        { zh: "这块手表是你**的**吗？", py: "Zhè kuài shǒubiǎo shì nǐ de ma?", vi: "Chiếc đồng hồ này là của bạn à?", note: "= 你的手表" },
        { zh: "左边那个红色**的**是我**的**。", py: "Zuǒbiān nàge hóngsè de shì wǒ de.", vi: "Cái màu đỏ ở bên trái là của tôi.", note: "Câu của tiêu đề bài: có hai cụm 的" },
        { zh: "这件衣服太小了，我想买大**的**。", py: "Zhè jiàn yīfu tài xiǎo le, wǒ xiǎng mǎi dà de.", vi: "Cái áo này nhỏ quá, tôi muốn mua cái to hơn.", note: "Tính từ + 的 = “cái to”" },
        { zh: "这是我朋友送**的**。", py: "Zhè shì wǒ péngyou sòng de.", vi: "Đây là cái bạn tôi tặng.", note: "Mở rộng: cụm động từ + 的" },
        { zh: "这个手机是谁**的**？", py: "Zhège shǒujī shì shéi de?", vi: "Cái điện thoại này là của ai?", note: "Mở rộng: 谁的 = của ai" }
      ],
      traps: [
        { bad: "这本书不是我。", good: "这本书不是我的。", why: "Thiếu 的 thì câu thành “quyển sách này không phải là tôi” (sách ≠ người). Muốn nói “của tôi” phải có 的." },
        { bad: "这是书我的。", good: "这是我的书。", why: "Người Việt hay nói “sách của tôi” nên đặt ngược. Tiếng Trung định ngữ luôn đứng trước danh từ: 我的书." },
        { bad: "这个杯子是昨天买。", good: "这个杯子是昨天买的。", why: "Muốn cả cụm “昨天买” đóng vai danh từ (cái đã mua hôm qua) thì phải có 的 ở cuối." }
      ],
      tips: [
        "Nghĩ 的 như chữ “cái / của” trong tiếng Việt: 我的 = cái của tôi; 红色的 = cái màu đỏ; 买的 = cái đã mua.",
        "Trước khi lược danh từ, tự hỏi: người nghe đã biết mình nói về cái gì chưa? Nếu rồi thì được lược."
      ]
    },

    /* ======================= ĐIỂM 2: 一下 ======================= */
    {
      id: "p2",
      title: "Cách dùng 一下",
      cn: "动词 + 一下",
      pattern: [["Chủ ngữ", "a"], ["Động từ", "a"], ["一下", "k"], ["(Tân ngữ)", "o"]],
      meaning: "Làm … một chút / … thử xem (hành động nhẹ nhàng, ngắn).",
      summary: "一下 đặt sau động từ để diễn tả hành động xảy ra trong thời gian ngắn, tương đương việc lặp lại động từ; có thể kèm tân ngữ.",
      explain: [
        "一下 nghĩa gốc là “một cái, một lần”. Đặt sau động từ, nó làm hành động nghe nhẹ nhàng, ngắn gọn và thân thiện: 看一下 = xem một chút.",
        "Tác dụng giống như lặp lại động từ: 看一下 ≈ 看看, 休息一下 ≈ 休息休息. Vì vậy câu nói mềm và lịch sự hơn, rất hay dùng khi nhờ vả hoặc đề nghị.",
        "Khi có tân ngữ, đặt tân ngữ sau 一下: 我问一下老师. Thêm 吧 ở cuối câu thì thành lời đề nghị: 你休息一下吧."
      ],
      table: {
        head: ["Chủ ngữ", "Động từ", "一下", "Tân ngữ"],
        rows: [["我", "看", "**一下**。", ""], ["你", "休息", "**一下**吧。", ""], ["我", "问", "**一下**", "老师。"]],
        key: 2
      },
      examples: [
        { zh: "我看**一下**。", py: "Wǒ kàn yíxià.", vi: "Để tôi xem một chút." },
        { zh: "你休息**一下**吧。", py: "Nǐ xiūxi yíxià ba.", vi: "Bạn nghỉ một lát đi.", note: "吧 ở cuối: lời đề nghị" },
        { zh: "我问**一下**老师。", py: "Wǒ wèn yíxià lǎoshī.", vi: "Tôi hỏi thầy giáo một chút.", note: "Tân ngữ đứng sau 一下" },
        { zh: "请等**一下**。", py: "Qǐng děng yíxià.", vi: "Xin chờ một chút.", note: "Mở rộng: câu nhờ vả lịch sự" },
        { zh: "我们去商店看**一下**吧。", py: "Wǒmen qù shāngdiàn kàn yíxià ba.", vi: "Chúng ta đến cửa hàng xem một chút nhé.", note: "Mở rộng" }
      ],
      traps: [
        { bad: "我一下看。", good: "我看一下。", why: "一下 luôn đứng SAU động từ, không bao giờ đứng trước." },
        { bad: "我喜欢一下这本书。", good: "我看一下这本书。", why: "喜欢 là trạng thái, không thể “làm một chút”. 一下 chỉ đi với động từ hành động như 看, 听, 问, 等." },
        { bad: "你休息吧一下。", good: "你休息一下吧。", why: "吧 là trợ từ cuối câu nên luôn đứng sau 一下." }
      ],
      tips: [
        "Muốn nhờ vả nhẹ nhàng, thêm 一下: 请等一下 nghe dịu hơn 请等.",
        "Dịch sang tiếng Việt: “… một chút / … thử / … tí”."
      ]
    },

    /* ======================= ĐIỂM 3: 真 ======================= */
    {
      id: "p3",
      title: "Phó từ ngữ khí 真",
      cn: "真 + 形容词",
      pattern: [["Chủ ngữ", "a"], ["真", "k"], ["Tính từ", "o"], ["！", "n"]],
      meaning: "…thật đấy! / …quá! (bày tỏ cảm xúc của người nói).",
      summary: "真 + tính từ dùng để thể hiện cảm xúc của người nói. 真 có nghĩa là “thật, quả là”.",
      explain: [
        "很 chỉ mức độ một cách bình thường: 她很漂亮 = cô ấy rất đẹp. Còn 真 mang cảm xúc: 她真漂亮！= cô ấy đẹp thật đấy!",
        "Vì mang sắc thái cảm thán nên câu có 真 thường kết thúc bằng dấu chấm than, và không dùng trong câu hỏi có 吗.",
        "Mở rộng: 真 còn đứng trước một số động từ chỉ tâm lý, ví dụ 真想 và 真喜欢."
      ],
      examples: [
        { zh: "你**真**好！", py: "Nǐ zhēn hǎo!", vi: "Bạn tốt thật đấy!" },
        { zh: "今天天气**真**好！", py: "Jīntiān tiānqì zhēn hǎo!", vi: "Hôm nay thời tiết đẹp thật!" },
        { zh: "你女儿的房间**真**漂亮！", py: "Nǐ nǚ'ér de fángjiān zhēn piàoliang!", vi: "Phòng của con gái bạn đẹp thật!" },
        { zh: "这个菜**真**好吃！", py: "Zhège cài zhēn hǎochī!", vi: "Món này ngon thật!", note: "Mở rộng" },
        { zh: "我**真**想去北京。", py: "Wǒ zhēn xiǎng qù Běijīng.", vi: "Tôi thật sự muốn đi Bắc Kinh.", note: "Mở rộng: 真 + động từ tâm lý" }
      ],
      traps: [
        { bad: "今天天气很真好！", good: "今天天气真好！", why: "真 và 很 cùng đứng trước tính từ nên chỉ chọn một: 很 (mức độ bình thường) hoặc 真 (cảm xúc)." },
        { bad: "你真好吗？", good: "你真好！", why: "真 mang nghĩa cảm thán, không dùng trong câu hỏi có 吗. Muốn hỏi thì nói 你好吗？" },
        { bad: "你的房间漂亮真！", good: "你的房间真漂亮！", why: "真 luôn đứng TRƯỚC tính từ." }
      ],
      tips: [
        "Gặp điều gì làm bạn thốt lên “wow!”, dùng ngay 真 + tính từ + ！: 真好吃！真漂亮！真贵！",
        "Dịch tiếng Việt: “… thật đấy / … quá”."
      ]
    }
  ],

  questions: [
    /* ---------- Điểm 1: 的 ---------- */
    choice("p1", "这本书不是我____。", ["的", "了", "吗", "很"], 0, "“我的” = cái của tôi. Phải có 的 để nói “của tôi”.", { gloss: "Quyển sách này không phải của tôi." }),
    choice("p1", "Câu nào nói “Cái màu đỏ ở bên trái là của tôi”?", ["左边那个红色的是我的。", "左边那个红色是我。", "左边那个是红色我的。", "我的是左边那个红色。"], 0, "红色的 (cái màu đỏ) và 我的 (cái của tôi) đều là cụm có 的."),
    choice("p1", "这个杯子是昨天买____。", ["的", "过", "着", "吧"], 0, "昨天买的 = cái (đã) mua hôm qua. 的 ở cuối biến cả cụm thành danh từ.", { gloss: "Cái cốc này là cái mua hôm qua." }),
    choice("p1", "Câu nào SAI?", ["这是我的书。", "这本书是我的。", "这是书我的。", "这块手表是你的。"], 2, "Định ngữ phải đứng TRƯỚC danh từ: 我的书, không phải 书我的."),
    fill("p1", "这块手表是你____吗？", [["的"]], "你的 = 你的手表, cái của bạn.", { gloss: "Chiếc đồng hồ này là của bạn à?" }),
    fill("p1", "我的手机是白色的，你____呢？", [["的"]], "你的 = 你的手机. Danh từ được lược vì đã nhắc ở vế trước.", { gloss: "Điện thoại của tôi màu trắng, còn của bạn thì sao?" }),
    order("p1", "Quyển sách này không phải của tôi.", ["这本书", "不是", "我的"], "这本书不是我的。", "我的 đứng cuối câu thay cho 我的书."),
    order("p1", "Cái màu đỏ ở bên trái là của tôi.", ["左边", "那个", "红色的", "是", "我的"], "左边那个红色的是我的。", "Hai cụm có 的: 红色的 và 我的."),
    choice("p1", "Cụm nào nghĩa là “cái cốc mua hôm qua”?", ["昨天买的杯子", "买昨天的杯子", "杯子昨天的买", "昨天杯子买的"], 0, "Định ngữ “昨天买的” đứng trước danh từ 杯子."),
    choice("p1", "Nghe và chọn nghĩa đúng.", ["Đồng hồ này là của bạn à?", "Bạn mua đồng hồ à?", "Đồng hồ của tôi đâu?", "Đây là đồng hồ mới?"], 0, "这块手表是你的吗？ = Chiếc đồng hồ này là của bạn à?", { audio: "这块手表是你的吗？" }),
    fill("p1", "这是我朋友送____。", [["的"]], "送的 = cái (được) tặng; danh từ như 礼物 được lược.", { gloss: "Đây là cái bạn tôi tặng." }),
    choice("p1", "Chọn câu đúng nghĩa “Cái này không phải của tôi”.", ["这个不是我。", "这个不是我的。", "这个不我的是。", "这个不是的我。"], 1, "不是 + 我的 = không phải của tôi. Thiếu 的 sẽ thành “không phải là tôi”."),

    /* ---------- Điểm 2: 一下 ---------- */
    choice("p2", "你休息____吧。", ["一下", "一个", "一次", "一点"], 0, "一下 đứng sau động từ 休息 và trước 吧.", { gloss: "Bạn nghỉ một lát đi." }),
    choice("p2", "Câu nào đúng?", ["我一下看。", "我看一下。", "我看下一。", "一下我看。"], 1, "Động từ + 一下: 看一下."),
    fill("p2", "我问____老师。", [["一下"]], "Động từ + 一下 + tân ngữ: 问一下老师.", { gloss: "Tôi hỏi thầy giáo một chút." }),
    fill("p2", "请你等____。", [["一下"]], "等一下 = chờ một chút (nhờ vả lịch sự).", { gloss: "Xin bạn chờ một chút." }),
    order("p2", "Tôi xem một chút.", ["我", "看", "一下"], "我看一下。", "Chủ ngữ + động từ + 一下."),
    order("p2", "Bạn nghỉ một lát đi.", ["你", "休息", "一下", "吧"], "你休息一下吧。", "吧 đứng cuối câu, sau 一下."),
    order("p2", "Tôi hỏi thầy giáo một chút.", ["我", "问", "一下", "老师"], "我问一下老师。", "Tân ngữ 老师 đứng sau 一下."),
    choice("p2", "Câu nào SAI?", ["你看一下。", "请等一下。", "我喜欢一下这本书。", "我问一下老师。"], 2, "喜欢 là trạng thái, không đi với 一下."),
    choice("p2", "一下 dùng để làm gì?", ["Làm hành động nhẹ nhàng, trong thời gian ngắn", "Nhấn mạnh hành động kéo dài rất lâu", "Chỉ hành động đã hoàn thành", "Biến tính từ thành danh từ"], 0, "一下 sau động từ = làm một chút, tương đương lặp động từ."),
    choice("p2", "Nghe và chọn nghĩa đúng.", ["Bạn nghỉ một lát đi.", "Bạn đã nghỉ rồi.", "Tôi muốn nghỉ cả ngày.", "Bạn có nghỉ không?"], 0, "休息一下吧 = nghỉ một lát đi (lời đề nghị).", { audio: "你休息一下吧。" }),
    fill("p2", "我们去商店看____吧。", [["一下"]], "看一下 = xem một chút; 吧 cuối câu để rủ rê.", { gloss: "Chúng ta đến cửa hàng xem một chút nhé." }),

    /* ---------- Điểm 3: 真 ---------- */
    choice("p3", "今天天气____好！", ["真", "吧", "了", "的"], 0, "真 + tính từ để thể hiện cảm xúc.", { gloss: "Hôm nay thời tiết đẹp thật!" }),
    choice("p3", "Câu nào SAI?", ["你真好！", "今天天气真好！", "今天天气很真好！", "你女儿的房间真漂亮！"], 2, "真 và 很 không dùng chung trước một tính từ."),
    fill("p3", "你女儿的房间____漂亮！", [["真"]], "真 đứng trước tính từ 漂亮.", { gloss: "Phòng của con gái bạn đẹp thật!" }),
    order("p3", "Bạn tốt thật đấy!", ["你", "真", "好"], "你真好！", "真 đứng trước tính từ 好."),
    order("p3", "Phòng của con gái bạn đẹp thật!", ["你女儿的", "房间", "真", "漂亮"], "你女儿的房间真漂亮！", "Chủ ngữ dài + 真 + tính từ."),
    choice("p3", "Điểm khác nhau giữa 很 và 真?", ["真 mang cảm xúc, hay dùng trong câu cảm thán; 很 chỉ mức độ bình thường", "真 chỉ quá khứ, 很 chỉ tương lai", "真 dùng cho danh từ, 很 dùng cho động từ", "Hai từ hoàn toàn giống nhau"], 0, "真 = thật là…!, còn 很 chỉ mức độ trung tính."),
    choice("p3", "Câu nào SAI?", ["这个菜真好吃！", "你真好吗？", "他真高！", "我真想去北京。"], 1, "真 mang nghĩa cảm thán, không dùng trong câu hỏi có 吗."),
    choice("p3", "Nghe và chọn nghĩa đúng.", ["Món này ngon thật!", "Món này không ngon.", "Bạn có thích món này không?", "Món này rất đắt."], 0, "这个菜真好吃！ = Món này ngon thật!", { audio: "这个菜真好吃！" }),
    fill("p3", "这个菜____好吃！", [["真"]], "真好吃 = ngon thật!", { gloss: "Món này ngon thật!" }),

    /* ---------- Tổng hợp ---------- */
    fill("mix", "我问____老师，这本书是谁____？", [["一下"], ["的"]], "Động từ + 一下 + tân ngữ; 谁的 = của ai.", { gloss: "Tôi hỏi thầy một chút, quyển sách này là của ai?" }),
    fill("mix", "这个杯子____漂亮！这个是你____吗？", [["真"], ["的"]], "真 + tính từ để cảm thán; 你的 = cái của bạn.", { gloss: "Cái cốc này đẹp thật! Đây là của bạn à?" }),
    order("mix", "Cái cốc màu đỏ này đẹp thật!", ["这个", "红色的", "杯子", "真", "漂亮"], "这个红色的杯子真漂亮！", "红色的 + danh từ (定语), rồi 真 + tính từ."),
    order("mix", "Cái bên trái là của tôi, bạn xem một chút nhé.", ["左边的", "是", "我的", "你", "看", "一下", "吧"], "左边的是我的，你看一下吧。", "左边的 và 我的 là cụm 的; 看一下吧 là lời đề nghị."),
    choice("mix", "Chọn câu đúng ngữ pháp.", ["你的手表真好看一下！", "这块手表是我的，你看一下吧。", "这块手表是我，你一下看吧。", "手表真很漂亮吗？"], 1, "Câu đúng dùng 我的 (cái của tôi) và 看一下吧 (lời đề nghị).")
  ]
});
})();
