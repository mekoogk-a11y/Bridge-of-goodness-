import { Article, ProposedProject, SouthSudanState } from '../types';

import southSudanEducationImg from '../assets/images/south_sudan_education_1789808824614.jpg';
import southSudanHealthImg from '../assets/images/south_sudan_health_1789808835520.jpg';
import southSudanReliefImg from '../assets/images/south_sudan_relief_1789808889697.jpg';
import southSudanYouthImg from '../assets/images/south_sudan_youth_1789808863232.jpg';
import southSudanFarmingImg from '../assets/images/south_sudan_farming_1789808846376.jpg';
import southSudanWaterImg from '../assets/images/south_sudan_water_1789808876091.jpg';
import southSudanPeaceImg from '../assets/images/south_sudan_peace_1789808900828.jpg';
import southSudanHeroImg from '../assets/images/south_sudan_hero_1789808810612.jpg';
import southSudanWriterImg from '../assets/images/south_sudan_writer_1789808911955.jpg';

export {
  southSudanEducationImg,
  southSudanHealthImg,
  southSudanReliefImg,
  southSudanYouthImg,
  southSudanFarmingImg,
  southSudanWaterImg,
  southSudanPeaceImg,
  southSudanHeroImg,
  southSudanWriterImg
};

export const INITIATIVE_INFO = {
  nameAr: 'مبادرة جسور الخير',
  nameEn: 'Bridges of Goodness Initiative',
  acronym: 'BGI',
  taglineAr: '«نبني الإنسان… ونصنع جسوراً لمستقبل أفضل»',
  taglineEn: '“Building People. Connecting Communities. Creating a Better Future.”',
  legalStatusBadgeAr: '🌱 فكرة تأسيسية قيد التطوير',
  legalStatusBadgeEn: '🌱 Foundational Concept Under Development',
  legalNoticeAr: 'جسور الخير في مرحلتها الحالية هي فكرة تأسيسية قيد التطوير، تقوم فكرتها على بناء جسور بين الإنسان واحتياجاته والمعرفة والمهارة والفرصة. جميع المشاريع المعروضة مقترحة ومستقبلية.',
  legalNoticeEn: 'Bridges of Goodness is currently a foundational concept under development. All programs displayed represent proposed future initiatives.',
  heroDescriptionAr: 'جسور الخير مبادرة تأسيسية قيد التطوير، تقوم فكرتها على بناء جسور بين الإنسان واحتياجاته اليوم، وبين المعرفة والمهارة والفرصة التي تساعده على صناعة مستقبله.',
  heroDescriptionEn: 'Bridges of Goodness is a foundational initiative under development, designed to build bridges between human immediate needs today and the knowledge, skills, and opportunities that shape a self-reliant tomorrow.',
  missionAr: 'نصل إلى الإنسان في وقت حاجته، ونسانده في وقت ضعفه، ونطمح إلى مساعدته على اكتساب المعرفة والمهارة والفرصة التي تمكنه من بناء حياة أفضل لنفسه وأسرته ومجتمعه.',
  missionEn: 'We reach human beings in their hour of need, stand by them in vulnerability, and aspire to empower them with knowledge, skills, and opportunities to forge a dignified life for themselves, their families, and their communities.',
  visionAr: 'نتطلع إلى مجتمعات متماسكة وقادرة على النهوض الذاتي في جنوب السودان، يمتلك فيها الإنسان أدوات المعرفة والعمل، وتتحول فيها التحديات الإنسانية إلى جسور للسلام والإنتاج والازدهار.',
  visionEn: 'We envision resilient, self-sustaining communities across South Sudan, where every individual possesses the tools of knowledge and productive work, transforming humanitarian hurdles into bridges of peace and lasting prosperity.',
  disclaimerIllustrationAr: 'صور توضيحية تعكس السياق المجتمعي والإنساني.',
  disclaimerIllustrationEn: 'Representative imagery – used for illustration purposes.',
  donation: {
    titleAr: '❤️ ساهم في صناعة الخير',
    titleEn: '❤️ Contribute to Building Goodness',
    descriptionAr: '«يمكن لمساهمتك أن تكون جزءاً من جسر يصل الإنسان بالغذاء والتعليم والصحة والمياه والفرصة.»',
    descriptionEn: '“Your contribution can be part of a bridge connecting people with food, education, health, clean water, and opportunity.”',
    bankNameAr: 'بنك الخرطوم',
    bankNameEn: 'Bank of Khartoum',
    accountNumber: '2813955',
    accountNameAr: 'مبادرة جسور الخير',
    accountNameEn: 'Bridges of Goodness Initiative',
    verifyNoticeAr: 'يرجى التأكد من بيانات الحساب قبل إجراء أي تحويل.',
    verifyNoticeEn: 'Please verify account details before initiating any transfer.',
    notificationNoticeAr: 'إرسال الإشعار لا يعني اعتماد التبرع قبل المراجعة والتحقق.',
    notificationNoticeEn: 'Submitting a notification does not imply donation confirmation before administrative review and verification.',
  },
  whatsapp: {
    display: '+249 199 804 35',
    raw: '+24919980435',
    cleanNumber: '24919980435',
    url: 'https://wa.me/24919980435?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9%20%D8%AC%D8%B3%D9%88%D8%B1%20%D8%A7%D9%84%D8%AE%D9%8A%D8%B1.',
    prefilledAr: 'مرحباً، أود الاستفسار عن مبادرة جسور الخير.',
    prefilledEn: 'Hello, I would like to inquire about Bridges of Goodness Initiative.',
  },
};

export const SUDANESE_PROMO_AUDIO = {
  titleAr: 'الإعلان الصوتي الحماسي (بالعامية السودانية)',
  titleEn: 'Enthusiastic Promotional Audio (Sudanese Dialect)',
  voiceCharacterAr: 'صوت رجل سوداني دافئ، واثق، وحماسي يفيض بالأمل والشهامة',
  voiceCharacterEn: 'A warm, confident, and energetic Sudanese male voice full of hope and dignity',
  durationSec: 48,
  scriptAr: `يا أهلي وعزوتي وسندي في كل مكان..
لما بنقيف مع بعض.. وبنمد إيدينا بصدق.. بنقدر نبني المستحيل!
«جسور الخير».. ما مجرد فكرة عابرة..
دي همّة سودانية وإنسانية خالصة.. بتبدأ من الزول.. ولأجل الزول!
رحلة حقيقية بتبدأ من الحاجة.. بتوصل للأمان..
وبتعبر بالتعليم والصحة.. والمهارة والعمل..
لغاية ما نوصل سوا للإنتاج والاعتماد على الذات ومجتمع قوي يقيف على حيلو!
من جوبا لي واو.. من ملكال لي رمبيك وبور وتوريت.. في كل ريف وكل مدينة..
نحن بنحلم.. وبنخطط.. وبنجهز لمستقبل يشبه كرامتنا.
«نبني الإنسان.. ونصنع جسوراً لمستقبل أفضل!»
خليك جزء من الجسر.. وشاركنا البداية!`,
  scriptEn: `My dear family, brothers, and sisters wherever you may be...
When we stand united, lending sincere hands, we can build what seemed impossible!
"Bridges of Goodness" is no passing thought; it is an authentic humanitarian drive born from the people and dedicated to the people!
A real journey starting from need, guiding toward safety, crossing through education, health, skills, and dignity of work, until we achieve sustainable productivity and resilient self-reliance!
From Juba to Wau, Malakal to Rumbek, Bor to Torit—across every village and town.
We envision, we plan, and we lay the foundation for a future worthy of our people.
"Building People. Connecting Communities. Creating a Better Future."
Be part of the bridge... Join us at the very foundation!`,
};

export const FOUNDERS = [
  {
    nameAr: 'ناصر مييك شول',
    nameEn: 'Nasser Myik Chol',
    roleAr: 'صاحب فكرة ومؤسس مشارك',
    roleEn: 'Co-Originator & Co-Founder',
    bioAr: 'ناشط تنموي ومجتمعي يتمتع برؤية استراتيجية لربط المجتمعات المحلية في جنوب السودان بفرص التمكين والنهوض الإنساني.',
    bioEn: 'Community and development advocate with a strategic vision for connecting local communities in South Sudan to empowerment and human advancement.',
    avatarText: 'NM',
  },
  {
    nameAr: 'سعيد ود المك',
    nameEn: 'Saeed Wad Al-Mek',
    roleAr: 'صاحب فكرة ومؤسس مشارك',
    roleEn: 'Co-Originator & Co-Founder',
    bioAr: 'شخصية قيادية ومبادر مجتمعي مكرس لتطوير العمل الإنساني الانتقالي من الإغاثة الآنية إلى التنمية المستدامة وبناء السلام.',
    bioEn: 'Community leader and initiator dedicated to advancing humanitarian transition from immediate relief to sustainable development and peacebuilding.',
    avatarText: 'SM',
  },
  {
    nameAr: 'كمال جعفر زكريا',
    nameEn: 'Kamal Jaafar Zakaria',
    roleAr: 'صاحب فكرة وكاتب الرؤية التأسيسية',
    roleEn: 'Co-Originator & Vision Author',
    bioAr: 'كاتب وباحث تنموي، ومؤلف الورقة التأسيسية الفكرية حول تمكين الإنسان في جنوب السودان وصناعة الجسور نحو الاعتماد على الذات.',
    bioEn: 'Development writer and researcher, author of the foundational concept paper on human empowerment and self-reliance in South Sudan.',
    avatarText: 'KZ',
  },
  {
    nameAr: 'وآخرون من الكفاءات الوطنية والتطوعية',
    nameEn: 'And Other Dedicated National & Voluntary Talents',
    roleAr: 'فريق التأسيس والمستشارين',
    roleEn: 'Foundational Team & Advisors',
    bioAr: 'مجموعة من الأكاديميين والمهنيين والمتطوعين المؤمنين برسالة جسور الخير للمساهمة في بناء مرحلة التأسيس والدراسة.',
    bioEn: 'A network of academics, professionals, and volunteers committed to shaping the research and conceptual phase of Bridges of Goodness.',
    avatarText: '+BGI',
  },
];

export const BRIDGE_STEPS = [
  {
    step: 1,
    titleAr: 'الحاجة',
    titleEn: 'Need',
    descAr: 'التعرف على الاحتياج الإنساني الأساسي بدقة وكرامة دون اختزال الإنسان في معاناته.',
    descEn: 'Dignified recognition of fundamental human needs without reducing the person to distress.',
  },
  {
    step: 2,
    titleAr: 'الأمان',
    titleEn: 'Safety & Stability',
    descAr: 'توفير البيئة الآمنة التي تعيد الطمأنينة النفسية والاستقرار الأسري والمجتمعي.',
    descEn: 'Establishing a secure environment fostering psychological calm and community stability.',
  },
  {
    step: 3,
    titleAr: 'التعليم والصحة',
    titleEn: 'Education & Health',
    descAr: 'بناء البنية الحيوية لصحة العقل والجسد، كأساس لا غنى عنه لأي نهضة حقيقية.',
    descEn: 'Cultivating bodily well-being and active minds as non-negotiable pillars of human ascent.',
  },
  {
    step: 4,
    titleAr: 'المهارة',
    titleEn: 'Skills Acquisition',
    descAr: 'التدريب العملي، وبناء القدرات الحرفية، والزراعية، والتقنية، والإدارية وفق حاجة السوق.',
    descEn: 'Hands-on vocational, agronomic, digital, and practical capacity building tailored to context.',
  },
  {
    step: 5,
    titleAr: 'العمل',
    titleEn: 'Dignified Work',
    descAr: 'إتاحة أدوات العمل والإنتاج وربط المهارة بفرص الكسب الشريف والمحفز.',
    descEn: 'Connecting acquired capabilities with real tools and honorable livelihood opportunities.',
  },
  {
    step: 6,
    titleAr: 'الإنتاج',
    titleEn: 'Productivity',
    descAr: 'تحويل الفرد من مستهلك ينتظر العون إلى منتج يصنع القيمة في أرضه ومجتمعه.',
    descEn: 'Transforming individuals from passive recipients into active value creators on their native soil.',
  },
  {
    step: 7,
    titleAr: 'الاعتماد على الذات',
    titleEn: 'Self-Reliance',
    descAr: 'وصول الأسر إلى الكفاية الاقتصادية والقدرة على رعاية أبنائها باستقلالية وفخر.',
    descEn: 'Empowering families to attain financial resilience and nourish their future with autonomy.',
  },
  {
    step: 8,
    titleAr: 'مجتمع أقوى',
    titleEn: 'Resilient Community',
    descAr: 'نسيج مجتمعي متماسك، آمن، منتج، يصنع السلام الدائم ويبني أجيال الغد.',
    descEn: 'A resilient, cohesive, thriving social fabric sustaining peace and inspiring generations.',
  },
];

export const ACTION_AREAS = [
  {
    id: 'area-education',
    number: '01',
    titleAr: 'التعليم والمعرفة',
    titleEn: 'Education & Knowledge',
    shortDescAr: 'طموح مستقبلي لدعم البنية التعليمية الأساسية، فصول محو الأمية، وتجهيز البيئات المدرسية للنشء.',
    shortDescEn: 'A future aspiration to support foundational schooling, literacy hubs, and youth learning environments.',
    fullDescAr: 'نؤمن في «جسور الخير» أن الجهل هو العائق الأكبر أمام التنمية والسلام. نهدف مستقبلاً إلى وضع برامج مقترحة لتأهيل المعلمين المحليين، توفير المقاعد والمستلزمات الدراسية، ودعم المدارس المجتمعية في القرى النائية والريفية في جنوب السودان.',
    fullDescEn: 'At BGI, we consider lack of education the primary obstacle to peace and development. We plan future interventions to train local educators, supply learning materials, and reinforce community schools in rural areas.',
    icon: 'GraduationCap',
    color: '#087EA4',
    imageUrl: southSudanEducationImg,
    proposedInterventionsAr: [
      'مقترح فصول التعليم المجتمعي البديل في القرى',
      'مقترح دعم معلمي المدارس الابتدائية بالمناهج والوسائل',
      'مقترح توفير الحقيبة المدرسية والزي للطلاب الأكثر احتياجاً',
      'مقترح مراكز القراءة ومحو الأمية للكبار والنساء'
    ],
    proposedInterventionsEn: [
      'Proposed rural community accelerated learning classrooms',
      'Proposed pedagogical aids and training for primary educators',
      'Proposed essential school starter kits for vulnerable children',
      'Proposed community literacy circles for adults and mothers'
    ]
  },
  {
    id: 'area-health',
    number: '02',
    titleAr: 'الصحة والرعاية الأساسية',
    titleEn: 'Health & Primary Care',
    shortDescAr: 'رؤية مستقبلية للمساندة في الرعاية الصحية الأولية، صحة الأم والطفل، والتوعية الوبائية.',
    shortDescEn: 'A future vision to bolster primary clinics, maternal and child healthcare, and epidemic prevention.',
    fullDescAr: 'الصحة هي حق أساسي للإنسان. نخطط مستقبلاً للتنسيق مع المرافق الصحية لدعم حملات التطعيم، تدريب القابلات والمساعدين الصحيين، وتوفير الأدوية الأساسية المنقذة للحياة في المناطق البعيدة عن المستشفيات المركزية.',
    fullDescEn: 'Health is a sacred human foundation. We look forward to cooperating with health authorities to reinforce vaccination drives, train community midwives, and supply essential medical supplies in remote hubs.',
    icon: 'HeartPulse',
    color: '#159A72',
    imageUrl: southSudanHealthImg,
    proposedInterventionsAr: [
      'مقترح قوافل طبية تطوعية موسمية للمناطق النائية',
      'مقترح برامج تدريب القابلات المجتمعات لخفض وفيات الولادة',
      'مقترح حملات توعية ومكافحة الملاريا والأمراض المنقولة بالمياه',
      'مقترح دعم المراكز الصحية الريفية بالإمدادات الأساسية'
    ],
    proposedInterventionsEn: [
      'Proposed mobile voluntary medical clinics for isolated regions',
      'Proposed community midwife safety and maternal health coaching',
      'Proposed malaria awareness and clean water sanitation campaigns',
      'Proposed basic pharmacy restocking for grassroots health posts'
    ]
  },
  {
    id: 'area-relief',
    number: '03',
    titleAr: 'الإغاثة الإنسانية العاجلة',
    titleEn: 'Humanitarian Relief',
    shortDescAr: 'استجابة إنسانية أولية وقت الكوارث والسيول والنزوح، كخطوة أولى نحو الاستقرار والتعافي.',
    shortDescEn: 'Frontline emergency humanitarian response during floods and displacement, serving as the first step toward stability.',
    fullDescAr: 'عند حدوث الفيضانات الموسمية أو النزاعات المفاجئة، يحتاج الإنسان إلى ما يسد رمقه ويؤويه فوراً. رؤيتنا للإغاثة ترتكز على تقديم العون السريع باحترام وكرامة، مع التخطيط الفوري للخطوة التالية وهي التعافي.',
    fullDescEn: 'During seasonal flash floods or acute shocks, human beings require immediate, dignified shelter and food. Our relief perspective delivers timely aid as a launchpad into rapid stabilization.',
    icon: 'ShieldAlert',
    color: '#092B3A',
    imageUrl: southSudanReliefImg,
    proposedInterventionsAr: [
      'مقترح حزم الطوارئ والإيواء المؤقت لمتضرري الفيضانات',
      'مقترح الاستجابة السريعة للأسر النازحة والأمهات والأطفال',
      'مقترح توفير الوجبات الساخنة ومياه الشرب المعقمة أثناء الأزمات',
      'مقترح التقييم الميداني السريع للاحتياجات بالتعاون مع المنظمات'
    ],
    proposedInterventionsEn: [
      'Proposed emergency flood-relief shelter packages',
      'Proposed rapid nutritional relief for displaced mothers and infants',
      'Proposed potable emergency water filtration packs',
      'Proposed collaborative grassroots damage and needs assessment'
    ]
  },
  {
    id: 'area-youth',
    number: '04',
    titleAr: 'الشباب والتمكين المهني',
    titleEn: 'Youth & Empowerment',
    shortDescAr: 'تأهيل طاقات الشباب عبر التدريب المهني، المهارات الحرفية، والريادة ليكونوا صانعي السلام والإنتاج.',
    shortDescEn: 'Harnessing the immense vigor of youth through vocational training, entrepreneurship, and peace leadership.',
    fullDescAr: 'يشكل الشباب النسبة العظمى من سكان جنوب السودان، وهم ثروتها الحقيقية. نسعى مستقبلاً إلى إطلاق ورش مهنية في النجارة، والكهرباء، واللحام، وصيانة الآلات، وريادة الأعمال المصغرة لمنح الشباب بديلاً حقيقياً ومحترماً عن الصراعات.',
    fullDescEn: 'Youth represent the vast majority of South Sudan’s population. We aspire to launch vocational workshops in mechanics, carpentry, electrical installation, and micro-business to offer productive alternatives to despair.',
    icon: 'Sparkles',
    color: '#F2B84B',
    imageUrl: southSudanYouthImg,
    proposedInterventionsAr: [
      'مقترح ورش التدريب الحرفي للشباب والفتيات المعيلات',
      'مقترح حاضنات المشاريع المنزلية والحرفية الصغيرة',
      'مقترح ملتقيات الحوار الشبابي وبناء ثقافة السلام والتعايش',
      'مقترح نوادي المهارات الرقمية والحاسوبية للمبتدئين'
    ],
    proposedInterventionsEn: [
      'Proposed vocational apprenticeships in crafts and trades',
      'Proposed micro-enterprise tool grants for young breadwinners',
      'Proposed youth peace dialogues and communal co-existence forums',
      'Proposed foundational digital and computer literacy hubs'
    ]
  },
  {
    id: 'area-food',
    number: '05',
    titleAr: 'الأمن الغذائي والإنتاج الزراعي',
    titleEn: 'Food Security & Agriculture',
    shortDescAr: 'تمكين المزارعين الصغار بالبذور المحسنة، أدوات الزراعة، وطرق الري لتحقيق الاكتفاء الذاتي.',
    shortDescEn: 'Equipping smallholders with quality seeds, tools, and sustainable irrigation for communal self-sufficiency.',
    fullDescAr: 'تمتلك جنوب السودان ملايين الأفدنة من الأراضي الزراعية الخصبة والمياه الوفيرة. نطمح إلى تحويل المجتمعات من انتظار المساعدات الغذائية إلى مجتمعات منتجة للذرة، والسمسم، والفول، والخضروات عبر دعم الزراعة الأسرية والجمعيات التعاونية.',
    fullDescEn: 'South Sudan is blessed with millions of acres of fertile soil and abundant rivers. We envision transforming communities from food aid recipients into vibrant cultivators of maize, sorghum, sesame, and vegetables.',
    icon: 'Sprout',
    color: '#159A72',
    imageUrl: southSudanFarmingImg,
    proposedInterventionsAr: [
      'مقترح توزيع البذور المحلية المحسنة والأدوات اليدوية',
      'مقترح تدريب المزارعين على تقنيات تقليل الفاقد بعد الحصاد',
      'مقترح إنشاء مزارع نموذجية مدرسية ومجتمعية للتعليم التطبيقي',
      'مقترح دعم التعاونيات النسوية في إنتاج وتسويق الخضروات'
    ],
    proposedInterventionsEn: [
      'Proposed distribution of resilient indigenous seeds and hand tools',
      'Proposed post-harvest storage and spoilage mitigation training',
      'Proposed model school and community vegetable learning farms',
      'Proposed women agricultural cooperative marketing support'
    ]
  },
  {
    id: 'area-water',
    number: '06',
    titleAr: 'المياه النظيفة والإصحاح البيئي',
    titleEn: 'Water, Sanitation & Hygiene (WASH)',
    shortDescAr: 'توفير مصادر المياه الصالحة للشرب بالقرب من القرى، وتحسين بيئات الإصحاح والنظافة للوقاية من الأمراض.',
    shortDescEn: 'Establishing reliable potable water points near villages and upgrading community sanitation hygiene.',
    fullDescAr: 'تقطع النساء والأطفال أميالاً كل يوم للوصول إلى مياه غير نقية. تهدف مبادرتنا مستقبلاً إلى حفر وتأهيل مضخات المياه اليدوية، وتكوين لجان صيانة مجتمعية، ونشر ممارسات النظافة العامة لوقف تفشي الكوليرا والإسهالات المائية.',
    fullDescEn: 'Women and children often walk miles daily for unsafe water. We aim to rehabilitate hand pumps, train village water caretakers, and foster hygiene best practices to eliminate water-borne epidemics.',
    icon: 'Droplets',
    color: '#087EA4',
    imageUrl: southSudanWaterImg,
    proposedInterventionsAr: [
      'مقترح تأهيل وصيانة المضخات المائية اليدوية المعطلة في القرى',
      'مقترح تدريب لجان المياه المحلية على الصيانة الدورية وقطع الغيار',
      'مقترح برامج التثقيف الصحي في المدارس والتجمعات النسوية',
      'مقترح وحدات تنقية وترشيح مياه بسيطة ومنخفضة التكلفة'
    ],
    proposedInterventionsEn: [
      'Proposed revival of defunct village hand pumps and boreholes',
      'Proposed training of village water mechanics and maintenance teams',
      'Proposed school WASH education and hygienic handwashing points',
      'Proposed affordable low-cost bio-sand domestic water filtration'
    ]
  },
  {
    id: 'area-social',
    number: '07',
    titleAr: 'التنمية الاجتماعية والتماسك المجتمعي',
    titleEn: 'Social Cohesion & Community Development',
    shortDescAr: 'تعزيز السلام الأهلي، دعم الأرامل والأيتام، وتفعيل دور الإدارات الأهلية وقادة المجتمع.',
    shortDescEn: 'Fostering grassroots reconciliation, supporting widows and orphans, and engaging traditional leaders.',
    fullDescAr: 'لا تنمية بدون سلام وتماسك اجتماعي. نطمح إلى خلق مساحات للحوار الإيجابي بين المكونات السكانية، ودعم المبادرات المحلية التي تسند الفئات الأضعف كالأرامل والأيتام وذوي الإعاقة، وإحياء روح التكافل السودانية الأصيلة.',
    fullDescEn: 'Sustainable growth cannot survive without peaceful social cohesion. We seek to foster positive inter-community dialogue and champion safety nets for widows, orphans, and persons with disabilities.',
    icon: 'Users',
    color: '#092B3A',
    imageUrl: southSudanPeaceImg,
    proposedInterventionsAr: [
      'مقترح مجالس الحوار والتصالح المجتمعي بين القبائل والمناطق',
      'مقترح شبكات المساندة الاجتماعية لرعاية الأرامل والأيتام',
      'مقترح إشراك القيادات الأهلية والمرأة في اتخاذ القرار التنموي',
      'مقترح الأنشطة الرياضية والثقافية الجامعة لشباب الولايات'
    ],
    proposedInterventionsEn: [
      'Proposed communal reconciliation gatherings and peaceful arbitration',
      'Proposed community protection nets for widows and vulnerable children',
      'Proposed involvement of elders and women in participatory planning',
      'Proposed inter-county sports and cultural solidarity tournaments'
    ]
  },
];

export const SOUTH_SUDAN_OVERVIEW = {
  titleAr: 'جمهورية جنوب السودان: الأرض، الإنسان، وآفاق الأمل',
  titleEn: 'The Republic of South Sudan: Land, People, and Horizons of Hope',
  statesCount: 10,
  regionsCount: 3,
  summaryAr: 'بلد فتي حباه الله بتنوع طبيعي وثقافي هائل، يمتد عبر حوض النيل وروافده، ويضم 10 ولايات ذات خصوصيات تنموية وجغرافية فريدة. تمثل المبادرة المقترحة رؤية لدعم الإنسان وبناء جسور التعافي في كل شبر من هذه الأرض.',
  summaryEn: 'A young nation endowed with vast natural and cultural vitality spanning the Nile basin, comprising 10 states with unique developmental potentials. The proposed initiative seeks to build bridges of resilience across every community.',
  waterResourcesAr: 'أنهار عذبة متدفقة تشمل النيل الأبيض وبحر الغزال والسوباط، وبحيرات وسدود طبيعية تجعلها من أغنى دول حوض النيل بالمياه.',
  waterResourcesEn: 'Bountiful freshwater waterways including the White Nile, Bahr el Ghazal, and Sobat rivers, along with wetlands and oxbow lakes.',
  agriculturePotentialAr: 'أكثر من 70% من الأراضي صالحة للزراعة المطرية والفيضية مع تنوع في إنتاج الذرة والسمسم والأرز والأخشاب والبن والفواكه.',
  agriculturePotentialEn: 'Over 70% of land is arable with fertile soils suited for sorghum, sesame, rice, coffee, timber, and tropical fruits.',
  youthDemographicsAr: 'أكثر من 65% من السكان دون سن الثلاثين، مما يمثل ثروة ديموغرافية وطاقة متجددة قادرة على قيادة الإنتاج والبناء.',
  youthDemographicsEn: 'Over 65% of the population is under 30 years old, representing a tremendous demographic dividend and vibrancy.'
};

export const SOUTH_SUDAN_STATES: SouthSudanState[] = [
  {
    id: 'central-equatoria',
    nameAr: 'الاستوائية الوسطى',
    nameEn: 'Central Equatoria',
    capitalAr: 'جوبا (العاصمة القومية)',
    capitalEn: 'Juba (National Capital)',
    regionAr: 'إقليم الاستوائية',
    regionEn: 'Equatoria Region',
    overviewAr: 'تحتضن العاصمة جوبا على ضفاف النيل الأبيض، وتعتبر مركز الثقل الإداري والتجاري والسكاني للبلاد.',
    overviewEn: 'Hosts the capital city of Juba along the White Nile, serving as the commercial and administrative heart of the nation.',
    climateAndGeographyAr: 'طبيعة استوائية غنية، ضفاف نيلية، وتلال خضراء محيطة.',
    climateAndGeographyEn: 'Lush tropical riverine landscape surrounded by green rolling hills.',
    developmentNeedsAr: [
      'استيعاب الضغط السكاني والنازحين في أطراف العاصمة',
      'الحاجة لمراكز تدريب مهني متطورة للشباب',
      'تحديث شبكات المياه والصرف الصحي للأحياء الطرفية',
      'دعم المزارعين في ريف جوبا والمقاطعات المحيطة'
    ],
    developmentNeedsEn: [
      'Absorbing rapid urbanization and displaced families in peri-urban areas',
      'High demand for advanced vocational hubs for young jobseekers',
      'Sanitation and clean piped water infrastructure in outer neighborhoods',
      'Empowering smallholders in outlying rural farming belts'
    ],
    proposedInterventionsAr: [
      'مقترح مركز «جسور الشباب» للتدريب المهني والمهارات الرقمية',
      'مقترح دعم الفصول المدرسية المجتمعية في الأحياء الطرفية',
      'مقترح حزم الإصحاح البيئي وحملات التوعية الصحية'
    ],
    proposedInterventionsEn: [
      'Proposed "Bridge Youth" vocational and digital skills center',
      'Proposed community classroom reinforcement in peri-urban zones',
      'Proposed public health hygiene and clean water campaigns'
    ],
    keyChallengesAr: ['التضخم وارتفاع تكاليف المعيشة', 'النزوح الداخلي نحو المدينة', 'نقص فرص العمل الرسمي'],
    keyChallengesEn: ['Inflation and cost of living', 'Internal displacement influx', 'Scarcity of formal employment'],
    coordinates: { x: 50, y: 78 }
  },
  {
    id: 'eastern-equatoria',
    nameAr: 'الاستوائية الشرقية',
    nameEn: 'Eastern Equatoria',
    capitalAr: 'توريت',
    capitalEn: 'Torit',
    regionAr: 'إقليم الاستوائية',
    regionEn: 'Equatoria Region',
    overviewAr: 'ولاية جبلية خلابة تمتد حتى حدود أوغندا وكينيا، تشمل جبال إيماتونغ الخصبة ومجتمعات رعوية وزراعية متنوعة.',
    overviewEn: 'Scenic border state featuring the Imatong mountain range, bordering Uganda and Kenya, rich in diverse agrarian and pastoral communities.',
    climateAndGeographyAr: 'مرتفعات جبلية، مناخ معتدل، وأودية خصبة عالية الإنتاجية الزراعية.',
    climateAndGeographyEn: 'High mountain ranges, pleasant microclimates, and fertile valleys.',
    developmentNeedsAr: [
      'ربط القرى الجبلية بالخدمات الصحية والتعليمية',
      'دعم سلاسل إنتاج المحاصيل البستانية والبن والسمسم',
      'تعزيز السلام الأهلي بين المجتمعات الرعوية والزراعية',
      'مضخات مياه شمسية للتجمعات الريفية'
    ],
    developmentNeedsEn: [
      'Connecting isolated mountainous villages to schooling and clinics',
      'Strengthening horticultural and cash crop farming value chains',
      'Promoting peacebuilding between pastoral and farming clans',
      'Solar-powered boreholes for remote settlements'
    ],
    proposedInterventionsAr: [
      'مقترح قوافل صحية جبلية للرعاية الأولية',
      'مقترح دعم مزارعي البن والحبوب بالأدوات والمخازن',
      'مقترح لجان التعايش السلمي الشبابية'
    ],
    proposedInterventionsEn: [
      'Proposed mobile mountainous primary health outreaches',
      'Proposed post-harvest storage solutions for smallholders',
      'Proposed youth inter-tribal peace and sporting networks'
    ],
    keyChallengesAr: ['صعوبة الطرق الجبلية في موسم الأمطار', 'احتكاكات رعي الماشية', 'ضعف التغطية المدرسية'],
    keyChallengesEn: ['Rough mountain roads during monsoons', 'Cattle-raiding tensions', 'Sparse school infrastructure'],
    coordinates: { x: 68, y: 82 }
  },
  {
    id: 'western-equatoria',
    nameAr: 'الاستوائية الغربية',
    nameEn: 'Western Equatoria',
    capitalAr: 'يامبيو',
    capitalEn: 'Yambio',
    regionAr: 'إقليم الاستوائية',
    regionEn: 'Equatoria Region',
    overviewAr: 'سلة الغذاء الخضراء لجنوب السودان، تتميز بأمطار غزيرة وغابات استوائية ومحاصيل متنوعة تشمل المانجو والأناناس والكسافا والبن.',
    overviewEn: 'The traditional agricultural breadbasket of South Sudan, renowned for heavy rainfall, dense forests, and abundant tropical fruits.',
    climateAndGeographyAr: 'غابات استوائية مطيرة، تربة طينية غنية جداً، ووفرة مائية على مدار العام.',
    climateAndGeographyEn: 'Tropical rainforest, ultra-fertile soils, and perennial river streams.',
    developmentNeedsAr: [
      'صناعات تحويلية لحفظ الفواكه والمحاصيل الفائضة',
      'صيانة الطرق الريفية لنقل المنتجات إلى الأسواق',
      'دعم المراكز الصحية لمكافحة أمراض الغابات والحميات',
      'توفير مستلزمات التعليم للفتيات في القرى'
    ],
    developmentNeedsEn: [
      'Agro-processing units to prevent massive fruit and crop spoilage',
      'Feeder road maintenance to ferry produce to national markets',
      'Grassroots clinics to combat malaria and tropical infections',
      'Girls’ educational scholarships and retention tools'
    ],
    proposedInterventionsAr: [
      'مقترح «جسور الزراعة»: وحدات تجفيف وحفظ المحاصيل',
      'مقترح تأهيل المدارس الابتدائية الريفية',
      'مقترح دعم الجمعيات الزراعية النسوية'
    ],
    proposedInterventionsEn: [
      'Proposed "Bridge Agriculture" community crop preservation hubs',
      'Proposed rehabilitation of timber-built village schools',
      'Proposed women farmer cooperative micro-tool grants'
    ],
    keyChallengesAr: ['تلف المحاصيل بسبب غياب الحفظ والتخزين', 'وعورة الطرق الطينية', 'ضعف الطاقة والكهرباء'],
    keyChallengesEn: ['Harvest wastage due to zero cold chains', 'Impassable mud roads', 'Lack of rural electrical grid'],
    coordinates: { x: 30, y: 75 }
  },
  {
    id: 'jonglei',
    nameAr: 'جونقلي',
    nameEn: 'Jonglei',
    capitalAr: 'بور',
    capitalEn: 'Bor',
    regionAr: 'إقليم أعالي النيل الكبرى',
    regionEn: 'Greater Upper Nile',
    overviewAr: 'أكبر ولايات جنوب السودان مساحة، تمتد عبر سهول السد النيلية الفسيحة، وتعاني دورياً من الفيضانات الموسمية الكبرى.',
    overviewEn: 'The largest state by landmass, spanning the immense Sudd wetlands, confronting recurrent severe seasonal flooding.',
    climateAndGeographyAr: 'أراضي ومستنقعات رطبة شاسعة، سهول فيضية، ونظم بيئية غنية بالأسماك والثروة الحيوانية.',
    climateAndGeographyEn: 'Vast Sudd marshlands, floodplains, and exceptional fish and livestock wealth.',
    developmentNeedsAr: [
      'سدود ترابية محلية لحماية القرى من فيضانات النيل',
      'إغاثة فورية للأسر النازحة والمنكوبة بالمياه',
      'عيادات عائمة أو متنقلة لخدمة الجزر والمناطق المعزولة',
      'حفظ وتجفيف الأسماك وتطوير الثروة الحيوانية'
    ],
    developmentNeedsEn: [
      'Community dyke construction to shield villages from rising waters',
      'Emergency flood relief packages and waterproof shelters',
      'Boat-based mobile clinics reaching cut-off wetland settlements',
      'Fish preservation and modern livestock veterinary services'
    ],
    proposedInterventionsAr: [
      'مقترح الاستجابة الموسمية للطوارئ وتأمين المأوى',
      'مقترح محطات تنقية المياه المحمولة لإنقاذ القرى المحاصرة',
      'مقترح برامج تمكين صيادي الأسماك بالرياش والشباك'
    ],
    proposedInterventionsEn: [
      'Proposed seasonal flood relief and emergency water shields',
      'Proposed portable water treatment kits for stranded villages',
      'Proposed artisanal fisherfolk equipment and solar drying units'
    ],
    keyChallengesAr: ['الفيضانات المستمرة لعدة أشهر', 'عزل القرى تماماً بالمياه', 'صراعات حماية الماشية'],
    keyChallengesEn: ['Months-long catastrophic floodings', 'Total village isolation', 'Cattle security conflicts'],
    coordinates: { x: 55, y: 55 }
  },
  {
    id: 'lakes',
    nameAr: 'البحيرات',
    nameEn: 'Lakes',
    capitalAr: 'رمبيك',
    capitalEn: 'Rumbek',
    regionAr: 'إقليم بحر الغزال الكبرى',
    regionEn: 'Greater Bahr el Ghazal',
    overviewAr: 'ولاية استراتيجية تتوسط البلاد، تشتهر بمدينة رمبيك العريقة وثقافة الرعي والزراعة، وتتجه بخطوات حثيثة نحو الاستقرار والسلام المجتمعي.',
    overviewEn: 'Strategic heartland state centered around historic Rumbek, rooted in pastoralism and agriculture, progressively consolidating community peace.',
    climateAndGeographyAr: 'سافانا شجرية غنية، بحيرات موسمية، وسهول رعوية فسيحة.',
    climateAndGeographyEn: 'Wooded savanna, seasonal oxbow lakes, and expansive cattle grazing plains.',
    developmentNeedsAr: [
      'توفير التعليم في معسكرات الرعاة (التعليم المتنقل)',
      'تأهيل آبار المياه لتفادي التنافس على الموارد',
      'تدريب الشباب على حرف البناء والحدادة والكهرباء',
      'دعم الرعاية الصحية للأمهات والأطفال حديثي الولادة'
    ],
    developmentNeedsEn: [
      'Mobile schooling tailored for pastoral cattle camp youth',
      'Water point rehabilitation to preempt resource disputes',
      'Vocational training in masonry, welding, and mechanics',
      'Maternal healthcare and neonatal clinic upgrades'
    ],
    proposedInterventionsAr: [
      'مقترح مدارس الأمل في معسكرات الرعاة',
      'مقترح صيانة مضخات المياه اليدوية في الريف',
      'مقترح ورشة رمبيك الحرفية للشباب'
    ],
    proposedInterventionsEn: [
      'Proposed pastoralist mobile learning hubs',
      'Proposed rural borehole repair and maintenance crews',
      'Proposed Rumbek vocational artisan youth workshop'
    ],
    keyChallengesAr: ['التسرب الدراسي في البيئات الرعوية', 'التنافس على نقاط المياه الصيفية', 'شح المرافق الجراحية'],
    keyChallengesEn: ['School dropouts in pastoralist camps', 'Dry season water scarcity tension', 'Lack of surgical facilities'],
    coordinates: { x: 42, y: 62 }
  },
  {
    id: 'northern-bahr-el-ghazal',
    nameAr: 'شمال بحر الغزال',
    nameEn: 'Northern Bahr el Ghazal',
    capitalAr: 'أويل',
    capitalEn: 'Aweil',
    regionAr: 'إقليم بحر الغزال الكبرى',
    regionEn: 'Greater Bahr el Ghazal',
    overviewAr: 'ولاية هادئة تمتاز بتماسك مجتمعي قوي وسهول واسعة، وتعد من أهم مناطق إنتاج الأرز والذرة والفول السوداني.',
    overviewEn: 'Peaceful state characterized by strong communal bonds and vast fertile lowlands, prominent for rice, sorghum, and groundnut farming.',
    climateAndGeographyAr: 'سهول طينية ناعمة، مناخ مداري رطب، ووديان مائية موسمية غنية لزراعة الأرز.',
    climateAndGeographyEn: 'Clay plains, tropical seasonal rains, and optimal wetland valleys for rice.',
    developmentNeedsAr: [
      'تحديث وتوسيع مشروع أرز أويل الزراعي التاريخي',
      'مكافحة سوء التغذية بين الأطفال والأمهات المرضعات',
      'دعم الفصول المدرسية الابتدائية التي تفتقر للمقاعد',
      'بناء صوامع تخزين تقليدية محسنة للحبوب'
    ],
    developmentNeedsEn: [
      'Modernizing and expanding the historic Aweil Rice Scheme',
      'Combating acute malnutrition among children and lactating mothers',
      'Furnishing bare rural classrooms with sturdy desks and chalkboards',
      'Constructing improved traditional grain storage granaries'
    ],
    proposedInterventionsAr: [
      'مقترح برامج التغذية التكميلية للأطفال دون الخامسة',
      'مقترح دعم صغار مزارعي الأرز والحبوب بالبذور والتدريب',
      'مقترح تأهيل فصول التعليم الأساسي وتوفير المقاعد'
    ],
    proposedInterventionsEn: [
      'Proposed supplementary nutrition packs for under-fives',
      'Proposed smallholder rice and grain seed starter packages',
      'Proposed rural primary school desk and roofing program'
    ],
    keyChallengesAr: ['موجات الجفاف الصيفي ثم الغمر', 'نقص التغذية في مواسم الشح', 'الفقر والاعتماد على الأمطار'],
    keyChallengesEn: ['Dry spells followed by waterlogging', 'Seasonal hunger gap malnutrition', 'High poverty indices'],
    coordinates: { x: 25, y: 45 }
  },
  {
    id: 'western-bahr-el-ghazal',
    nameAr: 'غرب بحر الغزال',
    nameEn: 'Western Bahr el Ghazal',
    capitalAr: 'واو',
    capitalEn: 'Wau',
    regionAr: 'إقليم بحر الغزال الكبرى',
    regionEn: 'Greater Bahr el Ghazal',
    overviewAr: 'تحتضن مدينة واو التاريخية العريقة ثاني أكبر مدن البلاد، وتتميز بتنوع ثقافي وتجاري وحرفي فريد.',
    overviewEn: 'Home to the historic cathedral city of Wau, South Sudan’s second largest urban center, known for cultural plurality and skilled craftsmanship.',
    climateAndGeographyAr: 'هضاب حجرية، غابات سافانا مفتوحة، ووديان متدفقة تغذي حوض بحر الغزال.',
    climateAndGeographyEn: 'Laterite plateaus, open wooded savanna, and river valleys draining into Bahr el Ghazal.',
    developmentNeedsAr: [
      'تأهيل المدارس الفنية والمعاهد المهنية التاريخية في واو',
      'دعم الأسر العائدة بعد سنوات النزوح لاستعادة منازلها ومزارعها',
      'توفير مياه الشرب النظيفة للأحياء الجديدة والمخيمات',
      'تعزيز المبادرات الرياضية والثقافية الجامعة'
    ],
    developmentNeedsEn: [
      'Revitalizing Wau’s historic technical and vocational institutes',
      'Resettlement and livelihood packages for returnee families',
      'Extending boreholes and safe drinking water to outskirts',
      'Strengthening inclusive inter-cultural sports and music initiatives'
    ],
    proposedInterventionsAr: [
      'مقترح «معهد واو الحرفي المجتمعي» للشباب العائدين',
      'مقترح إعادة تأهيل آبار المياه اليدوية في الريف',
      'مقترح مراكز الإسناد الأسري للأمهات والأطفال'
    ],
    proposedInterventionsEn: [
      'Proposed "Wau Community Artisan Center" for returnee youth',
      'Proposed district hand pump rehabilitation campaign',
      'Proposed family welfare centers for mothers and young children'
    ],
    keyChallengesAr: ['إعادة إدماج النازحين والعائدين', 'تقادم البنية التحتية للمياه', 'ارتفاع نسبة البطالة بين الخريجين'],
    keyChallengesEn: ['Reintegration of returnees', 'Aging urban water infrastructure', 'Unemployment among diploma holders'],
    coordinates: { x: 26, y: 55 }
  },
  {
    id: 'unity',
    nameAr: 'الوحدة',
    nameEn: 'Unity',
    capitalAr: 'بانتيو',
    capitalEn: 'Bentiu',
    regionAr: 'إقليم أعالي النيل الكبرى',
    regionEn: 'Greater Upper Nile',
    overviewAr: 'ولاية عانت من أعتى موجات الفيضانات المستمرة في السنوات الأخيرة، تحيط بها السدود الترابية كجزر أمل لحماية آلاف السكان.',
    overviewEn: 'Epicenter of unprecedented climate-induced flooding, where resilient communities rely on extensive ring dykes around Bentiu.',
    climateAndGeographyAr: 'أحواض فيضية منخفضة، مياه نيلية دائمة، وحقول طاقة.',
    climateAndGeographyEn: 'Lowland flood basins, enduring wetlands, and energy fields.',
    developmentNeedsAr: [
      'دعم صيانة السدود الترابية المحيطة بالتجمعات السكنية',
      'محطات إصحاح بيئي عاجلة لتجنب الكوليرا وسط المياه الراكدة',
      'مدارس مؤقتة بديلة للأطفال الذين غمرت المياه مدارسهم',
      'توفير قوارب ووسائل تنقل آمنة بين الجزر'
    ],
    developmentNeedsEn: [
      'Continuous maintenance of dyke systems safeguarding lives',
      'Emergency sanitation to prevent cholera amidst stagnant waters',
      'Temporary learning shelters for children whose schools were submerged',
      'Canoes and safe flotation transport between marooned hamlets'
    ],
    proposedInterventionsAr: [
      'مقترح الاستجابة الإنسانية الطارئة للمياه والإصحاح في بانتيو',
      'مقترح فصول الأمل التعليمية في مناطق التجمع الآمنة',
      'مقترح توفير الناموسيات المشبعة وأدوية الملاريا'
    ],
    proposedInterventionsEn: [
      'Proposed urgent WASH emergency response in Bentiu dyke zones',
      'Proposed temporary learning spaces on secure high grounds',
      'Proposed distribution of long-lasting insecticide-treated nets'
    ],
    keyChallengesAr: ['غمر المياه للمساحات السكنية والزراعية', 'انتشار البعوض والأمراض الجلدية', 'انهيار المدارس الطينية'],
    keyChallengesEn: ['Submerged agricultural and residential land', 'Severe vector-borne illnesses', 'Collapse of mud schools'],
    coordinates: { x: 42, y: 42 }
  },
  {
    id: 'upper-nile',
    nameAr: 'أعالي النيل',
    nameEn: 'Upper Nile',
    capitalAr: 'ملكال',
    capitalEn: 'Malakal',
    regionAr: 'إقليم أعالي النيل الكبرى',
    regionEn: 'Greater Upper Nile',
    overviewAr: 'الملتقى التاريخي للنيل الأبيض ونهر السوباط، مدينة ملكال مركز تجاري وعلمي هام يشهد عودة تدريجية للأمل والاستقرار.',
    overviewEn: 'Historic confluence of the White Nile and Sobat River, Malakal represents an enduring hub of trade, education, and reviving hope.',
    climateAndGeographyAr: 'أنهار عريضة متدفقة، سهول زراعية مطرية واسعة، وأراضٍ طينية خصيبة تمتد للحدود الشرقية.',
    climateAndGeographyEn: 'Majestic river confluences, vast rainfed agricultural plains, and deep clay basins.',
    developmentNeedsAr: [
      'إعادة إعمار وترميم المدارس والمراكز الصحية المتضررة',
      'دعم آلاف العائدين من السودان عبر المعابر الحدودية',
      'تنقية مياه النيل للأحياء السكنية للوقاية من التلوث',
      'دعم الزراعة الآلية التعاونية في سهول الرنك وأعالي النيل'
    ],
    developmentNeedsEn: [
      'Reconstructing damaged schools and clinics across Malakal',
      'Receiving and aiding thousands of returnees crossing northern borders',
      'River water purification systems for urban families',
      'Revitalizing mechanized sorghum and sesame farming cooperatives'
    ],
    proposedInterventionsAr: [
      'مقترح دعم مراكز استقبال وإيواء الأسر العائدة',
      'مقترح محطات مياه نقية على ضفاف النيل',
      'مقترح برامج التعليم الاستدراكي للطلاب المتأثرين بالنزوح'
    ],
    proposedInterventionsEn: [
      'Proposed assistance for returnee transit and reception zones',
      'Proposed compact riverbank water filtration plants',
      'Proposed catch-up education modules for displaced schoolchildren'
    ],
    keyChallengesAr: ['ضغط العائدين الجدد عبر المعابر', 'دمار البنية الأساسية في السنوات السابقة', 'صعوبة النقل النهري'],
    keyChallengesEn: ['Overwhelming influx of border returnees', 'Decimated baseline infrastructure', 'River transport fuel costs'],
    coordinates: { x: 62, y: 35 }
  },
  {
    id: 'warrap',
    nameAr: 'واراب',
    nameEn: 'Warrap',
    capitalAr: 'كواجوك',
    capitalEn: 'Kuajok',
    regionAr: 'إقليم بحر الغزال الكبرى',
    regionEn: 'Greater Bahr el Ghazal',
    overviewAr: 'ولاية تمتد بين السهول الفيضية والمجتمعات الرعوية والزراعية العريقة، غنية بالثروة الحيوانية والتقاليد المجتمعية الأصيلة.',
    overviewEn: 'Spans vibrant pastoralist heartlands and rich floodplains, distinguished by immense livestock herds and revered cultural traditions.',
    climateAndGeographyAr: 'سهول مفتوحة، أودية موسمية، ومراعٍ فسيحة تغذي ملايين الأبقار والماشية.',
    climateAndGeographyEn: 'Open lowlands, seasonal streams, and sprawling grasslands sustaining livestock herds.',
    developmentNeedsAr: [
      'حلول سلمية مستدامة لنزاعات الماشية والموارد',
      'بناء وتجهيز المدارس الريفية الدائمة بدلاً من القش',
      'حفر آبار مياه عميقة في المناطق الرعوية الجافة',
      'برامج صحة الأمومة والطفولة في القرى البعيدة'
    ],
    developmentNeedsEn: [
      'Grassroots conflict transformation on cattle corridors',
      'Replacing precarious thatched classrooms with permanent brick schools',
      'Deep boreholes in arid dry-season grazing grounds',
      'Outreach maternal health and immunization coverage in remote villages'
    ],
    proposedInterventionsAr: [
      'مقترح مبادرة «مدارس السلام» لربط التعليم بالتعايش',
      'مقترح حفر آبار ارتوازية بالطاقة الشمسية',
      'مقترح وحدات الرعاية الصحية المتنقلة'
    ],
    proposedInterventionsEn: [
      'Proposed "Schools of Peace" intertwining education with coexistence',
      'Proposed solar-driven deep boreholes for pastoral hubs',
      'Proposed mobile maternal health and immunization units'
    ],
    keyChallengesAr: ['النزاعات المحلية حول المراعي', 'غياب المباني المدرسية الثابتة', 'الجفاف الموسمي الحاد'],
    keyChallengesEn: ['Communal grazing territory friction', 'Lack of solid school buildings', 'Intense seasonal dry spells'],
    coordinates: { x: 38, y: 50 }
  }
];

export const PROPOSED_PROJECTS: ProposedProject[] = [
  {
    id: 'proj-bridge-edu',
    code: 'BGI-EDU-01',
    titleAr: 'مقترح مبادرة «جسور التعليم» (Bridge Education)',
    titleEn: 'Proposed "Bridge Education" Initiative',
    areaId: 'area-education',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'تصور استراتيجي لتأهيل ودعم 50 فصلاً مدرسياً مجتمعياً في المناطق الريفية الأكثر حرماناً في جنوب السودان.',
    summaryEn: 'A strategic concept to equip and support 50 grassroots community classrooms across underserved rural districts.',
    descriptionAr: 'يهدف المقترح مستقبلاً، عند توفر الشراكات والاعتماد، إلى تقديم حزم الدعم المدرسي، تدريب المعلمين المحليين المتطوعين، وتوفير الألواح والمقاعد المدرسية لمساعدة الأطفال على مواصلة تعليمهم في بيئة آمنة.',
    descriptionEn: 'Envisions providing essential school starter kits, mentoring grassroots volunteer teachers, and furnishing classrooms so children can learn safely.',
    targetFocusAr: 'الأطفال في المناطق الريفية والنازحون',
    targetFocusEn: 'Rural children and displaced youth',
    proposedLocationsAr: ['شمال بحر الغزال', 'جونقلي', 'البحيرات'],
    proposedLocationsEn: ['Northern Bahr el Ghazal', 'Jonglei', 'Lakes'],
    icon: 'BookOpen',
    imageUrl: southSudanEducationImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-health',
    code: 'BGI-HLT-02',
    titleAr: 'مقترح مبادرة «جسور الصحة» (Bridge Health)',
    titleEn: 'Proposed "Bridge Health" Initiative',
    areaId: 'area-health',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'تصور لتسيير قوافل طبية ريفية وتدريب القابلات والمساعدين الصحيين في القرى النائية.',
    summaryEn: 'A conceptual model for rural voluntary health outreaches and midwife training in isolated villages.',
    descriptionAr: 'يركز هذا المشروع المقترح على رعاية صحة الأمومة والطفولة، وتوفير حقائب الإسعاف الأولي، والمساهمة في حملات التوعية بالأمراض المستوطنة مثل الملاريا والإسهالات المائية.',
    descriptionEn: 'Focuses on maternal and child survival, basic primary trauma first aid kits, and community disease prevention.',
    targetFocusAr: 'الأمهات الحوامل، الرضع، وكبار السن',
    targetFocusEn: 'Expectant mothers, infants, and the elderly',
    proposedLocationsAr: ['الاستوائية الشرقية', 'واراب', 'الوحدة'],
    proposedLocationsEn: ['Eastern Equatoria', 'Warrap', 'Unity'],
    icon: 'Activity',
    imageUrl: southSudanHealthImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-water',
    code: 'BGI-WTR-03',
    titleAr: 'مقترح مبادرة «جسور المياه» (Bridge Water)',
    titleEn: 'Proposed "Bridge Water" Initiative',
    areaId: 'area-water',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'خطة مقترحة لصيانة وتأهيل مضخات المياه المعطلة وتدريب فرق محلية لإدارتها.',
    summaryEn: 'A proposed plan to rehabilitate non-functional hand pumps and train local caretakers for sustainable maintenance.',
    descriptionAr: 'بدلاً من حفر آبار جديدة قد تتعطل، يركز المشروع المقترح على إصلاح المضخات القائمة بالفعل في القرى، وتزويد المجتمعات بقطع الغيار والمفكات وتدريب فنيين من نفس القرية.',
    descriptionEn: 'Instead of drilling prone-to-failure boreholes, this concept prioritizes restoring existing village pumps and training local youth mechanics.',
    targetFocusAr: 'القرى الريفية ومناطق تجمعات النساء',
    targetFocusEn: 'Rural settlements and women water collectors',
    proposedLocationsAr: ['الاستوائية الوسطى', 'غرب بحر الغزال', 'أعالي النيل'],
    proposedLocationsEn: ['Central Equatoria', 'Western Bahr el Ghazal', 'Upper Nile'],
    icon: 'Droplet',
    imageUrl: southSudanWaterImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-food',
    code: 'BGI-FOD-04',
    titleAr: 'مقترح مبادرة «جسور الأمن الغذائي» (Bridge Food Security)',
    titleEn: 'Proposed "Bridge Food Security" Initiative',
    areaId: 'area-food',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'رؤية لتمكين 200 أسرة مزارعة بحزم البذور والأدوات الزراعية ودعم التعاونيات الإنتاجية.',
    summaryEn: 'Envisioned support for 200 smallholder agrarian households with resilient seeds, hand tools, and farming collectives.',
    descriptionAr: 'يستهدف المشروع المقترح دعم زراعة الحبوب والخضروات المنزلية لتقليل الاعتماد على الإغاثة الغذائية وتحويل الأسر إلى منتجين يملكون قوت يومهم ويسوقون الفائض.',
    descriptionEn: 'Aims to bolster household staple crop farming to diminish food aid dependency and transition families into proud independent food producers.',
    targetFocusAr: 'الأسر المزارعة وصغار الفلاحين والنساء',
    targetFocusEn: 'Agrarian families, smallholders, and rural women',
    proposedLocationsAr: ['الاستوائية الغربية', 'شمال بحر الغزال', 'واراب'],
    proposedLocationsEn: ['Western Equatoria', 'Northern Bahr el Ghazal', 'Warrap'],
    icon: 'Leaf',
    imageUrl: southSudanFarmingImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-youth',
    code: 'BGI-YTH-05',
    titleAr: 'مقترح مبادرة «جسور الشباب» (Bridge Youth)',
    titleEn: 'Proposed "Bridge Youth" Initiative',
    areaId: 'area-youth',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'برنامج مقترح للتدريب على المهارات الحياتية، القيادة المجتمعية، وثقافة الحوار وبناء السلام.',
    summaryEn: 'A proposed capacity framework for life skills, grassroots leadership, and communal peacebuilding.',
    descriptionAr: 'توفير مساحات إيجابية آمنة للشباب لتبادل الخبرات، والتعبير عن أفكارهم، وإطلاق مبادرات تنموية صغيرة تخدم مناطقهم وتعزز التعايش السلمي.',
    descriptionEn: 'Offers welcoming safe spaces for young citizens to share perspectives, resolve conflicts peacefully, and lead community improvement deeds.',
    targetFocusAr: 'الشباب والشابات من سن 16 إلى 30 عاماً',
    targetFocusEn: 'Young men and women aged 16 to 30',
    proposedLocationsAr: ['جوبا', 'واو', 'رمبيك', 'ملكال'],
    proposedLocationsEn: ['Juba', 'Wau', 'Rumbek', 'Malakal'],
    icon: 'Zap',
    imageUrl: southSudanYouthImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-skills',
    code: 'BGI-SKL-06',
    titleAr: 'مقترح مبادرة «جسور المهارة» (Bridge Skills)',
    titleEn: 'Proposed "Bridge Skills" Initiative',
    areaId: 'area-youth',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'تصور لورش مهنية سريعة في الحرف اليدوية، الطاقة الشمسية، والكهرباء، والخياطة.',
    summaryEn: 'A conceptual model for targeted vocational apprenticeships in solar installation, mechanics, and textiles.',
    descriptionAr: 'ربط التدريب العملي بحاجة السوق المحلي فوراً، ومنح الخريجين حزم أدوات بدء العمل (Starter Toolkits) للانطلاق في سوق العمل المستقل.',
    descriptionEn: 'Pairs rigorous hands-on skill learning with market demands, providing graduates with starter artisan toolkits to immediately earn livelihoods.',
    targetFocusAr: 'الشباب غير الملتحقين بالتعليم والفتيات المعيلات',
    targetFocusEn: 'Out-of-school youth and single female breadwinners',
    proposedLocationsAr: ['جوبا', 'واو', 'توريت'],
    proposedLocationsEn: ['Juba', 'Wau', 'Torit'],
    icon: 'Hammer',
    imageUrl: southSudanYouthImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  },
  {
    id: 'proj-bridge-comm',
    code: 'BGI-COM-07',
    titleAr: 'مقترح مبادرة «جسور المجتمع» (Bridge Community)',
    titleEn: 'Proposed "Bridge Community" Initiative',
    areaId: 'area-social',
    badgeAr: 'مقترح مستقبلي',
    badgeEn: 'Proposed Concept',
    status: 'Proposed',
    summaryAr: 'رؤية لتعزيز الحوار الأهلي، مساندة الأرامل والأيتام، وتفعيل التكافل الاجتماعي.',
    summaryEn: 'A conceptual framework for inter-clan peace councils, widow protection, and mutual social solidarity.',
    descriptionAr: 'يسعى المقترح إلى تفعيل دور مجالس الحكماء والنساء في حل النزاعات وحماية الفئات الأكثر هشاشة وتوفير مظلة إنسانية واجتماعية آمنة.',
    descriptionEn: 'Engages community elders, women leaders, and youth arbiters to resolve disputes peacefully and safeguard the most fragile households.',
    targetFocusAr: 'الأرامل، الأيتام، وكبار السن، وقادة العشائر',
    targetFocusEn: 'Widows, orphans, vulnerable elderly, and clan leaders',
    proposedLocationsAr: ['كافة الولايات عند اكتمال التأسيس'],
    proposedLocationsEn: ['All states upon complete establishment'],
    icon: 'Heart',
    imageUrl: southSudanPeaceImg,
    disclaimerAr: 'مشروع مقترح قيد الدراسة والتطوير، لم يبدأ تنفيذه بعد.',
    disclaimerEn: 'Proposed future project under conceptual review; not yet active.'
  }
];

export const FEATURED_MASTER_ARTICLE: Article = {
  id: 'master-editorial-kamal-zakaria',
  slug: 'human-in-south-sudan-challenges-and-opportunities',
  titleAr: 'الإنسان في جنوب السودان بين تحديات الحاضر وفرص المستقبل',
  titleEn: 'The Human Being in South Sudan: Between Present Challenges and Future Opportunities',
  authorAr: 'كمال جعفر زكريا',
  authorEn: 'Kamal Jaafar Zakaria',
  authorRoleAr: 'كاتب وباحث تنموي - أحد أصحاب الفكرة التأسيسية لمبادرة جسور الخير',
  authorRoleEn: 'Development Writer & Researcher - Co-Originator of Bridges of Goodness',
  date: '2026-09-15',
  category: 'development',
  readTime: '8 دقائق قراءة',
  isFeatured: true,
  imageUrl: southSudanWriterImg,
  excerptAr: 'رؤية تحريرية وتحليلية عميقة تتناول مركزية الإنسان في معادلة النهوض الوطني بجنوب السودان، وضرورة الانتقال من فلسفة الإغاثة الآنية إلى بناء المعرفة والمهارة والتمكين المستدام.',
  excerptEn: 'An in-depth analytical editorial exploring the centrality of the human being in South Sudan’s national renaissance, arguing for a decisive shift from short-term relief to sustainable capacity building.',
  contentAr: `
### مدخل: مركزية الإنسان في بناء الدولة والمجتمع

حين نتأمل جغرافية جنوب السودان، نرى أرضاً حباها الله بأنهار متدفقة، وغابات ممتدة، وأراضٍ خصبة يمكن أن تطعم الملايين، وثروات كامنة في باطن الأرض وظاهرها. غير أن الحقيقة التنموية الأهم، التي أثبتتها تجارب الأمم عبر التاريخ، هي أن الثروة الحقيقية لأي أمة ليست في نفطها أو معادنها أو اتساع رقعتها الزراعية، بل هي أولاً وأخيراً: **الإنسان**.

إن الإنسان هو المبتدأ وهو المنتهى؛ هو الصانع للتنمية، وهو هدفها الأسمى. وفي جنوب السودان، واجه هذا الإنسان عقوداً طويلة من التحديات المركبة: من نزاعات أرهقت النسيج الاجتماعي، إلى صدمات مناخية عنيفة تمثلت في فيضانات غير مسبوقة غمرت قرى بأكملها، إلى هشاشة في البنية الأساسية جعلت الوصول إلى أبسط مقومات الحياة أمراً يتطلب مشقة يومية.

ومع ذلك، فإن السمة الأبرز التي تلحظها حين تقترب من المجتمعات المحلية في مختلف الولايات هي: **عزة النفس، والصبر، والرغبة العميقة في العمل والكرامة**. هذا الإنسان لا يبحث عن إحسان دائم، بل يبحث عن فرصة عادلة، وباب مفتوح، وشراكة صادقة تسانده ليقف على قدميه.

---

### قطاع التعليم: قاطرة النهوض المعرفي

لا يمكن الحديث عن مستقبل أفضل دون التوقف ملياً عند واقع التعليم. التعليم ليس ترفاً ولا قطاعاً ثانوياً يمكن إرجاؤه حتى تستقر الأوضاع، بل هو في صلب بناء الاستقرار نفسه. 

إن نسبة كبيرة من أطفال جنوب السودان ما زالوا يدرسون تحت ظلال الأشجار، أو في فصول مبنية من القش والطين سرعان ما تتلاشى مع أول موجة أمطار موسمية. أضف إلى ذلك النقص الحاد في المعلمين المؤهلين والمناهج والمقاعد المدرسية. وحين يفتقر الطفل إلى التعليم، فإننا نخسر طاقة بشرية هائلة كان يمكن أن تكون طبيباً، أو مهندساً زراعياً، أو معلماً، أو قائداً مجتمعياً.

لذلك، فإن الرؤية التنموية التي نتطلع إليها في «جسور الخير» تنطلق من ضرورة دعم التعليم المجتمعي البديل، وتأهيل المعلمين المحليين من أبناء القرى نفسها، وتوفير بيئة تعليمية تحترم عقل الطفل وتشجعه على الاستمرار. إن القلم واللوح المدرسي هما أقوى جسر يعبر به الطفل من ظلام الفقر إلى فضاء الإمكانات الواسعة.

---

### الصحة الأساسية والمياه: شريان البقاء والكرامة

الصحة والتعليم صنوان لا ينفصلان. فالعقل السليم لا ينبت إلا في جسد سليم. وفي معظم المناطق الريفية، لا تزال المسافة بين القرية وأقرب مركز صحي تقاس بالساعات وربما بالأيام، مشياً على الأقدام أو عبوراً في مياه المستنقعات. تفقد أمهات كثر أرواحهن أثناء الولادة لأسباب يمكن تفاديها بتدخلات بسيطة ومبكرة، ويعاني الأطفال من أمراض يمكن الوقاية منها مثل الملاريا والإسهالات المائية وسوء التغذية.

ويرتبط هذا الواقع ارتباطاً وثيقاً بقطاع المياه والإصحاح. المياه موجودة بوفرة في جنوب السودان بفضل النيل وفروعه والبحيرات، ولكن التحدي الحقيقي يكمن في **المياه النظيفة الصالحة للشرب**. وحين تضطر المرأة إلى المشي أميالاً طويلة لجلب مياه غير معقمة، فإن الوقت الضائع من حياتها وحياة بناتها، والأمراض الناتجة عن تلوث تلك المياه، يشكلان نزيفاً مستمراً لطاقة المجتمع. 

إن التركيز على صيانة مضخات المياه وتأهيل الآبار المحلية هو استثمار منخفض التكلفة عظيم الأثر، يعيد للأسر عافيتها ويوفر وقتها للإنتاج ورعاية النشء.

---

### من الإغاثة الاستهلاكية إلى الأمن الغذائي المستدام

لقد أثبتت السنوات الطويلة أن الاكتفاء بتقديم السلال الغذائية الإغاثية—رغم أهميتها القصوى والمنقذة للحياة في لحظات الكوارث الفورية—لا يمكن أن يكون حلاً مستداماً. فالإغاثة بطبيعتها مسكّن مؤقت للألم، لكنها لا تعالج سبب العلة.

إن استمرار الاعتماد على المساعدات الغذائية الخارجية يولد مع مرور الوقت شعوراً بالعجز، وقد يعطل طاقات الإنتاج المحلية. والبديل الإنساني الأخلاقي والتنموي هو: **تمكين المزارع الصغير**. 

أرض جنوب السودان قادرة، لو توفرت للمزارعين البذور المحسنة، والأدوات اليدوية الجيدة، وطرائق حفظ الحبوب بعد الحصاد، على تحقيق الاكتفاء الذاتي والتصدير للأسواق المجاورة. إن تحويل مجتمع ريفي من مستهلك ينتظر شاحنة الغذاء إلى مجتمع يزرع ويحصد ويبيع فائضه في السوق، هو قمة انتصار الكرامة الإنسانية.

---

### الشباب: رأس المال الأغلى والرهان الأكبر

يمثل الشباب دون سن الثلاثين النسبة الأكبر من سكان جنوب السودان. هذا الواقع الديموغرافي يمكن أن يكون أكبر نعمة، أو أكبر مأساة إذا أهمل. 

حين يجد الشاب نفسه بلا تعليم، وبلا تدريب مهني، وبلا فرصة عمل شريفة، فإنه يصبح فريسة سهلة للإحباط أو الاستقطاب في نزاعات لا ناقة له فيها ولا جمل. في المقابل، حين نفتح أمام هذا الشاب ورشة لتعلم النجارة، أو الكهرباء، أو ميكانيكا الآلات الزراعية، أو تركيب أنظمة الطاقة الشمسية، فإننا نمنحه هويته المنتجة ونعيد له احترامه لذاته.

إن الاستثمار في الشباب ليس خياراً مضافاً، بل هو صمام الأمان الوحيد لمستقبل جنوب السودان واستقراره الأهلي.

---

### دور المجتمع المحلي وأهمية الشراكات الصادقة

إن أية مقاربة فوقية تحاول إسقاط حلول جاهزة من الخارج مصيرها الفشل. التنمية الحقيقية هي التي تنبع من المجتمع المحلي، وتستمع إلى قادته الطبيعيين، وتشرك نساءه وشبابه في تحديد الأولويات. مجتمعات جنوب السودان تمتلك ثراءً كبيراً في تقاليد التعاون والتكافل، وما تحتاجه هو بناء جسور ثقة وشراكات استراتيجية متكافئة تجمع بين الخبرات التنموية، والدعم المؤسسي، والجهد المجتمعي الصادق.

---

### خاتمة: بناء الأمل خطوة بخطوة

إن الطريق طويل، والتحديات جسام، لكن الإيمان بالإنسان في جنوب السودان يظل هو الدافع الأكبر والمحرك الأساسي. لسنا أمام معادلة مستحيلة، بل أمام مسار يتطلب الصبر، والصدق، والتخطيط العلمي، والعمل الدؤوب.

إن مبادرة «جسور الخير» تنبع من هذه الرؤية بالذات: أن نضع اللبنة الأولى، بفكر تأسيسي متأنٍ، وبصيرة تزن الواقع، لنصنع معاً جسوراً حقيقية تنقل الإنسان من ضيق الحاجة إلى فضاء الفرصة والإنتاج والكرامة.

---

**تنويه رسمي:**
«هذا المقال يعبر عن رؤية تحريرية ضمن التصور الفكري لمبادرة جسور الخير، وليس تقريراً إحصائياً رسمياً.»
`,
  contentEn: `
### Introduction: The Centrality of the Human Being in Nation Building

When we observe South Sudan's geography, we behold a land endowed by nature with flowing rivers, fertile expanses, lush savanna, and boundless potential. Yet the profound developmental truth validated throughout history remains unchanged: the primary wealth of any civilization is neither minerals nor agricultural acreage, but first and foremost: **The Human Being**.

The individual is the origin, the architect, and the supreme objective of any genuine developmental endeavor. In South Sudan, citizens have withstood decades of compounded shocks—from conflict that tested the social fabric, to catastrophic climate flooding that submerged entire communities, to baseline infrastructural gaps that turn daily survival into an arduous quest.

Yet approaching grassroots communities across every county reveals an indelible truth: **immense human dignity, resilience, and an unwavering desire for honorable work**. South Sudanese communities do not seek permanent handouts; they seek an equitable opportunity, an open door, and a respectful partnership to rise on their own terms.

---

### Education: The Foundational Catalyst for Collective Renaissance

A dignified future cannot be discussed without placing education at the very center. Education is neither a luxury nor a secondary sector to be deferred; it is the cornerstone of societal peace and civic progress.

Thousands of children continue to attend open-air classes under trees or inside precarious grass shelters prone to collapse with seasonal rains. Compounded by shortages of trained local teachers, scholastic aids, and benches, every uneducated child represents a profound national loss of potential doctors, agronomists, teachers, and civic pioneers.

Therefore, the conceptual vision championed by Bridges of Goodness starts with community-driven accelerated classrooms, capacitating village instructors, and cultivating a safe pedagogical sanctuary. The school pencil and desk remain the most transformative bridge delivering a child from hardship into lifelong opportunity.

---

### Primary Health and Water: The Lifeline of Community Dignity

Health and education are intertwined twins. Physical well-being forms the bedrock upon which cognitive potential flourishes. Across rural countrysides, the distance separating a village from the nearest clinic is often measured in hours or days of swamp navigation. Mothers frequently face preventable childbirth complications, while children suffer from treatable ailments like malaria, water-borne diarrhea, and acute malnutrition.

This reality is inextricably linked to Water and Sanitation (WASH). While South Sudan possesses water in abundance through the Nile basin, the critical bottleneck is **access to clean, treated drinking water**. Walking miles daily to fetch contaminated water exhausts rural women and sustains chronic illness cycles.

Rehabilitating existing defunct hand pumps and equipping village maintenance committees represents a low-cost, high-impact intervention restoring communal health and freeing human hours for cultivation and learning.

---

### Shifting from Temporary Relief to Sustainable Food Security

Extended decades have underscored that food relief drops—while vital and life-saving during immediate crises—cannot serve as a durable strategy. Relief alleviates immediate acute pain, but cannot heal the underlying structural ailment.

Perpetual reliance on external food rations risks eroding agency. The ethical, sustainable humanitarian alternative is **capacitating the smallholder farmer**.

South Sudan’s land can nourish the nation and export surplus grain if farmers receive resilient seeds, sturdy tools, and post-harvest storage protection. Transitioning a village from waiting for an emergency relief convoy to cultivating, harvesting, and trading surplus harvest at local markets is the pinnacle of human dignity.

---

### Youth: The Supreme Demographic Capital

Young people under thirty comprise the demographic majority of South Sudan. This dynamic reality can either be the nation’s greatest asset or a profound vulnerability if neglected.

When youth face structural unemployment devoid of vocational training or hope, despair breeds vulnerability. Conversely, when we open workshops teaching carpentry, electrical engineering, solar pump mechanics, and agricultural trades, we restore identity, purpose, and self-worth. Investing in youth is not an optional program; it is the vital safeguard of sustainable peace.

---

### Grassroots Ownership and Equitable Partnerships

Top-down solutions imported from afar are destined to wither. Genuine development is rooted in the local community, listens intently to traditional elders, and empowers women and youth in deliberative planning. South Sudanese cultures harbor deep traditions of mutual solidarity; what they require is honest bridges of trust uniting international solidarity with grassroots wisdom.

---

### Conclusion: Constructing Hope Step by Step

The path is demanding, but faith in the human promise of South Sudan remains our paramount inspiration. We do not confront an impossible riddle, but a path demanding patience, ethical integrity, rigorous planning, and persistent labor.

The Bridges of Goodness Initiative is grounded in this exact commitment: laying foundational stones with thoughtful deliberation, discerning reality with clarity, and building genuine bridges carrying human beings from hardship toward opportunity, productivity, and lasting dignity.

---

**Official Editorial Notice:**
“This article expresses an editorial and conceptual vision within the intellectual framework of the Bridges of Goodness Initiative, and is not an official statistical report.”
`
};

export const OTHER_ARTICLES: Article[] = [
  {
    id: 'art-education-rural-children',
    slug: 'community-education-rural-south-sudan',
    titleAr: 'التعليم المجتمعي: كيف تبني القرى مدارسها بأبسط الإمكانات؟',
    titleEn: 'Community Education: How Grassroots Villages Build Schools with Minimal Resources',
    authorAr: 'فريق التحرير التنموي',
    authorEn: 'Development Editorial Desk',
    date: '2026-08-20',
    category: 'education',
    readTime: '5 دقائق',
    imageUrl: southSudanEducationImg,
    excerptAr: 'قراءة في تجارب المدارس المجتمعية في أرياف جونقلي وبحر الغزال، وأهمية تمكين المعلم المحلي كركيزة أساسية لاستدامة التعليم.',
    excerptEn: 'An exploration of community-led schools in rural Jonglei and Bahr el Ghazal, highlighting the vital role of local volunteer teachers.',
    contentAr: `المدارس المجتمعية في أرياف جنوب السودان تمثل شريان الأمل الوحيد لآلاف الأطفال. يقف المعلم المتطوع تحت ظلال الأشجار ليصنع الفرق برغم شح الكتب والسبورات. تتناول هذه الورقة كيف يمكن للمبادرات التنموية المستقبلية مساندة هذه المدارس بتوفير المواد الأساسية وتحفيز المعلمين.`,
    contentEn: `Grassroots community schools in rural South Sudan represent the sole beacon of learning for thousands of young minds. Volunteer teachers persevere beneath acacia trees despite severe shortages. This overview highlights how future initiatives can bolster village education.`
  },
  {
    id: 'art-water-pumps-sustainability',
    slug: 'water-pumps-maintenance-vs-drilling',
    titleAr: 'استدامة المياه: لماذا تفشل الآبار الجديدة وكيف نصلح القائم منها؟',
    titleEn: 'Water Sustainability: Why New Boreholes Fail and How We Can Fix Existing Pumps',
    authorAr: 'مستشار شؤون المياه والبيئة',
    authorEn: 'WASH Advisory Contributor',
    date: '2026-07-14',
    category: 'water',
    readTime: '6 دقائق',
    imageUrl: southSudanWaterImg,
    excerptAr: 'تحليل تطبيقي يوضح أن أكثر من 40% من مضخات المياه اليدوية في المناطق الريفية تتعطل بسبب غياب الصيانة وقطع الغيار المحلية.',
    excerptEn: 'A practical analysis revealing why over 40% of rural hand pumps break down due to absent local maintenance toolkits and parts.',
    contentAr: `الحل الحقيقي لأزمة المياه في القرى لا يكمن دائماً في حفر آبار جديدة، بل في تمكين المجتمع المحلي من صيانة ما هو موجود بالفعل. تأسيس لجان صيانة شبابية وتدريبهم على تفكيك وتركيب المضخات يوفر مياهاً نقية بتكلفة تقل بنسبة 80% عن المشاريع الجديدة.`,
    contentEn: `The true remedy for rural water scarcity does not solely reside in drilling new wells, but in empowering village caretakers to sustain existing assets with affordable spare parts.`
  },
  {
    id: 'art-youth-vocational-future',
    slug: 'youth-vocational-skills-pathway-peace',
    titleAr: 'التدريب المهني للشباب كجسر للسلام والاستقرار المجتمعي',
    titleEn: 'Vocational Training for Youth as an Unshakable Bridge to Peace',
    authorAr: 'باحث في شؤون الشباب وبناء السلام',
    authorEn: 'Youth Peacebuilding Fellow',
    date: '2026-06-02',
    category: 'youth',
    readTime: '5 دقائق',
    imageUrl: southSudanYouthImg,
    excerptAr: 'عندما يمتلك الشاب مهنة حقيقية في يده، تتبدل أولوياته من النزاع إلى الإنتاج. نماذج وتطلعات للتمكين الحرفي في المدن الكبرى.',
    excerptEn: 'When young hands hold productive artisan tools, priorities pivot from frustration to value creation. Examining vocational models.',
    contentAr: `الشباب هم طاقة جنوب السودان المتجددة. التدريب على المهن المطلوبة في الأسواق—كالكهرباء، والنجارة، وتركيب الطاقة الشمسية، وميكانيكا المحركات—يمنح الشاب استقلالاً مالياً فورياً ويجعله عنصراً فاعلاً في استقرار مجتمعه.`,
    contentEn: `Youth represent South Sudan's renewable vibrancy. Practical apprenticeships in carpentry, solar installation, and mechanical repairs deliver immediate economic autonomy.`
  },
  {
    id: 'art-agriculture-equatoria-breadbasket',
    slug: 'equatoria-breadbasket-opportunity',
    titleAr: 'الاستوائية سلة الغذاء: كيف تتحول الوفرة الطبيعية إلى أمن غذائي دائم؟',
    titleEn: 'Equatoria the Breadbasket: Transforming Natural Abundance into Lasting Food Security',
    authorAr: 'فريق الاقتصاد الزراعي المقترح',
    authorEn: 'Agronomic Research Group',
    date: '2026-05-18',
    category: 'food-security',
    readTime: '7 دقائق',
    imageUrl: southSudanFarmingImg,
    excerptAr: 'قراءة في المقومات الزراعية الاستثنائية لإقليم الاستوائية وأهمية سلاسل التبريد والتخزين والتجفيف لتقليل الفاقد بعد الحصاد.',
    excerptEn: 'An examination of Equatoria’s agricultural gifts and the pivotal role of post-harvest drying and storage in ending seasonal scarcity.',
    contentAr: `تمتلك أراضي يامبيو وتوريت ومحيط جوبا مقومات زراعية عالمية تكفي لإطعام الملايين. التحدي الأكبر ليس في الإنبات بل في حفظ المحاصيل ونقلها للأسواق. تسعى الأفكار المستقبلية إلى دعم تجفيف الفواكه وحفظ الحبوب لضمان وفرة الغذاء على مدار العام.`,
    contentEn: `The fertile soils of Yambio, Torit, and suburban Juba hold potential to sustain millions. Overcoming post-harvest loss through solar drying and secure silos is the strategic key.`
  }
];

export const ALL_ARTICLES: Article[] = [FEATURED_MASTER_ARTICLE, ...OTHER_ARTICLES];

export const PARTNERSHIP_TYPES = [
  {
    titleAr: 'المنظمات الإنسانية والتنموية الدولية',
    titleEn: 'International Humanitarian & Development Agencies',
    descAr: 'تبادل الخبرات الميدانية، تنسيق التدخلات المستقبلية، وتطبيق معايير العمل الإنساني الدولية.',
    descEn: 'Sharing field insights, harmonizing future interventions, and upholding global humanitarian standards.'
  },
  {
    titleAr: 'المؤسسات التعليمية والأكاديمية',
    titleEn: 'Educational & Academic Institutions',
    descAr: 'تطوير المناهج التدريبية، إعداد الدراسات الميدانية وبحوث تقييم الاحتياجات، وتدريب المعلمين.',
    descEn: 'Curriculum development, baseline field surveys, needs assessments, and educator workshops.'
  },
  {
    titleAr: 'المؤسسات الصحية والمستشفيات',
    titleEn: 'Healthcare Institutions & Clinics',
    descAr: 'الإسناد الطبي، وتدريب الكوادر الميدانية، والتنسيق في حملات التوعية ومكافحة الأوبئة.',
    descEn: 'Medical advisory, grassroots health worker coaching, and coordinated disease prevention campaigns.'
  },
  {
    titleAr: 'القطاع الخاص ورواد الأعمال',
    titleEn: 'Private Sector & Business Leaders',
    descAr: 'المسؤولية المجتمعية المستدامة، دعم ورش التدريب الحرفي، وتوفير فرص التدريب والتأهيل للشباب.',
    descEn: 'Corporate social responsibility, equipping vocational centers, and youth apprenticeship placement.'
  },
  {
    titleAr: 'الجهات والمنظمات المانحة',
    titleEn: 'Philanthropic Donors & Foundations',
    descAr: 'بحث وتطوير أطر التمويل المشترك للمشاريع التنموية المقترحة عند اكتمال إجراءات التسجيل القانوني.',
    descEn: 'Exploring collaborative funding frameworks for proposed projects upon legal formalization.'
  },
  {
    titleAr: 'المبادرات الشبابية والمجتمعات المحلية',
    titleEn: 'Youth Initiatives & Grassroots Communities',
    descAr: 'الذراع الميداني النابض، وإشراك القيادات الأهلية في تحديد الأولويات والتخطيط التشاركي.',
    descEn: 'Vibrant grassroots partners, ensuring community elders and youth guide participatory decisions.'
  },
  {
    titleAr: 'المتطوعون والخبراء المستقلون',
    titleEn: 'Volunteers & Independent Experts',
    descAr: 'مساهمة الكفاءات والخبرات الوطنية والإقليمية والدولية في وضع التصورات وتطوير السياسات.',
    descEn: 'Engaging national, regional, and diaspora specialists in shaping frameworks and methodologies.'
  }
];

export const FAQ_LIST = [
  {
    qAr: 'ما هي مبادرة جسور الخير (BGI)؟',
    qEn: 'What is the Bridges of Goodness Initiative (BGI)?',
    aAr: 'جسور الخير هي فكرة تأسيسية ومبادرة مجتمعية مقترحة قيد الدراسة والتطوير، انطلقت برؤية تهدف إلى بناء الإنسان في جنوب السودان وربطه بفرص التعليم والصحة والتمكين والإنتاج.',
    aEn: 'Bridges of Goodness (BGI) is a foundational concept and proposed initiative under development, envisioned to empower communities in South Sudan through education, healthcare, skills, and self-reliance.'
  },
  {
    qAr: 'هل المبادرة منظمة مسجلة حالياً أو تجمع تبرعات؟',
    qEn: 'Is the initiative currently a registered entity or accepting donations?',
    aAr: 'كلا، نؤكد بكل شفافية أن المبادرة لا تزال في مرحلة الفكرة التأسيسية والدراسة، ولم تتحول بعد إلى منظمة أو مؤسسة مسجلة رسمياً، ولا تطلب أو تجمع تبرعات مالية في هذه المرحلة. يتم العمل حالياً على استكمال وثائق التصور والتشاور مع الشركاء.',
    aEn: 'No. Transparently, the initiative is strictly in its conceptual research phase and is not yet a registered legal NGO. It does not solicit or collect monetary donations. Current efforts focus on whitepaper formulation and advisory consultations.'
  },
  {
    qAr: 'من هم أصحاب الفكرة والفريق التأسيسي؟',
    qEn: 'Who are the originators and foundational team?',
    aAr: 'انطلقت الفكرة بمبادرة من ناصر مييك شول، وسعيد ود المك، وكمال جعفر زكريا، بالتعاون مع نخبة من الكفاءات الوطنية والتطوعية الراغبة في المساهمة في نهوض مجتمعات جنوب السودان.',
    aEn: 'The concept was initiated by Nasser Myik Chol, Saeed Wad Al-Mek, and Kamal Jaafar Zakaria, alongside a network of committed national and voluntary contributors.'
  },
  {
    qAr: 'ما هي فلسفة «الجسر» التي تعتمد عليها المبادرة؟',
    qEn: 'What is the "Bridge Philosophy" championed by the initiative?',
    aAr: 'تقوم فلسفة الجسر على مبدأ الانتقال بالإنسان: من الحاجة إلى الأمان، ثم التعليم والصحة، فالمهارة، ثم العمل والإنتاج، وصولاً إلى الاعتماد على الذات وبناء مجتمع قوي متماسك.',
    aEn: 'The Bridge Philosophy charts a continuum: from basic Need to Safety, through Education and Health, onto Skills, Dignified Work, Productivity, and lasting Self-Reliance.'
  },
  {
    qAr: 'كيف يمكنني التطوع أو تسجيل الاهتمام بالمبادرة مستقبلاً؟',
    qEn: 'How can I volunteer or express interest in future involvement?',
    aAr: 'يمكنك زيارة صفحة «المتطوعون» وتعبئة نموذج تسجيل الاهتمام المبدئي. نوضح أن إرسال النموذج يسجل اهتمامك للمساهمة مستقبلاً ولا يعد تعييناً أو توظيفاً في المرحلة الحالية.',
    aEn: 'You can visit the "Volunteers" page and submit an expression of interest. Please note this registers your future interest and does not represent immediate hiring or deployment.'
  }
];
