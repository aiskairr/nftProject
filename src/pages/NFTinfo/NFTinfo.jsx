import css from './NFTinfo.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NFTinfo() {
  const [nftInfo, setNftInfo] = useState([]);
  console.log(nftInfo);
  const { address, token_id } = useParams();
  useEffect(() => {
    fetch(`https://api.opensea.io/api/v1/asset/${address}/${token_id}`)
      .then((res) => res.json())
      .then((data) => setNftInfo(data));
  }, [address, token_id]);
  return (
    <div className={css.container}>
      <div className={css.nftInfo__wrapper}>
        <div className={css.image__wrapper}>
          <img src={nftInfo.image_url} alt="nftImage" />
        </div>
        <div className={css.info__wrapper}>
          <p>Name: {nftInfo.name}</p>
          <div>
            <span>to buy click here: </span>{' '}
            <a href={nftInfo.permalink}> permalink</a>
          </div>
          <p>
            asset contract type: {nftInfo?.asset_contract?.asset_contract_type}
          </p>
          <p>opensea version: {nftInfo?.asset_contract?.opensea_version}</p>
          <p>schema name: {nftInfo?.asset_contract?.schema_name}</p>
          <p>
            seller fee basis points:{' '}
            {nftInfo?.asset_contract?.seller_fee_basis_points}
          </p>
          <p>symbol: {nftInfo?.asset_contract?.symbol}</p>
          <Link className={css.back__link} to="/">
            Назад <img src="./images/back_icon.png" alt="imagess" />
          </Link>
        </div>
      </div>
    </div>
  );
}
