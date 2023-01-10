
import Card from './components/Card';
import ProfilePic from './assets/ProfilePic.jpg';

import './components/Card.scss';

const contactCard = [
  {
    name: 'Sophie H',
    job: 'Junior Web Developer',
    email: 'sophie-hervieu@live.fr',
    gitHub: 'SophieHervieu',
  }
]

function App() {
  return (
    <div className="App">
      <div className='profileCard'>
      <div>
        <img className='ProfilePic' src={ProfilePic} alt='ProfilePic'>
        </img>
      </div>
      <div>
       { contactCard.map((contact) =>(
          <Card
          name={contact.name}
          job={contact.job}
          email={contact.email}
          gitHub={contact.gitHub} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
