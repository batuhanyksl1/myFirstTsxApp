export const moonSvg = `
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="60" fill="url(#moon_gradient)"/>
  <circle cx="40" cy="30" r="10" fill="rgba(255, 255, 255, 0.2)"/>
  <circle cx="70" cy="50" r="15" fill="rgba(255, 255, 255, 0.15)"/>
  <circle cx="30" cy="70" r="8" fill="rgba(255, 255, 255, 0.25)"/>
  <defs>
    <radialGradient id="moon_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(60)">
      <stop offset="0.1" stop-color="#FFFFFF"/>
      <stop offset="0.3" stop-color="#F0F0FF"/>
      <stop offset="0.9" stop-color="#D0D0FF"/>
    </radialGradient>
  </defs>
</svg>
`;
