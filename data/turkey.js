// トルコ — データファイル（このファイルを増やせば国が増える）
window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.turkey = {
  id: "turkey",
  name: "トルコ",
  nameEn: "Turkey",
  flag: "🇹🇷",
  lang: "トルコ語",
  tagline: "ヨーロッパとアジアの交差点。親日的で魅力満点だが、観光地の客引きと両替には注意。",
  noteUrl: "", // ←完全版noteのURLを入れる
  gradient: ["#c0392b", "#1d4e6b"],
  summary: { currency: "リラ", timezone: "−6時間", safety: 2, season: "4〜6月・9〜10月" },
  currencyCode: "TRY", // 為替ウィジェット用（ISO通貨コード）
  region: "中東・アフリカ",

  basics: [
    { label: "通貨", value: "リラ（TRY / ₺）", note: "インフレで変動が大きい。両替は街中の正規両替所（Döviz）が空港より好レート。" },
    { label: "チップ", value: "5〜10%が目安", note: "レストランはサービス料込みでなければ5〜10%。ホテルやタクシーは端数を渡す程度でOK。" },
    { label: "交通", value: "トラム・メトロ・タクシー・BiTaksi", note: "イスタンブールは交通系ICカード（İstanbulkart）が便利。タクシーは配車アプリBiTaksiが安心。" },
    { label: "気候", value: "春（4〜6月）と秋（9〜10月）が快適", note: "夏は内陸・南部が酷暑、冬は内陸・東部が雪。地域差が大きいので行先で確認。" },
    { label: "電圧・プラグ", value: "230V / C・F型", note: "日本の機器は変圧器が必要な場合あり。プラグはC/F型変換が必要。" },
    { label: "ネット", value: "空港でツーリストSIM/eSIM", note: "Turkcell・Vodafoneなどが定番。eSIM事前購入も手軽。" },
    { label: "水", value: "水道水は飲まない", note: "ミネラルウォーターを。レストランの瓶入り水が安心。" },
    { label: "時差", value: "日本より−6時間", note: "日本が12時ならトルコは6時。" },
  ],

  safety: [
    {
      category: "治安・防犯", icon: "🛡️",
      items: [
        "観光地・交通機関の人混みではスリ・置き引きに注意。バッグは前に抱える。",
        "夜のひとり歩き、特に人通りの少ない路地は避ける。",
        "「日本人？」と親しげに近づく人には警戒。親切を装う手口もある。",
        "デモや政治的な集会には近づかない。人だかりは早めに離れる。",
        "東部・シリア国境付近は治安が不安定。最新の渡航情報を確認する。",
      ],
    },
    {
      category: "詐欺・ぼったくり", icon: "⚠️",
      items: [
        "親しげに誘われたバー・クラブで法外な請求をされる「ぼったくりバー」に注意。",
        "タクシーは遠回り・メーター不正・釣り銭ごまかしがある。BiTaksi利用が安心。",
        "両替は正規両替所で。提示レートと手数料を確認し、受け取った札を必ず数える。",
        "靴磨きがブラシをわざと落とし、拾った親切に高額請求する古典的な手口あり。",
        "絨毯店への「お茶でも」という誘いは長時間の購入勧誘につながりやすい。",
      ],
    },
    {
      category: "マナー・文化", icon: "🙏",
      items: [
        "モスクでは靴を脱ぎ、女性は髪・肩・膝を覆う（スカーフ持参）。礼拝中は入らない。",
        "親日的だがイスラムの戒律を尊重。宗教を軽んじる言動は避ける。",
        "人を撮るときは一声かける。軍・警察関連施設の撮影はNG。",
        "あいさつや乾杯ではアイコンタクトを大切にする。",
        "あいさつは「メルハバ」。年長者への敬意を示すと喜ばれる。",
      ],
    },
    {
      category: "法律・禁止事項", icon: "🚫",
      items: [
        "麻薬は厳罰。誘われても絶対に手を出さない。",
        "建国の父アタテュルクや国旗を侮辱する言動は法律で処罰される。",
        "軍事施設・国境地帯・空港などの撮影は禁止のことが多い。",
        "骨董品・古い遺物の無許可の持ち出しは違法。土産選びに注意。",
        "公共の場での過度な飲酒・迷惑行為はトラブルの元。" ,
      ],
    },
    {
      category: "服装", icon: "👕",
      items: [
        "都市部は比較的自由だが、モスク訪問時は肌を覆う服装を。スカーフが便利。",
        "地方や保守的な地域では露出の多い服装は避けると無難。",
        "歩きやすい靴を。石畳や坂道が多い旧市街では特に重要。",
      ],
    },
  ],

  phrases: [
    {
      scene: "あいさつ・基本", icon: "👋",
      items: [
        { ja: "こんにちは", local: "Merhaba", roman: "メルハバ" },
        { ja: "ありがとう", local: "Teşekkür ederim", roman: "テシェッキュル・エデリム" },
        { ja: "すみません / ごめんなさい", local: "Özür dilerim", roman: "オズュル・ディレリム" },
        { ja: "はい / いいえ", local: "Evet / Hayır", roman: "エヴェット / ハユル" },
        { ja: "お願いします", local: "Lütfen", roman: "リュトフェン" },
      ],
    },
    {
      scene: "レストラン・飲食", icon: "🍽️",
      items: [
        { ja: "これをください", local: "Bunu istiyorum", roman: "ブヌ・イスティヨルム" },
        { ja: "辛くしないで", local: "Acı olmasın", roman: "アジュ・オルマスン" },
        { ja: "おいしいです", local: "Çok lezzetli", roman: "チョク・レッゼットリ" },
        { ja: "お会計お願いします", local: "Hesap lütfen", roman: "ヘサップ・リュトフェン" },
        { ja: "水をください", local: "Su lütfen", roman: "ス・リュトフェン" },
      ],
    },
    {
      scene: "買い物・値段交渉", icon: "🛍️",
      items: [
        { ja: "いくらですか？", local: "Bu ne kadar?", roman: "ブ・ネ・カダル？" },
        { ja: "高い、まけてください", local: "Pahalı, indirim yapar mısınız?", roman: "パハル、インディリム・ヤパル・ムスヌズ？" },
        { ja: "いりません", local: "İstemiyorum", roman: "イステミヨルム" },
        { ja: "見ているだけです", local: "Sadece bakıyorum", roman: "サーデジェ・バクヨルム" },
        { ja: "カードは使えますか？", local: "Kart geçer mi?", roman: "カルト・ゲチェル・ミ？" },
      ],
    },
    {
      scene: "移動・タクシー", icon: "🚕",
      items: [
        { ja: "メーターを使ってください", local: "Taksimetre lütfen", roman: "タクスィメトレ・リュトフェン" },
        { ja: "ここへ行きたい（地図を見せる）", local: "Buraya gitmek istiyorum", roman: "ブラヤ・ギトメク・イスティヨルム" },
        { ja: "ここで止めてください", local: "Burada durun", roman: "ブラダ・ドゥルン" },
        { ja: "空港までお願いします", local: "Havalimanına lütfen", roman: "ハヴァリマヌナ・リュトフェン" },
        { ja: "料金はいくら？", local: "Ücret ne kadar?", roman: "ユジュレット・ネ・カダル？" },
      ],
    },
    {
      scene: "ホテル・宿泊", icon: "🏨",
      items: [
        { ja: "チェックインお願いします", local: "Check-in yapmak istiyorum", roman: "チェックイン・ヤプマク・イスティヨルム" },
        { ja: "予約しています", local: "Rezervasyonum var", roman: "レゼルヴァスィヨヌム・ヴァル" },
        { ja: "Wi-Fiのパスワードは？", local: "Wi-Fi şifresi nedir?", roman: "ワイファイ・シフレスィ・ネディル？" },
        { ja: "荷物を預かってください", local: "Bavulu bırakabilir miyim?", roman: "バヴル・ブラカビリル・ミイム？" },
        { ja: "部屋を変えてほしい", local: "Odamı değiştirmek istiyorum", roman: "オダム・デイシュティルメク・イスティヨルム" },
      ],
    },
    {
      scene: "道案内・交通", icon: "🧭",
      items: [
        { ja: "駅はどこですか？", local: "İstasyon nerede?", roman: "イスタスィヨン・ネレデ？" },
        { ja: "まっすぐ／右／左", local: "Düz／sağ／sol", roman: "デュズ／サー／ソル" },
        { ja: "近いですか？", local: "Yakın mı?", roman: "ヤクン・ム？" },
        { ja: "どのくらいかかりますか？", local: "Ne kadar sürer?", roman: "ネ・カダル・スュレル？" },
        { ja: "道に迷いました", local: "Kayboldum", roman: "カイボルドゥム" },
      ],
    },
    {
      scene: "体調・薬局・病院", icon: "💊",
      items: [
        { ja: "気分が悪いです", local: "Kendimi kötü hissediyorum", roman: "ケンディミ・キョテュ・ヒッセディヨルム" },
        { ja: "お腹が痛い", local: "Karnım ağrıyor", roman: "カルヌム・アールヨル" },
        { ja: "薬局はどこですか？", local: "Eczane nerede?", roman: "エジザーネ・ネレデ？" },
        { ja: "薬がほしい", local: "İlaç istiyorum", roman: "イラチ・イスティヨルム" },
        { ja: "アレルギーがあります", local: "Alerjim var", roman: "アレルジム・ヴァル" },
      ],
    },
    {
      scene: "トラブル・緊急", icon: "🆘",
      items: [
        { ja: "助けて！", local: "İmdat!", roman: "イムダート！" },
        { ja: "警察を呼んでください", local: "Polis çağırın", roman: "ポリス・チャールン" },
        { ja: "病院へ行きたい", local: "Hastaneye gitmem lazım", roman: "ハスターネイェ・ギトメム・ラーズム" },
        { ja: "財布を盗まれました", local: "Cüzdanım çalındı", roman: "ジュズダヌム・チャルンドゥ" },
        { ja: "英語が話せる人は？", local: "İngilizce bilen var mı?", roman: "インギリズジェ・ビレン・ヴァル・ム？" },
      ],
    },
    {
      scene: "数字・あいづち", icon: "🔢",
      items: [
        { ja: "1・2・3", local: "Bir iki üç", roman: "ビル・イキ・ユチ" },
        { ja: "10・100", local: "On yüz", roman: "オン・ユズ" },
        { ja: "わかりました", local: "Anladım", roman: "アンラドゥム" },
        { ja: "わかりません", local: "Anlamadım", roman: "アンラマドゥム" },
        { ja: "もう一度お願いします", local: "Tekrar eder misiniz?", roman: "テクラル・エデル・ミスィニズ？" },
      ],
    },
  ],

  emergency: [
    { label: "緊急共通（警察・消防・救急）", value: "112", note: "全国共通の緊急ダイヤル。携帯から無料で通じる。" },
    { label: "警察（都市部）", value: "155", note: "ジャンダルマ（地方の治安部隊）は156。" },
    { label: "救急車", value: "112", note: "" },
    { label: "在トルコ日本国大使館（アンカラ）", value: "+90-312-446-0500", note: "パスポート紛失・事件事故の相談。" },
    { label: "在イスタンブール日本国総領事館", value: "+90-212-317-4600", note: "イスタンブールなど西部地域の窓口。" },
    { label: "パスポート紛失時", value: "警察で盗難・紛失届 → 大使館/総領事館で渡航書/再発給", note: "顔写真と本人確認書類のコピーを別に保管しておくと手続きが早い。" },
  ],

  apps: [
    { name: "BiTaksi", category: "配車", desc: "トルコ定番のタクシー配車アプリ。ぼったくり・遠回り回避に有効。" },
    { name: "İstanbulkart", category: "交通", desc: "イスタンブールの交通系IC。メトロ・トラム・フェリーに使える。" },
    { name: "Google マップ", category: "地図・乗換", desc: "公共交通の経路検索に対応。オフライン地図DL推奨。" },
    { name: "Google 翻訳", category: "翻訳", desc: "カメラでトルコ語の看板・メニューを翻訳。会話モードも便利。" },
  ],
};
