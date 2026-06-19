window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.australia = {
  id: "australia",
  name: "オーストラリア",
  nameEn: "Australia",
  flag: "🇦🇺",
  lang: "英語",
  tagline: "大自然と都市が共存する南半球の国。強い紫外線と検疫の厳しさに注意して旅を楽しもう。",
  noteUrl: "",
  gradient: ["#0057b7", "#ffd200"],
  summary: { currency: "オーストラリアドル", timezone: "東部 +1時間（地域差あり）", safety: 1, season: "南半球で日本と季節が逆。12〜2月が夏、6〜8月が冬" },
  currencyCode: "AUD",
  region: "オセアニア",
  basics: [
    { label: "通貨", value: "オーストラリアドル (AUD)", note: "1A$=約95〜100円。硬貨は5/10/20/50セントと1/2ドル。キャッシュレスが非常に普及" },
    { label: "チップ", value: "基本不要", note: "義務ではない。高級レストランで満足したら5〜10%程度。タクシーは端数切り上げ程度でOK" },
    { label: "交通", value: "都市は交通系ICカードが便利", note: "シドニーはOpal、メルボルンはmykiカード。タッチ決済対応エリアも多い。広大なので都市間は国内線が現実的" },
    { label: "気候", value: "地域差が大きい", note: "北部は熱帯、南部は温帯。内陸は乾燥。1日の寒暖差が大きいので羽織りものを" },
    { label: "電圧・プラグ", value: "230V / Type I（Oタイプ）", note: "周波数50Hz。八の字型の3本ピン。日本の電化製品は変圧器が必要。変換プラグ必須" },
    { label: "ネット", value: "プリペイドSIM・eSIMが手軽", note: "Telstra/Optus/Vodafoneが主要キャリア。空港やコンビニ(woolworths等)でSIM購入可。eSIMも便利" },
    { label: "水", value: "水道水は飲用可", note: "都市部の水道水は基本的に安全。気になる場合はミネラルウォーターを購入" },
    { label: "時差", value: "日本+1時間（東部標準時）", note: "シドニー・メルボルンは日本より1時間早い。夏時間(10〜4月頃)は+2時間。西部パースは日本と同じ" }
  ],
  safety: [
    { category: "治安・防犯", icon: "🛡️", items: [
      "全体的に治安は良好だが、大都市では置き引き・スリに注意。",
      "夜間の人気のない場所や駅周辺の一人歩きは避ける。",
      "貴重品はホテルのセーフティボックスへ。バッグは体の前で持つ。",
      "ビーチや観光地では荷物から目を離さない。",
      "車上荒らし防止のため、車内に荷物を放置しない。"
    ]},
    { category: "詐欺・ぼったくり", icon: "💸", items: [
      "観光地での悪質な客引きは少ないが、無許可タクシーには乗らない。",
      "ATMは銀行併設のものを使い、スキミングに注意する。",
      "両替は銀行や正規両替所で。レートと手数料を確認する。",
      "オンライン宿泊予約の偽サイトに注意し、公式サイトを使う。",
      "クレジットカード決済時は金額をその場で確認する。"
    ]},
    { category: "マナー・文化", icon: "🤝", items: [
      "公共交通やエレベーターでは譲り合いが基本。割り込みは嫌われる。",
      "「Thank you」「Please」を頻繁に使うのが好印象。",
      "屋内は全面禁煙の場所が多く、喫煙場所を確認する。",
      "先住民(アボリジナル)の文化や聖地に敬意を払う。",
      "フレンドリーな国民性。店員との軽い会話(How are you?)は普通。"
    ]},
    { category: "法律・禁止事項", icon: "⚖️", items: [
      "検疫が極めて厳格。肉製品・果物・種子・卵などの食品持込は申告必須・原則禁止。",
      "申告漏れは高額罰金の対象。機内で配られる入国カードに正直に記入する。",
      "公共の場での飲酒(路上・公園)は地域により禁止。罰金対象。",
      "飲酒運転の取締りが厳しい。アルコール基準値が低い。",
      "違法薬物は厳罰。大麻の扱いは州により異なるが旅行者は手を出さない。"
    ]},
    { category: "服装", icon: "👕", items: [
      "紫外線が非常に強い。帽子・サングラス・日焼け止め(SPF高)は必携。",
      "1日の寒暖差・地域差が大きいので重ね着で調整する。",
      "夏でも屋内は冷房が強いため羽織りものを持つ。",
      "ビーチリゾートではラッシュガードがあると安心。",
      "高級レストランではスマートカジュアルが無難。"
    ]}
  ],
  phrases: [
    { scene: "あいさつ・基本", icon: "👋", items: [
      { ja: "こんにちは", local: "Hello / G'day", roman: "ハロー／グダイ" },
      { ja: "ありがとう", local: "Thank you", roman: "サンキュー" },
      { ja: "すみません（呼びかけ）", local: "Excuse me", roman: "イクスキューズ ミー" },
      { ja: "はい／いいえ", local: "Yes / No", roman: "イエス／ノー" },
      { ja: "さようなら", local: "Goodbye / See ya", roman: "グッバイ／シーヤ" }
    ]},
    { scene: "レストラン・飲食", icon: "🍽️", items: [
      { ja: "メニューをください", local: "Can I have the menu, please?", roman: "キャナイ ハヴ ザ メニュー プリーズ" },
      { ja: "これをください", local: "I'll have this one, please.", roman: "アイル ハヴ ディス ワン プリーズ" },
      { ja: "お会計をお願いします", local: "Can I have the bill, please?", roman: "キャナイ ハヴ ザ ビル プリーズ" },
      { ja: "とても美味しいです", local: "This is delicious.", roman: "ディス イズ デリシャス" },
      { ja: "水をもらえますか", local: "Could I get some water?", roman: "クダイ ゲット サム ウォーター" }
    ]},
    { scene: "買い物・値段交渉", icon: "🛍️", items: [
      { ja: "いくらですか", local: "How much is this?", roman: "ハウ マッチ イズ ディス" },
      { ja: "これを試着できますか", local: "Can I try this on?", roman: "キャナイ トライ ディス オン" },
      { ja: "カードは使えますか", local: "Do you take card?", roman: "ドゥー ユー テイク カード" },
      { ja: "少し高いです", local: "It's a bit expensive.", roman: "イッツ ア ビット イクスペンシブ" },
      { ja: "見ているだけです", local: "I'm just looking, thanks.", roman: "アイム ジャスト ルッキング サンクス" }
    ]},
    { scene: "移動・タクシー", icon: "🚕", items: [
      { ja: "この住所までお願いします", local: "To this address, please.", roman: "トゥ ディス アドレス プリーズ" },
      { ja: "どのくらいかかりますか", local: "How long will it take?", roman: "ハウ ロング ウィル イット テイク" },
      { ja: "ここで停めてください", local: "Stop here, please.", roman: "ストップ ヒア プリーズ" },
      { ja: "料金はいくらですか", local: "How much is the fare?", roman: "ハウ マッチ イズ ザ フェア" },
      { ja: "空港までお願いします", local: "To the airport, please.", roman: "トゥ ジ エアポート プリーズ" }
    ]},
    { scene: "ホテル・宿泊", icon: "🏨", items: [
      { ja: "チェックインをお願いします", local: "I'd like to check in, please.", roman: "アイド ライク トゥ チェックイン プリーズ" },
      { ja: "予約しています", local: "I have a reservation.", roman: "アイ ハヴ ア レザベーション" },
      { ja: "Wi-Fiのパスワードは？", local: "What's the Wi-Fi password?", roman: "ワッツ ザ ワイファイ パスワード" },
      { ja: "荷物を預かってもらえますか", local: "Can you keep my luggage?", roman: "キャンユー キープ マイ ラゲッジ" },
      { ja: "チェックアウトは何時ですか", local: "What time is checkout?", roman: "ワッタイム イズ チェックアウト" }
    ]},
    { scene: "道案内・交通", icon: "🧭", items: [
      { ja: "駅はどこですか", local: "Where is the station?", roman: "ウェア イズ ザ ステーション" },
      { ja: "道に迷いました", local: "I'm lost.", roman: "アイム ロスト" },
      { ja: "ここへの行き方を教えてください", local: "How do I get here?", roman: "ハウ ドゥー アイ ゲット ヒア" },
      { ja: "歩いて行けますか", local: "Can I walk there?", roman: "キャナイ ウォーク ゼア" },
      { ja: "この電車は〇〇に行きますか", local: "Does this train go to ...?", roman: "ダズ ディス トレイン ゴー トゥ" }
    ]},
    { scene: "体調・薬局・病院", icon: "💊", items: [
      { ja: "気分が悪いです", local: "I feel sick.", roman: "アイ フィール シック" },
      { ja: "近くに薬局はありますか", local: "Is there a pharmacy nearby?", roman: "イズ ゼア ア ファーマシー ニアバイ" },
      { ja: "頭が痛いです", local: "I have a headache.", roman: "アイ ハヴ ア ヘッデイク" },
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
      { ja: "大丈夫です", local: "I'm fine. / No worries.", roman: "アイム ファイン／ノー ワリーズ" },
      { ja: "もう一度お願いします", local: "Could you say that again?", roman: "クジュー セイ ザット アゲイン" }
    ]}
  ],
  emergency: [
    { label: "警察・救急・消防（共通）", value: "000", note: "オーストラリア全土共通の緊急ダイヤル。警察(Police)・救急(Ambulance)・消防(Fire)に対応" },
    { label: "在シドニー日本国総領事館", value: "+61-2-9250-1000", note: "Level 12, 1 O'Connell Street, Sydney NSW 2000。受付は平日のみ。緊急時は音声案内に従う" },
    { label: "パスポート紛失の手順", value: "まず総領事館へ連絡", note: "現地警察で盗難・紛失届(ポリスレポート)を取得し、総領事館で帰国のための渡航書または旅券を再発行。写真と本人確認書類を準備" }
  ],
  apps: [
    { name: "Opal Travel / PTV", category: "交通", desc: "シドニーOpal・メルボルンmykiの残高確認や経路検索ができる公共交通アプリ" },
    { name: "Uber", category: "配車", desc: "主要都市で利用可能。タクシー代わりに使え、料金が事前に分かり安心" },
    { name: "Google マップ", category: "地図・ナビ", desc: "公共交通の乗換案内や徒歩ルート検索に必須。オフライン地図も保存できる" },
    { name: "Google 翻訳", category: "翻訳", desc: "カメラ翻訳でメニューや標識を読める。英語が不安なときの会話補助に" }
  ]
};
