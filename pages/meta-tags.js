export default function MetaTags() {
  const name = "CV Victoria Kush";
  const content =
    "CV Victoria Kush. I am an ambitious problem solver with a passion for web development, and I would like to join a team of like-minded developers. I am thorough and precise in everything I do and have a keen interest in technology, web development, and user experience. As someone who takes responsibility for their personal development, I am continually evaluating and upgrading my skills.";
  const imageUrl =
    "https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150";
  const url = "https://cv-victoria-kush.herokuapp.com/";
  return (
    <>
      <title>{name}</title>
      <meta name="description" content={content} />

      {/*Google / Search Engine Tags*/}
      <meta itemProp="name" content={name} />
      <meta itemProp="description" content={content} />
      <meta itemProp="image" content={imageUrl} />

      {/*Facebook Meta Tags*/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={imageUrl} />

      {/*Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="icon" href="/favicon.ico" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-190303422-1"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[Tracking ID]');
        `,
        }}
      />
    </>
  );
}
