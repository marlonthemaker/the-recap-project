import LandingHero from '@/src/components/base/heros/LandingHero';
import FeaturesBento from '@/src/components/base/heros/FeaturesBento';
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
              <FeaturesBento message={t('title')}/>
          </div>
      </div>
  )
}