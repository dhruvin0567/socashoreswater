import React from "react";
import Hero from "./Component/Home/Hero";
import Partner from "./distribution/sections/Partner";
import Distribution from "./distribution/sections/Distributin-network";
import CTA from "./distribution/sections/CTA";
import { fetchSanityData } from "./utils/sanity";

const page = async () => {
  // Fetch distribution page data from Sanity
  // Using the same query structure as your API endpoint
  const query = `*[_type == "distributionPage"][0]{
    hero{
      title,
      background{
        image{
          asset->{
            _ref,
            _id,
            url,
            metadata{
              dimensions{
                width,
                height
              }
            }
          }
        },
        alt
      }
    },
    whyPartner{
      eyebrow,
      title,
      intro,
      bullets,
      image{
        image{
          asset->{
            _ref,
            _id,
            url
          }
        },
        alt
      }
    },
    globalDistribution{
      title,
      kicker,
      intro,
      regions,
      image{
        image{
          asset->{
            _ref,
            _id,
            url
          }
        },
        alt
      }
    },
    privateLabel,
    fastLeadTimes{
      title,
      description,
      bullets,
      image{
        image{
          asset->{
            _ref,
            _id,
            url
          }
        },
        alt
      }
    },
    cta,
    contact
  }`;

  let heroData = null;
  let whyPartnerData = null;
  let globalDistributionData = null;
  let privateLabelData = null;
  let fastLeadTimesData = null;
  let ctaData = null;
  let contactData = null;
  try {
    const data = await fetchSanityData(query, 'drafts');
    heroData = data?.hero || null;
    whyPartnerData = data?.whyPartner || null;
    globalDistributionData = data?.globalDistribution || null;
    privateLabelData = data?.privateLabel || null;
    fastLeadTimesData = data?.fastLeadTimes || null;
    ctaData = data?.cta || null;
    contactData = data?.contact || null;
    if (process.env.NODE_ENV === 'development') {
      console.log('Full API Response:', JSON.stringify(data, null, 2));
      console.log('Hero Data:', JSON.stringify(heroData, null, 2));
      console.log('Why Partner Data:', JSON.stringify(whyPartnerData, null, 2));
      console.log('Global Distribution Data:', JSON.stringify(globalDistributionData, null, 2));
      console.log('Private Label Data:', JSON.stringify(privateLabelData, null, 2));
      console.log('Fast Lead Times Data:', JSON.stringify(fastLeadTimesData, null, 2));
      console.log('CTA Data:', JSON.stringify(ctaData, null, 2));
      console.log('Contact Data:', JSON.stringify(contactData, null, 2));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error('Error details:', error.message);
  }

  return (
    <div>
      <Hero heroData={heroData} />
      <Partner whyPartnerData={whyPartnerData}/>
      <Distribution globalDistributionData={globalDistributionData}/>
      <CTA ctaData={ctaData} fastLeadTimesData={fastLeadTimesData}/>
      {/* <Distribution globalDistributionData={globalDistributionData} privateLabelData={privateLabelData}/>
      <CTA ctaData={ctaData} fastLeadTimesData={fastLeadTimesData}/>
      <Contact contactData={contactData}/> */}
    </div>
  );
};

export default page;
