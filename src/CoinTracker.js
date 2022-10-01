import { useEffect, useState } from "react";

export default function CoinTracker() {
  const [loading, setLoading] = useState(true);
  // component에 보여주기 위해서 component 구성
  const [coins, setCoins] = useState([]);
  // 돈 입력값
  const [myMoney, setMyMoney] = useState(0);
  // 돈 출력값
  const [exchangedMoney, setExchangedMoney] = useState(0);

  const onChange = (event) => {
    setMyMoney(event.target.value);
  };

  const conversion = (event) => {
    setExchangedMoney(myMoney / parseInt(event.target.value));
  };

  // 외부 API 한번만 호출
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // coins라는 배열 값을 fetch한 json 값으로 초기화
        setCoins(json);
        // Loading창 가리기
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      {loading ? null : (
        <input
          value={myMoney}
          type="number"
          placeholder="$"
          onChange={onChange}
        />
      )}
      <div>{"\n"}</div>
      {loading ? null : (
        <select onChange={conversion}>
          {/* coins라는 배열의 각 요소(coin)을 다음과 같이 update하여 update된 요소들로 구성된 배열 return*/}
          {coins.map((coin) => (
            <option key={coin.id}>{coin.quotes.USD.price}</option>
          ))}
        </select>
      )}
      <div>{"\n"}</div>
      {loading ? null : <h3>{exchangedMoney} of the Current Coin</h3>}
    </div>
  );
}
