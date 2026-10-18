/* HSK2 bài 3 — học liệu mở rộng v2. Chỉ chỉnh nội dung bên trong GRAMMAR_REGISTER. */
(function(){
GRAMMAR_REGISTER({
  "id": "hsk2-bai-3",
  "level": "HSK2",
  "number": 3,
  "title": "左边那个红色的是我的",
  "titleVi": "Cái màu đỏ ở bên trái là của tôi",
  "source": "Dựa trên 3 điểm ngữ pháp trong ảnh HSK MAX; giải thích, hội thoại và bài luyện mở rộng được biên soạn mới.",
  "objectives": [
    "Nhận biết đồ vật và nói rõ đồ nào là của ai bằng cụm 的.",
    "Nhờ xem, hỏi, chờ một chút với 一下 trong tình huống thực tế.",
    "Bày tỏ cảm xúc với 真, phân biệt với lời miêu tả thông thường.",
    "Nghe và đọc 3 hội thoại 16–24 lượt, tìm bằng chứng rồi tự đóng vai."
  ],
  "points": [
    {
      "id": "p1",
      "title": "Cụm từ có 的 (的字结构)",
      "cn": "……的",
      "pattern": [
        [
          "Đại từ / Tính từ / Động từ",
          "a"
        ],
        [
          "的",
          "k"
        ],
        [
          "(Danh từ đã lược)",
          "o"
        ]
      ],
      "meaning": "Cả cụm hoạt động như một danh từ: “cái của…”, “cái màu…”, “cái mà … đã …”.",
      "summary": "Đại từ, tính từ hoặc động từ kết hợp với 的 tạo thành cụm có tính chất như danh từ; danh từ trung tâm được lược bỏ khi người nghe đã biết đang nói về cái gì.",
      "explain": [
        "Cụm 的 có thể đứng ở vị trí một danh từ khi người nghe biết phần danh từ bị lược. 我的 có thể là sách, cốc hoặc đồ của tôi, tùy ngữ cảnh; không tự nó chỉ riêng một loại đồ vật.",
        "Trong 我的杯子, 杯子 còn được nói rõ. Trong 这个杯子是我的。, người nghe đã biết đang nói về cốc nên không cần lặp lại 杯子.",
        "Người sở hữu + 的: 我的、你的、老师的. Dùng để phân biệt đồ thuộc về ai.",
        "Đặc điểm + 的: 红色的、大的、左边的. Dùng để phân biệt một vật trong nhóm đã biết.",
        "Cụm động từ + 的: 我买的、朋友送的. Dùng để nhận diện vật qua hành động liên quan. Ví dụ rõ: 我买的杯子在这儿，你买的呢？",
        "Làm chủ ngữ: 红色的是我的。 Làm tân ngữ: 我想买大的。 Đứng sau 是: 这是我的。",
        "Trong 左边那个红色的是我的。, 左边那个红色的 xác định vật đang nói; 我的 cho biết chủ sở hữu. Hai chữ 的 có chức năng trong hai cụm riêng.",
        "Nếu bước vào cửa hàng và nói ngay 我要大的。, người bán có thể chưa biết bạn muốn loại đồ gì. Hãy nói 我要一个大杯子。 trước; sau khi đã xác định đang chọn cốc mới nói 大的.",
        "Không coi 的 là bản dịch cố định của “cái”. 我的 có thể là “của tôi”; 红色的 có thể là “cái màu đỏ”; nghĩa phụ thuộc phần được lược.",
        "这个杯子是昨天买的。 còn có thể được hiểu là nhấn mạnh thời gian mua, theo cấu trúc 是……的. Không nên dùng riêng câu này để kết luận tất cả 的 cuối câu đều do lược danh từ.",
        "Ở bài này, ưu tiên so sánh rõ: 我昨天买的杯子很大，你买的很小。 Phần sau lược 杯子 vì đã nhắc ở trước."
      ],
      "table": {
        "head": [
          "Cụm có 的",
          "Đầy đủ",
          "Nghĩa"
        ],
        "rows": [
          [
            "我**的**",
            "我的书",
            "sách của tôi"
          ],
          [
            "昨天买**的**",
            "昨天买的杯子",
            "cái cốc mua hôm qua"
          ],
          [
            "你**的**",
            "你的手表",
            "đồng hồ của bạn"
          ]
        ],
        "key": 0
      },
      "examples": [
        {
          "zh": "这本书不是我**的**。",
          "vi": "Quyển sách này không phải của tôi.",
          "note": "= 我的书"
        },
        {
          "zh": "我买**的**杯子在这儿，你买**的**呢？",
          "vi": "Cốc tôi mua ở đây, còn cái bạn mua đâu?",
          "note": "你买的 lược 杯子 vì hai người đang nói về cốc."
        },
        {
          "zh": "这块手表是你**的**吗？",
          "vi": "Chiếc đồng hồ này là của bạn à?",
          "note": "= 你的手表"
        },
        {
          "zh": "左边那个红色**的**是我**的**。",
          "vi": "Cái màu đỏ ở bên trái là của tôi.",
          "note": "Câu của tiêu đề bài: có hai cụm 的"
        },
        {
          "zh": "这件衣服太小了，我想买大**的**。",
          "vi": "Cái áo này nhỏ quá, tôi muốn mua cái to.",
          "note": "Tính từ + 的 = “cái to”"
        },
        {
          "zh": "我朋友送**的**书很好看。你朋友送**的**呢？",
          "vi": "Quyển sách bạn tôi tặng rất hay. Còn quyển bạn của bạn tặng thì sao?",
          "note": "Cụm sau lược 书; ngữ cảnh cho biết loại đồ."
        },
        {
          "zh": "这个手机是谁**的**？",
          "vi": "Cái điện thoại này là của ai?",
          "note": "Mở rộng: 谁的 = của ai"
        }
      ],
      "traps": [
        {
          "bad": "这本书不是我。",
          "good": "这本书不是我的。",
          "why": "Thiếu 的 thì câu thành “quyển sách này không phải là tôi” (sách ≠ người). Muốn nói “của tôi” phải có 的."
        },
        {
          "bad": "这是书我的。",
          "good": "这是我的书。",
          "why": "Người Việt hay nói “sách của tôi” nên đặt ngược. Tiếng Trung định ngữ luôn đứng trước danh từ: 我的书."
        },
        {
          "bad": "我想买红色。",
          "good": "我想买红色的。",
          "why": "Khi đang chọn cốc và muốn nói “cái màu đỏ”, dùng 红色的 để thay cho 红色的杯子."
        },
        {
          "bad": "我要大的。",
          "good": "我想买一个大杯子。",
          "why": "Không phải luôn sai ngữ pháp: nếu chưa biết đang mua đồ gì thì 大的 thiếu ngữ cảnh. Nói rõ 杯子 trước.",
          "kind": "Thiếu ngữ cảnh"
        },
        {
          "bad": "大的 = luôn là cái to hơn",
          "good": "大的 = cái to; 大一点儿的 = cái to hơn một chút",
          "why": "Không tự thêm ý so sánh nếu ngữ cảnh không có.",
          "kind": "Khác nghĩa"
        }
      ],
      "tips": [
        "Nghĩ 的 như chữ “cái / của” trong tiếng Việt: 我的 = cái của tôi; 红色的 = cái màu đỏ; 买的 = cái đã mua.",
        "Trước khi lược danh từ, tự hỏi: người nghe đã biết mình nói về cái gì chưa? Nếu rồi thì được lược."
      ],
      "scenario": "Bạn để cốc ở phòng nghỉ. Có nhiều cốc giống nhau. Bạn cần nói: “Cái màu đỏ ở bên trái là của tôi”, thay vì chỉ nói “của tôi” khiến người nghe không biết cái nào.",
      "sections": [
        [
          "Ý nghĩa: lược phần đã biết",
          "Cụm 的 có thể đứng ở vị trí một danh từ khi người nghe biết phần danh từ bị lược. 我的 có thể là sách, cốc hoặc đồ của tôi, tùy ngữ cảnh; không tự nó chỉ riêng một loại đồ vật.",
          "Trong 我的杯子, 杯子 còn được nói rõ. Trong 这个杯子是我的。, người nghe đã biết đang nói về cốc nên không cần lặp lại 杯子."
        ],
        [
          "Ba cách tạo cụm",
          "Người sở hữu + 的: 我的、你的、老师的. Dùng để phân biệt đồ thuộc về ai.",
          "Đặc điểm + 的: 红色的、大的、左边的. Dùng để phân biệt một vật trong nhóm đã biết.",
          "Cụm động từ + 的: 我买的、朋友送的. Dùng để nhận diện vật qua hành động liên quan. Ví dụ rõ: 我买的杯子在这儿，你买的呢？"
        ],
        [
          "Vị trí trong câu",
          "Làm chủ ngữ: 红色的是我的。 Làm tân ngữ: 我想买大的。 Đứng sau 是: 这是我的。",
          "Trong 左边那个红色的是我的。, 左边那个红色的 xác định vật đang nói; 我的 cho biết chủ sở hữu. Hai chữ 的 có chức năng trong hai cụm riêng."
        ],
        [
          "Khi nào không nên lược",
          "Nếu bước vào cửa hàng và nói ngay 我要大的。, người bán có thể chưa biết bạn muốn loại đồ gì. Hãy nói 我要一个大杯子。 trước; sau khi đã xác định đang chọn cốc mới nói 大的.",
          "Không coi 的 là bản dịch cố định của “cái”. 我的 có thể là “của tôi”; 红色的 có thể là “cái màu đỏ”; nghĩa phụ thuộc phần được lược."
        ],
        [
          "Mở rộng: đừng trộn mọi câu 是…的",
          "这个杯子是昨天买的。 còn có thể được hiểu là nhấn mạnh thời gian mua, theo cấu trúc 是……的. Không nên dùng riêng câu này để kết luận tất cả 的 cuối câu đều do lược danh từ.",
          "Ở bài này, ưu tiên so sánh rõ: 我昨天买的杯子很大，你买的很小。 Phần sau lược 杯子 vì đã nhắc ở trước."
        ]
      ],
      "comparisons": [
        [
          "我的杯子",
          "这个杯子是我的。",
          "Cụm danh từ “cốc của tôi” so với câu xác nhận “cốc này là của tôi”."
        ],
        [
          "红色的杯子",
          "红色的",
          "Cụm đầu nói rõ loại đồ; cụm sau cần ngữ cảnh để hiểu danh từ bị lược."
        ],
        [
          "我想买大的。",
          "我想买大一点儿的。",
          "Câu đầu: muốn mua cái to. Câu sau: muốn mua cái to hơn một chút. Không tự dịch 大的 thành “to hơn” trong mọi ngữ cảnh."
        ]
      ],
      "task": {
        "prompt": "Có hai chiếc cốc: chiếc đỏ bên trái của bạn, chiếc trắng bên phải của đồng nghiệp. Hãy nói chiếc nào của bạn rồi hỏi chiếc trắng là của ai.",
        "hints": [
          "Nói vị trí + màu sắc.",
          "Dùng 红色的、我的、谁的.",
          "左边那个……是……。右边那个……是谁的？"
        ],
        "sample": "左边那个红色的是我的。右边那个白色的是谁的？",
        "criteria": [
          "Xác định đúng chiếc cốc.",
          "Dùng 的 để chỉ sở hữu và lược danh từ.",
          "Đặt được câu hỏi ai là chủ sở hữu."
        ]
      }
    },
    {
      "id": "p2",
      "title": "Cách dùng 一下",
      "cn": "动词 + 一下",
      "pattern": [
        [
          "Chủ ngữ",
          "a"
        ],
        [
          "Động từ",
          "a"
        ],
        [
          "一下",
          "k"
        ],
        [
          "(Tân ngữ)",
          "o"
        ]
      ],
      "meaning": "Làm … một chút / … thử xem (hành động nhẹ nhàng, ngắn).",
      "summary": "Trong mẫu này, 一下 đứng sau động từ để nói làm một chút hoặc thử làm; thường làm lời đề nghị nhẹ hơn.",
      "explain": [
        "Trong bài này, động từ + 一下 diễn tả làm một chút, thử làm hoặc trình bày việc như một hành động ngắn. Nó không quy định chính xác bao nhiêu giây.",
        "请等一下。 thường là “xin chờ một chút”, không phải yêu cầu đợi đúng một lần. Giọng nói và tình huống vẫn ảnh hưởng mức độ lịch sự.",
        "Mẫu cơ bản: chủ ngữ + động từ + 一下 + tân ngữ. Ví dụ: 我问一下老师。",
        "Nếu đã rõ đối tượng, có thể bỏ tân ngữ: 我看一下。 Trợ từ cuối câu như 吧 đứng sau cụm: 你休息一下吧。",
        "Xin phép: 我看一下，可以吗？ Nhờ người khác: 请你看一下这个。 Tự đề nghị làm: 我帮你看一下吧。",
        "一下 làm câu nhẹ hơn nhưng không thay cho mọi thành phần lịch sự. Khi hỏi người lạ, có thể mở đầu bằng 不好意思 hoặc 请问.",
        "Luyện trước với 看、听、问、等、休息. Đây là những việc dễ hình dung như hành động ngắn hoặc thử làm.",
        "Không ghép máy móc vào trạng thái: 我喜欢一下这本书。 không tự nhiên với nghĩa “tôi thích quyển sách này”. Nói 我喜欢这本书。",
        "看一下 và 看看 thường gần nghĩa trong lời đề nghị xem thử. Không có nghĩa mọi động từ hay mọi cấu trúc đều thay thế tự do.",
        "Trong mẫu đang học, 一下 theo sau động từ. Tiếng Trung còn có cách dùng khác như 一下就…, nhưng không áp dụng quy tắc của bài này cho tất cả các trường hợp."
      ],
      "table": {
        "head": [
          "Chủ ngữ",
          "Động từ",
          "一下",
          "Tân ngữ"
        ],
        "rows": [
          [
            "我",
            "看",
            "**一下**。",
            ""
          ],
          [
            "你",
            "休息",
            "**一下**吧。",
            ""
          ],
          [
            "我",
            "问",
            "**一下**",
            "老师。"
          ]
        ],
        "key": 2
      },
      "examples": [
        {
          "zh": "我看**一下**。",
          "vi": "Để tôi xem một chút."
        },
        {
          "zh": "你休息**一下**吧。",
          "vi": "Bạn nghỉ một lát đi.",
          "note": "吧 ở cuối: lời đề nghị"
        },
        {
          "zh": "我问**一下**老师。",
          "vi": "Tôi hỏi thầy giáo một chút.",
          "note": "Tân ngữ đứng sau 一下"
        },
        {
          "zh": "请等**一下**。",
          "vi": "Xin chờ một chút.",
          "note": "Mở rộng: câu nhờ vả lịch sự"
        },
        {
          "zh": "我们去商店看**一下**吧。",
          "vi": "Chúng ta đến cửa hàng xem một chút nhé.",
          "note": "Mở rộng"
        }
      ],
      "traps": [
        {
          "bad": "我一下看。",
          "good": "我看一下。",
          "why": "Trong mẫu “làm một chút” đang học, dùng động từ + 一下: 看一下. Không dùng quy tắc này để phủ định các cách dùng khác của 一下."
        },
        {
          "bad": "我喜欢一下这本书。",
          "good": "我看一下这本书。",
          "why": "喜欢 là trạng thái, không thể “làm một chút”. 一下 chỉ đi với động từ hành động như 看, 听, 问, 等."
        },
        {
          "bad": "你休息吧一下。",
          "good": "你休息一下吧。",
          "why": "吧 là trợ từ cuối câu nên luôn đứng sau 一下."
        },
        {
          "bad": "我看一下看。",
          "good": "我看一下。／我看看。",
          "why": "Chọn một cách diễn đạt; không ghép hai dạng máy móc."
        },
        {
          "bad": "等一下 = đợi đúng một phút",
          "good": "等一下 = đợi một chút",
          "why": "一下 không xác định chính xác thời lượng.",
          "kind": "Khác nghĩa"
        }
      ],
      "tips": [
        "Muốn nhờ vả nhẹ nhàng, thêm 一下: 请等一下 nghe dịu hơn 请等.",
        "Dịch sang tiếng Việt: “… một chút / … thử / … tí”."
      ],
      "scenario": "Bạn muốn xem một món hàng hoặc hỏi đồng nghiệp một câu. Bạn cần làm lời đề nghị nhẹ hơn, ví dụ: 我看一下，可以吗？",
      "sections": [
        [
          "Ý nghĩa và sắc thái",
          "Trong bài này, động từ + 一下 diễn tả làm một chút, thử làm hoặc trình bày việc như một hành động ngắn. Nó không quy định chính xác bao nhiêu giây.",
          "请等一下。 thường là “xin chờ một chút”, không phải yêu cầu đợi đúng một lần. Giọng nói và tình huống vẫn ảnh hưởng mức độ lịch sự."
        ],
        [
          "Vị trí cần nhớ",
          "Mẫu cơ bản: chủ ngữ + động từ + 一下 + tân ngữ. Ví dụ: 我问一下老师。",
          "Nếu đã rõ đối tượng, có thể bỏ tân ngữ: 我看一下。 Trợ từ cuối câu như 吧 đứng sau cụm: 你休息一下吧。"
        ],
        [
          "Ba việc giao tiếp thường gặp",
          "Xin phép: 我看一下，可以吗？ Nhờ người khác: 请你看一下这个。 Tự đề nghị làm: 我帮你看一下吧。",
          "一下 làm câu nhẹ hơn nhưng không thay cho mọi thành phần lịch sự. Khi hỏi người lạ, có thể mở đầu bằng 不好意思 hoặc 请问."
        ],
        [
          "Chọn động từ phù hợp",
          "Luyện trước với 看、听、问、等、休息. Đây là những việc dễ hình dung như hành động ngắn hoặc thử làm.",
          "Không ghép máy móc vào trạng thái: 我喜欢一下这本书。 không tự nhiên với nghĩa “tôi thích quyển sách này”. Nói 我喜欢这本书。"
        ],
        [
          "Mở rộng có giới hạn",
          "看一下 và 看看 thường gần nghĩa trong lời đề nghị xem thử. Không có nghĩa mọi động từ hay mọi cấu trúc đều thay thế tự do.",
          "Trong mẫu đang học, 一下 theo sau động từ. Tiếng Trung còn có cách dùng khác như 一下就…, nhưng không áp dụng quy tắc của bài này cho tất cả các trường hợp."
        ]
      ],
      "comparisons": [
        [
          "看一下",
          "看看",
          "Thường đều có thể chỉ xem một chút; chọn một dạng, không ghép 看一下看."
        ],
        [
          "等一下",
          "等一分钟",
          "Một chút không xác định thời lượng; một phút nêu thời lượng cụ thể."
        ],
        [
          "一次",
          "一下",
          "一次 đếm một lần; 一下 trong bài này thường làm hành động nhẹ, ngắn. Không hoán đổi máy móc."
        ]
      ],
      "task": {
        "prompt": "Bạn ở cửa hàng. Hãy xin xem chiếc màu trắng, rồi nhờ người bán chờ một chút.",
        "hints": [
          "Xin xem trước, nhờ chờ sau.",
          "Dùng 看一下、白色的、等一下.",
          "我想……，可以吗？请……。"
        ],
        "sample": "我想看一下那个白色的，可以吗？请等一下。",
        "criteria": [
          "Có lời xin xem đúng đồ vật.",
          "一下 đứng sau động từ trong mẫu này.",
          "Có lời nhờ chờ phù hợp."
        ]
      }
    },
    {
      "id": "p3",
      "title": "Phó từ ngữ khí 真",
      "cn": "真 + 形容词",
      "pattern": [
        [
          "Chủ ngữ",
          "a"
        ],
        [
          "真",
          "k"
        ],
        [
          "Tính từ",
          "o"
        ],
        [
          "！",
          "n"
        ]
      ],
      "meaning": "…thật đấy! / …quá! (bày tỏ cảm xúc của người nói).",
      "summary": "真 + tính từ dùng để thể hiện cảm xúc của người nói. 真 có nghĩa là “thật, quả là”.",
      "explain": [
        "真 trước tính từ có thể thể hiện cảm nhận “thật đấy, quả là”. Người nói phản ứng với điều mình thấy, nghe hoặc trải nghiệm.",
        "真好吃！ bày tỏ cảm xúc về món ăn. 真贵！ có thể thể hiện ngạc nhiên vì đắt; không phải cứ có 真 là lời khen.",
        "Chủ ngữ + 真 + tính từ: 今天天气真好！ Nếu đối tượng đã rõ có thể chỉ nói 真漂亮！",
        "Không đặt 真 sau tính từ như 漂亮真. Trong cấu trúc đang học, không ghép 很真好 để tăng mức độ.",
        "Khen đồ: 这个杯子真好看！ Khen sự giúp đỡ: 你真好！ Bày tỏ cảm giác: 今天真冷！",
        "Chọn tính từ theo điều muốn nói. 好吃 nói về món ăn ngon; 好看 nói về vẻ ngoài đẹp; 漂亮 nói về đẹp.",
        "很 thường xuất hiện trong câu miêu tả bình thường: 她很高。 Trong nhiều ngữ cảnh, nó không mang nhấn mạnh “rất” như người Việt dễ nghĩ.",
        "她真高！ thể hiện cảm nhận rõ hơn của người nói: “Cô ấy cao thật!”. Không nên chỉ thay từng từ theo bản dịch tiếng Việt.",
        "真 còn xuất hiện với ý “thực sự”, chẳng hạn 我真想去北京。 Phần cơ bản của bài vẫn là 真 + tính từ.",
        "Không học quy tắc “真 không bao giờ đi với 吗”. Khi hỏi xác nhận, có thể nói 你真的想去吗？ Cách hỏi xác nhận khác với cách cảm thán đang luyện.",
        "Dấu chấm than giúp biểu đạt cảm xúc khi viết, nhưng không phải điều kiện bắt buộc để câu có 真 đúng ngữ pháp."
      ],
      "examples": [
        {
          "zh": "你**真**好！",
          "vi": "Bạn tốt thật đấy!"
        },
        {
          "zh": "今天天气**真**好！",
          "vi": "Hôm nay thời tiết đẹp thật!"
        },
        {
          "zh": "你女儿的房间**真**漂亮！",
          "vi": "Phòng của con gái bạn đẹp thật!"
        },
        {
          "zh": "这个菜**真**好吃！",
          "vi": "Món này ngon thật!",
          "note": "Mở rộng"
        },
        {
          "zh": "我**真**想去北京。",
          "vi": "Tôi thật sự muốn đi Bắc Kinh.",
          "note": "Mở rộng: 真 + động từ tâm lý"
        }
      ],
      "traps": [
        {
          "bad": "今天天气很真好！",
          "good": "今天天气真好！",
          "why": "Trong mẫu cảm thán này dùng 真好 hoặc 很好; không ghép 很真好."
        },
        {
          "bad": "真 tuyệt đối không dùng trong câu hỏi",
          "good": "你真的想去吗？",
          "why": "Câu hỏi xác nhận “Bạn thực sự muốn đi à?” khác với lời cảm thán 你真好！.",
          "kind": "Quy tắc dễ hiểu sai"
        },
        {
          "bad": "你的房间漂亮真！",
          "good": "你的房间真漂亮！",
          "why": "真 luôn đứng TRƯỚC tính từ."
        },
        {
          "bad": "这个菜真漂亮！",
          "good": "这个菜真好吃！",
          "why": "Nếu muốn khen ngon, dùng 好吃. 漂亮 có thể khen cách trình bày đẹp; không phải câu sai trong mọi tình huống.",
          "kind": "Khác ý định"
        },
        {
          "bad": "很 luôn phải dịch là rất",
          "good": "她很高。",
          "why": "Tùy ngữ cảnh, có thể hiểu tự nhiên là “Cô ấy cao”.",
          "kind": "Dịch máy móc"
        }
      ],
      "tips": [
        "Gặp điều gì làm bạn thốt lên “wow!”, dùng ngay 真 + tính từ + ！: 真好吃！真漂亮！真贵！",
        "Dịch tiếng Việt: “… thật đấy / … quá”."
      ],
      "scenario": "Bạn bước vào phòng của bạn mình và thực sự thấy đẹp. Bạn muốn bày tỏ cảm xúc, không chỉ thông báo một đặc điểm: 你的房间真漂亮！",
      "sections": [
        [
          "Ý nghĩa cốt lõi",
          "真 trước tính từ có thể thể hiện cảm nhận “thật đấy, quả là”. Người nói phản ứng với điều mình thấy, nghe hoặc trải nghiệm.",
          "真好吃！ bày tỏ cảm xúc về món ăn. 真贵！ có thể thể hiện ngạc nhiên vì đắt; không phải cứ có 真 là lời khen."
        ],
        [
          "Cấu trúc và vị trí",
          "Chủ ngữ + 真 + tính từ: 今天天气真好！ Nếu đối tượng đã rõ có thể chỉ nói 真漂亮！",
          "Không đặt 真 sau tính từ như 漂亮真. Trong cấu trúc đang học, không ghép 很真好 để tăng mức độ."
        ],
        [
          "Dùng trong giao tiếp",
          "Khen đồ: 这个杯子真好看！ Khen sự giúp đỡ: 你真好！ Bày tỏ cảm giác: 今天真冷！",
          "Chọn tính từ theo điều muốn nói. 好吃 nói về món ăn ngon; 好看 nói về vẻ ngoài đẹp; 漂亮 nói về đẹp."
        ],
        [
          "So sánh với 很",
          "很 thường xuất hiện trong câu miêu tả bình thường: 她很高。 Trong nhiều ngữ cảnh, nó không mang nhấn mạnh “rất” như người Việt dễ nghĩ.",
          "她真高！ thể hiện cảm nhận rõ hơn của người nói: “Cô ấy cao thật!”. Không nên chỉ thay từng từ theo bản dịch tiếng Việt."
        ],
        [
          "Mở rộng và giới hạn",
          "真 còn xuất hiện với ý “thực sự”, chẳng hạn 我真想去北京。 Phần cơ bản của bài vẫn là 真 + tính từ.",
          "Không học quy tắc “真 không bao giờ đi với 吗”. Khi hỏi xác nhận, có thể nói 你真的想去吗？ Cách hỏi xác nhận khác với cách cảm thán đang luyện.",
          "Dấu chấm than giúp biểu đạt cảm xúc khi viết, nhưng không phải điều kiện bắt buộc để câu có 真 đúng ngữ pháp."
        ]
      ],
      "comparisons": [
        [
          "这个菜很好吃。",
          "这个菜真好吃！",
          "Miêu tả món ăn ngon so với cảm thán rõ cảm xúc."
        ],
        [
          "真漂亮！",
          "真的漂亮吗？",
          "Bày tỏ cảm nhận so với hỏi xác nhận có thật sự đẹp không."
        ],
        [
          "真贵！",
          "真好吃！",
          "Một câu có thể than đắt; một câu khen ngon. 真 không mặc định là lời khen."
        ]
      ],
      "task": {
        "prompt": "Bạn ăn ở nhà một người bạn. Hãy khen món ăn, sau đó cảm ơn vì bạn ấy đã giúp mình.",
        "hints": [
          "Chọn tính từ cho món ăn.",
          "Dùng 真好吃、谢谢、你真好.",
          "这个菜……！谢谢你，……！"
        ],
        "sample": "这个菜真好吃！谢谢你，你真好！",
        "criteria": [
          "Dùng tính từ phù hợp món ăn.",
          "Đặt 真 trước tính từ.",
          "Có lời cảm ơn phù hợp tình huống."
        ]
      }
    }
  ],
  "questions": [
    {
      "type": "choice",
      "point": "p1",
      "stem": "这本书不是我____。",
      "options": [
        "的",
        "了",
        "吗",
        "很"
      ],
      "answer": 0,
      "why": "“我的” = cái của tôi. Phải có 的 để nói “của tôi”.",
      "gloss": "Quyển sách này không phải của tôi.",
      "id": "b3-q01",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p1",
      "stem": "Câu nào nói “Cái màu đỏ ở bên trái là của tôi”?",
      "options": [
        "左边那个红色的是我的。",
        "左边那个红色是我。",
        "左边那个是红色我的。",
        "我的是左边那个红色。"
      ],
      "answer": 0,
      "why": "红色的 (cái màu đỏ) và 我的 (cái của tôi) đều là cụm có 的.",
      "id": "b3-q02",
      "version": 2
    },
    {
      "id": "b3-q03",
      "version": 2,
      "type": "choice",
      "point": "p1",
      "stem": "我们都买了杯子。我买的是红色的，你买____呢？",
      "options": [
        "的",
        "吗",
        "吧",
        "很"
      ],
      "answer": 0,
      "why": "你买的 lược 杯子 vì đã nói rõ đang bàn về cốc."
    },
    {
      "type": "choice",
      "point": "p1",
      "stem": "Câu nào SAI?",
      "options": [
        "这是我的书。",
        "这本书是我的。",
        "这是书我的。",
        "这块手表是你的。"
      ],
      "answer": 2,
      "why": "Định ngữ phải đứng TRƯỚC danh từ: 我的书, không phải 书我的.",
      "id": "b3-q04",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p1",
      "stem": "这块手表是你____吗？",
      "answers": [
        [
          "的"
        ]
      ],
      "why": "你的 = 你的手表, cái của bạn.",
      "gloss": "Chiếc đồng hồ này là của bạn à?",
      "id": "b3-q05",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p1",
      "stem": "我的手机是白色的，你____呢？",
      "answers": [
        [
          "的"
        ]
      ],
      "why": "你的 = 你的手机. Danh từ được lược vì đã nhắc ở vế trước.",
      "gloss": "Điện thoại của tôi màu trắng, còn của bạn thì sao?",
      "id": "b3-q06",
      "version": 2
    },
    {
      "type": "order",
      "point": "p1",
      "prompt": "Quyển sách này không phải của tôi.",
      "tokens": [
        "这本书",
        "不是",
        "我的"
      ],
      "answer": "这本书不是我的。",
      "why": "我的 đứng cuối câu thay cho 我的书.",
      "id": "b3-q07",
      "version": 2
    },
    {
      "type": "order",
      "point": "p1",
      "prompt": "Cái màu đỏ ở bên trái là của tôi.",
      "tokens": [
        "左边",
        "那个",
        "红色的",
        "是",
        "我的"
      ],
      "answer": "左边那个红色的是我的。",
      "why": "Hai cụm có 的: 红色的 và 我的.",
      "id": "b3-q08",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p1",
      "stem": "Cụm nào nói rõ “cái cốc mua hôm qua”, vẫn giữ danh từ 杯子?",
      "options": [
        "昨天买的杯子",
        "买昨天的杯子",
        "杯子昨天的买",
        "昨天杯子买的"
      ],
      "answer": 0,
      "why": "Định ngữ “昨天买的” đứng trước danh từ 杯子.",
      "id": "b3-q09",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p1",
      "stem": "Nghe và chọn nghĩa đúng.",
      "options": [
        "Đồng hồ này là của bạn à?",
        "Bạn mua đồng hồ à?",
        "Đồng hồ của tôi đâu?",
        "Đây là đồng hồ mới?"
      ],
      "answer": 0,
      "why": "这块手表是你的吗？ = Chiếc đồng hồ này là của bạn à?",
      "audio": "这块手表是你的吗？",
      "id": "b3-q10",
      "version": 2
    },
    {
      "id": "b3-q11",
      "version": 2,
      "type": "fill",
      "point": "p1",
      "stem": "我朋友送的书在这儿，你朋友送____呢？",
      "answers": [
        [
          "的"
        ]
      ],
      "why": "你朋友送的 lược 书, vì quyển sách đã được nhắc đến."
    },
    {
      "type": "choice",
      "point": "p1",
      "stem": "Chọn câu đúng nghĩa “Cái này không phải của tôi”.",
      "options": [
        "这个不是我。",
        "这个不是我的。",
        "这个不我的是。",
        "这个不是的我。"
      ],
      "answer": 1,
      "why": "不是 + 我的 = không phải của tôi. Thiếu 的 sẽ thành “không phải là tôi”.",
      "id": "b3-q12",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p2",
      "stem": "你休息____吧。",
      "options": [
        "一下",
        "一个",
        "一次",
        "一点"
      ],
      "answer": 0,
      "why": "一下 đứng sau động từ 休息 và trước 吧.",
      "gloss": "Bạn nghỉ một lát đi.",
      "id": "b3-q13",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p2",
      "stem": "Câu nào đúng?",
      "options": [
        "我一下看。",
        "我看一下。",
        "我看下一。",
        "一下我看。"
      ],
      "answer": 1,
      "why": "Động từ + 一下: 看一下.",
      "id": "b3-q14",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p2",
      "stem": "我问____老师。",
      "answers": [
        [
          "一下"
        ]
      ],
      "why": "Động từ + 一下 + tân ngữ: 问一下老师.",
      "gloss": "Tôi hỏi thầy giáo một chút.",
      "id": "b3-q15",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p2",
      "stem": "请你等____。",
      "answers": [
        [
          "一下"
        ]
      ],
      "why": "等一下 = chờ một chút (nhờ vả lịch sự).",
      "gloss": "Xin bạn chờ một chút.",
      "id": "b3-q16",
      "version": 2
    },
    {
      "type": "order",
      "point": "p2",
      "prompt": "Tôi xem một chút.",
      "tokens": [
        "我",
        "看",
        "一下"
      ],
      "answer": "我看一下。",
      "why": "Chủ ngữ + động từ + 一下.",
      "id": "b3-q17",
      "version": 2
    },
    {
      "type": "order",
      "point": "p2",
      "prompt": "Bạn nghỉ một lát đi.",
      "tokens": [
        "你",
        "休息",
        "一下",
        "吧"
      ],
      "answer": "你休息一下吧。",
      "why": "吧 đứng cuối câu, sau 一下.",
      "id": "b3-q18",
      "version": 2
    },
    {
      "type": "order",
      "point": "p2",
      "prompt": "Tôi hỏi thầy giáo một chút.",
      "tokens": [
        "我",
        "问",
        "一下",
        "老师"
      ],
      "answer": "我问一下老师。",
      "why": "Tân ngữ 老师 đứng sau 一下.",
      "id": "b3-q19",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p2",
      "stem": "Câu nào SAI?",
      "options": [
        "你看一下。",
        "请等一下。",
        "我喜欢一下这本书。",
        "我问一下老师。"
      ],
      "answer": 2,
      "why": "喜欢 là trạng thái, không đi với 一下.",
      "id": "b3-q20",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p2",
      "stem": "一下 dùng để làm gì?",
      "options": [
        "Làm hành động nhẹ nhàng, trong thời gian ngắn",
        "Nhấn mạnh hành động kéo dài rất lâu",
        "Chỉ hành động đã hoàn thành",
        "Biến tính từ thành danh từ"
      ],
      "answer": 0,
      "why": "一下 sau động từ = làm một chút, tương đương lặp động từ.",
      "id": "b3-q21",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p2",
      "stem": "Nghe và chọn nghĩa đúng.",
      "options": [
        "Bạn nghỉ một lát đi.",
        "Bạn đã nghỉ rồi.",
        "Tôi muốn nghỉ cả ngày.",
        "Bạn có nghỉ không?"
      ],
      "answer": 0,
      "why": "休息一下吧 = nghỉ một lát đi (lời đề nghị).",
      "audio": "你休息一下吧。",
      "id": "b3-q22",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p2",
      "stem": "我们去商店看____吧。",
      "answers": [
        [
          "一下"
        ]
      ],
      "why": "看一下 = xem một chút; 吧 cuối câu để rủ rê.",
      "gloss": "Chúng ta đến cửa hàng xem một chút nhé.",
      "id": "b3-q23",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p3",
      "stem": "今天天气____好！",
      "options": [
        "真",
        "吧",
        "了",
        "的"
      ],
      "answer": 0,
      "why": "真 + tính từ để thể hiện cảm xúc.",
      "gloss": "Hôm nay thời tiết đẹp thật!",
      "id": "b3-q24",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p3",
      "stem": "Câu nào SAI?",
      "options": [
        "你真好！",
        "今天天气真好！",
        "今天天气很真好！",
        "你女儿的房间真漂亮！"
      ],
      "answer": 2,
      "why": "Trong mẫu này dùng 真好 hoặc 很好, không ghép 很真好.",
      "id": "b3-q25",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p3",
      "stem": "你女儿的房间____漂亮！",
      "answers": [
        [
          "真"
        ]
      ],
      "why": "真 đứng trước tính từ 漂亮.",
      "gloss": "Phòng của con gái bạn đẹp thật!",
      "id": "b3-q26",
      "version": 2
    },
    {
      "type": "order",
      "point": "p3",
      "prompt": "Bạn tốt thật đấy!",
      "tokens": [
        "你",
        "真",
        "好"
      ],
      "answer": "你真好！",
      "why": "真 đứng trước tính từ 好.",
      "id": "b3-q27",
      "version": 2
    },
    {
      "type": "order",
      "point": "p3",
      "prompt": "Phòng của con gái bạn đẹp thật!",
      "tokens": [
        "你女儿的",
        "房间",
        "真",
        "漂亮"
      ],
      "answer": "你女儿的房间真漂亮！",
      "why": "Chủ ngữ dài + 真 + tính từ.",
      "id": "b3-q28",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p3",
      "stem": "Điểm khác nhau giữa 很 và 真?",
      "options": [
        "真 ở cách dùng này biểu lộ cảm xúc rõ hơn; 很 thường dùng trong câu miêu tả",
        "真 chỉ quá khứ, 很 chỉ tương lai",
        "真 dùng cho danh từ, 很 dùng cho động từ",
        "Hai từ hoàn toàn giống nhau"
      ],
      "answer": 0,
      "why": "很 không luôn nhấn mạnh “rất”. 真 trong mẫu này thể hiện cảm nhận của người nói.",
      "id": "b3-q29",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p3",
      "stem": "Bạn muốn trực tiếp cảm ơn và khen người vừa giúp mình. Câu nào phù hợp nhất?",
      "options": [
        "这个菜真好吃！",
        "你真好！谢谢你。",
        "他真高！",
        "我真想去北京。"
      ],
      "answer": 1,
      "why": "你真好！ khen người giúp mình; 谢谢你 bày tỏ cảm ơn. Các câu khác nói về món ăn, chiều cao hoặc mong muốn.",
      "id": "b3-q30",
      "version": 2
    },
    {
      "type": "choice",
      "point": "p3",
      "stem": "Nghe và chọn nghĩa đúng.",
      "options": [
        "Món này ngon thật!",
        "Món này không ngon.",
        "Bạn có thích món này không?",
        "Món này rất đắt."
      ],
      "answer": 0,
      "why": "这个菜真好吃！ = Món này ngon thật!",
      "audio": "这个菜真好吃！",
      "id": "b3-q31",
      "version": 2
    },
    {
      "type": "fill",
      "point": "p3",
      "stem": "这个菜____好吃！",
      "answers": [
        [
          "真"
        ]
      ],
      "why": "真好吃 = ngon thật!",
      "gloss": "Món này ngon thật!",
      "id": "b3-q32",
      "version": 2
    },
    {
      "type": "fill",
      "point": "mix",
      "stem": "我问____老师，这本书是谁____？",
      "answers": [
        [
          "一下"
        ],
        [
          "的"
        ]
      ],
      "why": "Động từ + 一下 + tân ngữ; 谁的 = của ai.",
      "gloss": "Tôi hỏi thầy một chút, quyển sách này là của ai?",
      "id": "b3-q33",
      "version": 2
    },
    {
      "type": "fill",
      "point": "mix",
      "stem": "这个杯子____漂亮！这个是你____吗？",
      "answers": [
        [
          "真"
        ],
        [
          "的"
        ]
      ],
      "why": "真 + tính từ để cảm thán; 你的 = cái của bạn.",
      "gloss": "Cái cốc này đẹp thật! Đây là của bạn à?",
      "id": "b3-q34",
      "version": 2
    },
    {
      "type": "order",
      "point": "mix",
      "prompt": "Cái cốc màu đỏ này đẹp thật!",
      "tokens": [
        "这个",
        "红色的",
        "杯子",
        "真",
        "漂亮"
      ],
      "answer": "这个红色的杯子真漂亮！",
      "why": "红色的 + danh từ (定语), rồi 真 + tính từ.",
      "id": "b3-q35",
      "version": 2
    },
    {
      "type": "order",
      "point": "mix",
      "prompt": "Cái bên trái là của tôi, bạn xem một chút nhé.",
      "tokens": [
        "左边的",
        "是",
        "我的",
        "你",
        "看",
        "一下",
        "吧"
      ],
      "answer": "左边的是我的，你看一下吧。",
      "why": "左边的 và 我的 là cụm 的; 看一下吧 là lời đề nghị.",
      "id": "b3-q36",
      "version": 2
    },
    {
      "type": "choice",
      "point": "mix",
      "stem": "Chọn câu đúng ngữ pháp.",
      "options": [
        "你的手表真好看一下！",
        "这块手表是我的，你看一下吧。",
        "这块手表是我，你一下看吧。",
        "手表真很漂亮吗？"
      ],
      "answer": 1,
      "why": "Câu đúng dùng 我的 (cái của tôi) và 看一下吧 (lời đề nghị).",
      "id": "b3-q37",
      "version": 2
    }
  ],
  "schemaVersion": 2,
  "contentVersion": 2,
  "dialogues": [
    {
      "id": "d1",
      "title": "Chiếc cốc ở phòng nghỉ",
      "context": "小林 và 小王 tìm cốc trước giờ nghỉ. Hãy xác định màu, vị trí và chủ sở hữu; đừng chọn ngay chiếc cốc đầu tiên được nhắc tới.",
      "speakers": {
        "A": "小林",
        "B": "小王"
      },
      "vocab": [
        {
          "zh": "杯子",
          "py": "bēizi",
          "vi": "cái cốc"
        },
        {
          "zh": "左边",
          "py": "zuǒbian",
          "vi": "bên trái"
        },
        {
          "zh": "右边",
          "py": "yòubian",
          "vi": "bên phải"
        },
        {
          "zh": "白色",
          "py": "báisè",
          "vi": "màu trắng"
        },
        {
          "zh": "想起来",
          "py": "xiǎng qǐlai",
          "vi": "nhớ ra"
        },
        {
          "zh": "原来",
          "py": "yuánlái",
          "vi": "hóa ra"
        }
      ],
      "turns": [
        {
          "id": "d1-t1",
          "speaker": "A",
          "zh": "不好意思，我想问一下，我的杯子在哪儿？",
          "vi": "Xin lỗi, tôi muốn hỏi một chút, cốc của tôi ở đâu?",
          "note": "问一下 mở đầu lời hỏi nhẹ nhàng.",
          "point": "p2"
        },
        {
          "id": "d1-t2",
          "speaker": "B",
          "zh": "桌子上有两个。你的是什么颜色的？",
          "vi": "Trên bàn có hai cái. Cốc của bạn màu gì?",
          "note": "",
          "point": ""
        },
        {
          "id": "d1-t3",
          "speaker": "A",
          "zh": "我的是红色的，不是白色的。",
          "vi": "Của tôi màu đỏ, không phải màu trắng.",
          "note": "我的 thay cho 我的杯子.",
          "point": "p1"
        },
        {
          "id": "d1-t4",
          "speaker": "B",
          "zh": "你看，右边那个是你的吗？",
          "vi": "Bạn xem, cái bên phải có phải của bạn không?",
          "note": "你的吗 hỏi về chủ sở hữu.",
          "point": "p1"
        },
        {
          "id": "d1-t5",
          "speaker": "A",
          "zh": "我看一下。不是，右边那个是白色的。",
          "vi": "Để tôi xem một chút. Không phải, cái bên phải màu trắng.",
          "note": "看一下 là xem thử để kiểm tra.",
          "point": "p2"
        },
        {
          "id": "d1-t6",
          "speaker": "B",
          "zh": "那左边那个红色的呢？",
          "vi": "Vậy còn cái màu đỏ bên trái?",
          "note": "红色的 lược 杯子.",
          "point": "p1"
        },
        {
          "id": "d1-t7",
          "speaker": "A",
          "zh": "对，左边那个红色的是我的。",
          "vi": "Đúng, cái màu đỏ bên trái là của tôi.",
          "note": "Cụm đầu xác định vật; 我的 xác định chủ sở hữu.",
          "point": "p1"
        },
        {
          "id": "d1-t8",
          "speaker": "B",
          "zh": "你的杯子真好看！是新买的吗？",
          "vi": "Cốc của bạn đẹp thật! Mới mua à?",
          "note": "真好看 bày tỏ cảm nhận về vẻ ngoài.",
          "point": "p3"
        },
        {
          "id": "d1-t9",
          "speaker": "A",
          "zh": "不是，是朋友送给我的。我很喜欢。",
          "vi": "Không, bạn tôi tặng tôi. Tôi rất thích.",
          "note": "",
          "point": ""
        },
        {
          "id": "d1-t10",
          "speaker": "B",
          "zh": "那个白色的是谁的？",
          "vi": "Cái màu trắng kia là của ai?",
          "note": "谁的 hỏi ai là chủ.",
          "point": "p1"
        },
        {
          "id": "d1-t11",
          "speaker": "A",
          "zh": "我不知道。我问一下小李吧。",
          "vi": "Tôi không biết. Để tôi hỏi Tiểu Lý một chút nhé.",
          "note": "问一下 + người được hỏi.",
          "point": "p2"
        },
        {
          "id": "d1-t12",
          "speaker": "B",
          "zh": "不用问了，我想起来了。白色的是我的！",
          "vi": "Không cần hỏi nữa, tôi nhớ ra rồi. Cái màu trắng là của tôi!",
          "note": "",
          "point": ""
        },
        {
          "id": "d1-t13",
          "speaker": "A",
          "zh": "原来是你的！你今天带了两个杯子吗？",
          "vi": "Hóa ra của bạn! Hôm nay bạn mang hai cái cốc à?",
          "note": "",
          "point": ""
        },
        {
          "id": "d1-t14",
          "speaker": "B",
          "zh": "没有，只有一个。家里那个是蓝色的。",
          "vi": "Không, chỉ một cái. Cái ở nhà màu xanh lam.",
          "note": "",
          "point": ""
        },
        {
          "id": "d1-t15",
          "speaker": "A",
          "zh": "好，我们休息一下，喝点儿水吧。",
          "vi": "Được, chúng ta nghỉ một lát, uống chút nước nhé.",
          "note": "休息一下吧 là lời rủ nghỉ.",
          "point": "p2"
        },
        {
          "id": "d1-t16",
          "speaker": "B",
          "zh": "好啊。你帮我找到了杯子，谢谢你！",
          "vi": "Được đấy. Bạn giúp tôi tìm được cốc rồi, cảm ơn bạn!",
          "note": "",
          "point": ""
        }
      ],
      "checks": [
        {
          "id": "d1-q1",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Hai người chủ yếu đang làm gì?",
          "options": [
            "Tìm và xác định chủ của cốc",
            "Mua cốc mới",
            "Đặt đồ ăn",
            "Hỏi đường"
          ],
          "answer": 0,
          "why": "Các lượt đầu hỏi cốc ở đâu; sau đó xác định cốc đỏ và cốc trắng.",
          "evidence": [
            "d1-t1",
            "d1-t7",
            "d1-t12"
          ]
        },
        {
          "id": "d1-q2",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Cốc của 小林 ở đâu và màu gì?",
          "options": [
            "Bên phải, trắng",
            "Bên trái, đỏ",
            "Ở nhà, xanh",
            "Bên trái, trắng"
          ],
          "answer": 1,
          "why": "小林 xác nhận rõ ở lượt 7.",
          "evidence": [
            "d1-t7"
          ]
        },
        {
          "id": "d1-q3",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Ai là chủ chiếc cốc màu trắng?",
          "options": [
            "小李",
            "Bạn của 小林",
            "小王",
            "Người bán hàng"
          ],
          "answer": 2,
          "why": "小王 nhớ ra chiếc màu trắng là của mình.",
          "evidence": [
            "d1-t12"
          ]
        },
        {
          "id": "d1-q4",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Tại sao không cần hỏi 小李 nữa?",
          "options": [
            "Cửa hàng đã đóng",
            "小王 đã nhớ ra chủ chiếc cốc",
            "小李 không có điện thoại",
            "Cốc bị vỡ"
          ],
          "answer": 1,
          "why": "Thông tin được sửa sau khi 小王 nhớ ra.",
          "evidence": [
            "d1-t11",
            "d1-t12"
          ]
        },
        {
          "id": "d1-q5",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "我的 trong 我的是红色的 thay cho gì?",
          "options": [
            "我的桌子",
            "我的杯子",
            "我的朋友",
            "我的家"
          ],
          "answer": 1,
          "why": "Hai người đã xác định chủ đề là cốc.",
          "evidence": [
            "d1-t1",
            "d1-t2",
            "d1-t3"
          ]
        }
      ],
      "task": {
        "prompt": "Đổi tình huống: cốc của bạn màu xanh ở bên phải; chiếc đỏ bên trái không phải của bạn. Hãy sửa người đang chỉ nhầm rồi cảm ơn.",
        "hints": [
          "Phủ định chiếc bị chỉ nhầm.",
          "Dùng 不是我的、右边、蓝色的.",
          "左边那个……。右边那个……。谢谢你。"
        ],
        "sample": "左边那个红色的不是我的。右边那个蓝色的才是我的。谢谢你！",
        "criteria": [
          "Sửa đúng thông tin bị nhầm.",
          "Nêu đúng màu và vị trí mới.",
          "Có lời cảm ơn."
        ]
      }
    },
    {
      "id": "d2",
      "title": "Chọn cốc trong cửa hàng",
      "context": "顾客 muốn mua cốc cho mẹ. 售货员 giới thiệu hai cỡ; khách phải xem lại rồi quyết định.",
      "speakers": {
        "A": "顾客",
        "B": "售货员"
      },
      "vocab": [
        {
          "zh": "售货员",
          "py": "shòuhuòyuán",
          "vi": "nhân viên bán hàng"
        },
        {
          "zh": "颜色",
          "py": "yánsè",
          "vi": "màu sắc"
        },
        {
          "zh": "拿",
          "py": "ná",
          "vi": "lấy, cầm"
        },
        {
          "zh": "一共",
          "py": "yígòng",
          "vi": "tổng cộng"
        },
        {
          "zh": "不过",
          "py": "búguò",
          "vi": "nhưng, tuy nhiên"
        },
        {
          "zh": "慢慢来",
          "py": "mànman lái",
          "vi": "cứ từ từ"
        }
      ],
      "turns": [
        {
          "id": "d2-t1",
          "speaker": "A",
          "zh": "你好，我想买一个杯子。",
          "vi": "Xin chào, tôi muốn mua một cái cốc.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t2",
          "speaker": "B",
          "zh": "你好！这边有大的，也有小的。你想看哪个？",
          "vi": "Xin chào! Bên này có cái to và cái nhỏ. Bạn muốn xem cái nào?",
          "note": "大的、小的 cùng thay cho 杯子.",
          "point": "p1"
        },
        {
          "id": "d2-t3",
          "speaker": "A",
          "zh": "我想看一下那个白色的。",
          "vi": "Tôi muốn xem thử cái màu trắng kia.",
          "note": "看一下 + vật muốn xem.",
          "point": "p2"
        },
        {
          "id": "d2-t4",
          "speaker": "B",
          "zh": "是左边这个大的吗？",
          "vi": "Là cái to bên trái này à?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t5",
          "speaker": "A",
          "zh": "不是，是右边那个小的。",
          "vi": "Không, là cái nhỏ bên phải kia.",
          "note": "Sửa hiểu nhầm bằng vị trí và kích cỡ.",
          "point": "p1"
        },
        {
          "id": "d2-t6",
          "speaker": "B",
          "zh": "好的，给你。这个二十五块。",
          "vi": "Được, đưa bạn. Cái này 25 tệ.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t7",
          "speaker": "A",
          "zh": "这个真漂亮！不过，我想买给我妈妈。",
          "vi": "Cái này đẹp thật! Nhưng tôi muốn mua cho mẹ tôi.",
          "note": "真漂亮 bày tỏ cảm nhận.",
          "point": "p3"
        },
        {
          "id": "d2-t8",
          "speaker": "B",
          "zh": "你妈妈喜欢什么颜色？",
          "vi": "Mẹ bạn thích màu gì?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t9",
          "speaker": "A",
          "zh": "她喜欢白色。这个是不是太小了？",
          "vi": "Mẹ tôi thích màu trắng. Cái này có nhỏ quá không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t10",
          "speaker": "B",
          "zh": "如果她喜欢喝茶，可以看看那个大的。",
          "vi": "Nếu mẹ bạn thích uống trà thì có thể xem cái to kia.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t11",
          "speaker": "A",
          "zh": "那请你拿一下左边那个大的。",
          "vi": "Vậy nhờ bạn lấy giúp cái to bên trái.",
          "note": "拿一下 diễn đạt lời nhờ nhẹ nhàng.",
          "point": "p2"
        },
        {
          "id": "d2-t12",
          "speaker": "B",
          "zh": "好。你看，这个也是白色的。",
          "vi": "Được. Bạn xem, cái này cũng màu trắng.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t13",
          "speaker": "A",
          "zh": "这个多少钱？",
          "vi": "Cái này bao nhiêu tiền?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t14",
          "speaker": "B",
          "zh": "三十五块，比小的贵十块。",
          "vi": "35 tệ, đắt hơn cái nhỏ 10 tệ.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t15",
          "speaker": "A",
          "zh": "我看一下。嗯，这个好，我要这个大的。",
          "vi": "Để tôi xem một chút. Ừm, cái này được, tôi lấy cái to này.",
          "note": "Quyết định sau khi so sánh.",
          "point": "p1"
        },
        {
          "id": "d2-t16",
          "speaker": "B",
          "zh": "好的。还要别的吗？",
          "vi": "Được. Bạn còn muốn gì khác không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t17",
          "speaker": "A",
          "zh": "不用了。请等一下，我找一下手机。",
          "vi": "Không cần nữa. Chờ tôi một chút, tôi tìm điện thoại.",
          "note": "等一下、找一下 đều chỉ hành động ngắn.",
          "point": "p2"
        },
        {
          "id": "d2-t18",
          "speaker": "B",
          "zh": "没问题，慢慢来。",
          "vi": "Không sao, cứ từ từ.",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t19",
          "speaker": "A",
          "zh": "好了。我买这个白色的大杯子，一共三十五块，对吗？",
          "vi": "Được rồi. Tôi mua cốc to màu trắng này, tổng cộng 35 tệ, đúng không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d2-t20",
          "speaker": "B",
          "zh": "对。谢谢，欢迎下次再来！",
          "vi": "Đúng. Cảm ơn, lần sau lại ghé nhé!",
          "note": "",
          "point": ""
        }
      ],
      "checks": [
        {
          "id": "d2-q1",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Khách mua cốc cho ai?",
          "options": [
            "Cho mình",
            "Cho mẹ",
            "Cho giáo viên",
            "Cho đồng nghiệp"
          ],
          "answer": 1,
          "why": "Khách nói muốn mua cho mẹ.",
          "evidence": [
            "d2-t7"
          ]
        },
        {
          "id": "d2-q2",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Ban đầu khách muốn xem cái nào?",
          "options": [
            "Cái to bên trái",
            "Cái nhỏ bên phải",
            "Cái đỏ ở giữa",
            "Cái xanh ở nhà"
          ],
          "answer": 1,
          "why": "Khách sửa lại lời xác nhận của người bán.",
          "evidence": [
            "d2-t3",
            "d2-t4",
            "d2-t5"
          ]
        },
        {
          "id": "d2-q3",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Cuối cùng khách mua gì?",
          "options": [
            "Cốc nhỏ trắng, 25 tệ",
            "Cốc to trắng, 35 tệ",
            "Hai cốc, 60 tệ",
            "Cốc đỏ, 35 tệ"
          ],
          "answer": 1,
          "why": "Lượt 19 xác nhận cả vật và tổng tiền.",
          "evidence": [
            "d2-t19",
            "d2-t20"
          ]
        },
        {
          "id": "d2-q4",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Vì sao khách nói 请等一下?",
          "options": [
            "Để tìm điện thoại",
            "Để gọi mẹ",
            "Để đổi màu cốc",
            "Để đi uống trà"
          ],
          "answer": 0,
          "why": "Phần tiếp theo của lượt nói giải thích lý do chờ.",
          "evidence": [
            "d2-t17"
          ]
        },
        {
          "id": "d2-q5",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Người bán hiểu nhầm lần đầu. Khách phản hồi phù hợp thế nào?",
          "options": [
            "不是，是右边那个小的。",
            "你真好！",
            "我不知道是谁的。",
            "今天真冷！"
          ],
          "answer": 0,
          "why": "Phủ định rồi chỉ rõ vị trí và kích cỡ cần xem.",
          "evidence": [
            "d2-t4",
            "d2-t5"
          ]
        }
      ],
      "task": {
        "prompt": "Bạn muốn mua chiếc cốc nhỏ màu trắng cho bạn của mình. Xin xem cốc, hỏi giá, rồi nói rằng bạn chọn chiếc nhỏ thay vì chiếc to.",
        "hints": [
          "Thực hiện ba việc: xin xem, hỏi giá, quyết định.",
          "Dùng 看一下、多少钱、小的.",
          "我想……，可以吗？这个……？我要……。"
        ],
        "sample": "我想看一下那个白色的小杯子，可以吗？这个多少钱？我要小的，不要大的。",
        "criteria": [
          "Xin xem đúng vật.",
          "Hỏi được giá.",
          "Quyết định rõ ràng, không chỉ lặp lại hội thoại gốc."
        ]
      }
    },
    {
      "id": "d3",
      "title": "Đến nhà bạn và chọn ảnh",
      "context": "小美 đến nhà 小安. Hai người xem sách, ảnh gia đình và cùng chọn một tấm ảnh để gửi.",
      "speakers": {
        "A": "小美",
        "B": "小安"
      },
      "vocab": [
        {
          "zh": "照片",
          "py": "zhàopiàn",
          "vi": "ảnh"
        },
        {
          "zh": "相机",
          "py": "xiàngjī",
          "vi": "máy ảnh"
        },
        {
          "zh": "发",
          "py": "fā",
          "vi": "gửi"
        },
        {
          "zh": "清楚",
          "py": "qīngchu",
          "vi": "rõ"
        },
        {
          "zh": "相册",
          "py": "xiàngcè",
          "vi": "album ảnh"
        },
        {
          "zh": "以为",
          "py": "yǐwéi",
          "vi": "tưởng rằng (thực tế có thể khác)"
        }
      ],
      "turns": [
        {
          "id": "d3-t1",
          "speaker": "A",
          "zh": "你家真漂亮！这个房间很大。",
          "vi": "Nhà bạn đẹp thật! Phòng này rộng.",
          "note": "真漂亮 là cảm thán; 很大 miêu tả.",
          "point": "p3"
        },
        {
          "id": "d3-t2",
          "speaker": "B",
          "zh": "谢谢！先坐一下吧。我去拿水。",
          "vi": "Cảm ơn! Bạn ngồi một chút nhé. Tôi đi lấy nước.",
          "note": "坐一下吧 là lời mời.",
          "point": "p2"
        },
        {
          "id": "d3-t3",
          "speaker": "A",
          "zh": "不用忙。我可以看一下桌子上的书吗？",
          "vi": "Không cần bận vậy đâu. Tôi xem quyển sách trên bàn một chút được không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t4",
          "speaker": "B",
          "zh": "可以。左边那本是我的，右边那本是我姐姐的。",
          "vi": "Được. Quyển bên trái của tôi, quyển bên phải của chị tôi.",
          "note": "我的、我姐姐的 lược 书.",
          "point": "p1"
        },
        {
          "id": "d3-t5",
          "speaker": "A",
          "zh": "我想看右边那本。里面有很多照片。",
          "vi": "Tôi muốn xem quyển bên phải. Bên trong có nhiều ảnh.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t6",
          "speaker": "B",
          "zh": "那是她的相册。我们去年去了北京。",
          "vi": "Đó là sách ảnh của chị ấy. Năm ngoái chúng tôi đi Bắc Kinh.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t7",
          "speaker": "A",
          "zh": "这张照片真好看！左边这个人是谁？",
          "vi": "Tấm ảnh này đẹp thật! Người bên trái này là ai?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t8",
          "speaker": "B",
          "zh": "是我姐姐。她旁边那个是我。",
          "vi": "Là chị tôi. Người bên cạnh chị ấy là tôi.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t9",
          "speaker": "A",
          "zh": "我还以为右边那个是你。",
          "vi": "Tôi còn tưởng người bên phải kia là bạn.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t10",
          "speaker": "B",
          "zh": "不是，那是我哥哥。他比我高。",
          "vi": "Không, đó là anh tôi. Anh ấy cao hơn tôi.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t11",
          "speaker": "A",
          "zh": "这张是用手机拍的吗？",
          "vi": "Tấm này chụp bằng điện thoại à?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t12",
          "speaker": "B",
          "zh": "不是，是用相机拍的。相机是我爸爸的。",
          "vi": "Không, chụp bằng máy ảnh. Máy ảnh là của bố tôi.",
          "note": "相机是我爸爸的 nói chủ sở hữu; câu trước là cách nhấn mạnh phương tiện, không gộp chung hai cấu trúc.",
          "point": "p1"
        },
        {
          "id": "d3-t13",
          "speaker": "A",
          "zh": "我也想去北京。你能给我发一张照片吗？",
          "vi": "Tôi cũng muốn đi Bắc Kinh. Bạn gửi tôi một tấm ảnh được không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t14",
          "speaker": "B",
          "zh": "可以。你想要哪张？这张红色衣服的，还是那张白色衣服的？",
          "vi": "Được. Bạn muốn tấm nào? Tấm mặc áo đỏ này hay tấm mặc áo trắng kia?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t15",
          "speaker": "A",
          "zh": "我看一下。红色衣服的这张，是你姐姐吗？",
          "vi": "Để tôi xem. Tấm mặc áo đỏ này là chị bạn à?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t16",
          "speaker": "B",
          "zh": "对。白色衣服的那张也是她，不过是在家里拍的。",
          "vi": "Đúng. Tấm mặc áo trắng kia cũng là chị ấy, nhưng chụp ở nhà.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t17",
          "speaker": "A",
          "zh": "我想要在北京拍的那张。",
          "vi": "Tôi muốn tấm chụp ở Bắc Kinh.",
          "note": "在北京拍的 bổ nghĩa cho 那张 trong ngữ cảnh ảnh.",
          "point": "p1"
        },
        {
          "id": "d3-t18",
          "speaker": "B",
          "zh": "好，那就是红色衣服的这张。我找一下。",
          "vi": "Được, vậy là tấm mặc áo đỏ này. Để tôi tìm một chút.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t19",
          "speaker": "A",
          "zh": "请等一下，我想先问一下你姐姐，可以发给我吗？",
          "vi": "Chờ một chút, tôi muốn hỏi chị bạn trước, có thể gửi cho tôi không?",
          "note": "问一下 lịch sự khi xin ý kiến.",
          "point": "p2"
        },
        {
          "id": "d3-t20",
          "speaker": "B",
          "zh": "我刚才问过她了，她说可以。",
          "vi": "Tôi vừa hỏi chị ấy rồi, chị ấy nói được.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t21",
          "speaker": "A",
          "zh": "谢谢！你真好。",
          "vi": "Cảm ơn! Bạn tốt thật.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t22",
          "speaker": "B",
          "zh": "发给你了。你看一下，清楚吗？",
          "vi": "Gửi bạn rồi. Bạn xem một chút, có rõ không?",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t23",
          "speaker": "A",
          "zh": "很清楚。这张照片真漂亮，我也想学拍照。",
          "vi": "Rất rõ. Tấm ảnh này đẹp thật, tôi cũng muốn học chụp ảnh.",
          "note": "",
          "point": ""
        },
        {
          "id": "d3-t24",
          "speaker": "B",
          "zh": "好啊。下次我们一起出去拍照吧！",
          "vi": "Được đấy. Lần sau chúng ta cùng ra ngoài chụp ảnh nhé!",
          "note": "",
          "point": ""
        }
      ],
      "checks": [
        {
          "id": "d3-q1",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Cuốn sách ảnh thuộc về ai?",
          "options": [
            "小安",
            "Chị của 小安",
            "Bố của 小安",
            "小美"
          ],
          "answer": 1,
          "why": "Cuốn bên phải thuộc về chị; sau đó xác nhận đó là sách ảnh của chị.",
          "evidence": [
            "d3-t4",
            "d3-t5",
            "d3-t6"
          ]
        },
        {
          "id": "d3-q2",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Người mà 小美 nhầm là 小安 thực ra là ai?",
          "options": [
            "Chị gái",
            "Anh trai",
            "Bố",
            "Giáo viên"
          ],
          "answer": 1,
          "why": "小安 sửa rõ ở lượt 10.",
          "evidence": [
            "d3-t9",
            "d3-t10"
          ]
        },
        {
          "id": "d3-q3",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Tấm ảnh được chọn có đặc điểm gì?",
          "options": [
            "Áo trắng, chụp ở nhà",
            "Áo đỏ, chụp ở Bắc Kinh",
            "Áo đỏ, chụp ở cửa hàng",
            "Áo trắng, chụp ở Bắc Kinh"
          ],
          "answer": 1,
          "why": "Lượt 17 chọn nơi chụp; lượt 18 xác nhận áo đỏ.",
          "evidence": [
            "d3-t16",
            "d3-t17",
            "d3-t18"
          ]
        },
        {
          "id": "d3-q4",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Tại sao 小美 yêu cầu chờ trước khi gửi ảnh?",
          "options": [
            "Muốn hỏi ý kiến chị của bạn",
            "Điện thoại hết pin",
            "Không thích ảnh",
            "Muốn mua máy ảnh"
          ],
          "answer": 0,
          "why": "Lượt 19 nói rõ ý định xin phép.",
          "evidence": [
            "d3-t19"
          ]
        },
        {
          "id": "d3-q5",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "我的 trong 左边那本是我的 thay cho gì?",
          "options": [
            "我的水",
            "我的书",
            "我的相机",
            "我的照片"
          ],
          "answer": 1,
          "why": "Cuộc nói chuyện đang nói về sách trên bàn.",
          "evidence": [
            "d3-t3",
            "d3-t4"
          ]
        },
        {
          "id": "d3-q6",
          "version": 1,
          "type": "choice",
          "point": "mix",
          "stem": "Cuối đoạn, hai người dự định làm gì?",
          "options": [
            "Mua áo",
            "Cùng đi chụp ảnh",
            "Đổi điện thoại",
            "Đi làm ngay"
          ],
          "answer": 1,
          "why": "Lời rủ cuối đoạn là cùng ra ngoài chụp ảnh lần sau.",
          "evidence": [
            "d3-t23",
            "d3-t24"
          ]
        }
      ],
      "task": {
        "prompt": "Bạn muốn xin một tấm ảnh chụp ở nhà, không phải ở Bắc Kinh. Hãy nói rõ ảnh cần xin, hỏi có được gửi không và khen tấm ảnh.",
        "hints": [
          "Chọn ảnh theo nơi chụp.",
          "Dùng 在家里拍的、可以发给我吗、真漂亮.",
          "我想要……。……？这张照片……！"
        ],
        "sample": "我想要在家里拍的那张。可以发给我吗？这张照片真漂亮！",
        "criteria": [
          "Chọn đúng ảnh theo tình huống mới.",
          "Có lời xin gửi ảnh.",
          "Có lời nhận xét với 真."
        ]
      }
    }
  ],
  "review": [
    {
      "day": 1,
      "title": "Nhớ lại không nhìn công thức",
      "tasks": [
        "Nói hai câu để phân biệt đồ của mình và của người khác.",
        "Nhờ ai đó chờ một chút rồi khen một đồ vật."
      ]
    },
    {
      "day": 3,
      "title": "Nghe lại và đổi thông tin",
      "tasks": [
        "Nghe hội thoại cửa hàng khi ẩn chữ; kể lại khách đã chọn gì.",
        "Đổi màu và kích cỡ trong nhiệm vụ đóng vai."
      ]
    },
    {
      "day": 7,
      "title": "Tự giao tiếp trong tình huống mới",
      "tasks": [
        "Đóng vai một hội thoại mà không mở câu mẫu.",
        "Tự nói 4–6 câu về đồ vật ở nơi làm việc hoặc ở nhà."
      ]
    }
  ]
});
})();
