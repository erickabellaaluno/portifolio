import darkHorizontal from '@/images/unipampa/dark_horizontal.png'
import lightHorizontal from '@/images/unipampa/light_horizontal.png'
import Image from 'next/image'

export default function UnipampaHorizontal() {
  return (
    <>
      <Image
        src={lightHorizontal}
        alt="Universidade Federal do Pampa — Unipampa"
        width={576}
        height={324}
        className="dark:hidden opacity-90 w-full h-20 object-cover"
      />
      <Image
        src={darkHorizontal}
        alt="Universidade Federal do Pampa — Unipampa"
        width={576}
        height={324}
        className="hidden dark:block opacity-90 w-full h-20 object-cover"
      />
    </>
  )
}
