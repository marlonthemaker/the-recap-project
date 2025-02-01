import HeroSection from '@/src/components/base/heros/LandingHero';
import BlurBackground from "@/src/components/base/utils/BlurBackground";
import {useTranslations} from 'next-intl';

export default function HomePage() {
const t = useTranslations('HomePage');

  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
          <BlurBackground position="top" />
            <h1>Hello dashboard</h1>
          <BlurBackground position="bottom" />
      </div>
    </div>
  );
}