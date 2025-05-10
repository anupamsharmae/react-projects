import Header from '../components/Header.js';
import Challenges from '../components/Challenges.js';
import ChallengesContextProvider from '../store/challenges-context.js';

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
