import { closeIcon } from '../assets';
import { useGlobalContext } from '../context';
import { nanoid } from 'nanoid';
import { links } from '../data';

import './styles/Aside.css';

function Aside() {
  const { setShowAside, setShowBackdrop, showAside } = useGlobalContext();

  const closeAside = () => {
    setShowAside(false);
    setShowBackdrop(false);
  };

  return (
    <>
      {showAside && (
        <aside>
          <button type="button" onClick={closeAside}>
            <img src={closeIcon} alt="close Icon" />
          </button>
          <ul className={showAside ? 'show-links' : 'hide-links'}>
            {links.map((link) => (
              <li key={nanoid()}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}

export default Aside;
