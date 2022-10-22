import '../../css/animated.css';
import '../../css/InputURL.css';

export default function InputURL({ url, URLInput, HandleEnter, ShortenURL }) {
  return (
    <section className='input-container h-25 animated-fadeIn'>
      <form className='input-form'>
        <input type='text' aria-label='Paste your URL to shorten' id='inputUrl' placeholder='Paste your URL to shorten' value={url} onChange={URLInput} onKeyUp={HandleEnter} />
        <button type='submit' onClick={ShortenURL} data-testid='narrow' aria-label='Narrow Link'> Shorten </button>
      </form>
    </section>
  );
}