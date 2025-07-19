// 2022 개정 교육과정 고교학점제 과목 선택 시뮬레이터
// 모든 155개 보통교과 과목 포함

/*******************************
 * 전체 과목 데이터 (2022 개정 교육과정)
 *******************************/
const courseData = {
  // 공통과목 (18개, 62학점) - 정확한 18개 과목
  commonSubjects: [
    {id: "common_kor1", name: "공통국어1", category: "국어", type: "공통", credits: 4, description: "국어 생활에 필요한 듣기·말하기·읽기·쓰기의 기초 능력을 기르는 과목입니다."},
    {id: "common_kor2", name: "공통국어2", category: "국어", type: "공통", credits: 4, description: "공통국어1의 학습을 바탕으로 국어 능력을 심화 발전시키는 과목입니다."},
    {id: "common_math1", name: "공통수학1", category: "수학", type: "공통", credits: 4, description: "수학의 기본 개념과 원리를 이해하고 수학적 사고력을 기르는 과목입니다."},
    {id: "common_math2", name: "공통수학2", category: "수학", type: "공통", credits: 4, description: "공통수학1의 학습을 바탕으로 수학적 소양과 사고력을 심화하는 과목입니다."},
    {id: "basic_math1", name: "기본수학1", category: "수학", type: "공통", credits: 4, description: "수학 학습에 어려움을 겪는 학생들을 위한 기초 수학 과목입니다."},
    {id: "basic_math2", name: "기본수학2", category: "수학", type: "공통", credits: 4, description: "기본수학1의 학습을 바탕으로 기초 수학 능력을 완성하는 과목입니다."},
    {id: "common_eng1", name: "공통영어1", category: "영어", type: "공통", credits: 4, description: "영어의 기본 의사소통 능력을 기르는 필수 과목입니다."},
    {id: "common_eng2", name: "공통영어2", category: "영어", type: "공통", credits: 4, description: "공통영어1의 학습을 바탕으로 영어 의사소통 능력을 심화하는 과목입니다."},
    {id: "basic_eng1", name: "기본영어1", category: "영어", type: "공통", credits: 4, description: "영어 학습에 어려움을 겪는 학생들을 위한 기초 영어 과목입니다."},
    {id: "basic_eng2", name: "기본영어2", category: "영어", type: "공통", credits: 4, description: "기본영어1의 학습을 바탕으로 기초 영어 능력을 완성하는 과목입니다."},
    {id: "korean_hist1", name: "한국사1", category: "사회", type: "공통", credits: 3, description: "우리나라 역사의 전개 과정을 체계적으로 이해하는 필수 과목입니다."},
    {id: "korean_hist2", name: "한국사2", category: "사회", type: "공통", credits: 3, description: "한국사1의 학습을 바탕으로 한국사에 대한 이해를 심화하는 과목입니다."},
    {id: "integrated_social1", name: "통합사회1", category: "사회", type: "공통", credits: 4, description: "사회 현상을 통합적으로 이해하고 민주시민 자질을 기르는 과목입니다."},
    {id: "integrated_social2", name: "통합사회2", category: "사회", type: "공통", credits: 4, description: "통합사회1의 학습을 바탕으로 사회적 사고력을 심화하는 과목입니다."},
    {id: "integrated_sci1", name: "통합과학1", category: "과학", type: "공통", credits: 4, description: "자연 현상을 통합적으로 이해하고 과학적 사고력을 기르는 과목입니다."},
    {id: "integrated_sci2", name: "통합과학2", category: "과학", type: "공통", credits: 4, description: "통합과학1의 학습을 바탕으로 과학적 탐구 능력을 심화하는 과목입니다."},
    {id: "sci_inquiry1", name: "과학탐구실험1", category: "과학", type: "공통", credits: 1, description: "과학 탐구 실험을 통해 과학적 사고력과 탐구 능력을 기르는 과목입니다."},
    {id: "sci_inquiry2", name: "과학탐구실험2", category: "과학", type: "공통", credits: 1, description: "과학탐구실험1의 학습을 바탕으로 고급 탐구 능력을 기르는 과목입니다."}
  ],

  // 선택과목 (교과군별)
  electiveSubjects: {
    국어: [
      // 일반선택
      {id: "speech_lang", name: "화법과 언어", category: "국어", type: "일반선택", credits: 4, description: "효과적인 화법과 언어 사용 능력을 기르는 과목입니다."},
      {id: "read_write", name: "독서와 작문", category: "국어", type: "일반선택", credits: 4, description: "독서 능력과 창의적 작문 능력을 기르는 과목입니다."},
      {id: "literature", name: "문학", category: "국어", type: "일반선택", credits: 4, description: "다양한 문학 작품을 감상하고 문학적 소양을 기르는 과목입니다."},
      // 진로선택
      {id: "topic_read", name: "주제 탐구 독서", category: "국어", type: "진로선택", credits: 4, description: "특정 주제에 대한 깊이 있는 독서와 탐구 능력을 기르는 과목입니다."},
      {id: "lit_media", name: "문학과 영상", category: "국어", type: "진로선택", credits: 4, description: "문학과 영상 매체의 관계를 탐구하는 과목입니다."},
      {id: "job_comm", name: "직무 의사소통", category: "국어", type: "진로선택", credits: 4, description: "직장에서 필요한 의사소통 능력을 기르는 과목입니다."},
      // 융합선택
      {id: "read_debate", name: "독서 토론과 글쓰기", category: "국어", type: "융합선택", credits: 4, description: "독서를 바탕으로 한 토론과 글쓰기 능력을 기르는 과목입니다."},
      {id: "media_comm", name: "매체 의사소통", category: "국어", type: "융합선택", credits: 4, description: "다양한 매체를 활용한 의사소통 능력을 기르는 과목입니다."},
      {id: "lang_life", name: "언어생활 탐구", category: "국어", type: "융합선택", credits: 4, description: "언어 생활의 다양한 측면을 탐구하는 과목입니다."}
    ],

    수학: [
      // 일반선택
      {id: "algebra", name: "대수", category: "수학", type: "일반선택", credits: 4, description: "대수의 기본 개념과 원리를 탐구하는 과목입니다."},
      {id: "calculus1", name: "미적분Ⅰ", category: "수학", type: "일반선택", credits: 4, description: "미분과 적분의 기초 개념을 학습하는 과목입니다."},
      {id: "prob_stat", name: "확률과 통계", category: "수학", type: "일반선택", credits: 4, description: "확률과 통계의 기본 개념과 활용을 학습하는 과목입니다."},
      // 진로선택
      {id: "geometry", name: "기하", category: "수학", type: "진로선택", credits: 4, description: "평면기하와 공간기하의 성질을 탐구하는 과목입니다."},
      {id: "calculus2", name: "미적분Ⅱ", category: "수학", type: "진로선택", credits: 4, description: "미적분Ⅰ의 심화 내용을 학습하는 과목입니다."},
      {id: "econ_math", name: "경제 수학", category: "수학", type: "진로선택", credits: 4, description: "경제학에 응용되는 수학 개념을 학습하는 과목입니다."},
      {id: "ai_math", name: "인공지능 수학", category: "수학", type: "진로선택", credits: 4, description: "인공지능 분야에 필요한 수학적 기초를 학습하는 과목입니다."},
      {id: "job_math", name: "직무 수학", category: "수학", type: "진로선택", credits: 4, description: "직업 현장에서 활용되는 실용 수학을 학습하는 과목입니다."},
      // 융합선택
      {id: "math_culture", name: "수학과 문화", category: "수학", type: "융합선택", credits: 4, description: "수학과 문화의 관계를 탐구하는 과목입니다."},
      {id: "practical_stat", name: "실용 통계", category: "수학", type: "융합선택", credits: 4, description: "실생활에 활용되는 통계 방법을 학습하는 과목입니다."},
      {id: "math_project", name: "수학과제 탐구", category: "수학", type: "융합선택", credits: 4, description: "수학적 문제를 탐구하고 해결하는 능력을 기르는 과목입니다."},
      // 특목고 진로
      {id: "advanced_math", name: "전문 수학", category: "수학", type: "특목고진로", credits: 4, description: "수학 전공을 위한 고급 수학 개념을 학습하는 과목입니다."},
      {id: "discrete_math", name: "이산 수학", category: "수학", type: "특목고진로", credits: 4, description: "이산수학의 기본 개념과 응용을 학습하는 과목입니다."},
      {id: "advanced_geom", name: "고급 기하", category: "수학", type: "특목고진로", credits: 4, description: "기하학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "advanced_algebra", name: "고급 대수", category: "수학", type: "특목고진로", credits: 4, description: "대수학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "advanced_calc", name: "고급 미적분", category: "수학", type: "특목고진로", credits: 4, description: "미적분학의 고급 내용을 심화 학습하는 과목입니다."}
    ],

    영어: [
      // 일반선택
      {id: "english1", name: "영어Ⅰ", category: "영어", type: "일반선택", credits: 4, description: "영어의 기본 의사소통 능력을 심화하는 과목입니다."},
      {id: "english2", name: "영어Ⅱ", category: "영어", type: "일반선택", credits: 4, description: "영어Ⅰ의 학습을 바탕으로 고급 영어 능력을 기르는 과목입니다."},
      {id: "eng_read_write", name: "영어 독해와 작문", category: "영어", type: "일반선택", credits: 4, description: "영어 독해력과 작문 능력을 종합적으로 기르는 과목입니다."},
      // 진로선택
      {id: "eng_am_lit", name: "영미 문학 읽기", category: "영어", type: "진로선택", credits: 4, description: "영미 문학 작품을 통해 영어 능력과 문화적 소양을 기르는 과목입니다."},
      {id: "eng_present", name: "영어 발표와 토론", category: "영어", type: "진로선택", credits: 4, description: "영어로 발표하고 토론하는 능력을 기르는 과목입니다."},
      {id: "advanced_eng", name: "심화 영어", category: "영어", type: "진로선택", credits: 4, description: "고급 수준의 영어 능력을 기르는 과목입니다."},
      {id: "advanced_read_write", name: "심화 영어 독해와 작문", category: "영어", type: "진로선택", credits: 4, description: "고급 영어 독해와 작문 능력을 기르는 과목입니다."},
      {id: "job_english", name: "직무 영어", category: "영어", type: "진로선택", credits: 4, description: "직업 현장에서 필요한 영어 능력을 기르는 과목입니다."},
      // 융합선택
      {id: "practical_conv", name: "실생활 영어 회화", category: "영어", type: "융합선택", credits: 4, description: "실생활에서 활용할 수 있는 영어 회화 능력을 기르는 과목입니다."},
      {id: "media_english", name: "미디어 영어", category: "영어", type: "융합선택", credits: 4, description: "다양한 미디어를 통한 영어 학습과 활용 능력을 기르는 과목입니다."},
      {id: "world_culture_eng", name: "세계 문화와 영어", category: "영어", type: "융합선택", credits: 4, description: "세계 문화를 영어로 이해하고 소통하는 능력을 기르는 과목입니다."}
    ],

    사회: [
      // 일반선택
      {id: "world_citizen_geog", name: "세계시민과 지리", category: "사회", type: "일반선택", credits: 4, description: "지리적 관점에서 세계시민 의식을 기르는 과목입니다."},
      {id: "world_history", name: "세계사", category: "사회", type: "일반선택", credits: 4, description: "세계 역사의 흐름을 체계적으로 이해하는 과목입니다."},
      {id: "society_culture", name: "사회와 문화", category: "사회", type: "일반선택", credits: 4, description: "사회 현상과 문화를 사회과학적으로 탐구하는 과목입니다."},
      {id: "modern_ethics", name: "현대사회와 윤리", category: "사회", type: "일반선택", credits: 4, description: "현대 사회의 윤리적 문제를 탐구하는 과목입니다."},
      // 진로선택
      {id: "korea_geog", name: "한국지리 탐구", category: "사회", type: "진로선택", credits: 4, description: "우리나라의 지리적 특성을 심도 있게 탐구하는 과목입니다."},
      {id: "urban_future", name: "도시의 미래 탐구", category: "사회", type: "진로선택", credits: 4, description: "도시의 발전과 미래상을 탐구하는 과목입니다."},
      {id: "east_asia_hist", name: "동아시아 역사 기행", category: "사회", type: "진로선택", credits: 4, description: "동아시아 역사와 문화를 탐구하는 과목입니다."},
      {id: "politics", name: "정치", category: "사회", type: "진로선택", credits: 4, description: "정치 현상과 정치 제도를 체계적으로 학습하는 과목입니다."},
      {id: "law_society", name: "법과 사회", category: "사회", type: "진로선택", credits: 4, description: "법의 기본 원리와 사회적 역할을 학습하는 과목입니다."},
      {id: "economics", name: "경제", category: "사회", type: "진로선택", credits: 4, description: "경제 원리와 현실 경제 문제를 탐구하는 과목입니다."},
      {id: "ethics_thought", name: "윤리와 사상", category: "사회", type: "진로선택", credits: 4, description: "동서양의 윤리 사상을 체계적으로 학습하는 과목입니다."},
      {id: "humanities_ethics", name: "인문학과 윤리", category: "사회", type: "진로선택", credits: 4, description: "인문학적 관점에서 윤리 문제를 탐구하는 과목입니다."},
      {id: "intl_relations", name: "국제 관계의 이해", category: "사회", type: "진로선택", credits: 4, description: "국제 관계와 국제 정치를 이해하는 과목입니다."},
      // 융합선택
      {id: "travel_geog", name: "여행지리", category: "사회", type: "융합선택", credits: 4, description: "여행과 관련된 지리학적 지식을 학습하는 과목입니다."},
      {id: "hist_modern_world", name: "역사로 탐구하는 현대 세계", category: "사회", type: "융합선택", credits: 4, description: "역사적 관점에서 현대 세계를 이해하는 과목입니다."},
      {id: "social_issues", name: "사회문제 탐구", category: "사회", type: "융합선택", credits: 4, description: "현대 사회의 다양한 문제를 탐구하고 해결방안을 모색하는 과목입니다."},
      {id: "finance_econ", name: "금융과 경제생활", category: "사회", type: "융합선택", credits: 4, description: "실생활에 필요한 금융 지식과 경제 이해력을 기르는 과목입니다."},
      {id: "ethics_issues", name: "윤리문제 탐구", category: "사회", type: "융합선택", credits: 4, description: "현대 사회의 윤리적 쟁점을 탐구하는 과목입니다."},
      {id: "climate_sustain", name: "기후변화와 지속가능한 세계", category: "사회", type: "융합선택", credits: 4, description: "기후변화 문제와 지속가능한 발전을 탐구하는 과목입니다."}
    ],

    과학: [
      // 일반선택
      {id: "physics", name: "물리학", category: "과학", type: "일반선택", credits: 4, description: "물리학의 기본 개념과 원리를 학습하는 과목입니다."},
      {id: "chemistry", name: "화학", category: "과학", type: "일반선택", credits: 4, description: "화학의 기본 개념과 원리를 학습하는 과목입니다."},
      {id: "biology", name: "생명과학", category: "과학", type: "일반선택", credits: 4, description: "생명과학의 기본 개념과 원리를 학습하는 과목입니다."},
      {id: "earth_science", name: "지구과학", category: "과학", type: "일반선택", credits: 4, description: "지구과학의 기본 개념과 원리를 학습하는 과목입니다."},
      // 진로선택
      {id: "mechanics_energy", name: "역학과 에너지", category: "과학", type: "진로선택", credits: 4, description: "역학과 에너지의 원리를 심화 학습하는 과목입니다."},
      {id: "electro_quantum", name: "전자기와 양자", category: "과학", type: "진로선택", credits: 4, description: "전자기학과 양자역학의 기초를 학습하는 과목입니다."},
      {id: "matter_energy", name: "물질과 에너지", category: "과학", type: "진로선택", credits: 4, description: "물질의 성질과 에너지 변화를 심화 학습하는 과목입니다."},
      {id: "chem_reactions", name: "화학 반응의 세계", category: "과학", type: "진로선택", credits: 4, description: "화학 반응의 원리와 응용을 심화 학습하는 과목입니다."},
      {id: "cell_metabolism", name: "세포와 물질대사", category: "과학", type: "진로선택", credits: 4, description: "세포의 구조와 기능, 물질대사를 심화 학습하는 과목입니다."},
      {id: "bio_genetics", name: "생물의 유전", category: "과학", type: "진로선택", credits: 4, description: "유전의 원리와 현대 유전학을 학습하는 과목입니다."},
      {id: "earth_system", name: "지구시스템과학", category: "과학", type: "진로선택", credits: 4, description: "지구 시스템의 상호작용을 통합적으로 학습하는 과목입니다."},
      {id: "planetary_space", name: "행성우주과학", category: "과학", type: "진로선택", credits: 4, description: "행성과 우주에 대한 과학적 이해를 심화하는 과목입니다."},
      // 융합선택
      {id: "sci_history_culture", name: "과학의 역사와 문화", category: "과학", type: "융합선택", credits: 4, description: "과학의 발전 과정과 문화적 영향을 탐구하는 과목입니다."},
      {id: "climate_eco", name: "기후변화와 환경생태", category: "과학", type: "융합선택", credits: 4, description: "기후변화가 환경과 생태계에 미치는 영향을 탐구하는 과목입니다."},
      {id: "convergence_sci", name: "융합과학 탐구", category: "과학", type: "융합선택", credits: 4, description: "과학의 여러 분야를 융합하여 현상을 탐구하는 과목입니다."},
      // 특목고 진로
      {id: "advanced_physics", name: "고급 물리학", category: "과학", type: "특목고진로", credits: 4, description: "물리학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "advanced_chemistry", name: "고급 화학", category: "과학", type: "특목고진로", credits: 4, description: "화학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "advanced_biology", name: "고급 생명과학", category: "과학", type: "특목고진로", credits: 4, description: "생명과학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "advanced_earth", name: "고급 지구과학", category: "과학", type: "특목고진로", credits: 4, description: "지구과학의 고급 내용을 심화 학습하는 과목입니다."},
      {id: "physics_exp", name: "물리학 실험", category: "과학", type: "특목고진로", credits: 4, description: "물리학의 실험적 탐구 능력을 기르는 과목입니다."},
      {id: "chemistry_exp", name: "화학 실험", category: "과학", type: "특목고진로", credits: 4, description: "화학의 실험적 탐구 능력을 기르는 과목입니다."},
      {id: "biology_exp", name: "생명과학 실험", category: "과학", type: "특목고진로", credits: 4, description: "생명과학의 실험적 탐구 능력을 기르는 과목입니다."},
      {id: "earth_exp", name: "지구과학 실험", category: "과학", type: "특목고진로", credits: 4, description: "지구과학의 실험적 탐구 능력을 기르는 과목입니다."},
      {id: "sci_research", name: "과학과제 연구", category: "과학", type: "특목고진로", credits: 4, description: "과학적 연구 방법을 통해 문제를 탐구하는 과목입니다."},
      {id: "info_science", name: "정보과학", category: "과학", type: "특목고진로", credits: 4, description: "정보과학의 이론과 실무를 학습하는 과목입니다."}
    ],

    체육: [
      // 일반선택
      {id: "pe1", name: "체육1", category: "체육", type: "일반선택", credits: 3, description: "기본적인 신체 활동과 스포츠 기능을 익히는 과목입니다."},
      {id: "pe2", name: "체육2", category: "체육", type: "일반선택", credits: 3, description: "체육1의 학습을 바탕으로 다양한 신체 활동을 경험하는 과목입니다."},
      // 진로선택
      {id: "exercise_health", name: "운동과 건강", category: "체육", type: "진로선택", credits: 3, description: "운동이 건강에 미치는 영향을 이해하고 실천하는 과목입니다."},
      {id: "sports_culture", name: "스포츠 문화", category: "체육", type: "진로선택", credits: 2, description: "스포츠와 관련된 다양한 문화 현상을 탐구하는 과목입니다."},
      {id: "sports_science", name: "스포츠 과학", category: "체육", type: "진로선택", credits: 2, description: "스포츠와 관련된 과학적 원리를 학습하는 과목입니다."},
      // 융합선택
      {id: "sports_life1", name: "스포츠 생활1", category: "체육", type: "융합선택", credits: 3, description: "생활 스포츠 참여를 통한 건강한 삶을 추구하는 과목입니다."},
      {id: "sports_life2", name: "스포츠 생활2", category: "체육", type: "융합선택", credits: 3, description: "스포츠 생활1의 심화 과정으로 다양한 스포츠를 경험하는 과목입니다."},
      // 특목고 진로
      {id: "sports_intro", name: "스포츠 개론", category: "체육", type: "특목고진로", credits: 4, description: "스포츠의 기본 개념과 이론을 체계적으로 학습하는 과목입니다."},
      {id: "track_field", name: "육상", category: "체육", type: "특목고진로", credits: 4, description: "육상 종목의 기술과 이론을 전문적으로 학습하는 과목입니다."},
      {id: "gymnastics", name: "체조", category: "체육", type: "특목고진로", credits: 4, description: "체조의 기본 기술과 응용 동작을 학습하는 과목입니다."},
      {id: "water_sports", name: "수상 스포츠", category: "체육", type: "특목고진로", credits: 4, description: "수영과 수상 스포츠의 기술을 전문적으로 학습하는 과목입니다."},
      {id: "sports_education", name: "스포츠 교육", category: "체육", type: "특목고진로", credits: 4, description: "스포츠 교육의 이론과 실제를 학습하는 과목입니다."},
      {id: "basic_pe_practice", name: "기초 체육 전공 실기", category: "체육", type: "특목고진로", credits: 4, description: "체육 전공을 위한 기초 실기 능력을 기르는 과목입니다."},
      {id: "advanced_pe_practice", name: "심화 체육 전공 실기", category: "체육", type: "특목고진로", credits: 4, description: "체육 전공을 위한 심화 실기 능력을 기르는 과목입니다."},
      {id: "expert_pe_practice", name: "고급 체육 전공 실기", category: "체육", type: "특목고진로", credits: 4, description: "체육 전공을 위한 고급 실기 능력을 기르는 과목입니다."},
      // 특목고 융합
      {id: "sports_fitness", name: "스포츠 경기 체력", category: "체육", type: "특목고융합", credits: 4, description: "스포츠 경기에 필요한 체력 요소를 과학적으로 분석하는 과목입니다."},
      {id: "sports_physiology", name: "스포츠 생리의학", category: "체육", type: "특목고융합", credits: 4, description: "스포츠와 관련된 생리학적 원리를 학습하는 과목입니다."},
      {id: "sports_technique", name: "스포츠 경기 기술", category: "체육", type: "특목고융합", credits: 4, description: "스포츠 경기 기술의 과학적 분석과 향상 방법을 학습하는 과목입니다."},
      {id: "sports_analysis", name: "스포츠 경기 분석", category: "체육", type: "특목고융합", credits: 4, description: "스포츠 경기를 과학적으로 분석하는 능력을 기르는 과목입니다."},
      {id: "sports_management", name: "스포츠 행정 및 경영", category: "체육", type: "특목고융합", credits: 4, description: "스포츠 조직의 행정과 경영에 대해 학습하는 과목입니다."}
    ],

    예술: [
      // 일반선택
      {id: "music", name: "음악", category: "예술", type: "일반선택", credits: 3, description: "음악의 기본 요소와 다양한 음악 활동을 경험하는 과목입니다."},
      {id: "art", name: "미술", category: "예술", type: "일반선택", credits: 3, description: "미술의 기본 요소와 다양한 표현 기법을 익히는 과목입니다."},
      {id: "theater", name: "연극", category: "예술", type: "일반선택", credits: 3, description: "연극의 기본 요소와 연극 활동을 경험하는 과목입니다."},
      // 진로선택
      {id: "music_perform", name: "음악 연주와 창작", category: "예술", type: "진로선택", credits: 3, description: "음악 연주 능력과 창작 능력을 기르는 과목입니다."},
      {id: "music_appreciation", name: "음악 감상과 비평", category: "예술", type: "진로선택", credits: 3, description: "다양한 음악을 감상하고 비평하는 능력을 기르는 과목입니다."},
      {id: "art_creation", name: "미술 창작", category: "예술", type: "진로선택", credits: 3, description: "다양한 미술 표현 기법으로 작품을 창작하는 과목입니다."},
      {id: "art_appreciation", name: "미술 감상과 비평", category: "예술", type: "진로선택", credits: 3, description: "미술 작품을 감상하고 비평하는 능력을 기르는 과목입니다."},
      // 융합선택
      {id: "music_media", name: "음악과 미디어", category: "예술", type: "융합선택", credits: 3, description: "음악과 다양한 미디어의 융합을 탐구하는 과목입니다."},
      {id: "art_media", name: "미술과 매체", category: "예술", type: "융합선택", credits: 3, description: "미술과 다양한 매체의 융합을 탐구하는 과목입니다."}
    ],

    기술가정: [
      // 일반선택
      {id: "tech_home", name: "기술·가정", category: "기술가정", type: "일반선택", credits: 4, description: "기술과 가정생활에 필요한 기초 소양을 기르는 과목입니다."},
      // 진로선택
      {id: "robot_engineering", name: "로봇과 공학세계", category: "기술가정", type: "진로선택", credits: 4, description: "로봇 기술과 공학의 세계를 탐구하는 과목입니다."},
      {id: "life_science_study", name: "생활과학 탐구", category: "기술가정", type: "진로선택", credits: 4, description: "생활 속 과학 현상을 탐구하고 응용하는 과목입니다."},
      // 융합선택
      {id: "creative_design", name: "창의 공학 설계", category: "기술가정", type: "융합선택", credits: 4, description: "창의적 사고를 통한 공학 설계 능력을 기르는 과목입니다."},
      {id: "intellectual_property", name: "지식 재산 일반", category: "기술가정", type: "융합선택", credits: 4, description: "지식재산권의 기본 개념과 활용을 학습하는 과목입니다."},
      {id: "life_design", name: "생애 설계와 자립", category: "기술가정", type: "융합선택", credits: 2, description: "자립적인 생활 설계 능력을 기르는 과목입니다."},
      {id: "child_parent", name: "아동발달과 부모", category: "기술가정", type: "융합선택", credits: 4, description: "아동 발달과 부모 역할에 대해 학습하는 과목입니다."}
    ],

    정보: [
      // 일반선택
      {id: "information", name: "정보", category: "정보", type: "일반선택", credits: 4, description: "정보과학의 기본 개념과 컴퓨팅 사고력을 기르는 과목입니다."},
      // 진로선택
      {id: "ai_basic", name: "인공지능 기초", category: "정보", type: "진로선택", credits: 4, description: "인공지능의 기본 원리와 활용을 학습하는 과목입니다."},
      {id: "data_science", name: "데이터 과학", category: "정보", type: "진로선택", credits: 4, description: "빅데이터 분석과 데이터 과학의 기초를 학습하는 과목입니다."},
      // 융합선택
      {id: "software_life", name: "소프트웨어와 생활", category: "정보", type: "융합선택", credits: 4, description: "소프트웨어가 생활에 미치는 영향을 탐구하는 과목입니다."}
    ],

    제2외국어: [
      // 일반선택
      {id: "german", name: "독일어", category: "제2외국어", type: "일반선택", credits: 4, description: "독일어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "french", name: "프랑스어", category: "제2외국어", type: "일반선택", credits: 4, description: "프랑스어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "spanish", name: "스페인어", category: "제2외국어", type: "일반선택", credits: 4, description: "스페인어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "chinese", name: "중국어", category: "제2외국어", type: "일반선택", credits: 4, description: "중국어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "japanese", name: "일본어", category: "제2외국어", type: "일반선택", credits: 4, description: "일본어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "russian", name: "러시아어", category: "제2외국어", type: "일반선택", credits: 4, description: "러시아어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "arabic", name: "아랍어", category: "제2외국어", type: "일반선택", credits: 4, description: "아랍어의 기초 의사소통 능력을 기르는 과목입니다."},
      {id: "vietnamese", name: "베트남어", category: "제2외국어", type: "일반선택", credits: 4, description: "베트남어의 기초 의사소통 능력을 기르는 과목입니다."},
      // 진로선택
      {id: "german_conv", name: "독일어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "독일어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "french_conv", name: "프랑스어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "프랑스어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "spanish_conv", name: "스페인어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "스페인어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "chinese_conv", name: "중국어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "중국어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "japanese_conv", name: "일본어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "일본어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "russian_conv", name: "러시아어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "러시아어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "arabic_conv", name: "아랍어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "아랍어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "vietnamese_conv", name: "베트남어 회화", category: "제2외국어", type: "진로선택", credits: 4, description: "베트남어 회화 능력을 집중적으로 기르는 과목입니다."},
      {id: "advanced_german", name: "심화 독일어", category: "제2외국어", type: "진로선택", credits: 4, description: "독일어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_french", name: "심화 프랑스어", category: "제2외국어", type: "진로선택", credits: 4, description: "프랑스어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_spanish", name: "심화 스페인어", category: "제2외국어", type: "진로선택", credits: 4, description: "스페인어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_chinese", name: "심화 중국어", category: "제2외국어", type: "진로선택", credits: 4, description: "중국어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_japanese", name: "심화 일본어", category: "제2외국어", type: "진로선택", credits: 4, description: "일본어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_russian", name: "심화 러시아어", category: "제2외국어", type: "진로선택", credits: 4, description: "러시아어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_arabic", name: "심화 아랍어", category: "제2외국어", type: "진로선택", credits: 4, description: "아랍어의 고급 능력을 기르는 과목입니다."},
      {id: "advanced_vietnamese", name: "심화 베트남어", category: "제2외국어", type: "진로선택", credits: 4, description: "베트남어의 고급 능력을 기르는 과목입니다."},
      // 융합선택
      {id: "german_culture", name: "독일어권 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "독일어권 국가의 문화를 탐구하는 과목입니다."},
      {id: "french_culture", name: "프랑스어권 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "프랑스어권 국가의 문화를 탐구하는 과목입니다."},
      {id: "spanish_culture", name: "스페인어권 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "스페인어권 국가의 문화를 탐구하는 과목입니다."},
      {id: "chinese_culture", name: "중국 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "중국의 문화를 탐구하는 과목입니다."},
      {id: "japanese_culture", name: "일본 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "일본의 문화를 탐구하는 과목입니다."},
      {id: "russian_culture", name: "러시아 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "러시아의 문화를 탐구하는 과목입니다."},
      {id: "arabic_culture", name: "아랍 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "아랍의 문화를 탐구하는 과목입니다."},
      {id: "vietnamese_culture", name: "베트남 문화", category: "제2외국어", type: "융합선택", credits: 4, description: "베트남의 문화를 탐구하는 과목입니다."}
    ],

    한문: [
      // 일반선택
      {id: "hanja", name: "한문", category: "한문", type: "일반선택", credits: 4, description: "한문 독해를 통해 전통 문화와 한자문화권을 이해하는 과목입니다."},
      // 진로선택
      {id: "classic_hanja", name: "한문 고전 읽기", category: "한문", type: "진로선택", credits: 4, description: "한문 고전 작품을 깊이 있게 읽고 이해하는 과목입니다."},
      // 융합선택
      {id: "life_hanja", name: "언어생활과 한자", category: "한문", type: "융합선택", credits: 4, description: "일상 언어생활에서 한자의 활용을 탐구하는 과목입니다."}
    ],

    교양: [
      // 일반선택
      {id: "career_job", name: "진로와 직업", category: "교양", type: "일반선택", credits: 3, description: "진로 탐색과 직업 세계에 대한 이해를 돕는 과목입니다."},
      {id: "ecology_env", name: "생태와 환경", category: "교양", type: "일반선택", credits: 3, description: "생태계와 환경 문제를 탐구하는 과목입니다."},
      // 진로선택
      {id: "human_philosophy", name: "인간과 철학", category: "교양", type: "진로선택", credits: 3, description: "인간과 삶에 대한 철학적 사유를 기르는 과목입니다."},
      {id: "logic_thinking", name: "논리와 사고", category: "교양", type: "진로선택", credits: 3, description: "논리적 사고력과 비판적 사고력을 기르는 과목입니다."},
      {id: "human_psychology", name: "인간과 심리", category: "교양", type: "진로선택", credits: 3, description: "인간의 심리와 행동을 이해하는 과목입니다."},
      {id: "education_understanding", name: "교육의 이해", category: "교양", type: "진로선택", credits: 3, description: "교육의 본질과 역할을 이해하는 과목입니다."},
      {id: "life_religion", name: "삶과 종교", category: "교양", type: "진로선택", credits: 3, description: "종교와 인간 삶의 관계를 탐구하는 과목입니다."},
      {id: "health", name: "보건", category: "교양", type: "진로선택", credits: 3, description: "개인과 사회의 건강 증진을 위한 지식을 학습하는 과목입니다."},
      // 융합선택
      {id: "human_economy", name: "인간과 경제활동", category: "교양", type: "융합선택", credits: 3, description: "인간의 경제 활동과 경제 현상을 탐구하는 과목입니다."},
      {id: "writing", name: "논술", category: "교양", type: "융합선택", credits: 3, description: "논리적이고 창의적인 글쓰기 능력을 기르는 과목입니다."}
    ]
  }
};

// 전역 상태
let appState = {
  selectedCourses: [],
  currentTab: '국어'
};

// DOM 요소
let elements = {};

// 앱 초기화
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('Initializing app...');
  cacheElements();
  loadCommonSubjects();
  setupEventListeners();
  renderAll();
  console.log('App initialized successfully');
  console.log('Total common subjects:', appState.selectedCourses.filter(c => c.isCommon).length);
  console.log('Total credits:', appState.selectedCourses.reduce((sum, c) => sum + c.credits, 0));
}

function cacheElements() {
  elements.totalCredits = document.getElementById('totalCredits');
  elements.subjectCredits = document.getElementById('subjectCredits');
  elements.mandatoryCredits = document.getElementById('mandatoryCredits');
  elements.korMathEngCredits = document.getElementById('korMathEngCredits');
  elements.electiveCredits = document.getElementById('electiveCredits');
  
  elements.electiveStrip = document.getElementById('electiveCoursesStrip');
  elements.compulsoryStrip = document.getElementById('compulsoryCoursesStrip');
  
  elements.tabNav = document.getElementById('tabNavigation');
  elements.tabContent = document.getElementById('tabContent');
  elements.requirementsGrid = document.getElementById('requirementsGrid');
  elements.requirementWarnings = document.getElementById('requirementWarnings');
  elements.graduationBadge = document.getElementById('graduationBadge');

  // Modal elements
  elements.modal = document.getElementById('courseModal');
  elements.modalCourseName = document.getElementById('modalCourseName');
  elements.modalCredits = document.getElementById('modalCredits');
  elements.modalType = document.getElementById('modalType');
  elements.modalDescription = document.getElementById('modalDescription');
  elements.modalActionBtn = document.getElementById('modalActionBtn');
  
  console.log('Elements cached successfully');
}

function loadCommonSubjects() {
  console.log('Loading common subjects...');
  // 공통과목 자동 추가 (삭제 불가)
  courseData.commonSubjects.forEach(course => {
    appState.selectedCourses.push({ ...course, isCommon: true });
  });
  console.log('Common subjects loaded:', appState.selectedCourses.length);
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // 탭 네비게이션
  elements.tabNav.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab-btn')) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      appState.currentTab = e.target.dataset.category;
      console.log('Tab changed to:', appState.currentTab);
      renderTabContent();
    }
  });
  
  console.log('Event listeners set up successfully');
}

function renderAll() {
  console.log('Rendering all components...');
  renderCourseStrips();
  renderTabContent();
  renderRequirements();
  updateCredits();
  console.log('All components rendered');
}

function renderCourseStrips() {
  console.log('Rendering course strips...');
  
  // 선택 과목 스트립
  const electiveCourses = appState.selectedCourses.filter(course => !course.isCommon);
  if (electiveCourses.length === 0) {
    elements.electiveStrip.innerHTML = '<div class="empty-state">선택한 과목이 없습니다. 아래에서 과목을 선택해주세요.</div>';
  } else {
    elements.electiveStrip.innerHTML = electiveCourses.map(course => createSelectedCourseCard(course)).join('');
    // 제거 버튼 이벤트 추가
    elements.electiveStrip.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeCourse(btn.dataset.courseId);
      });
    });
  }

  // 공통 과목 스트립
  const commonCourses = appState.selectedCourses.filter(course => course.isCommon);
  console.log('Rendering common courses:', commonCourses.length);
  elements.compulsoryStrip.innerHTML = commonCourses.map(course => createSelectedCourseCard(course)).join('');
  
  // 공통과목의 제거 버튼은 완전히 숨김
  elements.compulsoryStrip.querySelectorAll('.remove-btn').forEach(btn => {
    btn.style.display = 'none !important';
    btn.classList.add('disabled');
  });
  
  console.log('Course strips rendered');
}

function createSelectedCourseCard(course) {
  const typeClass = getTypeClass(course.type);
  return `
    <div class="selected-course-card ${typeClass}" data-course-id="${course.id}">
      <div class="course-name">${course.name}</div>
      <div class="course-meta">
        <span>${course.type}</span>
        <span>${course.credits}학점</span>
      </div>
      <button class="remove-btn ${course.isCommon ? 'disabled' : ''}" data-course-id="${course.id}"${course.isCommon ? ' style="display: none !important;"' : ''}>×</button>
    </div>
  `;
}

function renderTabContent() {
  console.log('Rendering tab content for:', appState.currentTab);
  
  const categorySubjects = courseData.electiveSubjects[appState.currentTab] || [];
  console.log('Found subjects for category:', categorySubjects.length);
  
  if (categorySubjects.length === 0) {
    elements.tabContent.innerHTML = '<div class="empty-state">이 교과군에는 선택 가능한 과목이 없습니다.</div>';
    return;
  }

  const html = `
    <div class="courses-grid">
      ${categorySubjects.map(course => createCourseCard(course)).join('')}
    </div>
  `;
  
  elements.tabContent.innerHTML = html;

  // 과목 카드 클릭 이벤트 추가
  elements.tabContent.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = card.dataset.courseId;
      console.log('Course card clicked:', courseId);
      showCourseModal(courseId);
    });
  });
  
  console.log('Tab content rendered with click events');
}

function createCourseCard(course) {
  const isSelected = appState.selectedCourses.some(selected => selected.id === course.id);
  const typeClass = getTypeClass(course.type);
  
  return `
    <div class="course-card ${typeClass} ${isSelected ? 'selected' : ''}" data-course-id="${course.id}">
      <div class="course-card-name">${course.name}</div>
      <div class="course-card-meta">
        <span class="course-type-badge ${getTypeBadgeClass(course.type)}">${course.type}</span>
        <span>${course.credits}학점</span>
      </div>
      <div class="course-description">${course.description}</div>
    </div>
  `;
}

function getTypeClass(type) {
  const typeMap = {
    '공통': 'common',
    '일반선택': 'general',
    '진로선택': 'career',
    '융합선택': 'convergence',
    '특목고진로': 'specialized',
    '특목고융합': 'specialized'
  };
  return typeMap[type] || 'general';
}

function getTypeBadgeClass(type) {
  const typeMap = {
    '공통': 'common',
    '일반선택': 'general',
    '진로선택': 'career',
    '융합선택': 'convergence',
    '특목고진로': 'specialized',
    '특목고융합': 'specialized'
  };
  return typeMap[type] || 'general';
}

function showCourseModal(courseId) {
  console.log('Showing modal for course:', courseId);
  
  // 모든 과목에서 찾기
  let course = null;
  
  // 공통과목에서 찾기
  course = courseData.commonSubjects.find(c => c.id === courseId);
  
  // 선택과목에서 찾기
  if (!course) {
    for (const category in courseData.electiveSubjects) {
      course = courseData.electiveSubjects[category].find(c => c.id === courseId);
      if (course) break;
    }
  }

  if (!course) {
    console.error('Course not found:', courseId);
    return;
  }

  const isSelected = appState.selectedCourses.some(selected => selected.id === courseId);
  const isCommon = courseData.commonSubjects.some(c => c.id === courseId);

  console.log('Course found:', course.name, 'Selected:', isSelected, 'Common:', isCommon);

  elements.modalCourseName.textContent = course.name;
  elements.modalCredits.textContent = course.credits;
  elements.modalType.textContent = course.type;
  elements.modalDescription.textContent = course.description;

  if (isCommon) {
    elements.modalActionBtn.textContent = '필수 과목';
    elements.modalActionBtn.className = 'btn btn--outline';
    elements.modalActionBtn.disabled = true;
    elements.modalActionBtn.onclick = null;
  } else if (isSelected) {
    elements.modalActionBtn.textContent = '제거';
    elements.modalActionBtn.className = 'btn btn--outline';
    elements.modalActionBtn.disabled = false;
    elements.modalActionBtn.onclick = () => {
      removeCourse(courseId);
      closeCourseModal();
    };
  } else {
    elements.modalActionBtn.textContent = '추가';
    elements.modalActionBtn.className = 'btn btn--primary';
    elements.modalActionBtn.disabled = false;
    elements.modalActionBtn.onclick = () => {
      addCourse(courseId);
      closeCourseModal();
    };
  }

  elements.modal.classList.remove('hidden');
  console.log('Modal shown successfully');
}

function closeCourseModal() {
  console.log('Closing modal');
  elements.modal.classList.add('hidden');
}

function addCourse(courseId) {
  console.log('Adding course:', courseId);
  
  // 이미 선택된 과목인지 확인
  if (appState.selectedCourses.some(course => course.id === courseId)) {
    console.log('Course already selected');
    return;
  }

  // 모든 과목에서 찾기
  let course = null;
  
  for (const category in courseData.electiveSubjects) {
    course = courseData.electiveSubjects[category].find(c => c.id === courseId);
    if (course) break;
  }

  if (course) {
    appState.selectedCourses.push({ ...course, isCommon: false });
    console.log('Course added successfully');
    renderAll();
  } else {
    console.error('Course not found for adding:', courseId);
  }
}

function removeCourse(courseId) {
  console.log('Removing course:', courseId);
  
  const index = appState.selectedCourses.findIndex(course => course.id === courseId);
  if (index !== -1 && !appState.selectedCourses[index].isCommon) {
    appState.selectedCourses.splice(index, 1);
    console.log('Course removed successfully');
    renderAll();
  } else {
    console.log('Course not found or is common subject, cannot remove');
  }
}

function updateCredits() {
  const totalCredits = appState.selectedCourses.reduce((sum, course) => sum + course.credits, 0);
  const commonCredits = appState.selectedCourses.filter(c => c.isCommon).reduce((sum, course) => sum + course.credits, 0);
  const electiveCredits = totalCredits - commonCredits;
  const korMathEngCredits = appState.selectedCourses
    .filter(c => ['국어', '수학', '영어'].includes(c.category))
    .reduce((sum, course) => sum + course.credits, 0);

  elements.totalCredits.textContent = totalCredits;
  elements.subjectCredits.textContent = totalCredits;
  elements.mandatoryCredits.textContent = commonCredits;
  elements.electiveCredits.textContent = electiveCredits;
  elements.korMathEngCredits.textContent = korMathEngCredits;
  
  console.log('Credits updated:', { totalCredits, commonCredits, electiveCredits, korMathEngCredits });
}

function renderRequirements() {
  const categoryCredits = {};
  
  appState.selectedCourses.forEach(course => {
    const category = mapToRequirementCategory(course.category);
    categoryCredits[category] = (categoryCredits[category] || 0) + course.credits;
  });

  const requirements = [
    { label: '국어', current: categoryCredits['국어'] || 0, minimum: 8 },
    { label: '수학', current: categoryCredits['수학'] || 0, minimum: 8 },
    { label: '영어', current: categoryCredits['영어'] || 0, minimum: 8 },
    { label: '사회', current: categoryCredits['사회'] || 0, minimum: 14 },
    { label: '과학', current: categoryCredits['과학'] || 0, minimum: 10 },
    { label: '체육', current: categoryCredits['체육'] || 0, minimum: 10 },
    { label: '예술', current: categoryCredits['예술'] || 0, minimum: 10 },
    { label: '기타', current: (categoryCredits['기술가정'] || 0) + (categoryCredits['정보'] || 0) + (categoryCredits['제2외국어'] || 0) + (categoryCredits['한문'] || 0) + (categoryCredits['교양'] || 0), minimum: 16 }
  ];

  elements.requirementsGrid.innerHTML = requirements.map(req => {
    const satisfied = req.current >= req.minimum;
    return `
      <div class="requirement-group-item ${satisfied ? 'satisfied' : 'insufficient'}">
        <div class="requirement-label">${req.label}</div>
        <div class="requirement-value">${req.current} / ${req.minimum}</div>
      </div>
    `;
  }).join('');

  // 졸업 요건 체크
  checkGraduationRequirements();
}

function mapToRequirementCategory(originalCategory) {
  const mapping = {
    '국어': '국어',
    '수학': '수학',
    '영어': '영어',
    '사회': '사회',
    '과학': '과학',
    '체육': '체육',
    '예술': '예술',
    '기술가정': '기술가정',
    '정보': '정보',
    '제2외국어': '제2외국어',
    '한문': '한문',
    '교양': '교양'
  };
  return mapping[originalCategory] || originalCategory;
}

function checkGraduationRequirements() {
  const totalCredits = appState.selectedCourses.reduce((sum, course) => sum + course.credits, 0);
  const korMathEngCredits = appState.selectedCourses
    .filter(c => ['국어', '수학', '영어'].includes(c.category))
    .reduce((sum, course) => sum + course.credits, 0);

  const warnings = [];
  
  if (totalCredits < 192) {
    warnings.push(`총 이수 학점이 부족합니다. (${totalCredits}/192)`);
  }
  
  if (totalCredits < 174) {
    warnings.push(`교과 이수 학점이 부족합니다. (${totalCredits}/174)`);
  }
  
  if (korMathEngCredits > 81) {
    warnings.push(`국수영 학점이 초과되었습니다. (${korMathEngCredits}/81)`);
  }

  if (warnings.length === 0 && totalCredits >= 192) {
    elements.graduationBadge.classList.remove('hidden');
    elements.requirementWarnings.innerHTML = '';
  } else {
    elements.graduationBadge.classList.add('hidden');
    elements.requirementWarnings.innerHTML = warnings.map(warning => 
      `<div class="requirement-warning">${warning}</div>`
    ).join('');
  }
}

// 전역 함수로 모달 닫기 함수 등록
window.closeCourseModal = closeCourseModal;