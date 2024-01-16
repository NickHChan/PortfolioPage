export const onLightnessChange = (lightness, setHue, setSaturation, setTheme) => {

  if (lightness > 88.6) {
    setTheme('default')
  }
  if (lightness < 88.6) {
    setTheme('day')
  }
  if (lightness <= 85) {
    setHue(44)
  }
  if (lightness <= 80) {
    setHue(42)
  }
  if (lightness <= 75) {
    setHue(40)
  }
  if (lightness <= 70) {
    setHue(38)
  }
  if (lightness <= 65) {
    setHue(36)
  }
  if (lightness <= 60) {
    setHue(34)
  }
  if (lightness <= 55) {
    setHue(32)
  }
  if (lightness <= 50) {
    setHue(30)
  }
  if (lightness <= 45) {
    setHue(28)
    setSaturation(100)
  }
  if (lightness <= 40) {
    setHue(26)
    setSaturation(80)
    setTheme('day')
  }
  if (lightness <= 35) {
    setHue(236)
    setSaturation(50)
    setTheme('midDay')
  }
  if (lightness <= 30) {
    setHue(240)
    setTheme('night')
    setSaturation(40)
  }
  if (lightness <= 25) {
    setHue(240)
    setSaturation(20)
  }
}
