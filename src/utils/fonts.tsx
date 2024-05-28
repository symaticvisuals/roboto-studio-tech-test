import localFont from '@next/font/local'
import polysansFont from '/fonts/PolySans-Median.woff2'
const polySans = localFont({
  src: {polysansFont},
  variable: '--font-polysans',
})

export default polySans;
