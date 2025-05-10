import { createContext, useState } from 'react';

export const ChallengesContext = createContext<{
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  deleteChallenge: (challengeId: string) => void;
  updateChallengeStatus: (challengeId: string, newStatus: string) => void;
}>({
  challenges: [],
  addChallenge: () => {},
  deleteChallenge: () => {},
  updateChallengeStatus: () => {},
});

export interface Challenge{
  id?: string; status?: string; title: string; description: string; deadline:string;
  image:{ src: string; alt: string } | null;
}


export default function ChallengesContextProvider({ children }: { children: React.ReactNode }) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  function addChallenge(challenge: Challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId:string) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId:string, newStatus:string) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
