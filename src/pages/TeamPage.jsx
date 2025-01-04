import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import FounderSection from "../components/teams-page/FounderSection";
import TeamSection from "../components/teams-page/TeamSection";

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
