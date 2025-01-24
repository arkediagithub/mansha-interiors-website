import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import TeamSection from "../components/teams-page/TeamSection";
import FounderSection from "../components/teams-page/FounderSection";

const TeamPage = () => {
  return (
    <>
      <MetaTags title="Team | Mansha Interior" />
      <PageHeader
        title="Team Members"
        subtitle="Meet the Creative Minds Behind the Designs"
      />
      <FounderSection />
      <TeamSection />
    </>
  );
};

export default TeamPage;
