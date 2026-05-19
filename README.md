# Bridgebean 웹사이트 운영 가이드

브릿지빈(Bridgebean) B2B **생두** 공급사 포트폴리오 웹사이트 코드입니다.
이 문서는 **사이트를 직접 수정·운영하시는 분(대표님)** 을 위한 사용 설명서입니다.

> **핵심 원칙**
> 모든 글·가격·사진은 GitHub의 **`data/` 폴더** 와 **`public/images/` 폴더** 안에만 있습니다.
> 이 두 폴더만 수정하시면 사이트가 자동으로 바뀝니다. 코드는 건드릴 필요가 없습니다.

---

## 1. 사이트가 바뀌는 흐름 (1분 요약)

```
GitHub 웹에서 파일 수정  →  "Commit changes" 클릭  →  1~2분 후 사이트 자동 반영
```

저장하면 Vercel이라는 서비스가 자동으로 새 버전을 만들어 인터넷에 올려줍니다.
컴퓨터에 따로 설치할 프로그램은 없습니다. **인터넷 브라우저 + GitHub 계정** 만 있으면 됩니다.

---

## 2. 자주 하시는 작업 — 따라하기

### 2-1. 생두 가격을 바꿀 때

1. GitHub에서 이 저장소 페이지를 엽니다.
2. 위쪽 폴더 목록에서 **`data`** 클릭 → **`coffees.json`** 클릭.
3. 오른쪽 위의 **연필(✏️) 아이콘** 클릭 → 편집 모드로 들어갑니다.
4. 바꾸고 싶은 생두의 `"price_per_kg": 24000` 부분에서 숫자만 바꿉니다.
   - 단위는 **원(KRW)** 입니다. 콤마(`,`) 없이 숫자만 입력. 예: `25000`
5. 화면을 가장 아래로 내리면 초록색 **"Commit changes…"** 버튼이 있습니다. 클릭.
6. 한 번 더 **"Commit changes"** 버튼을 눌러 확정.
7. 1~2분 후 사이트에 반영됩니다.

### 2-2. 새 생두를 추가할 때

1. `data/coffees.json` 열기 → 연필 아이콘으로 편집.
2. 마지막 생두 (`}`로 끝나는 블록) 다음에 **콤마 `,`** 를 찍고, 아래 양식을 붙여넣기:

```json
,
  {
    "id": "kenya-aa-nyeri",
    "name": "케냐 AA 니에리",
    "name_en": "Kenya AA Nyeri",
    "category": "africa",
    "origin": "케냐 니에리",
    "farm": "OO 협동조합",
    "altitude": "1,700m",
    "process": "워시드",
    "variety": "SL28, SL34",
    "grade": "AA",
    "harvest_year": "2024",
    "roast_level": "라이트 ~ 미디엄",
    "notes": ["블랙커런트", "토마토", "자몽"],
    "description": "이곳에 생두 소개 글을 자유롭게 적습니다.",
    "price_per_kg": 28000,
    "min_order_kg": 5,
    "image": "/images/kenya-aa-nyeri.jpg",
    "featured": false,
    "product_url": "https://smartstore.naver.com/bridgebean/products/000000"
  }
```

3. 각 항목 설명:

| 항목 | 의미 | 예시 |
|---|---|---|
| `id` | 주소창에 들어가는 영문 식별자. 영어 소문자·숫자·하이픈만. **다른 생두와 중복되면 안 됩니다.** | `kenya-aa-nyeri` |
| `name` | 사이트에 보이는 한글 이름 | `케냐 AA 니에리` |
| `name_en` | 작은 영문 이름 (선택) | `Kenya AA Nyeri` |
| `category` | `"africa"` / `"americas"` / `"asia"` 중 하나 | `africa` |
| `origin` | 산지 (국가/지역) | `케냐 니에리` |
| `farm` | 농장·스테이션·협동조합 | `OO 협동조합` |
| `altitude` | 재배 고도 | `1,700m` |
| `process` | 가공 방식 | `워시드`, `내추럴`, `허니` 등 |
| `variety` | 품종 | `SL28, SL34` |
| `grade` | 생두 등급 (선택) | `AA` / `G1` / `SHB` 등 |
| `harvest_year` | 수확 연도 (선택) | `2024` 또는 `2024/25` |
| `roast_level` | **권장** 로스팅 단계 | `라이트` / `미디엄` / `다크` 등 |
| `notes` | 컵노트. 대괄호 `[]` 안에 큰따옴표로 넣고 콤마로 구분 | `["블랙커런트", "토마토"]` |
| `description` | 생두 소개 글 | 자유 작성 |
| `price_per_kg` | 1kg 도매가. 숫자만. | `28000` |
| `min_order_kg` | 최소 주문 kg | `5` |
| `image` | 생두 사진 경로. `/images/` 로 시작. | `/images/kenya-aa-nyeri.jpg` |
| `featured` | 홈 메인에 추천 노출 여부. `true` 또는 `false` | `true` |
| `product_url` | 스마트스토어 등 외부 구매 링크 (선택) | `https://smartstore.naver.com/bridgebean/products/...` |

4. **주의: JSON 문법**
   - 큰따옴표 `"` 만 사용 (작은따옴표 `'` 금지)
   - 마지막 항목 뒤에는 콤마 `,` 를 찍지 않습니다. (중간 항목 뒤에만 콤마)
   - 중괄호 `{ }` 와 대괄호 `[ ]` 짝이 맞아야 합니다.
5. 사진은 아래 **2-4** 방법대로 같이 업로드해야 보입니다.

### 2-3. 회사 정보(슬로건·소개·강점·철학)를 바꿀 때

- 파일: `data/company.json`
- 사이트의 "홈 메인 문구", "회사 소개" 페이지에 들어가는 내용입니다.
- 슬로건, 회사 설명, 3가지 강점, **철학** 등을 수정합니다.
- `philosophy` 는 **목록(배열)** 입니다. 항목을 추가/삭제할 때는 `"문장"` 한 줄에 콤마 `,` 로 구분하세요.
  ```json
  "philosophy": [
    "첫 번째 철학 문장.",
    "두 번째 철학 문장."
  ]
  ```
- `founded_year`, `representative` 등은 빈 칸 `""` 로 두면 화면에서 자동으로 안 보입니다.

### 2-4. 사진을 추가하거나 바꿀 때

1. 사진 파일 준비:
   - **권장 사이즈**: 가로 1200 × 세로 900 픽셀 (가로형) 또는 정사각형
   - **파일 크기**: **1MB 이하** 권장 (스마트폰 사진은 보통 너무 큽니다)
   - **파일 형식**: `.jpg` 또는 `.png`
   - **파일 이름**: 영어 소문자·숫자·하이픈만 (예: `kenya-aa-nyeri.jpg`) — 한글·공백 금지
2. GitHub에서 **`public`** 폴더 → **`images`** 폴더로 들어갑니다.
3. **"Add file"** 버튼 → **"Upload files"** 클릭.
4. 파일을 끌어다 놓고 **"Commit changes"** 두 번 클릭.
5. `data/coffees.json` 에서 해당 생두의 `image` 값을 `/images/올린파일이름.jpg` 로 바꿔주세요.

> 💡 사진 용량 줄이기: 무료 사이트 [tinypng.com](https://tinypng.com) 에서 1MB 이하로 줄여서 올리시면 사이트가 빠릅니다.

### 2-4-1. 한 상품에 사진 여러 장 넣기 (상세 페이지 슬라이드)

상품 카드에 보이는 **메인 사진** 은 `image` 필드 하나로 정해지고,
상세 페이지에는 **메인 + 추가 사진들** 이 옆으로 슥슥 넘기는 슬라이드로 보입니다.

추가 사진은 `gallery` 항목에 넣어주세요 (없으면 슬라이드 없음, 메인 한 장만 보임).

```json
{
  "id": "locrung-catimor-natural",
  "name": "카티모르 내추럴",
  "image": "/images/locrung-catimor-natural.jpg",
  "gallery": [
    "/images/locrung-catimor-natural-2.jpg",
    "/images/locrung-catimor-natural-3.jpg"
  ],
  ...
}
```

- 카드(목록)에는 **`image`** 만 표시
- 상세 페이지에는 **`image` → gallery 순서대로** 모두 표시 (모바일은 좌우 스와이프, PC는 화살표)
- 사진은 모두 `public/images/` 폴더에 미리 올려두셔야 합니다.

### 2-4-2. 로고 이미지로 교체할 때

헤더·푸터·홈 메인의 로고는 **`public/images/logo.png`** 파일을 사용합니다.

로고를 바꾸시려면:
1. 새 로고 파일을 **정사각형**, **투명 배경 PNG**, **600×600px 이상** 으로 준비.
2. 파일명을 정확히 `logo.png` 로 합니다.
3. GitHub에서 `public/images/` 폴더로 들어가 **"Add file → Upload files"** 클릭.
4. 기존 `logo.png` 가 있다면 같은 이름으로 덮어쓰기 하시면 됩니다.
5. Commit → 1~2분 후 사이트의 모든 로고가 새 것으로 자동 교체됩니다.

### 2-5. 연락처(이메일·인스타·스마트스토어)를 바꿀 때

- 파일: `data/contact.json`
- `phone`, `email`, `instagram`, `business_hours` 등 해당 줄의 큰따옴표 안 내용만 수정.

### 2-6. 스마트스토어 구매 링크 연결하기

각 생두에 `product_url` 항목을 추가하면 상세 페이지에 **"스마트스토어에서 구매"** 버튼이 자동으로 표시됩니다.

```json
"product_url": "https://smartstore.naver.com/bridgebean/products/0000000000"
```

링크를 빼고 싶으면 그 줄 전체를 지우거나 빈 문자열 `""` 로 두시면 버튼이 숨겨집니다.

---

## 3. 데이터 파일별 의미 한눈에 보기

| 파일 | 어디에 보이나요? |
|---|---|
| `data/company.json` | 회사명, 슬로건, 회사 소개, 강점 3가지, 운영 철학 |
| `data/coffees.json` | 생두 라인업 (생두 목록 페이지 + 각 생두 상세 페이지) |
| `data/contact.json` | 페이지 하단·문의 페이지의 이메일·인스타·스마트스토어 링크 |

---

## 4. 자주 묻는 질문

**Q. 실수로 망가뜨렸어요. 되돌릴 수 있나요?**
A. 네. GitHub는 모든 수정 기록을 저장합니다. 저장소 상단의 **"commits"** 메뉴에 들어가서
이전 버전 옆의 `<>` 버튼을 누르면 그 시점으로 복원할 수 있습니다. 당황하지 마세요.

**Q. 수정했는데 사이트가 안 바뀌어요.**
A. 보통 1~2분 안에 반영됩니다. 5분 넘게 안 바뀌면 두 가지를 확인하세요:
1. JSON 문법에 실수가 있을 수 있습니다 (콤마, 따옴표). [jsonlint.com](https://jsonlint.com) 에 붙여넣어 검사해보세요.
2. Vercel 대시보드에서 빌드가 실패했는지 확인.

**Q. 사진이 안 보여요.**
A. 두 가지 모두 확인:
1. 사진 파일이 `public/images/` 폴더에 정말 올라가 있는지.
2. `coffees.json` 의 `image` 값과 **파일 이름이 정확히 일치** 하는지 (대소문자, 확장자 포함).

**Q. 휴대폰으로도 수정할 수 있나요?**
A. 가능합니다. GitHub 모바일 앱에서도 파일 편집과 커밋이 됩니다. 사진 업로드는 컴퓨터에서 하시는 게 편합니다.

**Q. 도매가가 바뀌었어요. 한 생두만 빠르게 바꾸려면?**
A. `data/coffees.json` 열기 → 브라우저 검색(Ctrl/Cmd + F)으로 생두 이름 찾기 →
`price_per_kg` 값만 숫자로 수정 → Commit. 끝.

---

## 5. (개발자용) 로컬 실행

대표님은 보지 않으셔도 됩니다. 개발자가 코드를 손볼 때 참고:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포 빌드 테스트
```

- 프레임워크: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- 배포: Vercel — 지정 브랜치에 푸시되면 자동 배포
- 모든 데이터는 빌드 타임에 JSON에서 로드 (DB/API 없음, 완전 정적)

---

## 6. 도움이 필요할 때

수정하다 막히시면 사진(스크린샷)과 함께 개발자에게 연락주세요.
GitHub 커밋 기록이 남아있으므로 언제든 복구 가능합니다. 부담 없이 시도하셔도 괜찮습니다.
