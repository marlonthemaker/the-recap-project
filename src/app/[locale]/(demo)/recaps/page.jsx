import RecapList from '@/src/components/base/recap/RecapList';
import {useTranslations} from 'next-intl';

export default function RecapsPage() {
const t = useTranslations('HomePage');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapList/>
      </div>
    </div>
  );
}
