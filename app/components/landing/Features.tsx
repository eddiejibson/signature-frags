import { ReactComponent as Bug } from '~/assets/icons/bug-thin.svg';
import { ReactComponent as Death } from '~/assets/icons/death.svg';
import { ReactComponent as WhiteCoralBox } from '~/assets/icons/white-coral-box.svg';

import FeatureCard from '~/components/landing/features/FeatureCard';

const Features = () => {
  return (
    <div className="w-full max-w-7xl mt-32 mb-0 lg:mb-10">
      <div className="w-full justify-around flex flex-wrap lg:flex-nowrap lg:flex-row space-x-0 lg:space-x-8 ">
        <FeatureCard
          title="Fully Quarantined"
          description="Dirty corals? Not from us. We pride ourselves in squeeky clean corals with no nasty hitch-hikers due to our rigorous and industry leading quarantine procedures"
          icon={<Bug className="text-white size-[3rem] drop-shadow-xl" />}
        />
        <FeatureCard
          delay={0.5}
          title="Bespoke Shipping"
          description="Pick a delivery date that suits your schedule. You can select from a variety of dates at checkout - no more worrying about if you'll be in."
          icon={
            <WhiteCoralBox className="text-white size-[3.4rem] drop-shadow-xl" />
          }
        />

        <FeatureCard
          delay={1}
          title="Health Guarantee"
          description="Ensuring our corals arrive in perfect health is our top priority and we put significant effort into making it so. However, in the unlikely situation an issue arises, we have a dead on arrival guarantee."
          icon={<Death className="text-white size-[2.8rem] drop-shadow-xl" />}
        />
      </div>
    </div>
  );
};

export default Features;
