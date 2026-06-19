window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.germany = {
  id: "germany",
  name: "ドイツ",
  nameEn: "Germany",
  flag: "🇩🇪",
  lang: "ドイツ語",
  tagline: "ビールと古城の国ドイツ。現金主義と日曜閉店を知れば、几帳面な国を快適に旅できる。",
  noteUrl: "",
  gradient: ["#1a1a1a", "#DD0000"],
  summary: { currency: "ユーロ", timezone: "−8時間（夏時間は−7時間）", safety: 1, season: "5〜9月が過ごしやすい。12月はクリスマスマーケットが人気" },
  currencyCode: "EUR",
  region: "ヨーロッパ",
  basics: [
    { label: "通貨", value: "ユーロ（EUR）", note: "今も現金主義が根強く、小さな店やパン屋は現金のみのことも。小額紙幣・硬貨を常備。" },
    { label: "チップ", value: "5〜10%程度", note: "義務ではないが慣習。会計時に合計額を切り上げて「○○ユーロで」と伝えるのが一般的。" },
    { label: "交通", value: "Sバーン・Uバーン・DB（鉄道）", note: "都市交通は信用乗車制で改札がない。乗車前に必ず切符を購入・刻印。無賃は高額罰金。" },
    { label: "気候", value: "冷涼で雨が多い西岸海洋性気候", note: "夏でも朝晩は涼しい。天気が変わりやすく折り畳み傘が役立つ。冬は寒く防寒必須。" },
    { label: "電圧・プラグ", value: "230V・C/Fタイプ（丸2本）", note: "日本（100V）と異なる。スマホ充電器は対応品が多いが家電は変圧器確認。" },
    { label: "ネット", value: "eSIM・通信会社SIMが手軽", note: "都市部の4G/5Gは良好だが、地方や地下では繋がりにくいことも。" },
    { label: "水", value: "水道水は飲用可", note: "硬水だが安全に飲める。レストランの水（Wasser）は有料で炭酸入り（mit Gas）が標準。" },
    { label: "時差", value: "日本より−8時間", note: "3月末〜10月末の夏時間は−7時間。" }
  ],
  safety: [
    { category: "治安・防犯", icon: "🛡️", items: [
      "ヨーロッパの中では治安が良い方だが、主要駅・観光地ではスリに注意。",
      "ベルリン中央駅、ケルン大聖堂周辺、ミュンヘン中央駅などは警戒エリア。",
      "クリスマスマーケットや祭りの人混みではバッグを前に抱える。",
      "夜間は人気のない地区や一部の駅周辺を避け、明るい通りを歩く。",
      "貴重品はホテルのセーフティボックスへ。多額の現金を持ち歩かない。"
    ]},
    { category: "詐欺・ぼったくり", icon: "🎭", items: [
      "駅で「切符の使い方を教える」と近づき手数料を求める手口に注意。",
      "署名集めやアンケートを装い、気を逸らして財布を狙う集団に警戒。",
      "観光地周辺の客引きレストランは料金とサービス内容を会計前に確認。",
      "無認可タクシーを避け、正規タクシーか配車アプリ（FREE NOW等）を使う。",
      "ニセ警官が「身分証・財布を見せろ」と迫る手口がある。求めに簡単に応じない。"
    ]},
    { category: "マナー・文化", icon: "🍺", items: [
      "日曜・祝日はほとんどの商店が休業（Ladenschluss）。買い物は土曜までに済ませる。",
      "現金が好まれる場面が多い。小さな店では「カード不可」を前提に準備する。",
      "時間に正確な文化。列車や予約の時刻厳守が基本。",
      "公共の場では静かに。電車内の大声での通話は嫌がられる。",
      "レストランでは相席や、空席があっても店員の案内を待つのが一般的。"
    ]},
    { category: "法律・禁止事項", icon: "⚖️", items: [
      "自転車レーンは歩行者立入禁止。歩道と分かれているので踏み込まない。",
      "横断歩道は赤信号で渡らない。子どもの前では特に厳格に見られる。",
      "ナチス関連の敬礼・象徴の表現は法律で厳しく禁止されている。",
      "公共交通機関の無賃乗車（Schwarzfahren）は高額罰金の対象。",
      "ゴミの分別が徹底されている。瓶・ペットボトルはデポジット（Pfand）制度がある。"
    ]},
    { category: "服装", icon: "🧥", items: [
      "夏でも朝晩は冷えるため、羽織れる上着を一枚持つと安心。",
      "雨が多いので防水のアウターや折り畳み傘を携帯する。",
      "冬は厳しく冷え込むので、ダウン・手袋・帽子など本格的な防寒を。",
      "石畳が多く歩く距離も長いため、歩きやすい靴が必須。",
      "オペラやコンサートはややフォーマルな服装が好まれる。"
    ]}
  ],
  phrases: [
    { scene: "あいさつ・基本", icon: "👋", items: [
      { ja: "こんにちは", local: "Hallo / Guten Tag", roman: "ハロー／グーテン ターク" },
      { ja: "ありがとう", local: "Danke", roman: "ダンケ" },
      { ja: "すみません（呼びかけ）", local: "Entschuldigung", roman: "エントシュルディグング" },
      { ja: "はい／いいえ", local: "Ja / Nein", roman: "ヤー／ナイン" },
      { ja: "さようなら", local: "Auf Wiedersehen", roman: "アウフ ヴィーダーゼーエン" }
    ]},
    { scene: "レストラン・飲食", icon: "🍽️", items: [
      { ja: "メニューをください", local: "Die Karte, bitte", roman: "ディー カルテ ビッテ" },
      { ja: "これをください", local: "Das, bitte", roman: "ダス ビッテ" },
      { ja: "お会計をお願いします", local: "Zahlen, bitte", roman: "ツァーレン ビッテ" },
      { ja: "とても美味しいです", local: "Das schmeckt sehr gut", roman: "ダス シュメクト ゼーア グート" },
      { ja: "ビールをください", local: "Ein Bier, bitte", roman: "アイン ビーア ビッテ" }
    ]},
    { scene: "買い物・値段交渉", icon: "🛍️", items: [
      { ja: "いくらですか？", local: "Was kostet das?", roman: "ヴァス コステット ダス" },
      { ja: "高いです", local: "Das ist teuer", roman: "ダス イスト トイアー" },
      { ja: "カードで払えますか？", local: "Kann ich mit Karte zahlen?", roman: "カン イッヒ ミット カルテ ツァーレン" },
      { ja: "これを買います", local: "Ich nehme das", roman: "イッヒ ネーメ ダス" },
      { ja: "袋をください", local: "Eine Tüte, bitte", roman: "アイネ テューテ ビッテ" }
    ]},
    { scene: "移動・タクシー", icon: "🚕", items: [
      { ja: "この住所までお願いします", local: "Zu dieser Adresse, bitte", roman: "ツー ディーザー アドレッセ ビッテ" },
      { ja: "空港までいくらですか？", local: "Was kostet es zum Flughafen?", roman: "ヴァス コステット エス ツム フルークハーフェン" },
      { ja: "ここで止めてください", local: "Halten Sie hier, bitte", roman: "ハルテン ジー ヒア ビッテ" },
      { ja: "急いでいます", local: "Ich habe es eilig", roman: "イッヒ ハーベ エス アイリヒ" },
      { ja: "領収書をください", local: "Eine Quittung, bitte", roman: "アイネ クヴィットゥング ビッテ" }
    ]},
    { scene: "ホテル・宿泊", icon: "🏨", items: [
      { ja: "予約しています", local: "Ich habe eine Reservierung", roman: "イッヒ ハーベ アイネ レザヴィールング" },
      { ja: "チェックインをお願いします", local: "Ich möchte einchecken", roman: "イッヒ メヒテ アインチェッケン" },
      { ja: "Wi-Fiのパスワードは？", local: "Wie ist das WLAN-Passwort?", roman: "ヴィー イスト ダス ヴェーラン パスヴォルト" },
      { ja: "荷物を預かってもらえますか？", local: "Können Sie mein Gepäck aufbewahren?", roman: "ケンネン ジー マイン ゲペック アウフベヴァーレン" },
      { ja: "お湯が出ません", local: "Es kommt kein warmes Wasser", roman: "エス コムト カイン ヴァルメス ヴァッサー" }
    ]},
    { scene: "道案内・交通", icon: "🧭", items: [
      { ja: "駅はどこですか？", local: "Wo ist der Bahnhof?", roman: "ヴォー イスト デア バーンホーフ" },
      { ja: "道に迷いました", local: "Ich habe mich verlaufen", roman: "イッヒ ハーベ ミッヒ フェアラオフェン" },
      { ja: "ここはどこですか？", local: "Wo bin ich?", roman: "ヴォー ビン イッヒ" },
      { ja: "まっすぐですか？", local: "Geradeaus?", roman: "ゲラーデアウス" },
      { ja: "歩いて行けますか？", local: "Kann man zu Fuß gehen?", roman: "カン マン ツー フース ゲーエン" }
    ]},
    { scene: "体調・薬局・病院", icon: "💊", items: [
      { ja: "気分が悪いです", local: "Mir ist schlecht", roman: "ミア イスト シュレヒト" },
      { ja: "頭が痛いです", local: "Ich habe Kopfschmerzen", roman: "イッヒ ハーベ コップフシュメルツェン" },
      { ja: "薬局はどこですか？", local: "Wo ist eine Apotheke?", roman: "ヴォー イスト アイネ アポテーケ" },
      { ja: "風邪薬がほしいです", local: "Ich brauche etwas gegen Erkältung", roman: "イッヒ ブラオヘ エトヴァス ゲーゲン エアケルトゥング" },
      { ja: "アレルギーがあります", local: "Ich habe eine Allergie", roman: "イッヒ ハーベ アイネ アレルギー" }
    ]},
    { scene: "トラブル・緊急", icon: "🆘", items: [
      { ja: "助けて！", local: "Hilfe!", roman: "ヒルフェ" },
      { ja: "警察を呼んでください", local: "Rufen Sie die Polizei", roman: "ルーフェン ジー ディー ポリツァイ" },
      { ja: "財布を盗まれました", local: "Mein Geldbeutel wurde gestohlen", roman: "マイン ゲルトボイテル ヴルデ ゲシュトーレン" },
      { ja: "パスポートをなくしました", local: "Ich habe meinen Pass verloren", roman: "イッヒ ハーベ マイネン パス フェアローレン" },
      { ja: "救急車を呼んでください", local: "Rufen Sie einen Krankenwagen", roman: "ルーフェン ジー アイネン クランケンヴァーゲン" }
    ]},
    { scene: "数字・あいづち", icon: "🔢", items: [
      { ja: "1・2・3", local: "eins, zwei, drei", roman: "アインス、ツヴァイ、ドライ" },
      { ja: "10・100", local: "zehn, hundert", roman: "ツェーン、フンダート" },
      { ja: "わかりました", local: "Ich verstehe", roman: "イッヒ フェアシュテーエ" },
      { ja: "わかりません", local: "Ich verstehe nicht", roman: "イッヒ フェアシュテーエ ニヒト" },
      { ja: "もう一度お願いします", local: "Noch einmal, bitte", roman: "ノッホ アインマール ビッテ" }
    ]}
  ],
  emergency: [
    { label: "緊急通報（消防・救急）", value: "112", note: "火災・救急はこの番号。EU共通で英語対応可。" },
    { label: "警察", value: "110", note: "盗難・犯罪被害・事故はこちら。ドイツでは警察と消防/救急で番号が分かれる。" },
    { label: "在ドイツ日本国大使館（ベルリン）", value: "+49-30-210940", note: "住所はHiroshimastraße 6, 10785 Berlin。緊急時の連絡先。" },
    { label: "各地の総領事館", value: "フランクフルト・ミュンヘン・デュッセルドルフ・ハンブルク等", note: "滞在地により管轄が異なる。事前に管轄の総領事館を確認しておくと安心。" },
    { label: "パスポート紛失時の手順", value: "まず最寄りの警察で盗難・紛失届を出す", note: "次に届出書を持って日本大使館・総領事館で渡航書または旅券を申請。写真とコピーを用意。" }
  ],
  apps: [
    { name: "DB Navigator", category: "交通", desc: "ドイツ鉄道（DB）の公式アプリ。長距離・近郊列車の時刻検索と切符購入ができる。" },
    { name: "Google マップ", category: "地図・ナビ", desc: "オフライン地図対応。Sバーン・Uバーンの乗換案内が正確で便利。" },
    { name: "FREE NOW", category: "配車", desc: "正規タクシーを呼べる定番アプリ。料金が明朗で現金不要の決済も可能。" },
    { name: "Google 翻訳", category: "翻訳", desc: "カメラでメニューや案内表示を即時翻訳。ドイツ語の音声会話モードも便利。" }
  ]
};
