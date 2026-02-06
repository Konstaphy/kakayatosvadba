import "./App.css";
import { HeroSection } from "./components/hero/hero-section.tsx";
import { InvitationSection } from "./components/invitation/invitation-section.tsx";
import { PlaceSection } from "./components/place/place-section.tsx";
import { PlanSection } from "./components/plan/plan-section.tsx";
import { WishesSection } from "./components/wishes/wishes-section.tsx";
import { DressCodeSection } from "./components/dress-code/dress-code-section.tsx";
import { ComingFormSection } from "./components/coming-form/coming-form-section.tsx";
import { ContactSection } from "./components/contacts/contacts-section.tsx";
import { FooterSection } from "./components/footer/footer-section.tsx";

export function App() {
  return (
    <main className={"main"}>
      <div className={"content"} style={{ marginBottom: "70px" }}>
        <HeroSection />
        <InvitationSection />
        <PlaceSection />
        <PlanSection />
      </div>
      <WishesSection />
      <div className={"content"} style={{ marginTop: "70px" }}>
        <DressCodeSection />
        <ComingFormSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
