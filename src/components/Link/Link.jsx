import './Link.scss';

export const Link = ({ link }) => {
  return (
    <div className="link">
      <a href={link.url} className='link__item'>
        <img
          src={link.img}
          alt={link.title + '.png'}
          className="link__img"
        />
        <h2 className="link__title">{link.title}</h2>
      </a>
    </div>
  );
}