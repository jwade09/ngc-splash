import React from 'react';

const Seo = ({title, desc, metaImage}) => {
    return (
        <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="Quantum Health & Northrop Grumman" />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href="/" />
            <meta property="og:url" content="/" />

            <meta property="og:image" content={metaImage ? metaImage : "https://images.prismic.io/qh-cs/997dc220-409a-421c-9bd5-34333686ab0c_meta-home-1.jpg?auto=compress%2Cformat&fit=max"} />

            <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
        </>
    );
}

export default Seo;