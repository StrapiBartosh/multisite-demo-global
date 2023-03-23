/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";

import {
  Select,
  Option,
  HeaderLayout,
  Box,
  Flex,
  ContentLayout,
  ButtonWrapper,
  Button,
} from "@strapi/design-system";
import { Layout } from "@strapi/design-system";

const HomePage = () => {
  const [selectorLink, setSelectorLink] = useState([
    {
      id: 1,
      link: "https://global-orca-jqw2m.ondigitalocean.app/admin",
      label: "Global Data",
    },
    {
      id: 2,
      link: "https://https://stingray-app-y8uge.ondigitalocean.app/admin",
      label: "Stingray Site",
    },
    {
      id: 3,
      link: "https://lobster-app-c8jbm.ondigitalocean.app/admin",
      label: "Lobster Site",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("");

  function clearSelected() {
    setSelectedOption("");
  }

  function goToSelected() {}

  return (
    <Layout>
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
            <Option key={id} value={link}>
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
              window.open(selectedOption, "_blank");
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
