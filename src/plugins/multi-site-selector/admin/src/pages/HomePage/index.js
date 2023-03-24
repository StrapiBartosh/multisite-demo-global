/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";

import {
  Select,
  Option,
  Layout,
  HeaderLayout,
  Box,
  Flex,
  ContentLayout,
  Button,
} from "@strapi/design-system";

const HomePage = () => {
  const [selectorLink, setSelectorLink] = useState([
    {
      id: 1,
      link: "https://global-orca-jqw2m.ondigitalocean.app/admin/",
      label: "Global Data",
    },
    {
      id: 2,
      link: "https://stingray-app-y8uge.ondigitalocean.app/admin",
      label: "Stingray Site",
    },
    {
      id: 3,
      link: "https://lobster-app-c8jbm.ondigitalocean.app/admin",
      label: "Lobster Site",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("");

  const currentSite =
    window.location.origin + "/admin/plugins/multi-site-selector";

  function clearSelected() {
    setSelectedOption("");
  }

  return (
    <Layout>
      {console.log(currentSite)}
      {console.log(selectorLink[0].link)}

      <Box background="neutral100">
        <HeaderLayout
          title="Multi Site Selector"
          subtitle="Select the site you would like to access"
          as="h2"
        />
      </Box>
      <ContentLayout>
        <Select
          id="site-selector"
          placeholder="Choose which site you'd like to load"
          value={selectedOption}
          onChange={setSelectedOption}
        >
          {selectorLink.map(({ id, link, label }) => (
            <Option
              key={id}
              value={link}
              startIcon={
                <div
                  style={{
                    height: "6px",
                    borderRadius: "50%",
                    width: "6px",
                    background:
                      link + "/plugins/multi-site-selector" == currentSite
                        ? "blue"
                        : "green",
                  }}
                />
              }
            >
              {label}
            </Option>
          ))}
        </Select>
      </ContentLayout>
      <ContentLayout>
        <Flex>
          <Button
            size="S"
            variant="secondary"
            onClick={() => {
              window.open(selectedOption, "self");
            }}
          >
            Go To Site
          </Button>
          <Button onClick={() => clearSelected()}>Clear Selected Option</Button>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
