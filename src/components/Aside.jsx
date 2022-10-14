import { closeIcon } from '../assets';
import { useGlobalContext } from '../context';
import { nanoid } from 'nanoid';
import { links } from '../data';

import './styles/Aside.css'

function Aside() {
  const { setShowAside } = useGlobalContext();
  return (
    <aside>
      <button type="button" onClick={() => setShowAside(false)}>
        <img src={closeIcon} alt="close Icon" />
      </button>
      <ul>
        {links.map((link) => (
          <li key={nanoid()}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
