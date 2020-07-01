import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import ContentCards from "components/ContentCards";

const items = [
    {
        image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
        title: "Faucibus turpis in",
        body:
            "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
        url: "/post/golden-gate",
    },
    {
        image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
        title: "Faucibus turpis in",
        body:
            "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
        url: "/post/beach",
    },
    {
        image: "https://source.unsplash.com/3XN-BNRDUyY/800x600",
        title: "Faucibus turpis in",
        body:
            "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
        url: "/post/road",
    },
    {
        image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
        title: "Faucibus turpis in",
        body:
            "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
        url: "/post/ballons",
    },
];

function ContentCardsSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <ContentCards
          items={items}
        />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
