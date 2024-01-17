import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Est eu nostrud magna dolore incididunt Lorem do tempor qui aliqua ad anim excepteur. Voluptate ea occaecat exercitation amet ea mollit ullamco ipsum exercitation deserunt in elit voluptate cillum. Occaecat nisi magna exercitation pariatur proident. Officia esse esse nulla enim laboris aliqua exercitation ex."
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}

export default App;
