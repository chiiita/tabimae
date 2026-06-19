window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.vietnam = {
  id:"vietnam", name:"ベトナム", nameEn:"Vietnam", flag:"🇻🇳", lang:"ベトナム語",
  tagline:"活気と物価の安さが魅力。バイクの洪水とぼったくりタクシーに要注意の国。",
  noteUrl:"",
  gradient:["#b3322c","#d9a441"],
  summary:{ currency:"ドン", timezone:"−2時間", safety:2, season:"乾季(11〜4月)" },
  currencyCode:"VND",
  region:"アジア",
  basics:[
    {label:"通貨", value:"ドン（VND）", note:"桁が大きくゼロを数え間違えやすい。20万ドン≒約1,150円が目安。"},
    {label:"チップ", value:"基本不要だが浸透しつつある", note:"スパやポーターには少額(2〜5万ドン)を渡すと喜ばれる。"},
    {label:"交通", value:"配車アプリGrabが安心", note:"バイク移動が中心。流しのタクシーよりGrabで料金トラブル回避。"},
    {label:"気候", value:"南北で大きく異なる", note:"南部は常夏、北部は四季があり冬は肌寒い。雨季と乾季がある。"},
    {label:"電圧・プラグ", value:"220V／A・C両対応が多い", note:"日本のAプラグがそのまま挿せる場所も多いが変換プラグ持参が安心。"},
    {label:"ネット", value:"自由・SIMが安い", note:"空港や街でプリペイドSIM・eSIMが安価。VPN不要。"},
    {label:"水", value:"水道水は飲用不可", note:"ミネラルウォーターを購入。氷や生野菜にも注意。"},
    {label:"時差", value:"日本より2時間遅い", note:"サマータイムなし。"}
  ],
  safety:[
    {category:"治安・防犯", icon:"🛡️", items:[
      "凶悪犯罪は少ないが、バイクによるひったくりが最大の脅威。",
      "スマホ・バッグは車道側に持たず、歩道の建物側に抱える。",
      "歩きスマホ・写真撮影中のひったくりが多発。立ち止まって安全な場所で。",
      "夜間の人通りの少ない道は避ける。",
      "貴重品はホテルのセーフティボックスに。"
    ]},
    {category:"詐欺・ぼったくり", icon:"⚠️", items:[
      "タクシーは正規大手「Vinasun」「Mai Linh」かGrabを使う。社名似せの偽タクシーに注意。",
      "メーターの進みが異常に速い改造メーター車に注意。",
      "釣り銭をわざと少なく渡す・桁を間違えるふりに注意。受け取り時に確認。",
      "シクロ(人力車)やバイタクは乗る前に必ず料金を交渉・確定する。",
      "「無料」の靴磨き・物売りは後で高額請求されることがある。"
    ]},
    {category:"マナー・文化", icon:"🤝", items:[
      "道路横断はバイクの流れに逆らわず、一定速度でゆっくり歩いて渡る。",
      "寺院では肌の露出を控え、帽子・サングラスを外す。",
      "頭を触る・足の裏を人に向けるのは失礼にあたる。",
      "値段交渉は市場では当たり前だが、笑顔で穏やかに。",
      "公共の場での過度な愛情表現は控えめに。"
    ]},
    {category:"法律・禁止事項", icon:"⚖️", items:[
      "麻薬犯罪は死刑もある最重罪。絶対に関わらない。",
      "軍事施設・政府機関の撮影は避ける。",
      "ドンの国外持ち出しには制限があり、多額の外貨は申告が必要。",
      "骨董品・文化財の無許可持ち出しは違法。",
      "賭博は違法。誘われても応じない。"
    ]},
    {category:"服装", icon:"👕", items:[
      "南部・夏は高温多湿、通気性のよい軽装でよい。",
      "寺院・廟ではノースリーブ・短パンを避け、肩と膝を隠す。",
      "北部の冬(12〜2月)は冷えるため上着を用意。",
      "強い日差し対策に帽子・サングラス・日焼け止めを。",
      "スコールに備え折りたたみ傘やレインコートを携帯。"
    ]}
  ],
  phrases:[
    {scene:"あいさつ・基本", icon:"👋", items:[
      {ja:"こんにちは", local:"Xin chào", roman:"シンチャオ"},
      {ja:"ありがとう", local:"Cảm ơn", roman:"カムオン"},
      {ja:"すみません", local:"Xin lỗi", roman:"シンロイ"},
      {ja:"さようなら", local:"Tạm biệt", roman:"タムビエッ"},
      {ja:"はい／いいえ", local:"Vâng／Không", roman:"ヴァン／ホン"}
    ]},
    {scene:"レストラン・飲食", icon:"🍽️", items:[
      {ja:"メニューをください", local:"Cho tôi xem thực đơn", roman:"チョー トイ セム トゥックドン"},
      {ja:"これをください", local:"Cho tôi cái này", roman:"チョー トイ カイナイ"},
      {ja:"パクチー抜きで", local:"Không cho rau mùi", roman:"ホン チョー ザウムイ"},
      {ja:"お会計お願いします", local:"Tính tiền", roman:"ティンティエン"},
      {ja:"おいしいです", local:"Ngon quá", roman:"ンゴンクァー"}
    ]},
    {scene:"買い物・値段交渉", icon:"🛍️", items:[
      {ja:"いくらですか？", local:"Bao nhiêu tiền?", roman:"バオニュー ティエン"},
      {ja:"高すぎます", local:"Đắt quá", roman:"ダッ クァー"},
      {ja:"安くして", local:"Giảm giá đi", roman:"ザム ザー ディー"},
      {ja:"見ているだけです", local:"Tôi chỉ xem thôi", roman:"トイ チー セム トイ"},
      {ja:"これを買います", local:"Tôi mua cái này", roman:"トイ ムア カイナイ"}
    ]},
    {scene:"移動・タクシー", icon:"🚕", items:[
      {ja:"ここまでお願いします", local:"Cho tôi đến đây", roman:"チョー トイ デン ダイ"},
      {ja:"メーターを使って", local:"Bật đồng hồ đi", roman:"バッ ドンホー ディー"},
      {ja:"空港まで行きたい", local:"Tôi muốn đến sân bay", roman:"トイ ムオン デン サンバイ"},
      {ja:"ここで止めて", local:"Dừng ở đây", roman:"ズン オー ダイ"},
      {ja:"いくらですか？", local:"Bao nhiêu tiền?", roman:"バオニュー ティエン"}
    ]},
    {scene:"ホテル・宿泊", icon:"🏨", items:[
      {ja:"チェックインお願いします", local:"Tôi muốn nhận phòng", roman:"トイ ムオン ニャン フォン"},
      {ja:"予約しています", local:"Tôi đã đặt phòng", roman:"トイ ダー ダッ フォン"},
      {ja:"Wi-Fiのパスワードは？", local:"Mật khẩu Wi-Fi là gì?", roman:"マッカウ ワイファイ ラー ジー"},
      {ja:"荷物を預かってください", local:"Giữ hành lý giúp tôi", roman:"ズー ハインリー ズプ トイ"},
      {ja:"部屋を変えてほしい", local:"Tôi muốn đổi phòng", roman:"トイ ムオン ドイ フォン"}
    ]},
    {scene:"道案内・交通", icon:"🧭", items:[
      {ja:"トイレはどこですか？", local:"Nhà vệ sinh ở đâu?", roman:"ニャー ヴェシン オー ダウ"},
      {ja:"駅はどこですか？", local:"Ga ở đâu?", roman:"ガー オー ダウ"},
      {ja:"道に迷いました", local:"Tôi bị lạc đường", roman:"トイ ビ ラック ドゥオン"},
      {ja:"まっすぐですか？", local:"Đi thẳng à?", roman:"ディー タン アー"},
      {ja:"ここはどこですか？", local:"Đây là đâu?", roman:"ダイ ラー ダウ"}
    ]},
    {scene:"体調・薬局・病院", icon:"💊", items:[
      {ja:"気分が悪いです", local:"Tôi thấy khó chịu", roman:"トイ タイ コー チウ"},
      {ja:"お腹が痛い", local:"Tôi bị đau bụng", roman:"トイ ビ ダウ ブン"},
      {ja:"薬局はどこですか？", local:"Hiệu thuốc ở đâu?", roman:"ヒエウ トゥオック オー ダウ"},
      {ja:"病院へ行きたい", local:"Tôi muốn đến bệnh viện", roman:"トイ ムオン デン ベン ヴィエン"},
      {ja:"アレルギーがあります", local:"Tôi bị dị ứng", roman:"トイ ビ ジー ウン"}
    ]},
    {scene:"トラブル・緊急", icon:"🆘", items:[
      {ja:"助けて！", local:"Cứu tôi với!", roman:"クー トイ ヴォイ"},
      {ja:"警察を呼んでください", local:"Hãy gọi cảnh sát", roman:"ハイ ゴイ カインサッ"},
      {ja:"財布を盗まれました", local:"Tôi bị mất ví", roman:"トイ ビ マッ ヴィー"},
      {ja:"日本大使館に連絡したい", local:"Tôi muốn liên hệ đại sứ quán Nhật", roman:"トイ ムオン リエンヘ ダイスークァン ニャッ"},
      {ja:"救急車を呼んでください", local:"Hãy gọi xe cấp cứu", roman:"ハイ ゴイ セー カップクー"}
    ]},
    {scene:"数字・あいづち", icon:"🔢", items:[
      {ja:"1・2・3", local:"Một・Hai・Ba", roman:"モッ・ハイ・バー"},
      {ja:"10・100", local:"Mười・Một trăm", roman:"ムオイ・モッ チャム"},
      {ja:"そうです", local:"Đúng rồi", roman:"ドゥン ゾイ"},
      {ja:"違います", local:"Không phải", roman:"ホン ファイ"},
      {ja:"わかりません", local:"Tôi không hiểu", roman:"トイ ホン ヒエウ"}
    ]}
  ],
  emergency:[
    {label:"警察", value:"113", note:"事件・盗難の通報。ベトナム語のみが基本。"},
    {label:"救急（救急車）", value:"115", note:"救急医療・救急車の要請。"},
    {label:"消防", value:"114", note:"火災・救助。"},
    {label:"在ベトナム日本国大使館（ハノイ）", value:"+84-24-3846-3000", note:"北部地域を管轄。"},
    {label:"在ホーチミン日本国総領事館", value:"+84-28-3933-3510", note:"南部地域を管轄。"},
    {label:"パスポート紛失手順", value:"まず警察(113)で紛失・盗難届を出し証明を取得、次に大使館または総領事館で帰国のための渡航書または旅券を申請する。", note:"証明写真と身分確認書類の控えを準備。"}
  ],
  apps:[
    {name:"Grab", category:"配車", desc:"車・バイク配車も食事宅配も網羅。料金事前確定でぼったくり回避の必須アプリ。"},
    {name:"Google Maps", category:"地図", desc:"VPN不要で利用可。徒歩・バイク経路も正確。"},
    {name:"Google 翻訳", category:"翻訳", desc:"ベトナム語のカメラ翻訳・音声翻訳が便利。オフライン辞書も。"},
    {name:"XE Currency", category:"通貨換算", desc:"桁の大きいドンを瞬時に円換算。会計時の確認に。"}
  ]
};
