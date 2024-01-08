export const onLightnessChange = (lightness, setHue, setSaturation, setIsDay) => {

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
    setSaturation(100)
  }
  if (lightness <= 50) {
    setHue(30)
    setSaturation(80)
    setIsDay('day')
  }
  if (lightness <= 45) {
    setHue(236)
    setSaturation(50)
    setIsDay('midDay')
  }
  if (lightness <= 40) {
    setHue(240)
    setIsDay('night')
    setSaturation(40)
  }
  if (lightness <= 35) {
    setHue(240)
    setSaturation(20)
  }
}
