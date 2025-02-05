import DemoHero from '@/src/components/base/heros/DemoHero';
import HeroFeatures from '@/src/components/base/heros/HeroFeatures';
import FeaturesBento from '@/src/components/base/heros/FeaturesBento';
import LandingFooter from '@/src/components/base/heros/LandingFooter';
import BlurBackground from "@/src/components/base/utils/BlurBackground";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
      <div className="bg-white">
          <div className="relative isolate pt-14">
              <DemoHero message={t('title')}/>
              <div className='pb-20'>
                <HeroFeatures/>
              </div>
              <FeaturesBento message={t('title')}/>
              <LandingFooter/>
          </div>
      </div>
  )
}