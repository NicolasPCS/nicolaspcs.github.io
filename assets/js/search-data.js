// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/~ncaytuir/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~ncaytuir/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected Past Projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~ncaytuir/projects/";
          },
        },{id: "news-we-are-excited-to-announce-the-official-launch-of-the-shape-vision-lab-website",
          title: 'We are excited to announce the official launch of the Shape Vision Lab...',
          description: "",
          section: "News",},{id: "news-nicolas-caytuiro-39-s-doctoral-qualifying-exam",
          title: 'Nicolas Caytuiro&amp;#39;s Doctoral Qualifying Exam',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/~ncaytuir/news/announcement_2/";
            },},{id: "news-we-were-present-at-the-iii-graduate-symposium-organized-by-the-faculty-of-physical-and-mathematical-sciences-at-the-university-of-chile",
          title: 'We were present at the III Graduate Symposium, organized by the Faculty of...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/~ncaytuir/news/announcement_3/";
            },},{id: "projects-project-1",
          title: 'Project 1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/~ncaytuir/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'Project 2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/~ncaytuir/projects/2_project/";
            },},{id: "projects-project-3",
          title: 'Project 3',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/~ncaytuir/projects/3_project/";
            },},{
        id: 'social-resume',
        title: 'Resume',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%63%6F%6C%61%73%63%61%79%74%75%69%72%6F%73%69%6C%76%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nicolas-caytuiro", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/257/1086.html", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zvVAFVAAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nicolaspcs", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
