const NewsletterTicker = () => {
    const text = 'NEWSLETTER +++ ';
    const repeatedText = text.repeat(20); // Make it long for smooth loop
  
    return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="inline-block animate-scroll-left whitespace-nowrap">
          <span className="pr-8 ">{repeatedText}</span>
          <span className="pr-8 ">{repeatedText}</span>
          <span className="pr-8 ">{repeatedText}</span>
        </div>
      </div>
      
    );
  };
  
  export default NewsletterTicker;
  