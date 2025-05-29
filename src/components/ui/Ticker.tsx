import { FC } from "react";

type SingleTicker = {
  name: string
}
interface TickerProps {
  tickers: SingleTicker[]
}


const Ticker: FC<TickerProps> = ({tickers}) => {
  return (
    <div className="overflow-hidden bg-black flex">
      <div className="animate-ticker whitespace-nowrap flex gap-10 bg-black text-white py-2">
        {[...tickers, ...tickers].map((ticker, index) => (
          <div key={index}>
            <span className="mx-4 text-white text-xl font-bold">{ticker.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
