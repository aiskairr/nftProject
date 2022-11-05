import css from './NFTwrapper.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NFTcards } from '../../redux/todoSlices/NFTslices';
import NFTcardsWrapper from '../NFTCardsWrapper/NFTcardsWrapper';
export default function NFTwrapper() {
  const [loading, setLodaing] = useState(true);
  const dispath = useDispatch();
  const nftCard = useSelector((state) => state.nft.NFTcard);
  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets?format=json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispath(NFTcards(data.assets));
        setLodaing(false);
      });
  }, [dispath]);

  return (
    <>
      <div className={css.container}>
        {loading && (
          <div className={css.loading__container}>
            <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
          </div>
        )}
        <div className={css.content__wrapper}>
          {nftCard?.map((item) => (
            <NFTcardsWrapper key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
