import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  document.title = "Syed Adeeb's Portfolio";
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
