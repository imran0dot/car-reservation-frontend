import Heading from "@/components/shared/Heading";
import bannerImage from "../assets/pexels-trace-707046.jpg";
import TeamSection from "@/components/sections/TeamSection";
import OurFleet from "@/components/sections/FleetSection";
import ValuesAndCommitment from "@/components/sections/ValuesAndCommitmentSection";
import CompanyHistory from "@/components/sections/CompanyHistory";
import Achievements from "@/components/sections/Achievements";
import ContactInformation from "@/components/sections/Contact";
const AboutUs = () => {
    return (
        <div className="">
            <Heading bannerImage={bannerImage} title="About us" />

            {/* Achievements section  */}
            <Achievements />

            {/* our company history  */}
            <CompanyHistory />


            {/* Our Fleet Section */}
            <OurFleet />

            {/* Our Team Section */}
            <TeamSection />



            {/* Values & Commitment Section */}
            <ValuesAndCommitment />


            {/* Contact us section  */}
            <ContactInformation />
        </div>
    );
};
export default AboutUs;
