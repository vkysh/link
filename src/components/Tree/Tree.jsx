import { Link } from '../Link/Link';
import './Tree.scss';
import linksData from '../../api/links.json';

const getImgPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};

export function Tree() {
  return (
    <div className="tree">
      <img className="tree__avatar" src={getImgPath("/assets/avatar.png")} alt="Avatar" />
      <h1 className="tree__title">Tokmina Iryna</h1>
      <h2 className="tree__subtitle">@irysik3076</h2>

      <div className="tree__links">
        {linksData.map(link => (
          <Link key={link.id} 
            link={{
              ...link,
              img: getImgPath(link.img)
            }} 
          />
        ))}
      </div>
    </div>
  );
}