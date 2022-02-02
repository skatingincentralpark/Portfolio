module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nakedlunch.studio",
    title: "Charles Zhao",
    description: "Portfolio for Charles Zhao",
    author: "Charles Zhao",
  },
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `./src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        //   disable: false, // Flag for disabling animations

        //   // Advanced Options
        //   selector: "[data-sal]", // Selector of the elements to be animated
        //   animateClassName: "sal-animate", // Class name which triggers animation
        //   disabledClassName: "sal-disabled", // Class name which defines the disabled state
        //   rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        //   enterEventName: "sal:in", // Enter event name
        //   exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naked Lunch`,
        short_name: `Naked Lunch`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/assets/images/favicon/favicon.png`,
      },
    },
  ],
};
