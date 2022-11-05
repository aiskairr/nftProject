import css from './NFTcardsWrapper.module.scss';
import { Link } from 'react-router-dom';

export default function NFTcardsWrapper(assets) {
  return (
    <div className={css.card__container}>
      <div className={css.card__content}>
        <img src={assets.image_url} alt="NFTimages" />
        <Link
          to={`/asset/${assets.asset_contract?.address}/${assets.token_id}`}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
