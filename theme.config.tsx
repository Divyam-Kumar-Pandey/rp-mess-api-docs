export default {
    logo: "RP Mess Backend APIs",
    project: {
      link: 'https://github.com/Divyam-Kumar-Pandey/rp-mess-website-backend'
    },
    head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Divyam Kumar Pandey" />
          <meta property="og:description" content="Documentation for RP Mess App APIs" />
        </>
    ),
    useNextSeoProps() {
      return {
        titleTemplate: '%s | Divyam Kumar Pandey',
      }
    },
    footer: {
        text: (
          <span>
            2024 ©{' '}
            <a href="https://github.com/Divyam-Kumar-Pandey" target="_blank">
              Divyam Kumar Pandey
            </a>
            .
          </span>
        )
      },
    editLink: {
        component: null
    },
    feedback: {
        content: null
    },
    toc: {
        float: true,
        title: 'On this page',
        backToTop: true,

    }
  }