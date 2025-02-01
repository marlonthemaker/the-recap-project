import LandingHero from '@/src/components/base/heros/LandingHero';
import BlurBackground from "@/src/components/base/utils/BlurBackground";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
      <div className="bg-white">
          <div className="relative isolate pt-14">
              <BlurBackground position="top" />
              <LandingHero message={t('title')}/>
              <BlurBackground position="bottom" />
          </div>
      </div>
  )
}