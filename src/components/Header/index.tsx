import styles from './styles.module.scss';
import format from 'date-fns/format';
import nl from 'date-fns/locale/nl';


export function Header (){

  const currentDate = format(new Date(), 'EEEEEEE, d MMMM yyyy', {
    locale: nl, 
  });


  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>The best podcast to listen, always!</p>

      <span>{currentDate}</span>
    </header>
  );
}