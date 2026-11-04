# CLAUDE.md — TetherMax 메인 페이지 개선 프로토타입

TetherMax 메인 페이지 개선의 **개발 확인용 프로토타입**입니다. 개발팀이 Figma 케이스를 열어 눌러 보며 확인합니다. main에 push하면 Vercel이 자동 배포합니다.

운영 URL: https://tethermax-main-proto.vercel.app/ (주소 끝 `#화면 ID`로 케이스 바로 열기. 예: `#MP-W03-d`, `#MP-M01@3`)

요청자는 서비스 기획자입니다. 개발 용어는 짧게 풀어 설명합니다.

## 기준 문서

**화면 규칙 · 결정은 PRD가 기준입니다.** 이 파일에 규칙을 다시 적지 않습니다.

| 문서 | 위치 |
| --- | --- |
| PRD FE | https://claude.ai/artifact/PD1zS8rHyaaENJDBAB8Kqb |
| PRD BE | https://claude.ai/artifact/BZsYT4dv7mKNPmmsWeyjhD |
| PRD 백오피스 | https://claude.ai/artifact/Nmb3j6ENbwzmorxyeyNsSu |
| PRD 개요 (초안 픽스, 수정 금지) | https://claude.ai/artifact/YPFZugR1yt5F4SM4bM48YZ |
| Figma | 파일 `PsdhLBFPL0pf4O0rTtUyDo`, 페이지 "Mainpage improvement", 국문 섹션 `207:4937`, 영문 섹션 `413:9190` |

- **Figma는 바꾸기 전에 반드시 요청자에게 먼저 물어봅니다.**
- Claude Code 등 다른 곳에서 고치면 커밋 메시지 본문에 "문서 반영: …" 줄을 적습니다(없으면 "문서 반영: 없음").

## 작업 규칙

1. 수정 후 `npm run check`. `전체 N건 통과`가 아니면 push하지 않습니다.
2. 커밋 → `main` push → 배포 후 바뀐 케이스를 한 번 확인합니다.
3. `dist/`는 커밋하지 않습니다.
4. 비밀번호 · 토큰은 파일이나 커밋에 넣지 않습니다.

## 구조

| 경로 | 내용 |
| --- | --- |
| `src/proto.html` | 화면 본체 (Tailwind 3.4 · 바닐라 JS). 영문 전환 = 사전 EN · RULES 정규식 · `data-en` 속성 |
| `src/admin.html` | 백오피스 BO-01 웹 메인 배너 관리 |
| `src/index.html` | 셸 (상단 막대 · 설정 바 · 화면 변경 사항 패널) |
| `src/cases.js` · `src/cases.en.js` | 케이스 정의 · 셸 영문 (cases.js를 고치면 cases.en.js도 같이, 빠지면 점검 실패) |
| `assets/` · `public/` | 로고 · 글꼴 |
| `tests/run.mjs` | 전 케이스 자동 점검 |

케이스 필드: `id` · `g`(묶음) · `t` · `vp`('web' · 'mobile') · `h`(proto.html 해시) · `f`(데이터 플래그) · `s`(불러온 뒤 조작) · `states` · `look`(변경 사항 번호, 셀렉터는 화면에 보이는 요소) · `note` · `env` · `intro`.

## 프로토타입 전용 약속 (PRD에 없는 것)

- 출금 창은 DEX 프로젝트 팝업이라 범위 밖입니다. 문구 · 구조를 바꾸지 않습니다.
- 범위 밖이라 넣지 않는 화면: 연동 완료 · 연동 실패. 사유별 처리 안내 · 출금 확인 · 신청 완료는 대체 화면입니다.
- tailwind `md` = 1024px (768 ~ 1023px은 모바일 배치).
- 390 화면은 앱 기준, 실제 기기 크기 390×844. 보기 [맞춤] / [실제 크기].
- 주소 옵션: `banners=1`(배너 1개) · `acts=2`(참여 2개) · `hboost=base`(모바일 미연동 큰 부스트 배너).
- 팝업 · 시트가 열리면 변경 사항 패널을 잠시 접습니다(env 케이스 제외). 셸도 KO / EN 전환을 따릅니다.
- Figma "OLD · Description" 프레임은 그대로 둡니다.

## 문구 톤

- 기획 문서 톤: 짧은 명사구, 사실만. 은유 · 비유 · 슬로건 금지.
- 영문은 Figma 영문 섹션 기준입니다. 웹 미연동 레일 체크리스트는 AS-IS 문구입니다.
- 영문 "페이백" = **Cashback**, 출금 = **Claim** 계열 (Payback · Withdraw 금지).
- PRD · Figma에 없는 규칙을 설명 문구로 추가하지 않습니다. 필요하면 먼저 요청자에게 묻습니다.
