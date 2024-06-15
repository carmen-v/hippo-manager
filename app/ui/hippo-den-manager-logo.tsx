import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import hippoLogo from "../../public/hippo-logo-purple.svg";

export function HippoDenManagerLogo () {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none m-auto`}
    >
      
      <Image src={hippoLogo} alt='logo showing a hippo' />
      <div>
      <p className="text-[24px] active-text">HippoDen Manager</p></div>
    </div>
  );
}
