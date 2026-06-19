window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.belgium = {
  id: "belgium",
  name: "ベルギー",
  nameEn: "Belgium",
  flag: "🇧🇪",
  lang: "オランダ語・フランス語・ドイツ語",
  tagline: "チョコとワッフル、美しい広場と中世の街並みが香るEUの中心地",
  noteUrl: "",
  gradient: ["#1d3b6e", "#c8102e"],
  summary: { currency: "ユーロ", timezone: "−8時間（夏時間は−7時間）", safety: 2, season: "5〜9月の春〜初秋が快適。冬は寒く曇りがち" },
  currencyCode: "EUR",
  region: "ヨーロッパ",
  basics: [
    { label: "通貨", value: "ユーロ（EUR / €）", note: "カード決済が広く普及。少額の現金も用意しておくと安心" },
    { label: "チップ", value: "基本不要（任意で端数切り上げ）", note: "サービス料は会計に含まれる。満足したら数ユーロ置く程度" },
    { label: "交通", value: "鉄道・トラム・地下鉄・バスが充実", note: "主要都市間はSNCB鉄道が便利。市内はMOBIB等のICカードが使える" },
    { label: "気候", value: "西岸海洋性気候で一年中雨が多い", note: "夏でも肌寒い日があり、折りたたみ傘と上着が必須" },
    { label: "電圧・プラグ", value: "230V / 50Hz・Cタイプ/Eタイプ", note: "丸ピン2本（Eは接地穴あり）。日本の機器は変換プラグ＋対応確認を" },
    { label: "ネット", value: "Wi-Fiはホテル・カフェで普及", note: "EU内データローミング可能なeSIM・SIMが旅行者に便利" },
    { label: "水", value: "水道水は飲用可", note: "気になる場合はミネラルウォーターを購入。炭酸入りも多い" },
    { label: "時差", value: "日本より8時間遅れ", note: "3月末〜10月末の夏時間は7時間遅れになる" }
  ],
  safety: [
    { category: "治安・防犯", icon: "🛡️", items: [
      "全体的に治安は良いが、ブリュッセルの主要駅周辺やノール地区は夜間の一人歩きを避ける。",
      "ブリュッセル南駅（ミディ駅）周辺はスリ・置き引きが多発する要注意エリア。",
      "観光地のグランプラスや地下鉄では荷物を体の前に抱える。",
      "ホテルの貴重品はセーフティボックスへ。多額の現金は持ち歩かない。",
      "夜間に人気のない裏通りを通らず、明るい大通りを選んで移動する。"
    ]},
    { category: "詐欺・ぼったくり", icon: "💸", items: [
      "地下鉄や混雑した広場での集団スリに注意。話しかけや署名活動は気をそらす手口。",
      "「アンケート」や寄付を装って近づき、隙に財布を抜く手口がある。",
      "観光地のレストランは注文前にメニューの価格を必ず確認する。",
      "正規タクシーを利用し、無認可の客引きタクシーには乗らない。",
      "ATMは銀行併設の機械を使い、カードの暗証番号は手で隠して入力する。"
    ]},
    { category: "マナー・文化", icon: "🤝", items: [
      "言語は地域で異なる。北部はオランダ語、南部はフランス語、東部はドイツ語が公用語。",
      "店や施設に入る際は「ボンジュール」や「ハロー」と一言あいさつするのが礼儀。",
      "ブリュッセルは仏蘭バイリンガル地域。どちらの言語でも基本は通じる。",
      "公共の場では静かに振る舞い、列にはきちんと並ぶ。",
      "レストランでは大声で店員を呼ばず、アイコンタクトで合図する。"
    ]},
    { category: "法律・禁止事項", icon: "⚖️", items: [
      "公共の場での飲酒は地域により規制あり。路上で大量飲酒しない。",
      "大麻は個人少量でも合法ではなく、観光客の安易な購入はトラブルのもと。",
      "公共交通は無賃乗車に高額の罰金が科されるため必ず有効な切符を持つ。",
      "観光施設や教会では写真撮影が禁止の場所があるので表示に従う。",
      "ポイ捨てや路上喫煙が禁止のエリアがあり、違反は罰金対象になる。"
    ]},
    { category: "服装", icon: "👕", items: [
      "夏でも朝晩は冷えるため、羽織れる上着を一枚持つと安心。",
      "雨が多いので防水ジャケットや撥水性のある靴が役立つ。",
      "教会や宗教施設では肩や膝を露出しすぎない服装を心がける。",
      "高級レストランやオペラでは、ややきれいめの服装が好まれる。",
      "石畳の街が多いので、歩きやすいスニーカーやフラットシューズが基本。"
    ]}
  ],
  phrases: [
    { scene: "あいさつ・基本", icon: "👋", items: [
      { ja: "こんにちは", local: "Bonjour / Goedendag", roman: "ボンジュール／フーデンダッハ" },
      { ja: "ありがとう", local: "Merci / Dank u", roman: "メルシー／ダンキュ" },
      { ja: "はい / いいえ", local: "Oui, Non / Ja, Nee", roman: "ウィ、ノン／ヤー、ネー" },
      { ja: "すみません（呼びかけ）", local: "Excusez-moi / Pardon", roman: "エクスキュゼ・モワ／パルドン" },
      { ja: "さようなら", local: "Au revoir / Tot ziens", roman: "オ・ルヴォワール／トット・ズィーンス" }
    ]},
    { scene: "レストラン・飲食", icon: "🍽️", items: [
      { ja: "メニューをください", local: "La carte, s'il vous plaît", roman: "ラ・カルト・シル・ヴ・プレ" },
      { ja: "これをお願いします", local: "Je voudrais ceci", roman: "ジュ・ヴドレ・スシ" },
      { ja: "おいしいです", local: "C'est délicieux", roman: "セ・デリシュー" },
      { ja: "お会計をお願いします", local: "L'addition, s'il vous plaît", roman: "ラディシオン・シル・ヴ・プレ" },
      { ja: "ビールを一杯ください", local: "Une bière, s'il vous plaît", roman: "ユヌ・ビエール・シル・ヴ・プレ" }
    ]},
    { scene: "買い物・値段交渉", icon: "🛍️", items: [
      { ja: "いくらですか？", local: "Combien ça coûte ?", roman: "コンビヤン・サ・クート" },
      { ja: "これを見せてください", local: "Montrez-moi ceci", roman: "モントレ・モワ・スシ" },
      { ja: "カードで払えますか？", local: "Je peux payer par carte ?", roman: "ジュ・プ・ペイエ・パール・カルト" },
      { ja: "袋をください", local: "Un sac, s'il vous plaît", roman: "アン・サック・シル・ヴ・プレ" },
      { ja: "見ているだけです", local: "Je regarde seulement", roman: "ジュ・ルガルド・スルマン" }
    ]},
    { scene: "移動・タクシー", icon: "🚕", items: [
      { ja: "この住所まで行ってください", local: "À cette adresse, s'il vous plaît", roman: "ア・セット・アドレス・シル・ヴ・プレ" },
      { ja: "駅までいくらですか？", local: "C'est combien pour la gare ?", roman: "セ・コンビヤン・プール・ラ・ガール" },
      { ja: "ここで止めてください", local: "Arrêtez-vous ici", roman: "アレテ・ヴ・イシ" },
      { ja: "急いでいます", local: "Je suis pressé", roman: "ジュ・スュイ・プレッセ" },
      { ja: "メーターを使ってください", local: "Le compteur, s'il vous plaît", roman: "ル・コントゥール・シル・ヴ・プレ" }
    ]},
    { scene: "ホテル・宿泊", icon: "🏨", items: [
      { ja: "予約しています", local: "J'ai une réservation", roman: "ジェ・ユヌ・レゼルヴァシオン" },
      { ja: "チェックインしたいです", local: "Je voudrais m'enregistrer", roman: "ジュ・ヴドレ・マンレジストレ" },
      { ja: "部屋の鍵をください", local: "La clé, s'il vous plaît", roman: "ラ・クレ・シル・ヴ・プレ" },
      { ja: "Wi-Fiのパスワードは？", local: "Le mot de passe Wi-Fi ?", roman: "ル・モ・ドゥ・パス・ウィフィ" },
      { ja: "荷物を預かってください", local: "Pouvez-vous garder mes bagages ?", roman: "プヴェ・ヴ・ガルデ・メ・バガージュ" }
    ]},
    { scene: "道案内・交通", icon: "🧭", items: [
      { ja: "ここはどこですか？", local: "Où suis-je ?", roman: "ウ・スュイ・ジュ" },
      { ja: "駅はどこですか？", local: "Où est la gare ?", roman: "ウ・エ・ラ・ガール" },
      { ja: "まっすぐですか？", local: "C'est tout droit ?", roman: "セ・トゥ・ドロワ" },
      { ja: "地図で教えてください", local: "Montrez-moi sur la carte", roman: "モントレ・モワ・スュール・ラ・カルト" },
      { ja: "歩いて行けますか？", local: "On peut y aller à pied ?", roman: "オン・プ・イ・アレ・ア・ピエ" }
    ]},
    { scene: "体調・薬局・病院", icon: "💊", items: [
      { ja: "気分が悪いです", local: "Je me sens mal", roman: "ジュ・ム・サン・マル" },
      { ja: "薬局はどこですか？", local: "Où est la pharmacie ?", roman: "ウ・エ・ラ・ファルマシー" },
      { ja: "頭が痛いです", local: "J'ai mal à la tête", roman: "ジェ・マル・ア・ラ・テット" },
      { ja: "医者を呼んでください", local: "Appelez un médecin", roman: "アプレ・アン・メドサン" },
      { ja: "アレルギーがあります", local: "J'ai une allergie", roman: "ジェ・ユヌ・アレルジー" }
    ]},
    { scene: "トラブル・緊急", icon: "🆘", items: [
      { ja: "助けて！", local: "Au secours !", roman: "オ・スクール" },
      { ja: "警察を呼んでください", local: "Appelez la police", roman: "アプレ・ラ・ポリス" },
      { ja: "財布を盗まれました", local: "On m'a volé mon portefeuille", roman: "オン・マ・ヴォレ・モン・ポルトフォイユ" },
      { ja: "パスポートをなくしました", local: "J'ai perdu mon passeport", roman: "ジェ・ペルデュ・モン・パスポール" },
      { ja: "日本語を話せる人はいますか？", local: "Quelqu'un parle japonais ?", roman: "ケルカン・パルル・ジャポネ" }
    ]},
    { scene: "数字・あいづち", icon: "🔢", items: [
      { ja: "1・2・3", local: "Un, Deux, Trois", roman: "アン、ドゥ、トロワ" },
      { ja: "10・100", local: "Dix, Cent", roman: "ディス、サン" },
      { ja: "OK・了解", local: "D'accord", roman: "ダッコール" },
      { ja: "本当に？", local: "Vraiment ?", roman: "ヴレマン" },
      { ja: "お願いします", local: "S'il vous plaît", roman: "シル・ヴ・プレ" }
    ]}
  ],
  emergency: [
    { label: "緊急通報（EU共通・救急・消防）", value: "112", note: "ヨーロッパ共通の緊急番号。24時間無料でつながる" },
    { label: "警察", value: "101", note: "ベルギー国内で警察に急ぎ連絡したいときの番号" },
    { label: "在ベルギー日本国大使館（代表）", value: "+32-2-513-2340", note: "ブリュッセル。パスポート紛失など緊急時に相談できる" },
    { label: "在ベルギー日本国大使館（領事部）", value: "+32-2-500-0580", note: "領事窓口。平日9:15〜12:00／13:30〜16:00" },
    { label: "オンコール医師サービス", value: "1733", note: "緊急ではない夜間・休日の医師相談窓口" }
  ],
  apps: [
    { name: "SNCB / NMBS", category: "交通", desc: "ベルギー国鉄の公式アプリ。時刻検索とチケット購入ができる" },
    { name: "Google マップ", category: "地図・ナビ", desc: "徒歩・公共交通の経路検索に必須。オフライン地図も保存可能" },
    { name: "Google 翻訳", category: "翻訳", desc: "蘭・仏・独に対応。カメラ翻訳でメニューや標識も読める" },
    { name: "Bolt", category: "配車", desc: "主要都市で使える配車アプリ。料金が事前にわかり安心" }
  ]
};
