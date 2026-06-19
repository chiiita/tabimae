window.TABIMAE = window.TABIMAE || {};
window.TABIMAE.brazil = {
  id: "brazil",
  name: "ブラジル",
  nameEn: "Brazil",
  flag: "🇧🇷",
  lang: "ポルトガル語",
  tagline: "サンバとサッカー、雄大な自然の南米最大の国。陽気な人々と美食が魅力、治安対策は必須。",
  noteUrl: "",
  gradient: ["#009739", "#ffcc29"],
  summary: { currency: "ブラジルレアル", timezone: "日本-12時間", safety: 3, season: "乾季5〜9月が観光ベスト、リオのカーニバルは2〜3月" },
  currencyCode: "BRL",
  region: "中南米",
  basics: [
    { label: "通貨", value: "ブラジルレアル (BRL)", note: "1レアル=約28円前後。都市部はカード決済が普及。多額の現金を持ち歩くのは危険なので避ける" },
    { label: "チップ", value: "基本サービス料込み", note: "レストランは会計に10%のサービス料が含まれることが多い。含まれない場合は10%程度が目安" },
    { label: "交通", value: "アプリ配車が安全", note: "流しのタクシーよりUber等の配車アプリが料金明確で安心。市バスは混雑時のスリに注意" },
    { label: "気候", value: "南半球・地域差大", note: "日本と季節が逆。北部は熱帯、南部は温帯。リオは年中温暖、サンパウロは朝晩冷えることも" },
    { label: "電圧・プラグ", value: "127V/220V・Type C・N", note: "周波数60Hz。地域で電圧が異なるため要確認。プラグはC・Nタイプ。変換プラグと変圧器を用意" },
    { label: "ネット", value: "SIM・eSIM・Wi-Fi", note: "現地SIM購入にはCPF(納税者番号)が必要な場合あり。旅行者はeSIMが手軽。ホテルWi-Fiも普及" },
    { label: "水", value: "水道水は飲まない", note: "水道水は飲用に適さない。市販のミネラルウォーター(agua)を購入する。氷にも注意" },
    { label: "時差", value: "日本-12時間", note: "ブラジリア時間は日本より12時間遅い。広大なため西部は更に遅れる。サマータイムは現在なし" }
  ],
  safety: [
    { category: "治安・防犯", icon: "🛡️", items: [
      "スリ・ひったくり・強盗が多発。常に周囲を警戒する。",
      "高価な時計・スマホ・アクセサリーは人前で見せない。",
      "ファベーラ(貧困街)には絶対に近づかない。",
      "夜間の一人歩きや人気のない場所は避ける。",
      "強盗に遭ったら抵抗せず、要求どおり差し出して命を守る。"
    ]},
    { category: "詐欺・ぼったくり", icon: "💸", items: [
      "流しのタクシーはメーター不正や遠回りに注意する。",
      "ATMはスキミング被害が多く、銀行内や店舗内のものを使う。",
      "親しげに近づき隙を狙う置き引き・グループ犯に警戒する。",
      "両替は空港や正規両替所で行い、路上での両替は断る。",
      "クレジットカードは目の前で決済し、明細を必ず確認する。"
    ]},
    { category: "マナー・文化", icon: "🤝", items: [
      "あいさつは握手やハグ、頬を寄せる(ベイジョ)が一般的。",
      "陽気でおおらか。時間にルーズな面も寛容に受け止める。",
      "サッカーは国民的話題。地元チームを悪く言わない。",
      "公共の場で大声の政治・宗教論争は避けるのが無難。",
      "カトリック文化が根強く、教会では静かに振る舞う。"
    ]},
    { category: "法律・禁止事項", icon: "⚖️", items: [
      "違法薬物は厳しく処罰される。誘いには絶対に乗らない。",
      "飲酒運転は厳罰。レンタカー利用時は特に注意する。",
      "公共の場での飲酒は地域により規制がある。",
      "身分証明のためパスポートのコピーを携帯する。",
      "野生動物・自然保護区での違反行為は罰則対象。"
    ]},
    { category: "服装", icon: "👕", items: [
      "派手な服装や高価な装飾品は犯罪者の標的になりやすい。",
      "観光時は現地に溶け込む控えめな服装が安全。",
      "ビーチではビキニが一般的だが、街中では羽織りを。",
      "教会など宗教施設では露出を控えた服装にする。",
      "日差しが強いので帽子・サングラス・日焼け止めを用意。"
    ]}
  ],
  phrases: [
    { scene: "あいさつ・基本", icon: "👋", items: [
      { ja: "こんにちは", local: "Olá / Bom dia", roman: "オラ／ボン ジア" },
      { ja: "ありがとう", local: "Obrigado / Obrigada", roman: "オブリガード／オブリガーダ" },
      { ja: "すみません（呼びかけ）", local: "Com licença", roman: "コン リセンサ" },
      { ja: "はい／いいえ", local: "Sim / Não", roman: "シン／ナウン" },
      { ja: "さようなら", local: "Tchau / Até logo", roman: "チャウ／アテ ロゴ" }
    ]},
    { scene: "レストラン・飲食", icon: "🍽️", items: [
      { ja: "メニューをください", local: "O cardápio, por favor.", roman: "ウ カルダピオ ポルファヴォール" },
      { ja: "これをください", local: "Quero este, por favor.", roman: "ケロ エスチ ポルファヴォール" },
      { ja: "お会計をお願いします", local: "A conta, por favor.", roman: "ア コンタ ポルファヴォール" },
      { ja: "とても美味しいです", local: "Está muito gostoso.", roman: "エスタ ムイント ゴストーゾ" },
      { ja: "水をください", local: "Uma água, por favor.", roman: "ウマ アグア ポルファヴォール" }
    ]},
    { scene: "買い物・値段交渉", icon: "🛍️", items: [
      { ja: "いくらですか", local: "Quanto custa?", roman: "クアント クスタ" },
      { ja: "高いです", local: "Está caro.", roman: "エスタ カロ" },
      { ja: "カードは使えますか", local: "Aceita cartão?", roman: "アセイタ カルタウン" },
      { ja: "少し安くなりますか", local: "Pode fazer um desconto?", roman: "ポジ ファゼール ウン デスコント" },
      { ja: "見ているだけです", local: "Estou só olhando.", roman: "エストウ ソ オリャンド" }
    ]},
    { scene: "移動・タクシー", icon: "🚕", items: [
      { ja: "この住所までお願いします", local: "Para este endereço, por favor.", roman: "パラ エスチ エンデレッソ ポルファヴォール" },
      { ja: "どのくらいかかりますか", local: "Quanto tempo demora?", roman: "クアント テンポ デモーラ" },
      { ja: "ここで停めてください", local: "Pare aqui, por favor.", roman: "パレ アキ ポルファヴォール" },
      { ja: "料金はいくらですか", local: "Quanto é a corrida?", roman: "クアント エ ア コヒーダ" },
      { ja: "メーターを使ってください", local: "Use o taxímetro, por favor.", roman: "ウーゼ ウ タクシメトロ ポルファヴォール" }
    ]},
    { scene: "ホテル・宿泊", icon: "🏨", items: [
      { ja: "チェックインをお願いします", local: "Quero fazer o check-in.", roman: "ケロ ファゼール ウ チェッキン" },
      { ja: "予約しています", local: "Eu tenho uma reserva.", roman: "エウ テーニョ ウマ ヘゼルヴァ" },
      { ja: "Wi-Fiのパスワードは？", local: "Qual é a senha do Wi-Fi?", roman: "クアウ エ ア セーニャ ド ワイファイ" },
      { ja: "荷物を預かってもらえますか", local: "Pode guardar minha mala?", roman: "ポジ グアルダール ミーニャ マラ" },
      { ja: "部屋を変えてください", local: "Pode trocar o quarto?", roman: "ポジ トロカール ウ クアルト" }
    ]},
    { scene: "道案内・交通", icon: "🧭", items: [
      { ja: "〇〇はどこですか", local: "Onde fica ...?", roman: "オンジ フィカ" },
      { ja: "道に迷いました", local: "Estou perdido.", roman: "エストウ ペルジード" },
      { ja: "ここへの行き方を教えてください", local: "Como chego aqui?", roman: "コモ シェゴ アキ" },
      { ja: "歩いて行けますか", local: "Dá para ir a pé?", roman: "ダ パラ イール ア ペ" },
      { ja: "近いですか", local: "É perto?", roman: "エ ペルト" }
    ]},
    { scene: "体調・薬局・病院", icon: "💊", items: [
      { ja: "気分が悪いです", local: "Estou me sentindo mal.", roman: "エストウ ミ センチンド マウ" },
      { ja: "近くに薬局はありますか", local: "Tem farmácia perto?", roman: "テン ファルマシア ペルト" },
      { ja: "お腹が痛いです", local: "Estou com dor de barriga.", roman: "エストウ コン ドール ジ バヒーガ" },
      { ja: "病院に行きたいです", local: "Preciso ir ao hospital.", roman: "プレシーゾ イール アオ オスピタウ" },
      { ja: "アレルギーがあります", local: "Tenho alergia.", roman: "テーニョ アレルジア" }
    ]},
    { scene: "トラブル・緊急", icon: "🆘", items: [
      { ja: "助けて！", local: "Socorro!", roman: "ソコーホ" },
      { ja: "警察を呼んでください", local: "Chame a polícia, por favor.", roman: "シャメ ア ポリシア ポルファヴォール" },
      { ja: "財布を盗まれました", local: "Roubaram minha carteira.", roman: "ホウバラン ミーニャ カルテイラ" },
      { ja: "パスポートをなくしました", local: "Perdi meu passaporte.", roman: "ペルジ メウ パサポルチ" },
      { ja: "救急車を呼んでください", local: "Chame uma ambulância!", roman: "シャメ ウマ アンブランシア" }
    ]},
    { scene: "数字・あいづち", icon: "🔢", items: [
      { ja: "1・2・3", local: "um / dois / três", roman: "ウン／ドイス／トレス" },
      { ja: "10・100", local: "dez / cem", roman: "デス／セン" },
      { ja: "なるほど", local: "Entendi.", roman: "エンテンジ" },
      { ja: "大丈夫です", local: "Tudo bem.", roman: "トゥード ベン" },
      { ja: "もう一度お願いします", local: "Pode repetir?", roman: "ポジ ヘペチール" }
    ]}
  ],
  emergency: [
    { label: "警察（軍警察）", value: "190", note: "ブラジル全土共通の警察緊急ダイヤル。事件・強盗などの緊急時に通報する" },
    { label: "救急車", value: "192", note: "急病やけがの救急要請(SAMU)。消防・火災は193。ポルトガル語対応が基本" },
    { label: "在ブラジル日本国大使館（ブラジリア）", value: "+55-61-3442-4200", note: "Brasília本館。サンパウロ総領事館は+55-11-3254-0100。滞在地の管轄公館を事前確認" },
    { label: "パスポート紛失の手順", value: "まず警察で盗難証明を取得", note: "現地警察で盗難・紛失届(BO)を作成し、最寄りの大使館・総領事館で帰国のための渡航書または旅券を再発行。写真と本人確認書類を準備" }
  ],
  apps: [
    { name: "Uber / 99", category: "配車", desc: "ブラジルで主流の配車アプリ。料金が事前に分かり、流しタクシーより安全に移動できる" },
    { name: "Google マップ", category: "地図・ナビ", desc: "店や駅の検索・徒歩や公共交通のルート確認に。オフライン地図も保存できる" },
    { name: "Google 翻訳", category: "翻訳", desc: "ポルトガル語のメニューや看板をカメラ翻訳。音声会話モードで意思疎通を補助" },
    { name: "XE Currency", category: "通貨換算", desc: "レアルと円の最新レートを確認。買い物時の価格判断に役立つ" }
  ]
};
