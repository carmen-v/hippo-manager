import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import hippoLogo from "../../public/hippo-logo.svg";

export function HippoDenManagerLogo () {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none m-auto text-white`}
    >
      
      <Image src={hippoLogo} alt='logo showing a hippo' />
      <div>
      <p className="text-[24px]">HippoDen Manager</p></div>
    </div>
  );
}
