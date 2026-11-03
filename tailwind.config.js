// Tailwind 3.4 설정 (원본 시안 토큰 그대로)
module.exports = { content: ['./src/proto.html', './src/admin.html'], theme: ({
    theme: {
      // [11.03] 768 ~ 1023px도 모바일 배치: md를 lg와 같은 1024px로
      screens: { sm: '640px', md: '1024px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
      extend: {
        colors: {
          brand: { DEFAULT: '#1D4ED8', dark: '#1740B8', soft: '#EFF4FF' },
          ink: '#0C0A09',
          body: '#57534E',
          mute: '#78716C',
          faint: '#A8A29E',
          line: '#E7E5E4',
          hair: '#F5F5F4',
          gain: '#047857',
          warn: '#B91C1C',
          flame: { from: '#FFC93C', mid: '#FF9600', to: '#D9480F' },
        },
        fontFamily: { sans: ['Wanted Sans Variable', 'Wanted Sans', '-apple-system', 'system-ui', 'sans-serif'] },
        // 모서리 규칙: 작은 뱃지 6 / 버튼·입력 10 / 카드·패널 14 / 큰 배너 18 / 칩·로고는 full
        borderRadius: { DEFAULT: '10px', sm: '6px', md: '10px', lg: '10px', xl: '14px', '2xl': '18px' },
      },
    },
  }).theme };
