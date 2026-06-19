// アメリカ・ハワイ — データファイル
window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.usa = {
  id: "usa",
  name: "アメリカ・ハワイ",
  nameEn: "USA / Hawaii",
  flag: "🇺🇸",
  lang: "英語",
  tagline: "チップ文化と治安の地域差が要点。ESTA・水・チップを押さえれば英語圏の王道。",
  noteUrl: "",
  gradient: ["#2f5fae", "#a5384c"],
  summary: { currency: "米ドル", timezone: "地域による", safety: 2, season: "通年(地域差)" },
  currencyCode: "USD",
  region: "北米・ハワイ",

  basics: [
    { label: "通貨", value: "米ドル（USD / $）", note: "1ドル ≒ 150円前後（変動大）。少額紙幣（$1・$5）をチップ用に用意。" },
    { label: "チップ", value: "必須（外食15〜20%）", note: "レストラン18〜20%、タクシー15%、ホテル1個$1〜2、ベッドメイク$2〜5。カード端末で選択することも多い。" },
    { label: "入国", value: "ESTA（事前申請）必須", note: "出発前にESTAをオンライン申請（有料）。承認に時間がかかることも。" },
    { label: "交通", value: "Uber/Lyft・レンタカー", note: "都市以外は車社会。ハワイ・郊外はレンタカーが現実的。配車アプリが便利。" },
    { label: "気候", value: "地域差が大きい", note: "ハワイは年中温暖。本土は地域で激変。室内冷房が強い。" },
    { label: "電圧・プラグ", value: "120V / A型（日本とほぼ同形）", note: "多くの機器がそのまま使えるが、対応電圧を確認。" },
    { label: "ネット", value: "eSIM/SIM・WiFi", note: "T-Mobile等のプリペイドやeSIMが手軽。" },
    { label: "水", value: "水道水は基本飲める", note: "気になればミネラル水を。" },
  ],

  safety: [
    {
      category: "治安・防犯", icon: "🛡️",
      items: [
        "治安は地域差が極端。行く前にエリアの評判を必ず調べる。",
        "車上荒らしが多い。車内に荷物を見える形で置かない。",
        "夜間の人気のない場所・特定地区には立ち入らない。",
        "現金・パスポートは分散して持つ。ホテルのセーフティボックス活用。",
      ],
    },
    {
      category: "詐欺・トラブル", icon: "⚠️",
      items: [
        "無許可の白タク・声をかけてくる送迎は使わない。Uber/Lyft/正規タクシー。",
        "観光地での署名・募金・ミサンガ押し付けは詐欺の入口。",
        "ATMはスキミング対策で銀行併設のものを使う。",
      ],
    },
    {
      category: "マナー・文化", icon: "🤝",
      items: [
        "チップは『サービスへの対価』。理由なく無しはトラブルに。",
        "順番・列を守る。割り込みは強く嫌われる。",
        "個人スペースを尊重。むやみに人や子どもを撮らない。",
        "店員の挨拶には笑顔で一言返すのが自然。",
      ],
    },
    {
      category: "法律・禁止事項", icon: "🚫",
      items: [
        "飲酒は21歳から。屋外・路上での飲酒は禁止地域が多い（紙袋に入れる文化）。",
        "州ごとに法律が違う（大麻・銃など）。州の規則に従う。",
        "公共の場での喫煙は厳しく制限。指定場所で。",
        "ビーチ・公園のルール（飲酒・喫煙・ドローン）に注意。",
      ],
    },
    {
      category: "服装", icon: "👕",
      items: [
        "屋内冷房が非常に強い。羽織り物必携。",
        "高級レストランはドレスコードがある場合あり。",
        "ハワイはリゾートカジュアルでOK、日差し対策を。",
      ],
    },
  ],

  phrases: [
    {
      scene: "あいさつ・基本", icon: "👋",
      items: [
        { ja: "こんにちは", local: "Hello / Hi", roman: "ハロー / ハイ" },
        { ja: "ありがとう", local: "Thank you", roman: "サンキュー" },
        { ja: "すみません（呼びかけ）", local: "Excuse me", roman: "イクスキューズ ミー" },
        { ja: "ごめんなさい", local: "I'm sorry", roman: "アイム ソーリー" },
        { ja: "大丈夫です / 結構です", local: "I'm good, thanks", roman: "アイム グッ、サンクス" },
      ],
    },
    {
      scene: "レストラン", icon: "🍔",
      items: [
        { ja: "これをお願いします", local: "I'll have this, please.", roman: "アイル ハヴ ディス、プリーズ" },
        { ja: "おすすめは？", local: "What do you recommend?", roman: "ワッ ドゥ ユー レコメンド？" },
        { ja: "お会計お願いします", local: "Check, please.", roman: "チェック、プリーズ" },
        { ja: "持ち帰りできますか？", local: "Can I get this to go?", roman: "キャナイ ゲッ ディス トゥ ゴー？" },
        { ja: "水をください", local: "Can I get some water?", roman: "キャナイ ゲッ サム ウォーター？" },
      ],
    },
    {
      scene: "買い物・支払い", icon: "🛍️",
      items: [
        { ja: "いくらですか？", local: "How much is this?", roman: "ハウ マッチ イズ ディス？" },
        { ja: "カードで払えますか？", local: "Can I pay by card?", roman: "キャナイ ペイ バイ カード？" },
        { ja: "見てるだけです", local: "I'm just looking, thanks.", roman: "アイム ジャス ルッキン、サンクス" },
        { ja: "試着できますか？", local: "Can I try this on?", roman: "キャナイ トライ ディス オン？" },
      ],
    },
    {
      scene: "移動・タクシー", icon: "🚕",
      items: [
        { ja: "ここへお願いします", local: "Take me here, please. (見せる)", roman: "テイク ミー ヒア、プリーズ" },
        { ja: "ここで止めてください", local: "Stop here, please.", roman: "ストップ ヒア、プリーズ" },
        { ja: "トイレはどこですか？", local: "Where's the restroom?", roman: "ウェアズ ザ レストルーム？" },
        { ja: "道に迷いました", local: "I'm lost.", roman: "アイム ロスト" },
      ],
    },
    {
      scene: "トラブル・緊急", icon: "🆘",
      items: [
        { ja: "助けて！", local: "Help!", roman: "ヘルプ！" },
        { ja: "警察を呼んでください", local: "Call the police, please.", roman: "コール ザ ポリス、プリーズ" },
        { ja: "救急車を呼んで", local: "Call an ambulance!", roman: "コール アン アンビュランス！" },
        { ja: "病院はどこですか？", local: "Where's the hospital?", roman: "ウェアズ ザ ホスピタル？" },
      ],
    },
    {
      scene: "ホテル・宿泊", icon: "🏨",
      items: [
        { ja: "チェックインお願いします", local: "I'd like to check in, please.", roman: "アイド ライク トゥ チェックイン、プリーズ" },
        { ja: "予約しています", local: "I have a reservation.", roman: "アイ ハヴ ア レザベーション" },
        { ja: "Wi-Fiのパスワードは？", local: "What's the Wi-Fi password?", roman: "ワッツ ザ ワイファイ パスワード？" },
        { ja: "荷物を預かってもらえますか", local: "Can you keep my luggage?", roman: "キャンユー キープ マイ ラゲッジ？" },
        { ja: "チェックアウトは何時ですか", local: "What time is checkout?", roman: "ワッタイム イズ チェックアウト？" },
      ],
    },
    {
      scene: "道案内・交通", icon: "🧭",
      items: [
        { ja: "駅はどこですか？", local: "Where is the station?", roman: "ウェア イズ ザ ステーション？" },
        { ja: "まっすぐ／右／左", local: "Go straight / right / left", roman: "ゴー ストレート／ライト／レフト" },
        { ja: "近いですか？", local: "Is it close?", roman: "イズ イット クロース？" },
        { ja: "歩いて行けますか", local: "Can I walk there?", roman: "キャナイ ウォーク ゼア？" },
        { ja: "ここはどこですか？", local: "Where am I?", roman: "ウェア アム アイ？" },
      ],
    },
    {
      scene: "体調・薬局・病院", icon: "💊",
      items: [
        { ja: "気分が悪いです", local: "I feel sick.", roman: "アイ フィール シック" },
        { ja: "頭が痛いです", local: "I have a headache.", roman: "アイ ハヴ ア ヘッデイク" },
        { ja: "薬局はどこですか？", local: "Where is the pharmacy?", roman: "ウェア イズ ザ ファーマシー？" },
        { ja: "風邪薬がほしいです", local: "I'd like some cold medicine.", roman: "アイド ライク サム コールド メディスン" },
        { ja: "アレルギーがあります", local: "I have an allergy.", roman: "アイ ハヴ アン アレジー" },
      ],
    },
    {
      scene: "数字・あいづち", icon: "🔢",
      items: [
        { ja: "1・2・3", local: "one / two / three", roman: "ワン／トゥー／スリー" },
        { ja: "10・100", local: "ten / one hundred", roman: "テン／ワン ハンドレッド" },
        { ja: "なるほど", local: "I see.", roman: "アイ シー" },
        { ja: "大丈夫です", local: "I'm fine.", roman: "アイム ファイン" },
        { ja: "もう一度お願いします", local: "Could you say that again?", roman: "クジュー セイ ザット アゲイン？" },
      ],
    },
  ],

  emergency: [
    { label: "緊急全般（警察・救急・消防）", value: "911", note: "命に関わる緊急時。住所・状況を英語で伝える。" },
    { label: "在アメリカ日本国大使館（ワシントン）", value: "+1-202-238-6700", note: "" },
    { label: "在ホノルル日本国総領事館", value: "+1-808-543-3111", note: "ハワイでのトラブル窓口。" },
    { label: "医療費に注意", value: "海外旅行保険に必ず加入", note: "アメリカは医療費が非常に高額。救急車も有料。保険なしは危険。" },
    { label: "パスポート紛失時", value: "警察でポリスレポート → 領事館で渡航書/再発給", note: "コピーと証明写真の予備を別保管。" },
  ],

  apps: [
    { name: "Uber / Lyft", category: "配車", desc: "アメリカ移動の必需品。料金事前確定で安心。" },
    { name: "Google マップ", category: "地図・乗換", desc: "オフライン地図DL推奨。運転ナビにも。" },
    { name: "Google 翻訳", category: "翻訳", desc: "メニュー・標識のカメラ翻訳に。" },
    { name: "天気アプリ", category: "情報", desc: "地域で天候が激変。こまめに確認。" },
  ],
};
