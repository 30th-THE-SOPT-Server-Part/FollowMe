import { useRef } from 'react';
import './App.css';
import patNotice1 from './assets/1.png';
import patNotice2 from './assets/2.png';

const ids = [
  'jokj624',
  'tkarndbrtk',
  'ChooSeoyeon',
  'coreminw',
  'csb9427',
  'devkwonsehoon',
  'dingding-21',
  'dltjdn',
  'DongLee99',
  'ehdwoKIM',
  'gunom',
  'heerucan',
  'horsehair',
  'hujumee',
  'hyejungg',
  'HYOSITIVE',
  'jinsu4755',
  'Jionee',
  'junjuning',
  'jypthemiracle',
  'kimchaeeun3447',
  'kkl4846',
  'kmebin',
  'ksiyeon27',
  'l2hyunwoo',
  'laalaa31',
  'lsh328328',
  'm1njae',
  'orijoon98',
  'qkrwjdan',
  'seohyun-106',
  'Seokyeong237',
  'seunghaLim',
  'shb03323',
  'soryeongk',
  'ssong915',
  'thguss',
  'yjooooo'
];

function App() {
  const patRef = useRef(null);
  const provideHeaders = (token) => {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Token ${token}`,
    };
  };

  const getUrl = () => (process.env.NODE_ENV === 'development' ? '/api' : 'https://api.github.com');

  const followWebPart = async () => {
    if (patRef.current && patRef.current.value) {
      const promiseList = await Promise.all(
        ids.map((id) => {
          return fetch(`${getUrl()}/user/following/${id}`, {
            method: 'PUT',
            body: null,
            headers: provideHeaders(patRef.current.value),
          });
        }),
      );

      alert('팔로우 완료!');
    }
  };

  return (
    <main>
      <article>
        <h2>PAT란, Personal Access Token.</h2>
        <p>
          깃허브에서 SETTING - Developer Setting - Personal Access Token에 들어가 Token을
          발급받아요.
        </p>
        <p>권한은 user (Update ALL user data)에만 체크해주시면 됩니다.</p>
        <img src={patNotice1} alt="pat-img1" />
        <img src={patNotice2} alt="pat-img2" />
      </article>
      <a href="https://github.com/settings/tokens" target="_blank">
        PAT 발급받으러가기
      </a>
      <input ref={patRef} type="text" placeholder="PAT를 입력해주세요!" />
      <button type="button" onClick={followWebPart}>
        버튼 하나로 섭섭이들 팔로우하기 ? 정말 ?
      </button>
    </main>
  );
}

export default App;
