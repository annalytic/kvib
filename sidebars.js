/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  /***mainSidebar: [{
    type: 'category',
    label:'Hoved' ,
    items: ['figmaID']
  }],*/

  // designsystemSidebar: [{type: 'autogenerated', dirName:'designsystems'}],
  OmKvibSidebar: [{type: 'autogenerated', dirName:'omKvib'}],



  designsystemSidebar: [
    {
      type: 'doc',
      id:'designsystems/sizesID',
      label: 'Elementstørrelser', // Label til sidebar
    },
    {
      type: 'doc',
      id:'designsystems/uuID',
      label: 'Tilgjengelighet', // Label til sidebar
    },
    {
      type: 'category',
      label: 'Design tokens', // Label til sidebar
      link: {                 // forside til denne kategorien.
        type: 'generated-index',
        title: 'Design tokens',
        description: 'Her er oversikt over hvilke type design tokens som er tilgjengelige i KVIB. Design tokens er grunnleggende verdier som brukes for den visuelle delen av designsystemet,for eksempel farger,spacing, font og animasjoner.' +
            'Disse benyttes videre til å bygge opp komponenter. ' +
            'I dokumentasjonen følger beskrivelse av design tokenet, sammen med bruksområde og kodeeksempler.',
        slug: '/designsystem/designTokens',
      },
      items: [
        'designsystems/designTokens/typografiID', // Dokument som skal være under 'Design tokens'
        'designsystems/designTokens/fargerID', // For å referere til ID til dokument, inkluder path.
        'designsystems/designTokens/iconsID', // Eks. folder/folder/docID
        'designsystems/designTokens/logoID',

      ],
    },
    {
      type: 'category',
      label: 'Komponenter', // Label til sidebar
      link: {
        type: 'generated-index',
        title: 'Komponenter',
        description: 'Her er en oversikt over utvalget av komponenter i KVIB.' +
            ' Disse er blant annet bygget opp ved bruk av desing tokens fra KVIB, eksempelvis farger og typografi. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler. ',
        slug: '/designsystem/Komponenter',
      },
      items: [
        // Dokument som skal være under 'Design tokens'. For å hente .mdx-fil; skriv path inkludert IDen.
         // Eks. folder/folder/docID
        'designsystems/Komponenter/checkboxID',
        'designsystems/Komponenter/inputfeltID',
        'designsystems/Komponenter/dropDownID',
        'designsystems/Komponenter/searchbarID',
        'designsystems/Komponenter/sliderID',
        'designsystems/Komponenter/radiobuttonID',
        'designsystems/Komponenter/sideelementerID',
        'designsystems/Komponenter/navID',
        'designsystems/Komponenter/tableID',
        {
          type: 'category',
          label: 'Knapper', // Label til sidebar
          link: {
            type: 'generated-index',
            title: 'Knapper',
            description: 'Her er en oversikt over utvalget av Knapper i KVIB.' +
                ' Disse er blant annet bygget opp ved bruk av desing tokens fra KVIB, eksempelvis farger og typografi. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.',
            slug: 'designsystems/Komponenter/Knapper',
          },
          items: [
            'designsystems/Komponenter/Knapper/grønnknappID',
            'designsystems/Komponenter/Knapper/blåknappID',
            'designsystems/Komponenter/Knapper/ikonknappID',
            'designsystems/Komponenter/Knapper/disabledknappID',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id:'designsystems/histkart',
      label: 'Historiske Kart', // Label til sidebar
    },



    // {
    //   type: 'link', // Lage link til nettside eller annet
    //   label: 'Learn more',
    //   href: 'https://example.com',
    // },
  ],

};

module.exports = sidebars;
