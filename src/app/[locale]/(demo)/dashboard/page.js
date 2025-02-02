import HeroSection from '@/src/components/base/heros/LandingHero';
import RecapReport from '@/src/components/base/recap/RecapReport';
import RecapPlayers from '@/src/components/base/recap/RecapPlayers';
import RecapHeader from '@/src/components/base/heros/RecapHeader';
import PageHeader from '@/src/components/base/navigation/PageHeader';
import BlurBackground from "@/src/components/base/utils/BlurBackground";
import {useTranslations} from 'next-intl';

export default function DashboardPage() {
const t = useTranslations('HomePage');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <RecapHeader recapId={"- dashboard"} />
      <RecapReport/>
      <RecapPlayers/>
      </div>
    </div>
  );
}
