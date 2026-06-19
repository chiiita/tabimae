window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.fiji = {
  id: "fiji",
  name: "フィジー",
  nameEn: "Fiji",
  flag: "🇫🇯",
  lang: "英語（フィジー語・ヒンディー語も）",
  tagline: "南太平洋に浮かぶ約330の島々。世界屈指の透明な海と笑顔のおもてなしが魅力の楽園。",
  noteUrl: "",
  gradient: ["#00a8e8", "#ffd23f"],
  summary: { currency: "フィジードル", timezone: "日本+3時間", safety: 2, season: "乾季5〜10月が観光ベスト、雨季11〜4月はスコールとサイクロンに注意" },
  currencyCode: "FJD",
  region: "オセアニア",
  basics: [
    { label: "通貨", value: "フィジードル (FJD)", note: "1フィジードル=約70円前後。リゾートやホテルはカード可。離島や市場では現金が必要" },
    { label: "チップ", value: "基本不要", note: "チップの習慣は薄い。特別なサービスに対し感謝を伝えたい時のみ少額で。多くの宿はチップ箱を共同で設置" },
    { label: "交通", value: "タクシー・ローカルバス", note: "島内移動はメーター式タクシーが基本。乗車前に料金確認を。島間移動はフェリーや国内線を利用" },
    { label: "気候", value: "熱帯気候・常夏", note: "年間平均25〜30℃。乾季は過ごしやすく、雨季はスコールが多い。サイクロン期は天候情報に注意" },
    { label: "電圧・プラグ", value: "240V / Type I", note: "周波数50Hz。プラグはハの字型のOタイプ(I型)。日本の機器には変換プラグと対応電圧の確認が必要" },
    { label: "ネット", value: "現地SIM・eSIM・Wi-Fi", note: "空港でVodafoneやDigicelのSIMが買える。リゾートのWi-Fiは有料・低速のこともあるためSIMが便利" },
    { label: "水", value: "水道水は注意", note: "都市部の水道水は飲める場合もあるが、慣れない旅行者はミネラルウォーターが安心。離島は特に注意" },
    { label: "時差", value: "日本+3時間", note: "日本より3時間進んでいる。サマータイム期間(主に11〜1月)は+4時間になることがあるため要確認" }
  ],
  safety: [
    { category: "治安・防犯", icon: "🛡️", items: [
      "観光地は比較的安全だが、首都スバなどの都市部では油断しない。",
      "夜間の一人歩きや人気のない場所は避ける。",
      "ビーチやプールサイドで荷物から目を離さない。",
      "貴重品はホテルのセーフティボックスに預ける。",
      "離島やローカルエリアでは現地のルールに従い慎重に行動する。"
    ]},
    { category: "詐欺・ぼったくり", icon: "💸", items: [
      "タクシーは乗車前に料金を確認、できればメーター利用を。",
      "市場やみやげ物店では言い値が高めのことがあり交渉する。",
      "「友達価格」と称した木彫りの押し売り(スワミ詐欺)に注意。",
      "ATMは銀行やリゾート内の安全な場所のものを使う。",
      "両替は空港や銀行で行い、レートと手数料を確認する。"
    ]},
    { category: "マナー・文化", icon: "🤝", items: [
      "村(ビレッジ)訪問時は帽子を脱ぎ、肌の露出を控える。",
      "村ではカバ(ヤンゴーナ)を勧められたら受けるのが礼儀。",
      "「ブラ！」(Bula)は万能のあいさつ。笑顔で返すと喜ばれる。",
      "人の頭に触れるのは失礼とされるので避ける。",
      "教会(キリスト教)が身近。日曜礼拝中は静かに振る舞う。"
    ]},
    { category: "法律・禁止事項", icon: "⚖️", items: [
      "違法薬物の所持・使用は厳しく処罰される。",
      "サンゴや貝殻の採取・持ち出しが禁止の場所がある。",
      "海洋保護区での漁や魚への餌やりが制限される地域がある。",
      "飲酒運転は厳罰。レンタカー利用時は特に注意する。",
      "村の聖域や私有地に無断で立ち入らない。"
    ]},
    { category: "服装", icon: "👕", items: [
      "基本は夏服でOK。日焼け止め・帽子・サングラスは必携。",
      "村訪問時は肩と膝が隠れる服装(スル等)が望ましい。",
      "遊泳時はラッシュガードで日差しとサンゴ擦過を防ぐ。",
      "リゾートのディナーはスマートカジュアルが無難。",
      "サンダルは歩きやすいもの、マリンシューズがあると安心。"
    ]}
  ],
  phrases: [
    { scene: "あいさつ・基本", icon: "👋", items: [
      { ja: "こんにちは", local: "Bula!", roman: "ブラ" },
      { ja: "ありがとう", local: "Vinaka", roman: "ヴィナカ" },
      { ja: "すみません（呼びかけ）", local: "Excuse me", roman: "イクスキューズ ミー" },
      { ja: "はい／いいえ", local: "Yes / No", roman: "イエス／ノー" },
      { ja: "さようなら", local: "Moce", roman: "モゼ" }
    ]},
    { scene: "レストラン・飲食", icon: "🍽️", items: [
      { ja: "メニューをください", local: "Can I have the menu, please?", roman: "キャナイ ハヴ ザ メニュー プリーズ" },
      { ja: "これをください", local: "I'll have this one, please.", roman: "アイル ハヴ ディス ワン プリーズ" },
      { ja: "お会計をお願いします", local: "Can I have the bill, please?", roman: "キャナイ ハヴ ザ ビル プリーズ" },
      { ja: "とても美味しいです", local: "This is delicious.", roman: "ディス イズ デリシャス" },
      { ja: "水をください", local: "A glass of water, please.", roman: "ア グラス オブ ウォーター プリーズ" }
    ]},
    { scene: "買い物・値段交渉", icon: "🛍️", items: [
      { ja: "いくらですか", local: "How much is this?", roman: "ハウ マッチ イズ ディス" },
      { ja: "高いです", local: "It's too expensive.", roman: "イッツ トゥー イクスペンシブ" },
      { ja: "カードは使えますか", local: "Do you take card?", roman: "ドゥー ユー テイク カード" },
      { ja: "少し安くなりますか", local: "Can you make it cheaper?", roman: "キャンユー メイク イット チーパー" },
      { ja: "見ているだけです", local: "I'm just looking, thanks.", roman: "アイム ジャスト ルッキング サンクス" }
    ]},
    { scene: "移動・タクシー", icon: "🚕", items: [
      { ja: "この住所までお願いします", local: "To this address, please.", roman: "トゥ ディス アドレス プリーズ" },
      { ja: "どのくらいかかりますか", local: "How long will it take?", roman: "ハウ ロング ウィル イット テイク" },
      { ja: "ここで停めてください", local: "Stop here, please.", roman: "ストップ ヒア プリーズ" },
      { ja: "料金はいくらですか", local: "How much is the fare?", roman: "ハウ マッチ イズ ザ フェア" },
      { ja: "メーターを使ってください", local: "Please use the meter.", roman: "プリーズ ユーズ ザ ミーター" }
    ]},
    { scene: "ホテル・宿泊", icon: "🏨", items: [
      { ja: "チェックインをお願いします", local: "I'd like to check in, please.", roman: "アイド ライク トゥ チェックイン プリーズ" },
      { ja: "予約しています", local: "I have a reservation.", roman: "アイ ハヴ ア レザベーション" },
      { ja: "Wi-Fiのパスワードは？", local: "What's the Wi-Fi password?", roman: "ワッツ ザ ワイファイ パスワード" },
      { ja: "荷物を預かってもらえますか", local: "Can you keep my luggage?", roman: "キャンユー キープ マイ ラゲッジ" },
      { ja: "島へのツアーを予約できますか", local: "Can I book an island tour?", roman: "キャナイ ブック アン アイランド ツアー" }
    ]},
    { scene: "道案内・交通", icon: "🧭", items: [
      { ja: "〇〇はどこですか", local: "Where is ...?", roman: "ウェア イズ" },
      { ja: "道に迷いました", local: "I'm lost.", roman: "アイム ロスト" },
      { ja: "ここへの行き方を教えてください", local: "How do I get here?", roman: "ハウ ドゥー アイ ゲット ヒア" },
      { ja: "歩いて行けますか", local: "Can I walk there?", roman: "キャナイ ウォーク ゼア" },
      { ja: "フェリー乗り場はどこですか", local: "Where is the ferry terminal?", roman: "ウェア イズ ザ フェリー ターミナル" }
    ]},
    { scene: "体調・薬局・病院", icon: "💊", items: [
      { ja: "気分が悪いです", local: "I feel sick.", roman: "アイ フィール シック" },
      { ja: "近くに薬局はありますか", local: "Is there a pharmacy nearby?", roman: "イズ ゼア ア ファーマシー ニアバイ" },
      { ja: "日焼けがひどいです", local: "I have a bad sunburn.", roman: "アイ ハヴ ア バッド サンバーン" },
      { ja: "病院に行きたいです", local: "I need to see a doctor.", roman: "アイ ニード トゥ シー ア ドクター" },
      { ja: "アレルギーがあります", local: "I have an allergy.", roman: "アイ ハヴ アン アレジー" }
    ]},
    { scene: "トラブル・緊急", icon: "🆘", items: [
      { ja: "助けて！", local: "Help!", roman: "ヘルプ" },
      { ja: "警察を呼んでください", local: "Call the police, please.", roman: "コール ザ ポリス プリーズ" },
      { ja: "財布を盗まれました", local: "My wallet was stolen.", roman: "マイ ウォレット ワズ ストールン" },
      { ja: "パスポートをなくしました", local: "I lost my passport.", roman: "アイ ロスト マイ パスポート" },
      { ja: "救急車を呼んでください", local: "Call an ambulance!", roman: "コール アン アンビュランス" }
    ]},
    { scene: "数字・あいづち", icon: "🔢", items: [
      { ja: "1・2・3", local: "one / two / three", roman: "ワン／トゥー／スリー" },
      { ja: "10・100", local: "ten / one hundred", roman: "テン／ワン ハンドレッド" },
      { ja: "なるほど", local: "I see.", roman: "アイ シー" },
      { ja: "大丈夫です", local: "I'm okay.", roman: "アイム オーケー" },
      { ja: "もう一度お願いします", local: "Could you say that again?", roman: "クジュー セイ ザット アゲイン" }
    ]}
  ],
  emergency: [
    { label: "警察・救急・消防（共通）", value: "911", note: "フィジー全土の緊急ダイヤル。警察・救急・消防に対応。警察直通は917・919も使われる" },
    { label: "在フィジー日本国大使館（スバ）", value: "+679-330-4633", note: "Level 2, BSP Life Centre, Thomson Street, Suva。平日対応。日本人の緊急援護に対応" },
    { label: "パスポート紛失の手順", value: "まず警察で盗難証明を取得", note: "現地警察で盗難・紛失届を作成し、在フィジー日本国大使館で帰国のための渡航書または旅券を再発行。写真と本人確認書類を準備" }
  ],
  apps: [
    { name: "Google マップ", category: "地図・ナビ", desc: "店やビーチ・フェリー乗り場の検索や徒歩ルートに。オフライン地図を保存しておくと安心" },
    { name: "Google 翻訳", category: "翻訳", desc: "英語が不安なときの会話補助に。カメラ翻訳でメニューや看板も読める" },
    { name: "XE Currency", category: "通貨換算", desc: "フィジードルと円の最新レートを確認。買い物時の価格判断に役立つ" },
    { name: "Windy", category: "天気・防災", desc: "雨季のスコールやサイクロンの動きを確認。離島やマリンアクティビティの計画に便利" }
  ]
};
